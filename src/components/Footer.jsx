import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Globe, Share2, MessageCircle, Send, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import './Footer.css';

const SOCIAL_ICON_MAP = {
  Globe,
  Share2,
  MessageCircle,
  Send
};

export default function Footer() {
  const { language, t } = useLanguage();
  const { content } = useContent();
  const location = useLocation();
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const navData = content?.navigation || {};
  const contactData = content?.contact || {};
  const footerData = content?.footer || {};
  const servicesData = content?.services?.items || [];
  const socials = footerData.socials || [];

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
            <h3>{footerData.newsletterTitle || (language === 'en' ? 'Join Our Sector Innovation Newsletter' : 'Sektörel İnovasyon Bültenimize Katılın')}</h3>
            <p>{footerData.newsletterSubtitle || (language === 'en' ? 'Latest reports from technology, telecom, and management directly in your inbox.' : 'Teknoloji, telekomünikasyon ve yönetim dünyasından güncel raporlar doğrudan e-postanızda.')}</p>
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
              {navData.logoUrl ? (
                <img src={navData.logoUrl} alt="Logo" style={{ height: '32px', objectFit: 'contain' }} />
              ) : (
                <span className="footer-logo-mark">{navData.brandLogoMark || 'N'}</span>
              )}
              <span>{navData.brandName || 'NIMA GRUP.'}</span>
            </Link>
            <p className="footer-desc">
              {footerData.description || 'Nima Grup; telekomünikasyon, teknoloji, açık hava reklamcılığı ve strateji alanlarında entegre çözümler sunan öncü kurumsal ekosistemdir.'}
            </p>

            <div className="footer-socials">
              {socials.map((soc) => {
                const IconComponent = SOCIAL_ICON_MAP[soc.icon] || Globe;
                return (
                  <a 
                    key={soc.id || soc.name} 
                    href={soc.url || '#'} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label={soc.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="footer-links-col">
            <div className="footer-nav">
              <h4 className="footer-heading">{t('footer_title_corp')}</h4>
              <Link to="/">{t('nav_home')}</Link>
              <Link to="/hakkimizda">{t('nav_about')}</Link>
              <Link to="/iletisim">{t('nav_contact')}</Link>
              <Link to="/admin" style={{ opacity: 0.7, fontSize: '0.85rem' }}>⚙️ Yönetim Paneli</Link>
            </div>
            
            <div className="footer-nav">
              <h4 className="footer-heading">{t('footer_title_sectors')}</h4>
              {servicesData.map(s => (
                <Link key={s.id || s.path} to={s.path}>{s.title || s.shortName}</Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-contact">
            {contactData.address && <span><MapPin size={16}/> {contactData.address}</span>}
            {contactData.phone && <span><Phone size={16}/> {contactData.phone}</span>}
            {contactData.email && <span><Mail size={16}/> {contactData.email}</span>}
          </div>
          <div className="footer-copy">
            {footerData.copyright || `© ${new Date().getFullYear()} NIMA GRUP. Tüm hakları saklıdır.`}
          </div>
        </div>
      </div>
    </footer>
  );
}
