import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, MessageSquarePlus, Sun, Moon, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getSectors } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar({ onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const localizedSectors = getSectors(language);

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

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            <span className="brand-logo-mark">N</span>
            <span className="brand-text">NIMA GRUP.</span>
          </Link>

          <div className="desktop-menu">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>{t('nav_home')}</Link>
            
            <div className="dropdown">
              <button className="dropdown-toggle">
                {t('nav_sectors')} <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-header">{t('nav_sectors_header')}</div>
                {localizedSectors.map((sector) => {
                  const SIcon = sector.icon;
                  return (
                    <Link key={sector.id} to={sector.path} className="dropdown-item">
                      <div className="drop-icon" style={{ background: sector.lightColor, color: sector.color }}>
                        <SIcon size={16} />
                      </div>
                      <div className="drop-info">
                        <span className="drop-title">{sector.shortName}</span>
                        <span className="drop-badge">{sector.badge}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <Link to="/hakkimizda" className={`nav-link ${location.pathname === '/hakkimizda' ? 'active' : ''}`}>{t('nav_about')}</Link>
            <Link to="/iletisim" className={`nav-link ${location.pathname === '/iletisim' ? 'active' : ''}`}>{t('nav_contact')}</Link>
          </div>

          <div className="nav-actions">
            {/* Language Switcher Pill */}
            <button 
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle Switch */}
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Koyu Temaya Geç' : 'Açık Temaya Geç'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button 
              className="btn-modern btn-dark nav-proposal-btn"
              onClick={() => onOpenProposal()}
            >
              <MessageSquarePlus size={16} />
              <span>{t('nav_proposal')}</span>
            </button>

            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menü">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/" className="mobile-nav-link">{t('nav_home')}</Link>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span className="mobile-nav-title">{t('nav_sectors_header')}</span>
            {localizedSectors.map((sector) => {
              const SIcon = sector.icon;
              return (
                <Link key={sector.id} to={sector.path} className="mobile-nav-sublink">
                  <SIcon size={18} style={{ color: sector.color }} />
                  <span>{sector.name}</span>
                </Link>
              );
            })}
          </div>
          <Link to="/hakkimizda" className="mobile-nav-link">{t('nav_about')}</Link>
          <Link to="/iletisim" className="mobile-nav-link">{t('nav_contact')}</Link>

          <button 
            className="btn-modern btn-dark" 
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={() => { setIsOpen(false); onOpenProposal(); }}
          >
            {t('nav_quick_proposal')}
          </button>
        </div>
      </div>
    </>
  );
}
