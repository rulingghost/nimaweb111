import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './DirectContactChannels.css';

export default function DirectContactChannels({ 
  title,
  subtitle,
  whatsappNumber = "+90 (555) 012 34 56",
  phoneNumber = "+90 (212) 555 01 23",
  address = "Levent, Büyükdere Cd. No:195, Şişli / İstanbul",
  email = "info@alx.com.tr",
  className = ""
}) {
  const { t } = useLanguage();

  const displayTitle = title || t('direct_title');
  const displaySubtitle = subtitle || t('direct_subtitle');

  const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');
  const cleanWhatsapp = whatsappNumber.replace(/[^0-9+]/g, '');

  return (
    <div className={`direct-contact-wrapper ${className}`}>
      {/* Title & Subtitle */}
      {displayTitle && <h2 className="direct-contact-title">{displayTitle}</h2>}
      {displaySubtitle && <p className="direct-contact-subtitle">{displaySubtitle}</p>}

      {/* Featured Highlight Cards */}
      <div className="direct-contact-cards">
        {/* WhatsApp Card */}
        <a 
          href={`https://wa.me/${cleanWhatsapp}`} 
          target="_blank" 
          rel="noreferrer" 
          className="contact-highlight-card"
        >
          <div className="card-left">
            <div className="icon-box icon-whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div className="card-text">
              <h4>{t('direct_wa_title')}</h4>
              <p>{whatsappNumber}</p>
            </div>
          </div>
          <div className="card-right">
            <ExternalLink size={18} />
          </div>
        </a>

        {/* Telefon Card */}
        <a 
          href={`tel:${cleanPhone}`} 
          className="contact-highlight-card"
        >
          <div className="card-left">
            <div className="icon-box icon-phone">
              <Phone size={22} />
            </div>
            <div className="card-text">
              <h4>{t('direct_phone_title')}</h4>
              <p>{phoneNumber}</p>
            </div>
          </div>
          <div className="card-right">
            <ExternalLink size={18} />
          </div>
        </a>
      </div>

      {/* Address & Email List Rows */}
      <div className="direct-contact-details">
        <div className="contact-detail-row">
          <div className="detail-icon-box">
            <MapPin size={20} />
          </div>
          <div className="detail-text">
            <span className="detail-label">{t('direct_label_address')}</span>
            <span className="detail-value">{address}</span>
          </div>
        </div>

        <div className="contact-detail-row">
          <div className="detail-icon-box">
            <Mail size={20} />
          </div>
          <div className="detail-text">
            <span className="detail-label">{t('direct_label_email')}</span>
            <a href={`mailto:${email}`} className="detail-value email-value">{email}</a>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="direct-contact-divider" />

      {/* Social Media & Other Channels */}
      <div className="direct-contact-social">
        <h4>{t('direct_social_title')}</h4>
        <div className="social-buttons-grid">
          <a 
            href={`https://wa.me/${cleanWhatsapp}`} 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn btn-whatsapp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <a 
            href={`tel:${cleanPhone}`} 
            className="social-btn btn-phone"
          >
            <Phone size={18} />
            <span>{t('contact_card2_title').split(' ')[0]}</span>
          </a>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn btn-instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>

          <a 
            href="https://wechat.com" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn btn-wechat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>WeChat</span>
          </a>
        </div>
      </div>
    </div>
  );
}
