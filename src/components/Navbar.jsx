import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, MessageSquarePlus, Sun, Moon, Globe, 
  Radio, Cpu, Sparkles, Layers, Compass, ShieldCheck, ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { getSectors } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import './Navbar.css';

// Icon mapper for dynamic icons configured in admin panel
const ICON_MAP = {
  Radio,
  Cpu,
  Sparkles,
  Layers,
  Compass,
  ShieldCheck,
  Globe
};

export default function Navbar({ onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const { content } = useContent();

  const localizedSectors = getSectors(language);
  const navData = content?.navigation || {};
  let navItems = navData.items;

  // Fallback to default items if empty
  if (!navItems || navItems.length === 0) {
    navItems = [
      { id: 'home', title: t('nav_home') || 'Ana Sayfa', path: '/', badge: '', hasChildren: false, children: [] },
      { id: 'about', title: t('nav_about') || 'Hakkımızda', path: '/hakkimizda', badge: '', hasChildren: false, children: [] },
      { 
        id: 'sectors', 
        title: t('nav_sectors') || 'Sektörlerimiz', 
        path: '/#sectors', 
        badge: t('nav_sectors_header') || '6 Sektör', 
        hasChildren: true,
        children: localizedSectors.map(s => ({
          id: s.id,
          title: s.shortName || s.name,
          path: s.path,
          badge: s.badge,
          icon: s.id === 'telekomunikasyon' ? 'Radio' : s.id === 'yazilim' ? 'Cpu' : s.id === 'promosyon' ? 'Sparkles' : s.id === 'reklam' ? 'Layers' : s.id === 'egitim' ? 'Compass' : 'ShieldCheck',
          color: s.color
        }))
      },
      { id: 'contact', title: t('nav_contact') || 'İletişim', path: '/iletisim', badge: '', hasChildren: false, children: [] }
    ];
  }

  // Guarantee sectors dropdown is always present in items
  const hasSectors = navItems.some(i => i.id === 'sectors' || i.hasChildren || i.path?.includes('sectors'));
  if (!hasSectors) {
    const sectorsItem = {
      id: 'sectors',
      title: t('nav_sectors') || 'Sektörlerimiz',
      path: '/#sectors',
      badge: '6 Sektör',
      hasChildren: true,
      children: localizedSectors.map(s => ({
        id: s.id,
        title: s.shortName || s.name,
        path: s.path,
        badge: s.badge,
        icon: s.id === 'telekomunikasyon' ? 'Radio' : s.id === 'yazilim' ? 'Cpu' : s.id === 'promosyon' ? 'Sparkles' : s.id === 'reklam' ? 'Layers' : s.id === 'egitim' ? 'Compass' : 'ShieldCheck',
        color: s.color
      }))
    };
    const contactIdx = navItems.findIndex(i => i.id === 'contact' || i.path === '/iletisim');
    if (contactIdx >= 0) {
      navItems = [...navItems.slice(0, contactIdx), sectorsItem, ...navItems.slice(contactIdx)];
    } else {
      navItems = [...navItems, sectorsItem];
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  const renderIcon = (iconName, fallback = Sparkles) => {
    const IconComp = ICON_MAP[iconName] || fallback;
    return IconComp;
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            {navData.logoUrl ? (
              <img src={navData.logoUrl} alt={navData.brandName || 'Logo'} style={{ height: '36px', objectFit: 'contain' }} />
            ) : (
              <span className="brand-logo-mark">{navData.brandLogoMark || 'N'}</span>
            )}
            <span className="brand-text">{navData.brandName || 'NIMA GRUP.'}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="desktop-menu">
            {navItems.map((item) => {
              const hasChildren = item.hasChildren || (item.children && item.children.length > 0);

              if (hasChildren) {
                const subItems = (item.children && item.children.length > 0)
                  ? item.children
                  : localizedSectors.map(s => ({
                      id: s.id,
                      title: s.shortName || s.name,
                      path: s.path,
                      badge: s.badge,
                      icon: s.id === 'telekomunikasyon' ? 'Radio' : s.id === 'yazilim' ? 'Cpu' : s.id === 'promosyon' ? 'Sparkles' : s.id === 'reklam' ? 'Layers' : s.id === 'egitim' ? 'Compass' : 'ShieldCheck',
                      color: s.color
                    }));

                return (
                  <div className="dropdown" key={item.id || item.title}>
                    <Link 
                      to={item.path || '/#sectors'} 
                      className={`dropdown-toggle nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                    >
                      {item.title} <ChevronDown size={14} />
                    </Link>
                    
                    <div className="dropdown-menu">
                      <div className="dropdown-header">{item.badge || item.title}</div>
                      {subItems.map((subItem) => {
                        const SIcon = renderIcon(subItem.icon, Layers);
                        return (
                          <Link 
                            key={subItem.id || subItem.path} 
                            to={subItem.path} 
                            className="dropdown-item"
                            onClick={() => setIsOpen(false)}
                          >
                            <div 
                              className="drop-icon" 
                              style={{ 
                                background: subItem.color ? `${subItem.color}15` : 'rgba(209, 47, 14, 0.1)', 
                                color: subItem.color || '#D12F0E' 
                              }}
                            >
                              <SIcon size={16} />
                            </div>
                            <div className="drop-info">
                              <span className="drop-title">{subItem.title}</span>
                              {subItem.badge && <span className="drop-badge">{subItem.badge}</span>}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link 
                  key={item.id || item.path}
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions">
            {/* Language Switcher */}
            <button 
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Koyu Temaya Geç' : 'Açık Temaya Geç'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Quick Proposal Button */}
            <button 
              className="btn-modern btn-dark nav-proposal-btn"
              onClick={() => onOpenProposal()}
            >
              <MessageSquarePlus size={16} />
              <span>{t('nav_proposal')}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menü">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{navData.brandName || 'NIMA GRUP.'}</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="lang-toggle-btn" onClick={toggleLanguage}>
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>

          {navItems.map((item) => {
            const hasChildren = item.hasChildren || (item.children && item.children.length > 0);

            if (hasChildren) {
              const subItems = (item.children && item.children.length > 0)
                ? item.children
                : localizedSectors.map(s => ({
                    id: s.id,
                    title: s.shortName || s.name,
                    path: s.path,
                    badge: s.badge,
                    icon: s.id === 'telekomunikasyon' ? 'Radio' : s.id === 'yazilim' ? 'Cpu' : s.id === 'promosyon' ? 'Sparkles' : s.id === 'reklam' ? 'Layers' : s.id === 'egitim' ? 'Compass' : 'ShieldCheck',
                    color: s.color
                  }));

              return (
                <div key={item.id || item.path} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '6px' }}>
                  <span className="mobile-nav-title">{item.title}</span>
                  {subItems.map((subItem) => {
                    const SIcon = renderIcon(subItem.icon, Layers);
                    return (
                      <Link 
                        key={subItem.id || subItem.path} 
                        to={subItem.path} 
                        className="mobile-nav-sublink"
                        onClick={() => setIsOpen(false)}
                      >
                        <SIcon size={18} style={{ color: subItem.color || '#D12F0E' }} />
                        <span>{subItem.title}</span>
                      </Link>
                    );
                  })}
                </div>
              );
            }

            return (
              <Link 
                key={item.id || item.path}
                to={item.path} 
                className="mobile-nav-link" 
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}

          <button 
            className="btn-modern btn-dark" 
            style={{ width: '100%', marginTop: '1.25rem' }}
            onClick={() => { setIsOpen(false); onOpenProposal(); }}
          >
            {t('nav_quick_proposal')}
          </button>
        </div>
      </div>
    </>
  );
}
