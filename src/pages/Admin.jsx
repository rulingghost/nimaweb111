import { useState, useRef, useEffect, useCallback, Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Save, RefreshCw, Upload, Image as ImageIcon, Plus, Trash2, 
  ArrowUp, ArrowDown, ExternalLink, Check, AlertCircle, Sparkles, 
  Layers, Compass, Radio, Cpu, ShieldCheck, Globe, Share2, 
  MessageCircle, Send, Phone, Mail, MapPin, Download, FileJson,
  LayoutTemplate, Award, MessageSquareQuote, CheckCircle2,
  ChevronDown, ChevronUp, Search, Copy, CheckCheck, Palette, Zap,
  Briefcase, Gift, HelpCircle, Lock, KeyRound, Eye, EyeOff, LogOut, Key, FolderKanban,
  Monitor, Tablet, Smartphone, Maximize2, X, RotateCcw, CopyPlus, MessageSquarePlus, Handshake, TrendingUp
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { useLanguage } from '../context/LanguageContext';
import { adminTranslations } from '../data/adminTranslations';
import { defaultContent, defaultContentEn } from '../data/defaultContent';
import './Admin.css';

// Admin Login Screen Component
function AdminLogin({ onLogin, error, brandName, uiLang = 'tr', onToggleUiLang }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const tUi = (key) => adminTranslations[uiLang]?.[key] || adminTranslations['tr']?.[key] || key;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div className="admin-login-icon" style={{ margin: 0 }}>
            <Lock size={22} />
          </div>
          {onToggleUiLang && (
            <div className="admin-lang-group">
              <span className="admin-lang-label"><Globe size={13} /> {tUi('ui_lang')}:</span>
              <button 
                type="button" 
                className={`admin-lang-pill-btn ${uiLang === 'tr' ? 'active' : ''}`}
                onClick={() => onToggleUiLang('tr')}
              >
                TR
              </button>
              <button 
                type="button" 
                className={`admin-lang-pill-btn ${uiLang === 'en' ? 'active' : ''}`}
                onClick={() => onToggleUiLang('en')}
              >
                EN
              </button>
            </div>
          )}
        </div>

        <h2>{brandName || 'NİMA'} {tUi('login_title')}</h2>
        <p>{tUi('login_subtitle')}</p>

        {error && (
          <div className="admin-login-error">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="admin-password-group">
            <input 
              type={showPassword ? 'text' : 'password'}
              className="admin-input" 
              placeholder={tUi('login_placeholder')}
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button" 
              className="admin-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? tUi('hide') : tUi('show')}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <button 
            type="submit" 
            className="admin-btn admin-btn-primary" 
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
          >
            <KeyRound size={16} /> {tUi('login_btn')}
          </button>
        </form>

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link to="/" style={{ color: 'var(--admin-text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
            {tUi('login_back_home')}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Error Boundary for Admin Page Resilience
class AdminErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Admin Panel error boundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="admin-layout">
          <div className="admin-error-fallback">
            <AlertCircle size={48} color="#ef4444" style={{ marginBottom: '16px' }} />
            <h2 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '8px' }}>Yönetim Panelinde Beklenmedik Bir Hata Oluştu</h2>
            <p style={{ color: 'var(--admin-text-muted)', marginBottom: '24px' }}>
              {this.state.error?.message || 'Veri yapısı işlenirken bir sorun meydana geldi.'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button 
                className="admin-btn admin-btn-outline" 
                onClick={() => window.location.reload()}
              >
                Sayfayı Yenile
              </button>
              <button 
                className="admin-btn admin-btn-danger" 
                onClick={() => {
                  localStorage.removeItem('nima_site_content_cache');
                  window.location.reload();
                }}
              >
                Önbelleği Temizle & Kurtar
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Quick Color Preset Palette Component
const COLOR_PRESETS = [
  '#D12F0E', '#F6C310', '#E97B1A', '#B7442E', 
  '#2563EB', '#059669', '#8B5CF6', '#EC4899', '#06B6D4'
];

function ColorPickerField({ label, value, onChange }) {
  return (
    <div className="admin-form-group">
      <label className="admin-form-label">{label || 'Vurgu Rengi'}</label>
      <input 
        type="text" 
        className="admin-input" 
        value={value || '#D12F0E'} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="#D12F0E"
      />
      <div className="admin-color-presets">
        {COLOR_PRESETS.map((color) => (
          <button
            key={color}
            type="button"
            className={`admin-color-swatch ${value === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => onChange(color)}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}

// Quick Icon Picker Component
const ICON_OPTIONS = [
  { name: 'Radio', icon: Radio },
  { name: 'Cpu', icon: Cpu },
  { name: 'Sparkles', icon: Sparkles },
  { name: 'Layers', icon: Layers },
  { name: 'Compass', icon: Compass },
  { name: 'ShieldCheck', icon: ShieldCheck },
  { name: 'Globe', icon: Globe },
  { name: 'Award', icon: Award },
  { name: 'Briefcase', icon: Briefcase },
  { name: 'Gift', icon: Gift },
  { name: 'Zap', icon: Zap }
];

function IconPickerField({ label, value, onChange }) {
  return (
    <div className="admin-form-group">
      <label className="admin-form-label">{label || 'İkon Seçimi'}</label>
      <div className="admin-icon-picker">
        {ICON_OPTIONS.map((item) => {
          const IconC = item.icon;
          const isSelected = value === item.name;
          return (
            <button
              key={item.name}
              type="button"
              className={`admin-icon-chip ${isSelected ? 'active' : ''}`}
              onClick={() => onChange(item.name)}
            >
              <IconC size={14} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Quick Page Link Preset Options
const PAGE_PRESETS = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'Sektörlerimiz (#)', path: '/#sectors' },
  { label: 'Telekomünikasyon', path: '/telekomunikasyon' },
  { label: 'Yazılım & Teknoloji', path: '/yazilim' },
  { label: 'Promosyon', path: '/promosyon' },
  { label: 'Reklam & Medya', path: '/reklam' },
  { label: 'Eğitim & Akademi', path: '/egitim' },
  { label: 'Danışmanlık', path: '/danismanlik' },
  { label: 'İletişim', path: '/iletisim' }
];

function PathInputField({ label, value, onChange, placeholder = '/sayfa-yolu', fullWidth = false }) {
  return (
    <div className={`admin-form-group ${fullWidth ? 'full-width' : ''}`}>
      <label className="admin-form-label">
        <span style={{ fontWeight: 700, color: '#fff' }}>{label || 'Yönlendirme Linki (Path)'}</span>
        <span className="optional" style={{ color: '#38bdf8' }}>Hızlı Sayfa Seçici</span>
      </label>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input 
          type="text" 
          className="admin-input" 
          placeholder={placeholder}
          value={value || ''} 
          onChange={(e) => onChange(e.target.value)}
          style={{ flex: 1 }}
        />
        <select 
          className="admin-select"
          style={{ 
            width: 'auto', 
            minWidth: '150px', 
            cursor: 'pointer', 
            color: '#60a5fa', 
            fontWeight: 600,
            background: '#111726',
            borderColor: 'rgba(59, 130, 246, 0.4)'
          }}
          value={value || ''}
          onChange={(e) => {
            if (e.target.value) {
              onChange(e.target.value);
            }
          }}
        >
          <option value="" disabled>Sayfa Seçiniz ▼</option>
          {PAGE_PRESETS.map((p) => (
            <option key={p.path} value={p.path} style={{ color: '#fff', background: '#0e121c' }}>
              {p.label} ({p.path})
            </option>
          ))}
        </select>
      </div>

      <div className="admin-path-chips" style={{ marginTop: '8px' }}>
        {PAGE_PRESETS.map((p) => (
          <button
            key={p.path}
            type="button"
            className={`admin-path-chip ${value === p.path ? 'active' : ''}`}
            onClick={() => onChange(p.path)}
            title={p.path}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Reusable Inline Image Uploader with Vercel Blob & 1-Click Copy
function ImageField({ label, value, onChange, placeholder = 'https://...' }) {
  const { uploadImage } = useContent();
  const [isUploading, setIsUploading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);
    try {
      const result = await uploadImage(file);
      if (result.success && result.url) {
        onChange(result.url);
      }
    } catch (err) {
      console.error('Image upload failed:', err);
      setError('Yükleme başarısız oldu.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="admin-form-group full-width">
      {label && (
        <label className="admin-form-label">
          <span>{label}</span>
          <span className="optional">Vercel Blob Yükleyici & CDN</span>
        </label>
      )}
      <div className="admin-image-uploader">
        <div className="admin-image-preview-box">
          {value ? (
            <img src={value} alt="Önizleme" className="admin-image-thumb" />
          ) : (
            <div className="admin-image-thumb-placeholder">
              <ImageIcon size={22} />
            </div>
          )}

          <div className="admin-image-input-methods">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <label className="admin-file-upload-btn">
                <Upload size={14} />
                {isUploading ? 'Yükleniyor...' : 'Görsel Seç & Yükle (Blob)'}
                <input 
                  type="file" 
                  accept="image/*" 
                  ref={fileInputRef}
                  onChange={handleFileUpload} 
                  disabled={isUploading}
                />
              </label>

              {value && (
                <>
                  <button 
                    type="button" 
                    className="admin-btn-icon" 
                    onClick={handleCopy}
                    title="URL'i Kopyala"
                  >
                    {copied ? <CheckCheck size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                  <button 
                    type="button" 
                    className="admin-btn-icon delete" 
                    onClick={() => onChange('')}
                    title="Görseli Temizle"
                  >
                    <Trash2 size={14} />
                  </button>
                </>
              )}
            </div>

            <input 
              type="text" 
              className="admin-input" 
              placeholder={placeholder}
              value={value || ''} 
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        </div>
        {error && <div style={{ color: '#ef4444', fontSize: '0.8rem' }}>{error}</div>}
      </div>
    </div>
  );
}

function AdminMain() {
  const { 
    content, 
    getContent,
    updateContent, 
    saveContent, 
    uploadImage, 
    resetToDefault, 
    isSaving, 
    lastSavedAt, 
    saveStatus, 
    setSaveStatus 
  } = useContent();

  const { translations, updateTranslation } = useLanguage();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('nima_admin_auth') === 'true';
  });
  const [loginError, setLoginError] = useState(null);
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showJsonInspector, setShowJsonInspector] = useState(false);
  const [jsonCopied, setJsonCopied] = useState(false);

  const [activeLang, setActiveLang] = useState(() => {
    return localStorage.getItem('nima_admin_lang') || 'tr';
  });

  const [activeTab, setActiveTab] = useState('nav');
  const [tabCategory, setTabCategory] = useState('all');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [localMessage, setLocalMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dictSearch, setDictSearch] = useState('');
  const [collapsedCards, setCollapsedCards] = useState({});
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewPath, setPreviewPath] = useState('/');
  const fileImportRef = useRef(null);

  const changeLang = (lang) => {
    setActiveLang(lang);
    localStorage.setItem('nima_admin_lang', lang);
  };

  const tUi = (key, fallback = '') => {
    return adminTranslations[activeLang]?.[key] || adminTranslations['tr']?.[key] || fallback || key;
  };

  // The active content model being edited (Turkish or English)
  const activeContent = (getContent ? getContent(activeLang) : (activeLang === 'en' ? (content?.en || defaultContentEn) : content)) || defaultContent;

  const handleLogin = (enteredPassword) => {
    const validPassword = content.security?.adminPassword || 'nima2026!';
    if (enteredPassword.trim() === validPassword.trim()) {
      sessionStorage.setItem('nima_admin_auth', 'true');
      setIsAuthenticated(true);
      setLoginError(null);
    } else {
      setLoginError(tUi('login_error'));
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('nima_admin_auth');
    setIsAuthenticated(false);
  };

  // Unsaved changes browser prompt
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  // Keyboard shortcut: Ctrl + S / Cmd + S to save
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [content]);

  const showToast = (msg, type = 'success') => {
    setLocalMessage({ text: msg, type });
    setTimeout(() => setLocalMessage(null), 4000);
  };

  const handleSave = async () => {
    const res = await saveContent();
    if (res?.success) {
      setHasUnsavedChanges(false);
      showToast(tUi('saved_success'), 'success');
    }
  };

  // Helper for tracking modifications to active content
  const setField = (section, key, value) => {
    setHasUnsavedChanges(true);
    updateContent(section, (prevSec) => ({
      ...(prevSec || (activeLang === 'en' ? (defaultContentEn[section] || {}) : (defaultContent[section] || {}))),
      [key]: value
    }), activeLang);
  };

  const toggleCollapse = (id) => {
    setCollapsedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Nav Handlers
  const handleAddNavItem = () => {
    setHasUnsavedChanges(true);
    const newItem = {
      id: `link_${Date.now()}`,
      title: activeLang === 'en' ? 'New Menu Item' : 'Yeni Menü Öğesi',
      path: '/new-page',
      badge: '',
      hasChildren: false,
      children: []
    };
    updateContent('navigation', prev => ({
      ...(prev || {}),
      items: [...(prev?.items || activeContent.navigation?.items || []), newItem]
    }), activeLang);
  };

  const handleRemoveNavItem = (index) => {
    setHasUnsavedChanges(true);
    updateContent('navigation', prev => ({
      ...(prev || {}),
      items: (prev?.items || activeContent.navigation?.items || []).filter((_, idx) => idx !== index)
    }), activeLang);
  };

  const handleMoveNavItem = (index, direction) => {
    setHasUnsavedChanges(true);
    updateContent('navigation', prev => {
      const items = [...(prev?.items || activeContent.navigation?.items || [])];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= items.length) return prev;
      const temp = items[index];
      items[index] = items[targetIndex];
      items[targetIndex] = temp;
      return { ...(prev || {}), items };
    }, activeLang);
  };

  const handleUpdateNavItem = (index, field, value) => {
    setHasUnsavedChanges(true);
    updateContent('navigation', prev => {
      const items = [...(prev?.items || activeContent.navigation?.items || [])];
      items[index] = { ...items[index], [field]: value };
      return { ...(prev || {}), items };
    }, activeLang);
  };

  const handleAddSubItem = (navIndex) => {
    setHasUnsavedChanges(true);
    updateContent('navigation', prev => {
      const items = [...(prev?.items || activeContent.navigation?.items || [])];
      const parent = items[navIndex];
      const newChild = {
        id: `sub_${Date.now()}`,
        title: activeLang === 'en' ? 'New Sub Item' : 'Yeni Alt Menü',
        path: '/new-service',
        badge: '',
        icon: 'Sparkles',
        color: '#D12F0E'
      };
      items[navIndex] = {
        ...parent,
        hasChildren: true,
        children: [...(parent?.children || []), newChild]
      };
      return { ...(prev || {}), items };
    }, activeLang);
  };

  const handleRemoveSubItem = (navIndex, subIndex) => {
    setHasUnsavedChanges(true);
    updateContent('navigation', prev => {
      const items = [...(prev?.items || activeContent.navigation?.items || [])];
      const parent = items[navIndex];
      const newChildren = (parent?.children || []).filter((_, idx) => idx !== subIndex);
      items[navIndex] = {
        ...parent,
        children: newChildren,
        hasChildren: newChildren.length > 0
      };
      return { ...(prev || {}), items };
    }, activeLang);
  };

  const handleUpdateSubItem = (navIndex, subIndex, field, value) => {
    setHasUnsavedChanges(true);
    updateContent('navigation', prev => {
      const items = [...(prev?.items || activeContent.navigation?.items || [])];
      const children = [...(items[navIndex]?.children || [])];
      children[subIndex] = { ...children[subIndex], [field]: value };
      items[navIndex] = { ...items[navIndex], children };
      return { ...(prev || {}), items };
    }, activeLang);
  };

  // Export / Import
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `nima_content_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Yedek JSON dosyası indirildi.', 'info');
  };

  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result);
        if (parsed && typeof parsed === 'object') {
          updateContent(() => parsed);
          setHasUnsavedChanges(true);
          showToast('JSON içeriği yüklendi! "Değişiklikleri Kaydet" ile onaylayabilirsiniz.', 'success');
        }
      } catch (err) {
        showToast('Geçersiz JSON dosyası!', 'error');
      }
    };
    reader.readAsText(file);
    if (fileImportRef.current) fileImportRef.current.value = '';
  };

  // If not authenticated, render Login Screen
  if (!isAuthenticated) {
    return (
      <AdminLogin 
        onLogin={handleLogin} 
        error={loginError} 
        brandName={activeContent.navigation?.brandName} 
        uiLang={activeLang}
        onToggleUiLang={changeLang}
      />
    );
  }

  return (
    <div className="admin-layout">
      {/* Unsaved Changes Sticky Notification */}
      {hasUnsavedChanges && (
        <div className="admin-unsaved-banner">
          <span>{tUi('unsaved_banner')}</span>
          <button type="button" onClick={handleSave} disabled={isSaving}>
            <Save size={13} /> {isSaving ? tUi('saving') : tUi('save_now')}
          </button>
        </div>
      )}

      {/* Sticky Header Bar */}
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-brand-info">
            <div className="admin-badge-icon">N</div>
            <div className="admin-title-group">
              <h1>
                {tUi('panel_title')}
                <span className="admin-version-tag">{tUi('version_tag')}</span>
              </h1>
              <p>{tUi('panel_subtitle')}</p>
            </div>
          </div>

          <div className="admin-header-actions">
            {/* UI Language Switcher */}
            <div className="admin-lang-group" title={activeLang === 'tr' ? '🇹🇷 Türkçe İçerik Düzenleniyor' : '🇬🇧 English Content is being edited'}>
              <button 
                type="button" 
                className={`admin-lang-pill-btn ${activeLang === 'tr' ? 'active' : ''}`}
                onClick={() => changeLang('tr')}
              >
                🇹🇷 TR (Türkçe)
              </button>
              <button 
                type="button" 
                className={`admin-lang-pill-btn en ${activeLang === 'en' ? 'active' : ''}`}
                onClick={() => changeLang('en')}
              >
                🇬🇧 EN (English)
              </button>
            </div>

            {lastSavedAt && (
              <div className="admin-save-indicator">
                <span className={`indicator-dot ${isSaving ? 'saving' : hasUnsavedChanges ? 'dirty' : ''}`} />
                <span>{hasUnsavedChanges ? tUi('save_changes_exist') : `${tUi('last_saved')}: ${new Date(lastSavedAt).toLocaleTimeString(activeLang === 'en' ? 'en-US' : 'tr-TR')}`}</span>
              </div>
            )}

            <button 
              type="button" 
              className="admin-btn admin-btn-outline" 
              onClick={() => setShowPreviewModal(true)}
              title={tUi('live_preview')}
            >
              <Eye size={15} /> {tUi('live_preview')}
            </button>

            <Link to="/" target="_blank" className="admin-btn admin-btn-outline" title={tUi('inspect_site')}>
              <ExternalLink size={15} /> {tUi('inspect_site')}
            </Link>

            <button 
              type="button"
              className="admin-btn admin-btn-primary" 
              onClick={handleSave} 
              disabled={isSaving}
            >
              <Save size={16} />
              {isSaving ? tUi('saving') : tUi('save_changes')}
            </button>

            <button 
              type="button" 
              className="admin-btn admin-btn-outline" 
              onClick={handleLogout}
              title={tUi('logout')}
            >
              <LogOut size={15} /> {tUi('logout')}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Toast */}
      {(localMessage || saveStatus) && (
        <div className={`admin-toast ${(localMessage?.type || saveStatus?.type || 'success')}`}>
          <CheckCircle2 size={18} />
          <span>{localMessage?.text || saveStatus?.message}</span>
        </div>
      )}

      {/* Main Admin Container */}
      <main className="admin-container">
        

        {/* Modern Categorized Tabs Navigation (No ugly scrollbar, perfectly wrapped) */}
        <div className="admin-tabs-nav-wrapper">
          {/* Quick Category Filter Pills */}
          <div className="admin-tab-categories">
            <button 
              type="button" 
              className={`admin-cat-pill ${tabCategory === 'all' ? 'active' : ''}`}
              onClick={() => setTabCategory('all')}
            >
              {tUi('cat_all')} (11)
            </button>
            <button 
              type="button" 
              className={`admin-cat-pill ${tabCategory === 'home' ? 'active' : ''}`}
              onClick={() => setTabCategory('home')}
            >
              {tUi('cat_home')}
            </button>
            <button 
              type="button" 
              className={`admin-cat-pill ${tabCategory === 'corporate' ? 'active' : ''}`}
              onClick={() => setTabCategory('corporate')}
            >
              {tUi('cat_corporate')}
            </button>
            <button 
              type="button" 
              className={`admin-cat-pill ${tabCategory === 'system' ? 'active' : ''}`}
              onClick={() => setTabCategory('system')}
            >
              {tUi('cat_system')}
            </button>
          </div>

          {/* Tabs Bar with Flex-Wrap (Clean & Fully Visible) */}
          <nav className="admin-tabs-bar">
            {[
              { id: 'nav', group: 'home', icon: Compass, label: tUi('tab_nav'), count: (activeContent.navigation?.items || []).length },
              { id: 'hero', group: 'home', icon: Sparkles, label: tUi('tab_hero'), count: (activeContent.hero?.slides || []).length },
              { id: 'portfolio', group: 'home', icon: FolderKanban, label: tUi('tab_portfolio'), count: (activeContent.portfolio?.items || []).length },
              { id: 'homeSections', group: 'home', icon: Zap, label: tUi('tab_home_sections') },
              { id: 'testimonials', group: 'home', icon: MessageSquareQuote, label: tUi('tab_testimonials'), count: (activeContent.testimonials?.items || []).length + (activeContent.testimonials?.brands || []).length },
              { id: 'about', group: 'corporate', icon: LayoutTemplate, label: tUi('tab_about'), count: (activeContent.journey?.items || []).length },
              { id: 'services', group: 'corporate', icon: Layers, label: tUi('tab_services'), count: (activeContent.services?.items || []).length },
              { id: 'contact', group: 'corporate', icon: Phone, label: tUi('tab_contact'), count: (activeContent.globalOffices?.items || []).length },
              { id: 'translations', group: 'system', icon: Globe, label: tUi('tab_translations') },
              { id: 'media', group: 'system', icon: ImageIcon, label: tUi('tab_media') },
              { id: 'advanced', group: 'system', icon: FileJson, label: tUi('tab_advanced') }
            ]
              .filter(t => tabCategory === 'all' || t.group === tabCategory)
              .map(tab => {
                const IconComp = tab.icon;
                return (
                  <button 
                    key={tab.id}
                    type="button"
                    className={`admin-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
                  >
                    <IconComp size={16} />
                    <span>{tab.label}</span>
                    {tab.count !== undefined && tab.count > 0 && (
                      <span className="admin-tab-badge">{tab.count}</span>
                    )}
                  </button>
                );
              })}
          </nav>
        </div>

        {/* 1. TAB: Menü ve Navigasyon */}
        {activeTab === 'nav' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><Compass size={20} /> Menü ve Navigasyon Yönetimi</h2>
                <p>Header ve menü bağlantılarını düzenleyin, sıralayın veya yeni alt kategoriler ekleyin.</p>
              </div>
              <button type="button" className="admin-btn admin-btn-outline" onClick={handleAddNavItem}>
                <Plus size={15} /> Yeni Menü Öğesi Ekle
              </button>
            </div>

            <div className="admin-grid-2" style={{ marginBottom: '24px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Marka Adı (Brand Text)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.navigation?.brandName || ''} 
                  onChange={(e) => setField('navigation', 'brandName', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Marka Logo Rozet Harfi</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.navigation?.brandLogoMark || ''} 
                  onChange={(e) => setField('navigation', 'brandLogoMark', e.target.value)}
                />
              </div>
              <ImageField 
                label="Özel Logo Görseli (Opsiyonel)"
                value={activeContent.navigation?.logoUrl || ''}
                onChange={(url) => setField('navigation', 'logoUrl', url)}
              />
            </div>

            {/* Announcement Top Bar */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1rem', color: '#ff6b4a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} /> Üst Duyuru Çubuğu (Announcement Bar)
                </h3>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: '#fff' }}>
                  <input 
                    type="checkbox" 
                    checked={!!activeContent.announcement?.enabled}
                    onChange={(e) => setField('announcement', 'enabled', e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#D12F0E' }}
                  />
                  <span>Duyuru Çubuğunu Göster</span>
                </label>
              </div>

              {activeContent.announcement?.enabled && (
                <div className="admin-grid-3">
                  <div className="admin-form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="admin-form-label">Duyuru Metni</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="Örn: 🚀 2026 Kurumsal Raporumuz Yayınlandı!"
                      value={activeContent.announcement?.text || ''} 
                      onChange={(e) => setField('announcement', 'text', e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Buton Metni</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="Örn: Hemen İnceleyin"
                      value={activeContent.announcement?.btnText || ''} 
                      onChange={(e) => setField('announcement', 'btnText', e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group" style={{ gridColumn: 'span 3' }}>
                    <PathInputField 
                      label="Buton Yönlendirme Linki"
                      value={activeContent.announcement?.btnLink || '/'}
                      onChange={(val) => setField('announcement', 'btnLink', val)}
                    />
                  </div>
                </div>
              )}
            </div>

            <h3 style={{ fontSize: '1rem', color: '#fff', margin: '20px 0 12px 0' }}>Menü Bağlantıları</h3>

            {activeContent.navigation?.items?.map((item, index) => (
              <div key={item.id || index} className="admin-item-card">
                <div className="admin-item-card-header" onClick={() => toggleCollapse(`nav_${index}`)}>
                  <div className="admin-item-card-title">
                    <span className="admin-item-index">{index + 1}</span>
                    <span>{item.title || 'Başlıksız Menü'}</span>
                    {item.badge && <span className="admin-version-tag">{item.badge}</span>}
                    {item.hasChildren && (
                      <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>
                        ({(item.children || []).length} Alt Menü)
                      </span>
                    )}
                  </div>
                  <div className="admin-item-actions" onClick={(e) => e.stopPropagation()}>
                    <button 
                      type="button" 
                      className="admin-btn-icon" 
                      disabled={index === 0}
                      onClick={() => handleMoveNavItem(index, 'up')}
                      title="Yukarı Taşı"
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button 
                      type="button" 
                      className="admin-btn-icon" 
                      disabled={index === (activeContent.navigation?.items?.length || 0) - 1}
                      onClick={() => handleMoveNavItem(index, 'down')}
                      title="Aşağı Taşı"
                    >
                      <ArrowDown size={14} />
                    </button>
                    <button 
                      type="button" 
                      className="admin-btn-icon delete" 
                      onClick={() => handleRemoveNavItem(index)}
                      title="Sil"
                    >
                      <Trash2 size={14} />
                    </button>
                    <button 
                      type="button" 
                      className="admin-btn-icon" 
                      onClick={() => toggleCollapse(`nav_${index}`)}
                      title="Daralt / Genişlet"
                    >
                      {collapsedCards[`nav_${index}`] ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </button>
                  </div>
                </div>

                {!collapsedCards[`nav_${index}`] && (
                  <div className="admin-card-body">
                    <div className="admin-grid-3">
                      <div className="admin-form-group">
                        <label className="admin-form-label">Menü Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={item.title || ''} 
                          onChange={(e) => handleUpdateNavItem(index, 'title', e.target.value)}
                        />
                      </div>
                      <PathInputField 
                        label="Yönlendirme Linki (Path)"
                        value={item.path || ''}
                        onChange={(p) => handleUpdateNavItem(index, 'path', p)}
                      />
                      <div className="admin-form-group">
                        <label className="admin-form-label">Rozet (Badge)</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          placeholder="Örn: 6 Sektör"
                          value={item.badge || ''} 
                          onChange={(e) => handleUpdateNavItem(index, 'badge', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Submenu Dropdown Items */}
                    <div className="admin-nested-container">
                      <div className="admin-nested-header">
                        <h4>Alt Menü Elemanları (Dropdown)</h4>
                        <button 
                          type="button" 
                          className="admin-btn admin-btn-outline admin-btn-sm"
                          onClick={() => handleAddSubItem(index)}
                        >
                          <Plus size={13} /> Alt Menü Ekle
                        </button>
                      </div>

                      {(item.children || []).length === 0 ? (
                        <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-dim)' }}>
                          Bu menü için alt menü bulunmuyor.
                        </div>
                      ) : (
                        item.children.map((subItem, subIdx) => (
                          <div key={subItem.id || subIdx} className="admin-nested-item">
                            <input 
                              type="text" 
                              className="admin-input" 
                              placeholder="Alt Menü Başlığı"
                              value={subItem.title || ''} 
                              onChange={(e) => handleUpdateSubItem(index, subIdx, 'title', e.target.value)}
                            />
                            <select 
                              className="admin-select" 
                              value={subItem.path || ''} 
                              onChange={(e) => handleUpdateSubItem(index, subIdx, 'path', e.target.value)}
                            >
                              <option value="" disabled>Sayfa Seç ▼</option>
                              {PAGE_PRESETS.map((p) => (
                                <option key={p.path} value={p.path}>
                                  {p.label} ({p.path})
                                </option>
                              ))}
                            </select>
                            <input 
                              type="text" 
                              className="admin-input" 
                              placeholder="Rozet"
                              value={subItem.badge || ''} 
                              onChange={(e) => handleUpdateSubItem(index, subIdx, 'badge', e.target.value)}
                            />
                            <input 
                              type="text" 
                              className="admin-input" 
                              placeholder="Renk (#D12F0E)"
                              value={subItem.color || ''} 
                              onChange={(e) => handleUpdateSubItem(index, subIdx, 'color', e.target.value)}
                            />
                            <button 
                              type="button" 
                              className="admin-btn-icon delete"
                              onClick={() => handleRemoveSubItem(index, subIdx)}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* 2. TAB: Hero Bölümü */}
        {activeTab === 'hero' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><Sparkles size={20} /> Hero & Manşet Bölümü</h2>
                <p>Ana sayfadaki büyük karşılama başlığı, sloganlar, butonlar ve slaytları yönetin.</p>
              </div>
            </div>

            <div className="admin-grid-2">
              <div className="admin-form-group full-width">
                <label className="admin-form-label">Üst Slogan Rozeti</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.hero?.badge || ''} 
                  onChange={(e) => setField('hero', 'badge', e.target.value)}
                />
              </div>

              <div className="admin-form-group full-width">
                <label className="admin-form-label">Ana Başlık (Hero Title)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.hero?.title || ''} 
                  onChange={(e) => setField('hero', 'title', e.target.value)}
                />
              </div>

              <div className="admin-form-group full-width">
                <label className="admin-form-label">Alt Açıklama (Hero Subtitle)</label>
                <textarea 
                  className="admin-textarea" 
                  value={activeContent.hero?.subtitle || ''} 
                  onChange={(e) => setField('hero', 'subtitle', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Birincil Buton Metni</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.hero?.primaryBtnText || ''} 
                  onChange={(e) => setField('hero', 'primaryBtnText', e.target.value)}
                />
              </div>

              <PathInputField 
                label="Birincil Buton Linki"
                value={activeContent.hero?.primaryBtnLink || ''}
                onChange={(p) => setField('hero', 'primaryBtnLink', p)}
              />

              <div className="admin-form-group">
                <label className="admin-form-label">İkincil Buton Metni</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.hero?.secondaryBtnText || ''} 
                  onChange={(e) => setField('hero', 'secondaryBtnText', e.target.value)}
                />
              </div>

              <PathInputField 
                label="İkincil Buton Linki"
                value={activeContent.hero?.secondaryBtnLink || ''}
                onChange={(p) => setField('hero', 'secondaryBtnLink', p)}
              />

              <ImageField 
                label="Hero Arka Plan Görseli"
                value={activeContent.hero?.bgImage || ''}
                onChange={(url) => setField('hero', 'bgImage', url)}
              />
            </div>

            {/* Quick Hero Stats */}
            <h3 style={{ fontSize: '1rem', color: '#fff', margin: '28px 0 12px 0' }}>Manşet İstatistik Sayaçları</h3>
            <div className="admin-grid-2">
              {(activeContent.hero?.stats || []).map((st, sIdx) => (
                <div key={st.id || sIdx} className="admin-item-card" style={{ padding: '12px' }}>
                  <div className="admin-grid-2">
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="Sayı (örn: 150+)"
                      value={st.num || ''} 
                      onChange={(e) => {
                        const newStats = [...(activeContent.hero?.stats || [])];
                        newStats[sIdx] = { ...newStats[sIdx], num: e.target.value };
                        setField('hero', 'stats', newStats);
                      }}
                    />
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="Etiket (örn: Tamamlanan Proje)"
                      value={st.label || ''} 
                      onChange={(e) => {
                        const newStats = [...(activeContent.hero?.stats || [])];
                        newStats[sIdx] = { ...newStats[sIdx], label: e.target.value };
                        setField('hero', 'stats', newStats);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Multi-Slide Carousel Items */}
            <div className="admin-section-header" style={{ marginTop: '28px' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Hero Çoklu Slaytları (Carousel)</h3>
                <p>Hero bileşeni slayt modundayken gösterilecek içerikler</p>
              </div>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => {
                  const newSlide = {
                    id: `slide_${Date.now()}`,
                    badge: 'Yeni Slayt',
                    title: 'Slayt Başlığı',
                    subtitle: 'Slayt açıklaması...',
                    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
                    color: '#D12F0E',
                    statNum: '100+',
                    statTxt: 'Referans'
                  };
                  setField('hero', 'slides', [...(activeContent.hero?.slides || []), newSlide]);
                }}
              >
                <Plus size={14} /> Yeni Slayt Ekle
              </button>
            </div>

            {(activeContent.hero?.slides || []).map((slide, slIdx) => (
              <div key={slide.id || slIdx} className="admin-item-card">
                <div className="admin-item-card-header" onClick={() => toggleCollapse(`slide_${slIdx}`)}>
                  <div className="admin-item-card-title">
                    <span className="admin-item-index">{slIdx + 1}</span>
                    <span>{slide.title || 'Yeni Slayt'}</span>
                    <span className="admin-version-tag">{slide.badge}</span>
                  </div>
                  <div className="admin-item-actions" onClick={(e) => e.stopPropagation()}>
                    <button 
                      type="button" 
                      className="admin-btn-icon delete"
                      onClick={() => {
                        const updated = (activeContent.hero?.slides || []).filter((_, idx) => idx !== slIdx);
                        setField('hero', 'slides', updated);
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                    <button 
                      type="button" 
                      className="admin-btn-icon" 
                      onClick={() => toggleCollapse(`slide_${slIdx}`)}
                    >
                      {collapsedCards[`slide_${slIdx}`] ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </button>
                  </div>
                </div>

                {!collapsedCards[`slide_${slIdx}`] && (
                  <div className="admin-card-body">
                    <div className="admin-grid-2">
                      <div className="admin-form-group">
                        <label className="admin-form-label">Slayt Rozeti</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={slide.badge || ''} 
                          onChange={(e) => {
                            const updated = [...(activeContent.hero?.slides || [])];
                            updated[slIdx] = { ...updated[slIdx], badge: e.target.value };
                            setField('hero', 'slides', updated);
                          }}
                        />
                      </div>
                      <ColorPickerField 
                        label="Slayt Vurgu Rengi"
                        value={slide.color || '#D12F0E'}
                        onChange={(col) => {
                          const updated = [...(activeContent.hero?.slides || [])];
                          updated[slIdx] = { ...updated[slIdx], color: col };
                          setField('hero', 'slides', updated);
                        }}
                      />
                      <div className="admin-form-group full-width">
                        <label className="admin-form-label">Slayt Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={slide.title || ''} 
                          onChange={(e) => {
                            const updated = [...(activeContent.hero?.slides || [])];
                            updated[slIdx] = { ...updated[slIdx], title: e.target.value };
                            setField('hero', 'slides', updated);
                          }}
                        />
                      </div>
                      <div className="admin-form-group full-width">
                        <label className="admin-form-label">Slayt Açıklaması</label>
                        <textarea 
                          className="admin-textarea" 
                          value={slide.subtitle || ''} 
                          onChange={(e) => {
                            const updated = [...(activeContent.hero?.slides || [])];
                            updated[slIdx] = { ...updated[slIdx], subtitle: e.target.value };
                            setField('hero', 'slides', updated);
                          }}
                        />
                      </div>
                      <ImageField 
                        label="Slayt Görseli"
                        value={slide.image || ''}
                        onChange={(url) => {
                          const updated = [...(activeContent.hero?.slides || [])];
                          updated[slIdx] = { ...updated[slIdx], image: url };
                          setField('hero', 'slides', updated);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* 3. TAB: Hakkımızda & Journey */}
        {activeTab === 'about' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><LayoutTemplate size={20} /> Hakkımızda & Zaman Çizelgesi</h2>
                <p>Kurumsal açıklama, vizyon özellikleri ve başarı kilometre taşları.</p>
              </div>
            </div>

            <div className="admin-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Bölüm Rozeti</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.about?.badge || ''} 
                  onChange={(e) => setField('about', 'badge', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Deneyim Yılı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.about?.experienceYears || ''} 
                  onChange={(e) => setField('about', 'experienceYears', e.target.value)}
                />
              </div>

              <div className="admin-form-group full-width">
                <label className="admin-form-label">Ana Başlık</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.about?.title || ''} 
                  onChange={(e) => setField('about', 'title', e.target.value)}
                />
              </div>

              <div className="admin-form-group full-width">
                <label className="admin-form-label">Alt Başlık</label>
                <textarea 
                  className="admin-textarea" 
                  value={activeContent.about?.subtitle || ''} 
                  onChange={(e) => setField('about', 'subtitle', e.target.value)}
                />
              </div>
            </div>

            {/* Paragraphs */}
            <div className="admin-section-header" style={{ marginTop: '20px' }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Kurumsal Açıklama Paragrafları</h3>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => {
                  const paras = [...(activeContent.about?.paragraphs || []), 'Yeni açıklama paragrafı...'];
                  setField('about', 'paragraphs', paras);
                }}
              >
                <Plus size={13} /> Paragraf Ekle
              </button>
            </div>

            {(activeContent.about?.paragraphs || []).map((p, pIdx) => (
              <div key={pIdx} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <textarea 
                  className="admin-textarea" 
                  value={p} 
                  onChange={(e) => {
                    const paras = [...(activeContent.about?.paragraphs || [])];
                    paras[pIdx] = e.target.value;
                    setField('about', 'paragraphs', paras);
                  }}
                />
                <button 
                  type="button" 
                  className="admin-btn-icon delete"
                  onClick={() => {
                    const paras = (activeContent.about?.paragraphs || []).filter((_, idx) => idx !== pIdx);
                    setField('about', 'paragraphs', paras);
                  }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}

            {/* Feature Cards */}
            <div className="admin-section-header" style={{ marginTop: '28px' }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Özellik Kartları</h3>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => {
                  const newFeature = {
                    id: `feat_${Date.now()}`,
                    title: 'Yeni Özellik',
                    desc: 'Açıklama metni...',
                    icon: 'Cpu'
                  };
                  setField('about', 'features', [...(activeContent.about?.features || []), newFeature]);
                }}
              >
                <Plus size={13} /> Özellik Kartı Ekle
              </button>
            </div>

            <div className="admin-grid-3">
              {(activeContent.about?.features || []).map((feat, fIdx) => (
                <div key={feat.id || fIdx} className="admin-item-card">
                  <div className="admin-item-card-header">
                    <span className="admin-item-card-title">{feat.title || 'Özellik'}</span>
                    <button 
                      type="button" 
                      className="admin-btn-icon delete"
                      onClick={() => {
                        const updated = (activeContent.about?.features || []).filter((_, idx) => idx !== fIdx);
                        setField('about', 'features', updated);
                      }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Başlık</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={feat.title || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.about?.features || [])];
                        updated[fIdx] = { ...updated[fIdx], title: e.target.value };
                        setField('about', 'features', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Açıklama</label>
                    <textarea 
                      className="admin-textarea" 
                      style={{ minHeight: '60px' }}
                      value={feat.desc || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.about?.features || [])];
                        updated[fIdx] = { ...updated[fIdx], desc: e.target.value };
                        setField('about', 'features', updated);
                      }}
                    />
                  </div>
                  <IconPickerField 
                    label="İkon"
                    value={feat.icon || 'Cpu'}
                    onChange={(ic) => {
                      const updated = [...(activeContent.about?.features || [])];
                      updated[fIdx] = { ...updated[fIdx], icon: ic };
                      setField('about', 'features', updated);
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Journey Timeline */}
            <div className="admin-section-header" style={{ marginTop: '32px' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Başarı Yolculuğumuz (Timeline)</h3>
                <p>Tarihsel başarı ve inovasyon adımları</p>
              </div>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => {
                  const newMilestone = {
                    id: `mile_${Date.now()}`,
                    year: '2026',
                    title: 'Yeni Başarı Adımı',
                    desc: 'Açıklama metni...',
                    badge: 'Gelişme'
                  };
                  setField('journey', 'items', [...(activeContent.journey?.items || []), newMilestone]);
                }}
              >
                <Plus size={13} /> Kilometre Taşı Ekle
              </button>
            </div>

            {(activeContent.journey?.items || []).map((mile, mIdx) => (
              <div key={mile.id || mIdx} className="admin-item-card">
                <div className="admin-item-card-header">
                  <span className="admin-item-card-title">
                    <span className="admin-version-tag" style={{ background: 'rgba(209, 47, 14, 0.2)', color: '#ff6b4a' }}>
                      {mile.year || 'Yıl'}
                    </span>
                    {mile.title}
                  </span>
                  <button 
                    type="button" 
                    className="admin-btn-icon delete"
                    onClick={() => {
                      const updated = (activeContent.journey?.items || []).filter((_, idx) => idx !== mIdx);
                      setField('journey', 'items', updated);
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <div className="admin-grid-3">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Yıl</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={mile.year || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.journey?.items || [])];
                        updated[mIdx] = { ...updated[mIdx], year: e.target.value };
                        setField('journey', 'items', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Başlık</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={mile.title || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.journey?.items || [])];
                        updated[mIdx] = { ...updated[mIdx], title: e.target.value };
                        setField('journey', 'items', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Rozet</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={mile.badge || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.journey?.items || [])];
                        updated[mIdx] = { ...updated[mIdx], badge: e.target.value };
                        setField('journey', 'items', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Detaylı Açıklama</label>
                    <textarea 
                      className="admin-textarea" 
                      style={{ minHeight: '60px' }}
                      value={mile.desc || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.journey?.items || [])];
                        updated[mIdx] = { ...updated[mIdx], desc: e.target.value };
                        setField('journey', 'items', updated);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Vision & Mission Editor */}
            <div className="admin-section-header" style={{ marginTop: '36px' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Vizyon ve Misyonumuz</h3>
                <p>Hakkımızda sayfasındaki vizyon & misyon kutularını düzenleyin</p>
              </div>
            </div>

            <div className="admin-grid-2">
              <div className="admin-item-card">
                <div className="admin-item-card-header">
                  <span className="admin-item-card-title">Vizyonumuz</span>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Vizyon Başlığı</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.visionMission?.visionTitle || 'Vizyonumuz'} 
                    onChange={(e) => setField('visionMission', 'visionTitle', e.target.value)}
                  />
                </div>
                <div className="admin-form-group full-width">
                  <label className="admin-form-label">Vizyon Açıklaması</label>
                  <textarea 
                    className="admin-textarea" 
                    style={{ minHeight: '90px' }}
                    value={activeContent.visionMission?.visionDesc || ''} 
                    onChange={(e) => setField('visionMission', 'visionDesc', e.target.value)}
                  />
                </div>
              </div>

              <div className="admin-item-card">
                <div className="admin-item-card-header">
                  <span className="admin-item-card-title">Misyonumuz</span>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Misyon Başlığı</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.visionMission?.missionTitle || 'Misyonumuz'} 
                    onChange={(e) => setField('visionMission', 'missionTitle', e.target.value)}
                  />
                </div>
                <div className="admin-form-group full-width">
                  <label className="admin-form-label">Misyon Açıklaması</label>
                  <textarea 
                    className="admin-textarea" 
                    style={{ minHeight: '90px' }}
                    value={activeContent.visionMission?.missionDesc || ''} 
                    onChange={(e) => setField('visionMission', 'missionDesc', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Global Standards Banner Editor */}
            <div className="admin-section-header" style={{ marginTop: '36px' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Küresel Standartlar ve Kalite Belgeleri</h3>
                <p>Hakkımızda sayfasının altındaki standartlar kutusunu düzenleyin</p>
              </div>
            </div>

            <div className="admin-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Başlık</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.about?.standardsTitle || 'Küresel Standartlarda Yönetim ve Güvenilirlik'} 
                  onChange={(e) => setField('about', 'standardsTitle', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Alt Açıklama</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.about?.standardsSubtitle || 'Uluslararası kalite, çevre ve bilgi güvenliği standartlarımızla sektörde çıtayı belirliyoruz.'} 
                  onChange={(e) => setField('about', 'standardsSubtitle', e.target.value)}
                />
              </div>
              <div className="admin-form-group full-width">
                <label className="admin-form-label">4 Standart Maddesi</label>
                <div className="admin-grid-2">
                  {(activeContent.about?.standardsList || [
                    'ISO 9001: Kalite Yönetim Sistemi',
                    'ISO 27001: Bilgi Güvenliği Standardı',
                    'ISO 45001: İş Sağlığı ve Güvenliği',
                    'ISO 14001: Çevre Yönetim Sistemi'
                  ]).map((std, sIdx) => (
                    <input 
                      key={sIdx}
                      type="text" 
                      className="admin-input" 
                      value={std} 
                      onChange={(e) => {
                        const updated = [...(activeContent.about?.standardsList || [
                          'ISO 9001: Kalite Yönetim Sistemi',
                          'ISO 27001: Bilgi Güvenliği Standardı',
                          'ISO 45001: İş Sağlığı ve Güvenliği',
                          'ISO 14001: Çevre Yönetim Sistemi'
                        ])];
                        updated[sIdx] = e.target.value;
                        setField('about', 'standardsList', updated);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. TAB: Hizmetler & Sektörler */}
        {activeTab === 'services' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><Layers size={20} /> Hizmetler ve Sektör Yönetimi</h2>
                <p>Sektör kartları, detay açıklamaları, maddeler ve görselleri yönetin.</p>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div className="admin-filter-box">
                  <Search size={15} />
                  <input 
                    type="text" 
                    className="admin-input" 
                    placeholder="Sektörlerde ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                  type="button" 
                  className="admin-btn admin-btn-outline"
                  onClick={() => {
                    const newSec = {
                      id: `sector_${Date.now()}`,
                      title: 'Yeni Sektör / Hizmet',
                      shortName: 'Yeni Sektör',
                      description: 'Sektör detay açıklaması...',
                      icon: 'Layers',
                      color: '#D12F0E',
                      badge: 'Yeni',
                      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
                      path: '/yeni-sektor',
                      points: ['Hizmet Maddesi 1', 'Hizmet Maddesi 2']
                    };
                    setField('services', 'items', [...(activeContent.services?.items || []), newSec]);
                  }}
                >
                  <Plus size={15} /> Yeni Sektör Ekle
                </button>
              </div>
            </div>

            <div className="admin-grid-2" style={{ marginBottom: '20px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Sektörler Bölüm Başlığı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.services?.title || ''} 
                  onChange={(e) => setField('services', 'title', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Sektörler Alt Başlığı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.services?.subtitle || ''} 
                  onChange={(e) => setField('services', 'subtitle', e.target.value)}
                />
              </div>
            </div>

            {/* Filtered Sector Cards */}
            {(activeContent.services?.items || [])
              .filter(sec => !searchQuery.trim() || 
                sec.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                sec.shortName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sec.description?.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((sec, sIdx) => (
                <div key={sec.id || sIdx} className="admin-item-card">
                  <div className="admin-item-card-header" onClick={() => toggleCollapse(`sec_${sIdx}`)}>
                    <div className="admin-item-card-title">
                      <span className="admin-item-index">{sIdx + 1}</span>
                      <span style={{ color: sec.color || '#fff' }}>●</span>
                      <span>{sec.title || 'Sektör'}</span>
                      {sec.badge && <span className="admin-version-tag">{sec.badge}</span>}
                    </div>
                    <div className="admin-item-actions" onClick={(e) => e.stopPropagation()}>
                      <button 
                        type="button" 
                        className="admin-btn-icon delete"
                        onClick={() => {
                          const updated = (activeContent.services?.items || []).filter((_, idx) => idx !== sIdx);
                          setField('services', 'items', updated);
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                      <button 
                        type="button" 
                        className="admin-btn-icon" 
                        onClick={() => toggleCollapse(`sec_${sIdx}`)}
                      >
                        {collapsedCards[`sec_${sIdx}`] ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                      </button>
                    </div>
                  </div>

                  {!collapsedCards[`sec_${sIdx}`] && (
                    <div className="admin-card-body">
                      <div className="admin-grid-3">
                        <div className="admin-form-group">
                          <label className="admin-form-label">Tam Başlık</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={sec.title || ''} 
                            onChange={(e) => {
                              const updated = [...(activeContent.services?.items || [])];
                              updated[sIdx] = { ...updated[sIdx], title: e.target.value };
                              setField('services', 'items', updated);
                            }}
                          />
                        </div>
                        <div className="admin-form-group">
                          <label className="admin-form-label">Kısa İsim (Menü için)</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={sec.shortName || ''} 
                            onChange={(e) => {
                              const updated = [...(activeContent.services?.items || [])];
                              updated[sIdx] = { ...updated[sIdx], shortName: e.target.value };
                              setField('services', 'items', updated);
                            }}
                          />
                        </div>
                        <PathInputField 
                          label="Sayfa Yolu (Path)"
                          value={sec.path || ''} 
                          onChange={(p) => {
                            const updated = [...(activeContent.services?.items || [])];
                            updated[sIdx] = { ...updated[sIdx], path: p };
                            setField('services', 'items', updated);
                          }}
                        />
                        <div className="admin-form-group">
                          <label className="admin-form-label">Rozet (Badge)</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={sec.badge || ''} 
                            onChange={(e) => {
                              const updated = [...(activeContent.services?.items || [])];
                              updated[sIdx] = { ...updated[sIdx], badge: e.target.value };
                              setField('services', 'items', updated);
                            }}
                          />
                        </div>
                        <ColorPickerField 
                          label="Vurgu Rengi"
                          value={sec.color || '#D12F0E'}
                          onChange={(col) => {
                            const updated = [...(activeContent.services?.items || [])];
                            updated[sIdx] = { ...updated[sIdx], color: col };
                            setField('services', 'items', updated);
                          }}
                        />
                        <IconPickerField 
                          label="İkon"
                          value={sec.icon || 'Layers'}
                          onChange={(ic) => {
                            const updated = [...(activeContent.services?.items || [])];
                            updated[sIdx] = { ...updated[sIdx], icon: ic };
                            setField('services', 'items', updated);
                          }}
                        />
                        <div className="admin-form-group full-width">
                          <label className="admin-form-label">Detaylı Açıklama</label>
                          <textarea 
                            className="admin-textarea" 
                            value={sec.description || ''} 
                            onChange={(e) => {
                              const updated = [...(activeContent.services?.items || [])];
                              updated[sIdx] = { ...updated[sIdx], description: e.target.value };
                              setField('services', 'items', updated);
                            }}
                          />
                        </div>

                        <ImageField 
                          label="Sektör Görseli (Vercel Blob)"
                          value={sec.image || ''}
                          onChange={(url) => {
                            const updated = [...(activeContent.services?.items || [])];
                            updated[sIdx] = { ...updated[sIdx], image: url };
                            setField('services', 'items', updated);
                          }}
                        />
                      </div>

                        {/* Bullet points */}
                        <div className="admin-nested-container">
                          <div className="admin-nested-header">
                            <h4>Hizmet Maddeleri (Bullet Points)</h4>
                            <button 
                              type="button" 
                              className="admin-btn admin-btn-outline admin-btn-sm"
                              onClick={() => {
                                const updated = [...(activeContent.services?.items || [])];
                                const points = [...(updated[sIdx].points || []), 'Yeni Hizmet Maddesi'];
                                updated[sIdx] = { ...updated[sIdx], points };
                                setField('services', 'items', updated);
                              }}
                            >
                              <Plus size={12} /> Madde Ekle
                            </button>
                          </div>
                          {(sec.points || []).map((pt, ptIdx) => (
                            <div key={ptIdx} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                              <input 
                                type="text" 
                                className="admin-input" 
                                value={pt} 
                                onChange={(e) => {
                                  const updated = [...(activeContent.services?.items || [])];
                                  const points = [...(updated[sIdx].points || [])];
                                  points[ptIdx] = e.target.value;
                                  updated[sIdx] = { ...updated[sIdx], points };
                                  setField('services', 'items', updated);
                                }}
                              />
                              <button 
                                type="button" 
                                className="admin-btn-icon delete"
                                onClick={() => {
                                  const updated = [...(activeContent.services?.items || [])];
                                  const points = (updated[sIdx].points || []).filter((_, idx) => idx !== ptIdx);
                                  updated[sIdx] = { ...updated[sIdx], points };
                                  setField('services', 'items', updated);
                                }}
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Sıkça Sorulan Sorular (SSS / FAQ) Accordion Editor */}
                        <div className="admin-nested-container" style={{ marginTop: '16px' }}>
                          <div className="admin-nested-header">
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <HelpCircle size={15} color="#38bdf8" />
                              Sıkça Sorulan Sorular (SSS / FAQ) — {sec.shortName || sec.title}
                            </h4>
                            <button 
                              type="button" 
                              className="admin-btn admin-btn-outline admin-btn-sm"
                              onClick={() => {
                                const updated = [...(activeContent.services?.items || [])];
                                const faqs = [...(updated[sIdx].faqs || []), { q: 'Yeni Sıkça Sorulan Soru?', a: 'Detaylı yanıt metni...' }];
                                updated[sIdx] = { ...updated[sIdx], faqs };
                                setField('services', 'items', updated);
                              }}
                            >
                              <Plus size={12} /> SSS Ekle
                            </button>
                          </div>

                          {(!sec.faqs || sec.faqs.length === 0) ? (
                            <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-dim)' }}>
                              Bu sektöre özel SSS bulunmuyor. Eklemek için "SSS Ekle" butonuna tıklayın.
                            </div>
                          ) : (
                            sec.faqs.map((faq, fIdx) => (
                              <div key={fIdx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', marginBottom: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#38bdf8' }}>Soru #{fIdx + 1}</span>
                                  <button 
                                    type="button" 
                                    className="admin-btn-icon delete"
                                    onClick={() => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const faqs = (updated[sIdx].faqs || []).filter((_, idx) => idx !== fIdx);
                                      updated[sIdx] = { ...updated[sIdx], faqs };
                                      setField('services', 'items', updated);
                                    }}
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Soru</label>
                                  <input 
                                    type="text" 
                                    className="admin-input" 
                                    placeholder="Örn: Proje teslim süresi ne kadardır?"
                                    value={faq.q || faq.question || ''} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const faqs = [...(updated[sIdx].faqs || [])];
                                      faqs[fIdx] = { ...faqs[fIdx], q: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], faqs };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Cevap</label>
                                  <textarea 
                                    className="admin-textarea" 
                                    style={{ minHeight: '60px' }}
                                    placeholder="Detaylı yanıt metni..."
                                    value={faq.a || faq.answer || ''} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const faqs = [...(updated[sIdx].faqs || [])];
                                      faqs[fIdx] = { ...faqs[fIdx], a: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], faqs };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                              </div>
                            ))
                          )}
                        </div>

                        {/* Sektör İstatistik Sayaçları (Stats) */}
                        <div className="admin-nested-container" style={{ marginTop: '16px' }}>
                          <div className="admin-nested-header">
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <TrendingUp size={15} color="#10b981" />
                              Sektör İstatistik Sayaçları (4 Adet) — {sec.shortName || sec.title}
                            </h4>
                            <button 
                              type="button" 
                              className="admin-btn admin-btn-outline admin-btn-sm"
                              onClick={() => {
                                const updated = [...(activeContent.services?.items || [])];
                                const stats = [...(updated[sIdx].stats || []), { label: 'Yeni Metrik', value: '100+' }];
                                updated[sIdx] = { ...updated[sIdx], stats };
                                setField('services', 'items', updated);
                              }}
                            >
                              <Plus size={12} /> Sayaç Ekle
                            </button>
                          </div>

                          <div className="admin-grid-2">
                            {(sec.stats || [
                              { label: 'Başarılı Proje', value: '100+' },
                              { label: 'Müşteri Memnuniyeti', value: '%99' },
                              { label: 'Saha Desteği', value: '7/24' },
                              { label: 'Hizmet Kapsamı', value: 'Türkiye Geneli' }
                            ]).map((st, stIdx) => (
                              <div key={stIdx} style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
                                <input 
                                  type="text" 
                                  className="admin-input" 
                                  placeholder="Değer (örn: 100+)"
                                  value={st.value || ''} 
                                  onChange={(e) => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const stats = [...(updated[sIdx].stats || [
                                      { label: 'Başarılı Proje', value: '100+' },
                                      { label: 'Müşteri Memnuniyeti', value: '%99' },
                                      { label: 'Saha Desteği', value: '7/24' },
                                      { label: 'Hizmet Kapsamı', value: 'Türkiye Geneli' }
                                    ])];
                                    stats[stIdx] = { ...stats[stIdx], value: e.target.value };
                                    updated[sIdx] = { ...updated[sIdx], stats };
                                    setField('services', 'items', updated);
                                  }}
                                />
                                <input 
                                  type="text" 
                                  className="admin-input" 
                                  placeholder="Etiket (örn: Başarılı Proje)"
                                  value={st.label || ''} 
                                  onChange={(e) => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const stats = [...(updated[sIdx].stats || [
                                      { label: 'Başarılı Proje', value: '100+' },
                                      { label: 'Müşteri Memnuniyeti', value: '%99' },
                                      { label: 'Saha Desteği', value: '7/24' },
                                      { label: 'Hizmet Kapsamı', value: 'Türkiye Geneli' }
                                    ])];
                                    stats[stIdx] = { ...stats[stIdx], label: e.target.value };
                                    updated[sIdx] = { ...updated[sIdx], stats };
                                    setField('services', 'items', updated);
                                  }}
                                />
                                <button 
                                  type="button" 
                                  className="admin-btn-icon delete"
                                  onClick={() => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const stats = (updated[sIdx].stats || []).filter((_, idx) => idx !== stIdx);
                                    updated[sIdx] = { ...updated[sIdx], stats };
                                    setField('services', 'items', updated);
                                  }}
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Proje ve Hizmet Süreci Adımları (Process) */}
                        <div className="admin-nested-container" style={{ marginTop: '16px' }}>
                          <div className="admin-nested-header">
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Zap size={15} color="#f59e0b" />
                              Hizmet & Projelendirme Süreci Adımları — {sec.shortName || sec.title}
                            </h4>
                            <button 
                              type="button" 
                              className="admin-btn admin-btn-outline admin-btn-sm"
                              onClick={() => {
                                const updated = [...(activeContent.services?.items || [])];
                                const process = [...(updated[sIdx].process || []), { title: 'Yeni Süreç Adımı', desc: 'Açıklama...' }];
                                updated[sIdx] = { ...updated[sIdx], process };
                                setField('services', 'items', updated);
                              }}
                            >
                              <Plus size={12} /> Adım Ekle
                            </button>
                          </div>

                          {(sec.process || [
                            { title: 'İhtiyaç & Saha Analizi', desc: 'Sektörünüze özel gereksinimleri tespit edip fizibilite raporu oluşturuyoruz.' },
                            { title: 'Mühendislik & Projelendirme', desc: 'Uzman kadromuzla uluslararası standartlarda uygulama planı hazırlıyoruz.' },
                            { title: 'Uygulama & Canlıya Alma', desc: 'Son teknoloji ekipman ve altyapı ile sistemi kusursuz şekilde devreye alıyoruz.' }
                          ]).map((pr, prIdx) => (
                            <div key={prIdx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f59e0b' }}>Adım #{prIdx + 1}</span>
                                <button 
                                  type="button" 
                                  className="admin-btn-icon delete"
                                  onClick={() => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const process = (updated[sIdx].process || []).filter((_, idx) => idx !== prIdx);
                                    updated[sIdx] = { ...updated[sIdx], process };
                                    setField('services', 'items', updated);
                                  }}
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                              <div className="admin-form-group">
                                <label className="admin-form-label">Adım Başlığı</label>
                                <input 
                                  type="text" 
                                  className="admin-input" 
                                  value={pr.title || ''} 
                                  onChange={(e) => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const process = [...(updated[sIdx].process || [
                                      { title: 'İhtiyaç & Saha Analizi', desc: 'Sektörünüze özel gereksinimleri tespit edip fizibilite raporu oluşturuyoruz.' },
                                      { title: 'Mühendislik & Projelendirme', desc: 'Uzman kadromuzla uluslararası standartlarda uygulama planı hazırlıyoruz.' },
                                      { title: 'Uygulama & Canlıya Alma', desc: 'Son teknoloji ekipman ve altyapı ile sistemi kusursuz şekilde devreye alıyoruz.' }
                                    ])];
                                    process[prIdx] = { ...process[prIdx], title: e.target.value };
                                    updated[sIdx] = { ...updated[sIdx], process };
                                    setField('services', 'items', updated);
                                  }}
                                />
                              </div>
                              <div className="admin-form-group">
                                <label className="admin-form-label">Adım Açıklaması</label>
                                <textarea 
                                  className="admin-textarea" 
                                  style={{ minHeight: '50px' }}
                                  value={pr.desc || ''} 
                                  onChange={(e) => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const process = [...(updated[sIdx].process || [
                                      { title: 'İhtiyaç & Saha Analizi', desc: 'Sektörünüze özel gereksinimleri tespit edip fizibilite raporu oluşturuyoruz.' },
                                      { title: 'Mühendislik & Projelendirme', desc: 'Uzman kadromuzla uluslararası standartlarda uygulama planı hazırlıyoruz.' },
                                      { title: 'Uygulama & Canlıya Alma', desc: 'Son teknoloji ekipman ve altyapı ile sistemi kusursuz şekilde devreye alıyoruz.' }
                                    ])];
                                    process[prIdx] = { ...process[prIdx], desc: e.target.value };
                                    updated[sIdx] = { ...updated[sIdx], process };
                                    setField('services', 'items', updated);
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Sektör Çözüm Ortakları (Partners) */}
                        <div className="admin-nested-container" style={{ marginTop: '16px' }}>
                          <div className="admin-nested-header">
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Handshake size={15} color="#38bdf8" />
                              Çözüm Ortakları & Markalar — {sec.shortName || sec.title}
                            </h4>
                            <button 
                              type="button" 
                              className="admin-btn admin-btn-outline admin-btn-sm"
                              onClick={() => {
                                const updated = [...(activeContent.services?.items || [])];
                                const partners = [...(updated[sIdx].partners || []), {
                                  id: `part_${Date.now()}`,
                                  name: 'Yeni Çözüm Ortağı',
                                  logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
                                  link: 'https://sarfea.com.tr'
                                }];
                                updated[sIdx] = { ...updated[sIdx], partners };
                                setField('services', 'items', updated);
                              }}
                            >
                              <Plus size={12} /> Ortak Ekle
                            </button>
                          </div>

                          {(sec.partners || []).map((part, partIdx) => (
                            <div key={part.id || partIdx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#38bdf8' }}>Ortak #{partIdx + 1}</span>
                                <button 
                                  type="button" 
                                  className="admin-btn-icon delete"
                                  onClick={() => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const partners = (updated[sIdx].partners || []).filter((_, idx) => idx !== partIdx);
                                    updated[sIdx] = { ...updated[sIdx], partners };
                                    setField('services', 'items', updated);
                                  }}
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                              <div className="admin-grid-2">
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Kurum / Marka Adı</label>
                                  <input 
                                    type="text" 
                                    className="admin-input" 
                                    value={part.name || ''} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const partners = [...(updated[sIdx].partners || [])];
                                      partners[partIdx] = { ...partners[partIdx], name: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], partners };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Yönlendirme Linki (URL)</label>
                                  <input 
                                    type="text" 
                                    className="admin-input" 
                                    placeholder="https://sarfea.com.tr"
                                    value={part.link || 'https://sarfea.com.tr'} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const partners = [...(updated[sIdx].partners || [])];
                                      partners[partIdx] = { ...partners[partIdx], link: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], partners };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                              </div>
                              <ImageField 
                                label="Logo Görseli"
                                value={part.logo || ''}
                                onChange={(url) => {
                                  const updated = [...(activeContent.services?.items || [])];
                                  const partners = [...(updated[sIdx].partners || [])];
                                  partners[partIdx] = { ...partners[partIdx], logo: url };
                                  updated[sIdx] = { ...updated[sIdx], partners };
                                  setField('services', 'items', updated);
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        {/* Sektör Özel Referansları (Sector References) */}
                        <div className="admin-nested-container" style={{ marginTop: '16px' }}>
                          <div className="admin-nested-header">
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Briefcase size={15} color="#ec4899" />
                              Sektör Özel Başarı Hikayeleri & Referanslar — {sec.shortName || sec.title}
                            </h4>
                            <button 
                              type="button" 
                              className="admin-btn admin-btn-outline admin-btn-sm"
                              onClick={() => {
                                const updated = [...(activeContent.services?.items || [])];
                                const references = [...(updated[sIdx].references || []), {
                                  id: `sref_${Date.now()}`,
                                  name: 'Yeni Sektörel Proje',
                                  description: 'Proje detayları ve başarı sonuçları...',
                                  metric: '%100 Başarı',
                                  status: 'Tamamlandı',
                                  link: 'https://sarfea.com.tr'
                                }];
                                updated[sIdx] = { ...updated[sIdx], references };
                                setField('services', 'items', updated);
                              }}
                            >
                              <Plus size={12} /> Referans Ekle
                            </button>
                          </div>

                          {(sec.references || []).map((sRef, sRefIdx) => (
                            <div key={sRef.id || sRefIdx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ec4899' }}>Proje #{sRefIdx + 1}</span>
                                <button 
                                  type="button" 
                                  className="admin-btn-icon delete"
                                  onClick={() => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const references = (updated[sIdx].references || []).filter((_, idx) => idx !== sRefIdx);
                                    updated[sIdx] = { ...updated[sIdx], references };
                                    setField('services', 'items', updated);
                                  }}
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                              <div className="admin-grid-2">
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Proje Başlığı</label>
                                  <input 
                                    type="text" 
                                    className="admin-input" 
                                    value={sRef.name || ''} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const references = [...(updated[sIdx].references || [])];
                                      references[sRefIdx] = { ...references[sRefIdx], name: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], references };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Metrik Rozeti (örn: 400 km Hat)</label>
                                  <input 
                                    type="text" 
                                    className="admin-input" 
                                    value={sRef.metric || ''} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const references = [...(updated[sIdx].references || [])];
                                      references[sRefIdx] = { ...references[sRefIdx], metric: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], references };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="admin-grid-2">
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Durum (örn: Tamamlandı)</label>
                                  <input 
                                    type="text" 
                                    className="admin-input" 
                                    value={sRef.status || 'Tamamlandı'} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const references = [...(updated[sIdx].references || [])];
                                      references[sRefIdx] = { ...references[sRefIdx], status: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], references };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                                <div className="admin-form-group">
                                  <label className="admin-form-label">Yönlendirme Linki (URL)</label>
                                  <input 
                                    type="text" 
                                    className="admin-input" 
                                    placeholder="https://sarfea.com.tr"
                                    value={sRef.link || 'https://sarfea.com.tr'} 
                                    onChange={(e) => {
                                      const updated = [...(activeContent.services?.items || [])];
                                      const references = [...(updated[sIdx].references || [])];
                                      references[sRefIdx] = { ...references[sRefIdx], link: e.target.value };
                                      updated[sIdx] = { ...updated[sIdx], references };
                                      setField('services', 'items', updated);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="admin-form-group full-width">
                                <label className="admin-form-label">Açıklama</label>
                                <textarea 
                                  className="admin-textarea" 
                                  style={{ minHeight: '50px' }}
                                  value={sRef.description || ''} 
                                  onChange={(e) => {
                                    const updated = [...(activeContent.services?.items || [])];
                                    const references = [...(updated[sIdx].references || [])];
                                    references[sRefIdx] = { ...references[sRefIdx], description: e.target.value };
                                    updated[sIdx] = { ...updated[sIdx], references };
                                    setField('services', 'items', updated);
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </section>
          )}

        {/* 5. TAB: Öne Çıkan Projeler (Portfolyo) */}
        {activeTab === 'portfolio' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><FolderKanban size={20} /> Öne Çıkan Projeler & Başarı Hikayeleri</h2>
                <p>Ana sayfada sergilenen tüm sektörel projeleri, görselleri, metrik rozetlerini ve yönlendirmeleri yönetin.</p>
              </div>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline"
                onClick={() => {
                  const newProj = {
                    id: `proj_${Date.now()}`,
                    sectorId: 'yazilim',
                    sectorName: 'Yazılım',
                    title: 'Yeni Başarı Hikayesi Projesi',
                    description: 'Proje hakkında detaylı açıklama, uygulanan çözümler ve sağlanan kazanımlar.',
                    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
                    metric: '%100 Başarı',
                    color: '#F6C310',
                    link: '/yazilim'
                  };
                  setField('portfolio', 'items', [...(activeContent.portfolio?.items || []), newProj]);
                }}
              >
                <Plus size={15} /> Yeni Proje Ekle
              </button>
            </div>

            {/* Section Header Controls */}
            <div className="admin-grid-2" style={{ marginBottom: '24px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Bölüm Üst Rozeti</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.portfolio?.badge || ''} 
                  onChange={(e) => setField('portfolio', 'badge', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Bölüm Ana Başlığı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.portfolio?.title || ''} 
                  onChange={(e) => setField('portfolio', 'title', e.target.value)}
                />
              </div>
              <div className="admin-form-group full-width">
                <label className="admin-form-label">Bölüm Alt Açıklaması</label>
                <textarea 
                  className="admin-textarea" 
                  value={activeContent.portfolio?.subtitle || ''} 
                  onChange={(e) => setField('portfolio', 'subtitle', e.target.value)}
                />
              </div>
            </div>

            <h3 style={{ fontSize: '1rem', color: '#fff', margin: '24px 0 12px 0' }}>Proje Kartları Listesi ({(activeContent.portfolio?.items || []).length})</h3>

            <div className="admin-grid-2">
              {(activeContent.portfolio?.items || []).map((proj, pIdx) => (
                <div key={proj.id || pIdx} className="admin-item-card">
                  <div className="admin-item-card-header">
                    <div className="admin-item-card-title">
                      <span className="admin-item-index">{pIdx + 1}</span>
                      <span>{proj.title || 'Başlıksız Proje'}</span>
                      <span className="admin-version-tag" style={{ background: proj.color ? `${proj.color}25` : undefined, color: proj.color || undefined }}>
                        {proj.sectorName || 'Sektör'}
                      </span>
                    </div>
                    <div className="admin-item-actions">
                      <button 
                        type="button" 
                        className="admin-btn-icon" 
                        disabled={pIdx === 0}
                        onClick={() => {
                          const items = [...(activeContent.portfolio?.items || [])];
                          const temp = items[pIdx];
                          items[pIdx] = items[pIdx - 1];
                          items[pIdx - 1] = temp;
                          setField('portfolio', 'items', items);
                        }}
                        title="Yukarı Taşı"
                      >
                        <ArrowUp size={14} />
                      </button>
                      <button 
                        type="button" 
                        className="admin-btn-icon" 
                        disabled={pIdx === (activeContent.portfolio?.items?.length || 0) - 1}
                        onClick={() => {
                          const items = [...(activeContent.portfolio?.items || [])];
                          const temp = items[pIdx];
                          items[pIdx] = items[pIdx + 1];
                          items[pIdx + 1] = temp;
                          setField('portfolio', 'items', items);
                        }}
                        title="Aşağı Taşı"
                      >
                        <ArrowDown size={14} />
                      </button>
                      <button 
                        type="button" 
                        className="admin-btn-icon delete" 
                        onClick={() => {
                          const updated = (activeContent.portfolio?.items || []).filter((_, idx) => idx !== pIdx);
                          setField('portfolio', 'items', updated);
                        }}
                        title="Sil"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Proje Başlığı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={proj.title || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.portfolio?.items || [])];
                        updated[pIdx] = { ...updated[pIdx], title: e.target.value };
                        setField('portfolio', 'items', updated);
                      }}
                    />
                  </div>

                  <div className="admin-grid-2">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Sektör Rozet Adı</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        placeholder="Örn: Telekomünikasyon"
                        value={proj.sectorName || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.portfolio?.items || [])];
                          updated[pIdx] = { ...updated[pIdx], sectorName: e.target.value };
                          setField('portfolio', 'items', updated);
                        }}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Filtre Sektör Kodu</label>
                      <select 
                        className="admin-select"
                        value={proj.sectorId || 'telekomunikasyon'}
                        onChange={(e) => {
                          const updated = [...(activeContent.portfolio?.items || [])];
                          updated[pIdx] = { ...updated[pIdx], sectorId: e.target.value };
                          setField('portfolio', 'items', updated);
                        }}
                      >
                        <option value="telekomunikasyon">Telekomünikasyon</option>
                        <option value="yazilim">Yazılım</option>
                        <option value="promosyon">Promosyon</option>
                        <option value="reklam">Reklam</option>
                        <option value="egitim">Eğitim</option>
                        <option value="danismanlik">Danışmanlık</option>
                      </select>
                    </div>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Başarı / Metrik Rozeti</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="Örn: 400 km Hat, %40 Verimlilik, 50.000 Kutulama"
                      value={proj.metric || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.portfolio?.items || [])];
                        updated[pIdx] = { ...updated[pIdx], metric: e.target.value };
                        setField('portfolio', 'items', updated);
                      }}
                    />
                  </div>

                  <ColorPickerField 
                    label="Rozet & Vurgu Rengi"
                    value={proj.color || '#D12F0E'}
                    onChange={(col) => {
                      const updated = [...(activeContent.portfolio?.items || [])];
                      updated[pIdx] = { ...updated[pIdx], color: col };
                      setField('portfolio', 'items', updated);
                    }}
                  />

                  <PathInputField 
                    label="Yönlendirme Linki (Tıklanınca Gidilecek Sayfa/URL)"
                    value={proj.link || '/'}
                    onChange={(val) => {
                      const updated = [...(activeContent.portfolio?.items || [])];
                      updated[pIdx] = { ...updated[pIdx], link: val };
                      setField('portfolio', 'items', updated);
                    }}
                  />

                  <ImageField 
                    label="Proje Görseli (Vercel Blob / URL)"
                    value={proj.image || ''}
                    onChange={(url) => {
                      const updated = [...(activeContent.portfolio?.items || [])];
                      updated[pIdx] = { ...updated[pIdx], image: url };
                      setField('portfolio', 'items', updated);
                    }}
                  />

                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Proje Açıklaması</label>
                    <textarea 
                      className="admin-textarea" 
                      style={{ minHeight: '70px' }}
                      value={proj.description || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.portfolio?.items || [])];
                        updated[pIdx] = { ...updated[pIdx], description: e.target.value };
                        setField('portfolio', 'items', updated);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. TAB: Ana Sayfa Ek Bölümler (Kısaca Biz, Neden Biz, CTA) */}
        {activeTab === 'homeSections' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><Sparkles size={20} /> Ana Sayfa Ek Bölümler</h2>
                <p>Ana sayfadaki "Kısaca Biz", "Neden Nima Grup (Farkımız)" ve "Alt CTA Banner" alanlarını düzenleyin.</p>
              </div>
            </div>

            {/* 1. Kısaca Biz */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#38bdf8', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} /> 1. Kısaca Biz Bölümü
              </h3>

              <div className="admin-grid-2">
                <div className="admin-form-group">
                  <label className="admin-form-label">Rozet Metni</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.kisacaBiz?.badge || ''} 
                    onChange={(e) => setField('kisacaBiz', 'badge', e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Ana Başlık</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.kisacaBiz?.title || ''} 
                    onChange={(e) => setField('kisacaBiz', 'title', e.target.value)}
                  />
                </div>
                <div className="admin-form-group full-width">
                  <label className="admin-form-label">Alt Açıklama</label>
                  <textarea 
                    className="admin-textarea" 
                    value={activeContent.kisacaBiz?.subtitle || ''} 
                    onChange={(e) => setField('kisacaBiz', 'subtitle', e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Buton Metni</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.kisacaBiz?.btnText || ''} 
                    onChange={(e) => setField('kisacaBiz', 'btnText', e.target.value)}
                  />
                </div>
                <PathInputField 
                  label="Buton Yönlendirme Linki"
                  value={activeContent.kisacaBiz?.btnLink || '/hakkimizda'}
                  onChange={(p) => setField('kisacaBiz', 'btnLink', p)}
                />
              </div>

              <h4 style={{ fontSize: '0.95rem', color: '#fff', margin: '20px 0 12px 0' }}>3 Özellik Kartı</h4>
              <div className="admin-grid-3">
                {(activeContent.kisacaBiz?.cards || []).map((card, cIdx) => (
                  <div key={card.id || cIdx} className="admin-item-card">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Kart #{cIdx + 1} Başlık</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={card.title || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.kisacaBiz?.cards || [])];
                          updated[cIdx] = { ...updated[cIdx], title: e.target.value };
                          setField('kisacaBiz', 'cards', updated);
                        }}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Açıklama</label>
                      <textarea 
                        className="admin-textarea" 
                        style={{ minHeight: '60px' }}
                        value={card.desc || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.kisacaBiz?.cards || [])];
                          updated[cIdx] = { ...updated[cIdx], desc: e.target.value };
                          setField('kisacaBiz', 'cards', updated);
                        }}
                      />
                    </div>
                    <IconPickerField 
                      label="İkon"
                      value={card.icon || 'Cpu'}
                      onChange={(ic) => {
                        const updated = [...(activeContent.kisacaBiz?.cards || [])];
                        updated[cIdx] = { ...updated[cIdx], icon: ic };
                        setField('kisacaBiz', 'cards', updated);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Farkımız / Neden Biz */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#10b981', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} /> 2. Neden Nima Grup (Farkımız) Bölümü
              </h3>

              <div className="admin-grid-2">
                <div className="admin-form-group">
                  <label className="admin-form-label">Bölüm Rozeti</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.whyUs?.badge || ''} 
                    onChange={(e) => setField('whyUs', 'badge', e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Ana Başlık</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.whyUs?.title || ''} 
                    onChange={(e) => setField('whyUs', 'title', e.target.value)}
                  />
                </div>
                <div className="admin-form-group full-width">
                  <label className="admin-form-label">Alt Açıklama</label>
                  <textarea 
                    className="admin-textarea" 
                    value={activeContent.whyUs?.subtitle || ''} 
                    onChange={(e) => setField('whyUs', 'subtitle', e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Alıntı Başlığı (Quote)</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.whyUs?.quoteTitle || ''} 
                    onChange={(e) => setField('whyUs', 'quoteTitle', e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Alıntı İmzası</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.whyUs?.quoteSubtitle || ''} 
                    onChange={(e) => setField('whyUs', 'quoteSubtitle', e.target.value)}
                  />
                </div>
              </div>

              <h4 style={{ fontSize: '0.95rem', color: '#fff', margin: '20px 0 12px 0' }}>3 Temel İlke / Fark Maddesi</h4>
              <div className="admin-grid-3">
                {(activeContent.whyUs?.items || []).map((item, iIdx) => (
                  <div key={item.id || iIdx} className="admin-item-card">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Madde #{iIdx + 1} Başlık</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={item.title || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.whyUs?.items || [])];
                          updated[iIdx] = { ...updated[iIdx], title: e.target.value };
                          setField('whyUs', 'items', updated);
                        }}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Açıklama</label>
                      <textarea 
                        className="admin-textarea" 
                        style={{ minHeight: '60px' }}
                        value={item.desc || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.whyUs?.items || [])];
                          updated[iIdx] = { ...updated[iIdx], desc: e.target.value };
                          setField('whyUs', 'items', updated);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Alt CTA Banner */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Send size={18} /> 3. Alt Eylem Çağrısı (CTA Banner)
              </h3>

              <div className="admin-grid-2">
                <div className="admin-form-group full-width">
                  <label className="admin-form-label">CTA Başlığı</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.cta?.title || ''} 
                    onChange={(e) => setField('cta', 'title', e.target.value)}
                  />
                </div>
                <div className="admin-form-group full-width">
                  <label className="admin-form-label">CTA Açıklaması</label>
                  <textarea 
                    className="admin-textarea" 
                    value={activeContent.cta?.subtitle || ''} 
                    onChange={(e) => setField('cta', 'subtitle', e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Teklif Buton Metni</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.cta?.primaryBtnText || ''} 
                    onChange={(e) => setField('cta', 'primaryBtnText', e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">İletişim Buton Metni</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={activeContent.cta?.secondaryBtnText || ''} 
                    onChange={(e) => setField('cta', 'secondaryBtnText', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 7. TAB: Referanslar & Yorumlar */}
          {activeTab === 'testimonials' && (
            <section className="admin-section-card">
              {/* References */}
              <div className="admin-section-header">
                <div>
                  <h2><Award size={20} /> Referanslar ve Güvenen Markalar</h2>
                  <p>Referans logoları, şirket adları ve tıklandığında gidilecek bağımsız web linklerini (URL) yönetin.</p>
                </div>
                <button 
                  type="button" 
                  className="admin-btn admin-btn-outline admin-btn-sm"
                  onClick={() => {
                    const newRef = {
                      id: `ref_${Date.now()}`,
                      name: 'Yeni Referans Şirketi',
                      category: 'Sektör',
                      logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
                      link: 'https://sarfea.com.tr'
                    };
                    setField('references', 'items', [...(activeContent.references?.items || []), newRef]);
                  }}
                >
                  <Plus size={13} /> Referans Ekle
                </button>
              </div>

              <div className="admin-grid-2">
                {(activeContent.references?.items || []).map((refItem, rIdx) => (
                  <div key={refItem.id || rIdx} className="admin-item-card">
                    <div className="admin-item-card-header">
                      <span className="admin-item-card-title">{refItem.name || 'Referans'}</span>
                      <button 
                        type="button" 
                        className="admin-btn-icon delete"
                        onClick={() => {
                          const updated = (activeContent.references?.items || []).filter((_, idx) => idx !== rIdx);
                          setField('references', 'items', updated);
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Kurum / Marka Adı</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={refItem.name || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.references?.items || [])];
                          updated[rIdx] = { ...updated[rIdx], name: e.target.value };
                          setField('references', 'items', updated);
                        }}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Kategori / Sektör</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={refItem.category || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.references?.items || [])];
                          updated[rIdx] = { ...updated[rIdx], category: e.target.value };
                          setField('references', 'items', updated);
                        }}
                      />
                    </div>

                    {/* Independent Target URL Field */}
                    <div className="admin-form-group">
                      <label className="admin-form-label">
                        <span>Yönlendirme Linki (URL)</span>
                        <span className="optional" style={{ color: '#10b981' }}>Tıklanınca Açılacak Link</span>
                      </label>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <input 
                          type="text" 
                          className="admin-input" 
                          placeholder="https://sarfea.com.tr"
                          value={refItem.link || 'https://sarfea.com.tr'} 
                          onChange={(e) => {
                            const updated = [...(activeContent.references?.items || [])];
                            updated[rIdx] = { ...updated[rIdx], link: e.target.value };
                            setField('references', 'items', updated);
                          }}
                        />
                        <button 
                          type="button" 
                          className="admin-btn admin-btn-outline admin-btn-sm"
                          style={{ whiteSpace: 'nowrap', fontSize: '0.75rem' }}
                          onClick={() => {
                            const updated = [...(activeContent.references?.items || [])];
                            updated[rIdx] = { ...updated[rIdx], link: 'https://sarfea.com.tr' };
                            setField('references', 'items', updated);
                          }}
                          title="sarfea.com.tr olarak ayarla"
                        >
                          sarfea.com.tr
                        </button>
                      </div>
                    </div>

                    <ImageField 
                      label="Referans Logosu"
                      value={refItem.logoUrl || ''}
                      onChange={(url) => {
                        const updated = [...(activeContent.references?.items || [])];
                        updated[rIdx] = { ...updated[rIdx], logoUrl: url };
                        setField('references', 'items', updated);
                      }}
                    />
                  </div>
                ))}
              </div>

            {/* Testimonials */}
            <div className="admin-section-header" style={{ marginTop: '36px' }}>
              <div>
                <h2><MessageSquareQuote size={20} /> Müşteri & Yönetici Yorumları</h2>
                <p>İş ortaklarının görüş ve referans bildirimleri.</p>
              </div>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => {
                  const newTestimonial = {
                    id: `test_${Date.now()}`,
                    name: 'Yeni Yönetici',
                    role: 'Pozisyon',
                    company: 'Şirket Adı',
                    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                    text: 'İş ortaklığımızdan son derece memnunuz.',
                    rating: 5
                  };
                  setField('testimonials', 'items', [...(activeContent.testimonials?.items || []), newTestimonial]);
                }}
              >
                <Plus size={13} /> Yorum Ekle
              </button>
            </div>

            {(activeContent.testimonials?.items || []).map((tItem, tIdx) => (
              <div key={tItem.id || tIdx} className="admin-item-card">
                <div className="admin-item-card-header">
                  <span className="admin-item-card-title">{tItem.name} — {tItem.company}</span>
                  <button 
                    type="button" 
                    className="admin-btn-icon delete"
                    onClick={() => {
                      const updated = (activeContent.testimonials?.items || []).filter((_, idx) => idx !== tIdx);
                      setField('testimonials', 'items', updated);
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <div className="admin-grid-3">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Ad Soyad</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={tItem.name || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.testimonials?.items || [])];
                        updated[tIdx] = { ...updated[tIdx], name: e.target.value };
                        setField('testimonials', 'items', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Pozisyon / Ünvan</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={tItem.role || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.testimonials?.items || [])];
                        updated[tIdx] = { ...updated[tIdx], role: e.target.value };
                        setField('testimonials', 'items', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Şirket / Kurum</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={tItem.company || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.testimonials?.items || [])];
                        updated[tIdx] = { ...updated[tIdx], company: e.target.value };
                        setField('testimonials', 'items', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Görüş Metni</label>
                    <textarea 
                      className="admin-textarea" 
                      value={tItem.text || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.testimonials?.items || [])];
                        updated[tIdx] = { ...updated[tIdx], text: e.target.value };
                        setField('testimonials', 'items', updated);
                      }}
                    />
                  </div>
                  <ImageField 
                    label="Avatar Görseli"
                    value={tItem.avatar || ''}
                    onChange={(url) => {
                      const updated = [...(activeContent.testimonials?.items || [])];
                      updated[tIdx] = { ...updated[tIdx], avatar: url };
                      setField('testimonials', 'items', updated);
                    }}
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {/* 6. TAB: İletişim & Footer */}
        {activeTab === 'contact' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><Phone size={20} /> İletişim ve Footer Ayarları</h2>
                <p>Telefonlar, e-postalar, açık adres, harita bağlantısı ve sosyal medya hesapları.</p>
              </div>
            </div>

            <div className="admin-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Birincil Telefon</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.contact?.phone || ''} 
                  onChange={(e) => setField('contact', 'phone', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">GSM / İkinci Telefon</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.contact?.phoneSecondary || ''} 
                  onChange={(e) => setField('contact', 'phoneSecondary', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Genel İletişim E-Postası</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.contact?.email || ''} 
                  onChange={(e) => setField('contact', 'email', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Destek E-Postası</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.contact?.emailSupport || ''} 
                  onChange={(e) => setField('contact', 'emailSupport', e.target.value)}
                />
              </div>

              <div className="admin-form-group full-width">
                <label className="admin-form-label">Genel Merkez Açık Adresi</label>
                <textarea 
                  className="admin-textarea" 
                  style={{ minHeight: '60px' }}
                  value={activeContent.contact?.address || ''} 
                  onChange={(e) => setField('contact', 'address', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Çalışma Saatleri</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.contact?.workingHours || ''} 
                  onChange={(e) => setField('contact', 'workingHours', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Google Harita Bağlantısı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.contact?.mapEmbedUrl || ''} 
                  onChange={(e) => setField('contact', 'mapEmbedUrl', e.target.value)}
                />
              </div>
            </div>

            {/* Footer Settings */}
            <div className="admin-section-header" style={{ marginTop: '28px' }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Footer ve Telif Metinleri</h3>
            </div>

            <div className="admin-grid-2">
              <div className="admin-form-group full-width">
                <label className="admin-form-label">Footer Şirket Tanıtım Metni</label>
                <textarea 
                  className="admin-textarea" 
                  value={activeContent.footer?.description || ''} 
                  onChange={(e) => setField('footer', 'description', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Telif Hakkı Metni (Copyright)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.footer?.copyright || ''} 
                  onChange={(e) => setField('footer', 'copyright', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Bülten Başlığı (Newsletter)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.footer?.newsletterTitle || ''} 
                  onChange={(e) => setField('footer', 'newsletterTitle', e.target.value)}
                />
              </div>
            </div>

            {/* Social Media Links */}
            <div className="admin-section-header" style={{ marginTop: '24px' }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>Sosyal Medya Hesapları</h3>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => {
                  const newSocial = {
                    id: `soc_${Date.now()}`,
                    name: 'Yeni Platform',
                    url: 'https://...',
                    icon: 'Globe'
                  };
                  setField('footer', 'socials', [...(activeContent.footer?.socials || []), newSocial]);
                }}
              >
                <Plus size={13} /> Sosyal Medya Ekle
              </button>
            </div>

            {(activeContent.footer?.socials || []).map((soc, sIdx) => (
              <div key={soc.id || sIdx} className="admin-nested-item" style={{ gridTemplateColumns: '150px 1fr 120px auto' }}>
                <input 
                  type="text" 
                  className="admin-input" 
                  placeholder="Platform Adı"
                  value={soc.name || ''} 
                  onChange={(e) => {
                    const updated = [...(activeContent.footer?.socials || [])];
                    updated[sIdx] = { ...updated[sIdx], name: e.target.value };
                    setField('footer', 'socials', updated);
                  }}
                />
                <input 
                  type="text" 
                  className="admin-input" 
                  placeholder="Profil URL"
                  value={soc.url || ''} 
                  onChange={(e) => {
                    const updated = [...(activeContent.footer?.socials || [])];
                    updated[sIdx] = { ...updated[sIdx], url: e.target.value };
                    setField('footer', 'socials', updated);
                  }}
                />
                <input 
                  type="text" 
                  className="admin-input" 
                  placeholder="İkon Adı"
                  value={soc.icon || ''} 
                  onChange={(e) => {
                    const updated = [...(activeContent.footer?.socials || [])];
                    updated[sIdx] = { ...updated[sIdx], icon: e.target.value };
                    setField('footer', 'socials', updated);
                  }}
                />
                <button 
                  type="button" 
                  className="admin-btn-icon delete"
                  onClick={() => {
                    const updated = (activeContent.footer?.socials || []).filter((_, idx) => idx !== sIdx);
                    setField('footer', 'socials', updated);
                  }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}

            {/* Global Offices & Representations */}
            <div className="admin-section-header" style={{ marginTop: '36px' }}>
              <div>
                <h2><Globe size={20} /> Küresel Ofisler ve Temsilcilikler</h2>
                <p>İletişim sayfasında sergilenen ulusal ve uluslararası ofis lokasyonlarını yönetin.</p>
              </div>
              <button 
                type="button" 
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => {
                  const newOffice = {
                    id: `off_${Date.now()}`,
                    city: 'Yeni Şehir',
                    badge: 'Şube',
                    name: 'Yeni Ofis Adı',
                    role: 'Departman / Hizmet Alanı',
                    address: 'Açık Adres...',
                    phone: '+90 (212) ...'
                  };
                  setField('globalOffices', 'items', [...(activeContent.globalOffices?.items || []), newOffice]);
                }}
              >
                <Plus size={13} /> Ofis Ekle
              </button>
            </div>

            <div className="admin-grid-2" style={{ marginBottom: '20px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Bölüm Üst Rozeti</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.globalOffices?.badge || ''} 
                  onChange={(e) => setField('globalOffices', 'badge', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Bölüm Ana Başlığı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.globalOffices?.title || ''} 
                  onChange={(e) => setField('globalOffices', 'title', e.target.value)}
                />
              </div>
              <div className="admin-form-group full-width">
                <label className="admin-form-label">Bölüm Alt Açıklaması</label>
                <textarea 
                  className="admin-textarea" 
                  value={activeContent.globalOffices?.subtitle || ''} 
                  onChange={(e) => setField('globalOffices', 'subtitle', e.target.value)}
                />
              </div>
            </div>

            <div className="admin-grid-2">
              {(activeContent.globalOffices?.items || []).map((off, oIdx) => (
                <div key={off.id || oIdx} className="admin-item-card">
                  <div className="admin-item-card-header">
                    <span className="admin-item-card-title">{off.city || 'Şehir'} — {off.name || 'Ofis'}</span>
                    <button 
                      type="button" 
                      className="admin-btn-icon delete"
                      onClick={() => {
                        const updated = (activeContent.globalOffices?.items || []).filter((_, idx) => idx !== oIdx);
                        setField('globalOffices', 'items', updated);
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="admin-grid-2">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Şehir / Ülke</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={off.city || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.globalOffices?.items || [])];
                          updated[oIdx] = { ...updated[oIdx], city: e.target.value };
                          setField('globalOffices', 'items', updated);
                        }}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Rozet (örn: Genel Merkez)</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={off.badge || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.globalOffices?.items || [])];
                          updated[oIdx] = { ...updated[oIdx], badge: e.target.value };
                          setField('globalOffices', 'items', updated);
                        }}
                      />
                    </div>
                  </div>
                  <div className="admin-grid-2">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Ofis / Bina Adı</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={off.name || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.globalOffices?.items || [])];
                          updated[oIdx] = { ...updated[oIdx], name: e.target.value };
                          setField('globalOffices', 'items', updated);
                        }}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Telefon Numarası</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={off.phone || ''} 
                        onChange={(e) => {
                          const updated = [...(activeContent.globalOffices?.items || [])];
                          updated[oIdx] = { ...updated[oIdx], phone: e.target.value };
                          setField('globalOffices', 'items', updated);
                        }}
                      />
                    </div>
                  </div>
                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Departman / Rol Tanımı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={off.role || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.globalOffices?.items || [])];
                        updated[oIdx] = { ...updated[oIdx], role: e.target.value };
                        setField('globalOffices', 'items', updated);
                      }}
                    />
                  </div>
                  <div className="admin-form-group full-width">
                    <label className="admin-form-label">Açık Adres</label>
                    <textarea 
                      className="admin-textarea" 
                      style={{ minHeight: '50px' }}
                      value={off.address || ''} 
                      onChange={(e) => {
                        const updated = [...(activeContent.globalOffices?.items || [])];
                        updated[oIdx] = { ...updated[oIdx], address: e.target.value };
                        setField('globalOffices', 'items', updated);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Inquiry Modal Settings */}
            <div className="admin-section-header" style={{ marginTop: '36px' }}>
              <div>
                <h2><MessageSquarePlus size={20} /> "Teklif Al" Modalı Metinleri</h2>
                <p>Ziyaretçiler "Teklif Al" butonuna bastığında açılan penceredeki metinleri düzenleyin.</p>
              </div>
            </div>

            <div className="admin-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Modal Üst Rozeti</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.inquiryModal?.badge || ''} 
                  onChange={(e) => setField('inquiryModal', 'badge', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Modal Ana Başlığı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.inquiryModal?.title || ''} 
                  onChange={(e) => setField('inquiryModal', 'title', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Başarılı Gönderim Başlığı</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.inquiryModal?.successTitle || ''} 
                  onChange={(e) => setField('inquiryModal', 'successTitle', e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Başarılı Gönderim Açıklaması</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={activeContent.inquiryModal?.successDesc || ''} 
                  onChange={(e) => setField('inquiryModal', 'successDesc', e.target.value)}
                />
              </div>
            </div>
          </section>
        )}

        {/* TAB: Diller & Sözlük / Language & Translations */}
        {activeTab === 'translations' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><Globe size={20} /> {tUi('trans_tab_title')}</h2>
                <p>{tUi('trans_tab_subtitle')}</p>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div className="admin-filter-box">
                  <Search size={15} />
                  <input 
                    type="text" 
                    className="admin-input" 
                    placeholder={tUi('trans_search')}
                    value={dictSearch}
                    onChange={(e) => setDictSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="admin-translations-table-wrapper">
              <table className="admin-translations-table">
                <thead>
                  <tr>
                    <th style={{ width: '240px' }}>{tUi('trans_key_col')}</th>
                    <th style={{ width: '38%' }}>{tUi('trans_tr_col')}</th>
                    <th style={{ width: '38%' }}>{tUi('trans_en_col')}</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(translations.tr || {})
                    .filter((key) => {
                      if (!dictSearch.trim()) return true;
                      const q = dictSearch.toLowerCase();
                      const valTr = (translations.tr[key] || '').toLowerCase();
                      const valEn = (translations.en[key] || '').toLowerCase();
                      return key.toLowerCase().includes(q) || valTr.includes(q) || valEn.includes(q);
                    })
                    .map((key) => (
                      <tr key={key}>
                        <td className="admin-key-cell">{key}</td>
                        <td>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={translations.tr?.[key] || ''} 
                            onChange={(e) => {
                              updateTranslation('tr', key, e.target.value);
                              setHasUnsavedChanges(true);
                            }}
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={translations.en?.[key] || ''} 
                            onChange={(e) => {
                              updateTranslation('en', key, e.target.value);
                              setHasUnsavedChanges(true);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 7. TAB: Medya Kütüphanesi */}
        {activeTab === 'media' && (
          <section className="admin-section-card">
            <div className="admin-section-header">
              <div>
                <h2><ImageIcon size={20} /> Medya Kütüphanesi & Vercel Blob</h2>
                <p>Doğrudan bilgisayarınızdan Vercel Blob bulutuna görsel yükleyin ve anında genel CDN URL’i elde edin.</p>
              </div>
            </div>

            <div className="admin-grid-2">
              <ImageField 
                label="Genel Logo & Marka Varlığı"
                value={activeContent.images?.logoUrl || ''}
                onChange={(url) => setField('images', 'logoUrl', url)}
              />
              <ImageField 
                label="Hero Ana Arka Plan Görseli"
                value={activeContent.images?.heroBg || ''}
                onChange={(url) => setField('images', 'heroBg', url)}
              />
              <ImageField 
                label="Hakkımızda Banner Görseli"
                value={activeContent.images?.aboutImg || ''}
                onChange={(url) => setField('images', 'aboutImg', url)}
              />
              <ImageField 
                label="İletişim Banner Görseli"
                value={activeContent.images?.contactImg || ''}
                onChange={(url) => setField('images', 'contactImg', url)}
              />
            </div>
          </section>
        )}

        {/* 8. TAB: Yedekleme & Gelişmiş */}
        {activeTab === 'advanced' && (
          <section className="admin-section-card">
            {/* 1. System Health & Infrastructure Bento Grid */}
            <div className="admin-section-header">
              <div>
                <h2><Zap size={20} /> {tUi('sys_health_title')}</h2>
                <p>{tUi('sys_health_subtitle')}</p>
              </div>
            </div>

            <div className="admin-health-grid">
              <div className="admin-health-card">
                <div className="admin-health-icon blue">
                  <FileJson size={22} />
                </div>
                <div className="admin-health-info">
                  <span className="admin-health-label">{tUi('sys_stat_size')}</span>
                  <span className="admin-health-val">~{(new Blob([JSON.stringify(content)]).size / 1024).toFixed(1)} KB</span>
                </div>
              </div>

              <div className="admin-health-card">
                <div className="admin-health-icon green">
                  <Layers size={22} />
                </div>
                <div className="admin-health-info">
                  <span className="admin-health-label">{tUi('sys_stat_sections')}</span>
                  <span className="admin-health-val">{Object.keys(content || {}).length} Aktif Bölüm</span>
                </div>
              </div>

              <div className="admin-health-card">
                <div className="admin-health-icon orange">
                  <Globe size={22} />
                </div>
                <div className="admin-health-info">
                  <span className="admin-health-label">{tUi('sys_stat_languages')}</span>
                  <span className="admin-health-val">🇹🇷 TR & 🇬🇧 EN</span>
                </div>
              </div>

              <div className="admin-health-card">
                <div className="admin-health-icon purple">
                  <ShieldCheck size={22} />
                </div>
                <div className="admin-health-info">
                  <span className="admin-health-label">{tUi('sys_stat_storage')}</span>
                  <span className="admin-health-val">Bulut & LocalStorage</span>
                </div>
              </div>
            </div>

            {/* 2. SEO & Global Site Settings */}
            <div className="admin-action-box">
              <div className="admin-action-box-header">
                <div>
                  <h3><Sparkles size={16} /> {tUi('seo_title')}</h3>
                  <p>{tUi('seo_subtitle')}</p>
                </div>
              </div>

              <div className="admin-grid-2">
                <div className="admin-form-group">
                  <label className="admin-form-label">{tUi('seo_site_title')}</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    placeholder="NİMA GRUP | Telekomünikasyon, Yazılım & İnovasyon"
                    value={activeContent.seo?.metaTitle || ''} 
                    onChange={(e) => setField('seo', 'metaTitle', e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">{tUi('seo_gtm_id')}</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    placeholder="G-XXXXXXXXXX veya GTM-XXXXXXX"
                    value={activeContent.seo?.gtmId || ''} 
                    onChange={(e) => setField('seo', 'gtmId', e.target.value)}
                  />
                </div>

                <div className="admin-form-group full-width">
                  <label className="admin-form-label">{tUi('seo_meta_desc')}</label>
                  <textarea 
                    className="admin-textarea" 
                    style={{ minHeight: '60px' }}
                    placeholder="Türkiye ve dünyada telekomünikasyon, yazılım ve kurumsal çözümler sunan öncü ekosistem."
                    value={activeContent.seo?.metaDescription || ''} 
                    onChange={(e) => setField('seo', 'metaDescription', e.target.value)}
                  />
                </div>

                <div className="admin-form-group full-width">
                  <label className="admin-form-label">{tUi('seo_keywords')}</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    placeholder="telekom, fiber optik, yazılım, açık hava reklam, yönetim danışmanlığı"
                    value={activeContent.seo?.keywords || ''} 
                    onChange={(e) => setField('seo', 'keywords', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* 3. Password Management & Security */}
            <div className="admin-action-box">
              <div className="admin-action-box-header">
                <div>
                  <h3><Lock size={16} /> {tUi('sec_title')}</h3>
                  <p>{tUi('sec_subtitle')}</p>
                </div>
              </div>

              <div className="admin-grid-2">
                <div className="admin-form-group">
                  <label className="admin-form-label">{tUi('sec_current_pwd')}</label>
                  <div className="admin-password-group" style={{ margin: 0 }}>
                    <input 
                      type={showPasswordFields ? 'text' : 'password'} 
                      className="admin-input" 
                      disabled
                      value={content.security?.adminPassword || 'nima2026!'} 
                    />
                    <button 
                      type="button" 
                      className="admin-password-toggle"
                      onClick={() => setShowPasswordFields(!showPasswordFields)}
                      title={showPasswordFields ? tUi('hide') : tUi('show')}
                    >
                      {showPasswordFields ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">{tUi('sec_new_pwd')}</label>
                  <input 
                    type={showPasswordFields ? 'text' : 'password'} 
                    className="admin-input" 
                    placeholder={tUi('sec_pwd_placeholder')}
                    value={newAdminPassword}
                    onChange={(e) => setNewAdminPassword(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">{tUi('sec_confirm_pwd')}</label>
                  <input 
                    type={showPasswordFields ? 'text' : 'password'} 
                    className="admin-input" 
                    placeholder={tUi('sec_confirm_placeholder')}
                    value={confirmAdminPassword}
                    onChange={(e) => setConfirmAdminPassword(e.target.value)}
                  />
                </div>

                <div className="admin-form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <button 
                    type="button" 
                    className="admin-btn admin-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={!newAdminPassword.trim()}
                    onClick={() => {
                      if (newAdminPassword.length < 6) {
                        alert(tUi('sec_pwd_short'));
                        return;
                      }
                      if (newAdminPassword !== confirmAdminPassword) {
                        alert(tUi('sec_pwd_mismatch'));
                        return;
                      }
                      setField('security', 'adminPassword', newAdminPassword.trim());
                      setNewAdminPassword('');
                      setConfirmAdminPassword('');
                      showToast(tUi('sec_updated_success'), 'success');
                    }}
                  >
                    <Key size={14} /> {tUi('sec_update_btn')}
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Backup & Recovery Action Center */}
            <div className="admin-action-box">
              <div className="admin-action-box-header">
                <div>
                  <h3><FileJson size={16} /> {tUi('backup_title')}</h3>
                  <p>{tUi('backup_subtitle')}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button type="button" className="admin-btn admin-btn-outline" onClick={handleExportJSON}>
                  <Download size={15} /> {tUi('backup_export_btn')}
                </button>

                <label className="admin-btn admin-btn-outline" style={{ cursor: 'pointer', margin: 0 }}>
                  <Upload size={15} /> {tUi('backup_import_btn')}
                  <input 
                    type="file" 
                    accept=".json" 
                    ref={fileImportRef}
                    style={{ display: 'none' }} 
                    onChange={handleImportJSON} 
                  />
                </label>

                <button 
                  type="button" 
                  className="admin-btn admin-btn-outline"
                  onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
                    setJsonCopied(true);
                    showToast(tUi('backup_copied_btn'), 'success');
                    setTimeout(() => setJsonCopied(false), 3000);
                  }}
                >
                  <Copy size={15} /> {jsonCopied ? tUi('backup_copied_btn') : tUi('backup_copy_btn')}
                </button>

                <button 
                  type="button" 
                  className="admin-btn admin-btn-danger" 
                  onClick={() => setShowResetModal(true)}
                >
                  <RefreshCw size={15} /> {tUi('backup_reset_btn')}
                </button>
              </div>
            </div>

            {/* 5. Optional Developer JSON Code Inspector (Accordion) */}
            <div className="admin-json-drawer">
              <div 
                className="admin-json-drawer-header" 
                onClick={() => setShowJsonInspector(!showJsonInspector)}
              >
                <span>
                  <FileJson size={16} color="#38bdf8" />
                  {tUi('backup_inspect_toggle')}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)' }}>
                  {showJsonInspector ? tUi('backup_inspect_hide') : tUi('backup_inspect_show')} {showJsonInspector ? '▲' : '▼'}
                </span>
              </div>

              {showJsonInspector && (
                <div className="admin-json-code-box">
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {JSON.stringify(content, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Protected Factory Reset Confirmation Modal */}
      {showResetModal && (
        <div className="admin-confirm-overlay" onClick={() => setShowResetModal(false)}>
          <div className="admin-confirm-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-confirm-icon">
              <AlertCircle size={28} />
            </div>
            <h3>{tUi('backup_reset_confirm_title')}</h3>
            <p>{tUi('backup_reset_confirm_desc')}</p>
            <div className="admin-confirm-actions">
              <button 
                type="button" 
                className="admin-btn admin-btn-outline" 
                onClick={() => setShowResetModal(false)}
              >
                {tUi('backup_reset_cancel')}
              </button>
              <button 
                type="button" 
                className="admin-btn admin-btn-danger" 
                onClick={() => {
                  resetToDefault();
                  setHasUnsavedChanges(true);
                  setShowResetModal(false);
                  showToast('Tüm veriler fabrika ayarlarına sıfırlandı.', 'info');
                }}
              >
                <RefreshCw size={14} /> {tUi('backup_reset_proceed')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Datalist for Quick Path Autocomplete */}
      <datalist id="page-paths-list">
        {PAGE_PRESETS.map((p) => (
          <option key={p.path} value={p.path}>{p.label}</option>
        ))}
      </datalist>

      {/* Persistent Sticky Action Bar */}
      <aside className="admin-sticky-bar">
        <div className="admin-sticky-status">
          <span className={`admin-sticky-dot ${hasUnsavedChanges ? 'dirty' : 'clean'}`} />
          <span>
            {hasUnsavedChanges 
              ? 'Kaydedilmemiş Değişiklikler Var' 
              : `Tüm Değişiklikler Kaydedildi ${lastSavedAt ? `(${new Date(lastSavedAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })})` : ''}`}
          </span>
        </div>

        <div className="admin-sticky-actions">
          <button 
            type="button" 
            className="admin-btn admin-btn-outline admin-btn-sm"
            onClick={() => setShowPreviewModal(true)}
            title="Canlı Cihaz Önizlemesi Aç"
          >
            <Eye size={13} /> Canlı Önizle
          </button>

          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="admin-btn admin-btn-outline admin-btn-sm"
            title="Siteyi Yeni Sekmede Aç"
          >
            <ExternalLink size={13} /> Siteyi Gör
          </a>

          <button 
            type="button"
            className="admin-btn admin-btn-primary admin-btn-sm" 
            onClick={handleSave} 
            disabled={isSaving}
          >
            <Save size={13} />
            {isSaving ? 'Kaydediliyor...' : 'Kaydet (Ctrl+S)'}
          </button>
        </div>
      </aside>

      {/* Live Interactive Desktop Preview Modal */}
      {showPreviewModal && (
        <div className="admin-preview-backdrop" onClick={() => setShowPreviewModal(false)}>
          <div className="admin-preview-header" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.92rem' }}>
                <Monitor size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                {tUi('live_preview')} (Masaüstü)
              </span>
              <select 
                className="admin-input" 
                style={{ width: 'auto', padding: '4px 10px', fontSize: '0.8rem', height: '32px' }}
                value={previewPath}
                onChange={(e) => setPreviewPath(e.target.value)}
              >
                <option value="/">Ana Sayfa</option>
                <option value="/hakkimizda">Hakkımızda</option>
                <option value="/telekomunikasyon">Telekomünikasyon Sektörü</option>
                <option value="/yazilim">Yazılım ve Teknoloji</option>
                <option value="/promosyon">Promosyon & Medya</option>
                <option value="/reklam">Açık Hava Reklam</option>
                <option value="/egitim">Eğitim & Danışmanlık</option>
                <option value="/danismanlik">Yönetim Danışmanlığı</option>
                <option value="/iletisim">İletişim & Lokasyonlar</option>
              </select>
            </div>

            <button 
              type="button" 
              className="admin-btn-icon" 
              onClick={() => setShowPreviewModal(false)}
              title={tUi('preview_close') || 'Önizlemeyi Kapat'}
            >
              <X size={18} />
            </button>
          </div>

          <div className="admin-preview-body" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={previewPath} 
              title="Canlı Önizleme" 
              className="admin-preview-frame desktop"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Admin() {
  return (
    <AdminErrorBoundary>
      <AdminMain />
    </AdminErrorBoundary>
  );
}
