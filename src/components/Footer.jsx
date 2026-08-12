import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe, Share2, MessageCircle, Send, Check } from 'lucide-react';
import { sectors, companyInfo } from '../data/sectors';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const currentSectorPath = location.pathname.split('/')[1];
  const activeSector = sectors.find(s => s.path === `/${currentSectorPath}`);
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Bar */}
        <div className="footer-newsletter-box">
          <div className="newsletter-text">
            <h3>Sektörel İnovasyon Bültenimize Katılın</h3>
            <p>Teknoloji, telekomünikasyon ve yönetim dünyasından güncel raporlar doğrudan e-postanızda.</p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            {subscribed ? (
              <div className="newsletter-success">
                <Check size={18} /> Bültene başarıyla kaydoldunuz!
              </div>
            ) : (
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  required
                  placeholder="E-posta adresiniz..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-btn">
                  Abone Ol <ArrowRight size={16} />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Footer Content */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand">
              <span className="footer-logo-mark">N</span>
              <span>NIMA GRUP.</span>
            </Link>
            <p className="footer-desc">
              {activeSector ? activeSector.description : companyInfo.description}
            </p>

            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Share2 size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><MessageCircle size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Send size={18} /></a>
            </div>
          </div>
          
          <div className="footer-links-col">
            <div className="footer-nav">
              <h4 className="footer-heading">Kurumsal Navigasyon</h4>
              <Link to="/">Ana Sayfa</Link>
              <Link to="/hakkimizda">Şirket Profili & Tarihçe</Link>
              <Link to="/iletisim">İletişim & Konum</Link>
            </div>
            
            <div className="footer-nav">
              <h4 className="footer-heading">Faaliyet Alanlarımız</h4>
              {sectors.map(s => (
                <Link key={s.id} to={s.path}>{s.name}</Link>
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
            &copy; {new Date().getFullYear()} Nima Grup Holding. Tüm hakları saklıdır. ISO 9001 / 27001 Certified.
          </div>
        </div>
      </div>
    </footer>
  );
}
