import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { sectors, companyInfo } from '../data/sectors';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const currentSectorPath = location.pathname.split('/')[1];
  const activeSector = sectors.find(s => s.path === `/${currentSectorPath}`);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand">
              NIMA GRUP.
            </Link>
            <p className="footer-desc">
              {activeSector ? activeSector.description : companyInfo.description}
            </p>
          </div>
          
          <div className="footer-links-col">
            <div className="footer-nav">
              <h4 className="footer-heading">Navigasyon</h4>
              <Link to="/">Ana Sayfa</Link>
              <Link to="/hakkimizda">Şirket</Link>
              <Link to="/iletisim">İletişim</Link>
            </div>
            
            <div className="footer-nav">
              <h4 className="footer-heading">Sektörler</h4>
              {sectors.slice(0,4).map(s => (
                <Link key={s.id} to={s.path}>{s.shortName}</Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-contact">
            <span><MapPin size={16}/> {companyInfo.address}</span>
            <span><Phone size={16}/> {companyInfo.phone}</span>
            <span><Mail size={16}/> {companyInfo.email}</span>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Nima Grup. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
