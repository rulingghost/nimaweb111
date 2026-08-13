import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Globe, Share2, MessageCircle, Send, Check } from 'lucide-react';
import { getSectors, getCompanyInfo } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const localizedSectors = getSectors(language);
  const localizedCompany = getCompanyInfo(language);

  const currentSectorPath = location.pathname.split('/')[1];
  const activeSector = localizedSectors.find(s => s.path === `/${currentSectorPath}`);
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
            <h3>{language === 'en' ? 'Join Our Sector Innovation Newsletter' : 'Sektörel İnovasyon Bültenimize Katılın'}</h3>
            <p>{language === 'en' ? 'Latest reports from technology, telecom, and management directly in your inbox.' : 'Teknoloji, telekomünikasyon ve yönetim dünyasından güncel raporlar doğrudan e-postanızda.'}</p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            {subscribed ? (
              <div className="newsletter-success">
                <Check size={18} /> {language === 'en' ? 'Successfully subscribed to newsletter!' : 'Bültene başarıyla kaydoldunuz!'}
              </div>
            ) : (
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  required
                  placeholder={language === 'en' ? 'Your email address...' : 'E-posta adresiniz...'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-btn">
                  {language === 'en' ? 'Subscribe' : 'Abone Ol'} <ArrowRight size={16} />
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
              {activeSector ? activeSector.description : localizedCompany.description}
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
              <h4 className="footer-heading">{t('footer_title_corp')}</h4>
              <Link to="/">{t('nav_home')}</Link>
              <Link to="/hakkimizda">{t('nav_about')}</Link>
              <Link to="/iletisim">{t('nav_contact')}</Link>
            </div>
            
            <div className="footer-nav">
              <h4 className="footer-heading">{t('footer_title_sectors')}</h4>
              {localizedSectors.map(s => (
                <Link key={s.id} to={s.path}>{s.name}</Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-contact">
            <span><MapPin size={16}/> {localizedCompany.address}</span>
            <span><Phone size={16}/> {localizedCompany.phone}</span>
            <span><Mail size={16}/> {localizedCompany.email}</span>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Nima Grup Holding. {t('footer_rights')} ISO 9001 / 27001 Certified.
          </div>
        </div>
      </div>
    </footer>
  );
}
