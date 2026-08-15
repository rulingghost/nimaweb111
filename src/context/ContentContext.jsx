import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { defaultContent } from '../data/defaultContent';

const ContentContext = createContext(null);
const LOCAL_STORAGE_KEY = 'nima_site_content_cache';

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    // Initial load from localStorage cache or fallback to defaultContent
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        return deepMerge(defaultContent, parsed);
      }
    } catch (e) {
      console.warn('Failed to load content from cache:', e);
    }
    return defaultContent;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const [saveStatus, setSaveStatus] = useState(null); // { type: 'success' | 'error' | 'warning' | 'info', message: string }

  // Sanitize content structure to ensure navigation items & sectors are never lost
  function sanitizeContent(raw) {
    if (!raw || typeof raw !== 'object') return defaultContent;
    const sanitized = { ...raw };

    // Guarantee navigation items
    if (!sanitized.navigation?.items || sanitized.navigation.items.length === 0) {
      sanitized.navigation = {
        ...defaultContent.navigation,
        ...(sanitized.navigation || {})
      };
    } else {
      const hasSectors = sanitized.navigation.items.some(
        i => i.id === 'sectors' || i.hasChildren || i.path?.includes('sectors')
      );
      if (!hasSectors) {
        const sectorsItem = defaultContent.navigation.items.find(i => i.id === 'sectors');
        if (sectorsItem) {
          const contactIdx = sanitized.navigation.items.findIndex(i => i.id === 'contact' || i.path === '/iletisim');
          if (contactIdx >= 0) {
            sanitized.navigation.items = [
              ...sanitized.navigation.items.slice(0, contactIdx),
              sectorsItem,
              ...sanitized.navigation.items.slice(contactIdx)
            ];
          } else {
            sanitized.navigation.items = [...sanitized.navigation.items, sectorsItem];
          }
        }
      }
    }

    return sanitized;
  }

  // Deep merge utility to ensure no missing keys
  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    const output = { ...target };
    for (const key of Object.keys(source)) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key]) &&
        key in target &&
        typeof target[key] === 'object' &&
        !Array.isArray(target[key])
      ) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    }
    return sanitizeContent(output);
  }

  // Fetch from Vercel KV via Serverless API on mount
  const fetchContent = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/get-content');
      const contentType = res.headers.get('content-type') || '';

      // Only attempt JSON parse if server explicitly returned JSON
      if (res.ok && contentType.includes('application/json')) {
        const result = await res.json();
        if (result.success && result.data) {
          const merged = deepMerge(defaultContent, result.data);
          setContent(merged);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
          if (result.data._metadata?.lastSavedAt) {
            setLastSavedAt(result.data._metadata.lastSavedAt);
          }
        }
      } else {
        // Vite static server returned raw js or 404, fallback cleanly
        console.info('Geliştirme ortamında statik fallback veya localStorage önbelleği kullanılıyor.');
      }
    } catch (err) {
      console.warn('Sunucuya ulaşılamadı. Yerel veri kullanılıyor.', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Update a single section or field
  const updateContent = useCallback((updaterOrSection, data) => {
    setContent(prev => {
      let updated;
      if (typeof updaterOrSection === 'function') {
        updated = updaterOrSection(prev);
      } else if (typeof updaterOrSection === 'string' && data !== undefined) {
        updated = {
          ...prev,
          [updaterOrSection]: typeof data === 'function' ? data(prev[updaterOrSection]) : data
        };
      } else if (typeof updaterOrSection === 'object') {
        updated = { ...prev, ...updaterOrSection };
      } else {
        updated = prev;
      }
      // Keep local storage updated
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Local storage write error:', e);
      }
      return updated;
    });
  }, []);

  // Save current content state to Vercel KV
  const saveContent = useCallback(async (customPayload) => {
    setIsSaving(true);
    setSaveStatus(null);
    const payloadToSave = customPayload || content;

    try {
      const res = await fetch('/api/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadToSave)
      });

      const contentType = res.headers.get('content-type') || '';
      let json = {};
      if (contentType.includes('application/json')) {
        json = await res.json().catch(() => ({}));
      }

      if (res.ok && json.success) {
        const timestamp = new Date().toISOString();
        setLastSavedAt(timestamp);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payloadToSave));
        setSaveStatus({
          type: 'success',
          message: json.message || 'Değişiklikler başarıyla kaydedildi!'
        });
        return { success: true, data: json.data };
      } else {
        // Fallback save in localStorage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payloadToSave));
        setSaveStatus({
          type: 'success',
          message: 'Değişiklikler yerel depolamaya (localStorage) kaydedildi.'
        });
        return { success: true, simulated: true };
      }
    } catch (err) {
      console.error('Save content error:', err);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payloadToSave));
      setSaveStatus({
        type: 'warning',
        message: 'Sunucuya ulaşılamadı. Değişiklikler tarayıcınızda yerel olarak saklandı.'
      });
      return { success: true, simulated: true };
    } finally {
      setIsSaving(false);
    }
  }, [content]);

  // Upload an image file to Vercel Blob via /api/upload-image
  const uploadImage = useCallback(async (file) => {
    if (!file) throw new Error('Dosya seçilmedi');

    // Convert file to base64
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    try {
      const res = await fetch('/api/upload-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: file.name,
          base64: base64,
          contentType: file.type
        })
      });

      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        if (data.url) {
          return {
            success: true,
            url: data.url,
            source: data.source || 'vercel_blob'
          };
        }
      }

      // Fallback to local Data URL
      return {
        success: true,
        url: base64,
        source: 'local_data_uri'
      };
    } catch (err) {
      console.warn('Image upload API fallback to local URI:', err);
      return {
        success: true,
        url: base64,
        source: 'local_data_uri'
      };
    }
  }, []);

  // Reset all content back to factory default
  const resetToDefault = useCallback(() => {
    setContent(defaultContent);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultContent));
    setSaveStatus({
      type: 'info',
      message: 'Varsayılan fabrika ayarlarına dönüldü. Kaydetmek için "Değişiklikleri Kaydet" butonuna tıklayınız.'
    });
  }, []);

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        saveContent,
        uploadImage,
        resetToDefault,
        fetchContent,
        isLoading,
        isSaving,
        lastSavedAt,
        saveStatus,
        setSaveStatus
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return ctx;
}
