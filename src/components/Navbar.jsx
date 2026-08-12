import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, MessageSquarePlus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { sectors } from '../data/sectors';
import './Navbar.css';

export default function Navbar({ onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Ana Sayfa</Link>
            
            <div className="dropdown">
              <button className="dropdown-toggle">
                Sektörler <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-header">FAALİYET ALANLARIMIZ</div>
                {sectors.map((sector) => {
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
            
            <Link to="/hakkimizda" className={`nav-link ${location.pathname === '/hakkimizda' ? 'active' : ''}`}>Şirket</Link>
            <Link to="/iletisim" className={`nav-link ${location.pathname === '/iletisim' ? 'active' : ''}`}>İletişim</Link>
          </div>

          <div className="nav-actions">
            <button 
              className="btn-modern btn-dark nav-proposal-btn"
              onClick={() => onOpenProposal()}
            >
              <MessageSquarePlus size={16} />
              <span>Teklif Al</span>
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
          <Link to="/" className="mobile-nav-link">Ana Sayfa</Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span className="mobile-nav-title">FAALİYET ALANLARI</span>
            {sectors.map((sector) => {
              const SIcon = sector.icon;
              return (
                <Link key={sector.id} to={sector.path} className="mobile-nav-sublink">
                  <SIcon size={18} style={{ color: sector.color }} />
                  <span>{sector.name}</span>
                </Link>
              );
            })}
          </div>
          <Link to="/hakkimizda" className="mobile-nav-link">Şirket</Link>
          <Link to="/iletisim" className="mobile-nav-link">İletişim</Link>

          <button 
            className="btn-modern btn-dark" 
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={() => { setIsOpen(false); onOpenProposal(); }}
          >
            Hızlı Proje Teklifi Al
          </button>
        </div>
      </div>
    </>
  );
}
