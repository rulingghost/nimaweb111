import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { sectors } from '../data/sectors';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">NIMA GRUP.</span>
          </Link>

          <div className="desktop-menu">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Ana Sayfa</Link>
            
            <div className="dropdown">
              <button className="dropdown-toggle">
                Sektörler <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu">
                {sectors.map((sector) => (
                  <Link key={sector.id} to={sector.path} className="dropdown-item">
                    <sector.icon size={16} style={{ color: sector.color }} />
                    {sector.shortName}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/hakkimizda" className={`nav-link ${location.pathname === '/hakkimizda' ? 'active' : ''}`}>Şirket</Link>
            <Link to="/iletisim" className={`nav-link ${location.pathname === '/iletisim' ? 'active' : ''}`}>İletişim</Link>
          </div>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <Link to="/" className="mobile-nav-link">Ana Sayfa</Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="mobile-nav-title">Sektörler</span>
            {sectors.map((sector) => (
              <Link key={sector.id} to={sector.path} className="mobile-nav-sublink">
                <sector.icon size={18} style={{ color: sector.color }} />
                {sector.name}
              </Link>
            ))}
          </div>
          <Link to="/hakkimizda" className="mobile-nav-link">Şirket</Link>
          <Link to="/iletisim" className="mobile-nav-link">İletişim</Link>
        </div>
      </div>
    </>
  );
}
