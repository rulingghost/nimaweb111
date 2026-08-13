import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, ExternalLink, Clock, Send, Check, Sparkles 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { getCompanyInfo, getSectors, aboutHeroImg } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  
  const localizedCompany = getCompanyInfo(language);
  const localizedSectors = getSectors(language);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaChecked) {
      alert(language === 'en' ? "Please check 'I am not a robot'." : "Lütfen 'Ben robot değilim' doğrulamasını işaretleyin.");
      return;
    }
    setSubmitted(true);
  };

  const cleanPhone = localizedCompany.phone.replace(/[^0-9+]/g, '');
  const cleanWhatsapp = (localizedCompany.whatsapp || "+90 (555) 012 34 56").replace(/[^0-9+]/g, '');

  return (
    <main>
      <PageHero 
        title={language === 'en' ? "Get in <span>Touch</span> with Us." : "Bizimle<br/><span>İletişime</span> Geçin."}
        subtitle={language === 'en' ? "We are ready to connect 24/7 for your questions, partnership offers, or projects." : "Sorularınız, iş ortaklığı teklifleriniz veya projeleriniz için uzman ekibimizle 7/24 görüşmeye hazırız."}
        image={aboutHeroImg}
        badgeText={t('nav_contact')}
      />

      <section className="contact-page-dark">
        <div className="container">
          
          {/* Top 4 Contact Cards Grid */}
          <div className="contact-top-grid">
            
            {/* Card 1: Genel Merkez */}
            <motion.div 
              className="top-contact-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="top-card-header">
                <div className="card-icon-square icon-blue">
                  <MapPin size={22} />
                </div>
                <div className="top-card-info">
                  <h3>{t('contact_card1_title')}</h3>
                  <p>{localizedCompany.address}</p>
                </div>
              </div>
              <div className="top-card-action">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="top-card-link link-blue"
                >
                  {t('contact_card1_link')} <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* Card 2: Telefon & Santral */}
            <motion.div 
              className="top-contact-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="top-card-header">
                <div className="card-icon-square icon-green">
                  <Phone size={22} />
                </div>
                <div className="top-card-info">
                  <h3>{t('contact_card2_title')}</h3>
                  <p>{t('contact_card2_sub')}</p>
                </div>
              </div>
              <div className="top-card-action">
                <a href={`tel:${cleanPhone}`} className="top-card-value" style={{ textDecoration: 'none' }}>
                  {localizedCompany.phone}
                </a>
              </div>
            </motion.div>

            {/* Card 3: WhatsApp Canlı Destek */}
            <motion.div 
              className="top-contact-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="top-card-header">
                <div className="card-icon-square icon-green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="top-card-info">
                  <h3>{t('contact_card3_title')}</h3>
                  <p>{t('contact_card3_sub')}</p>
                </div>
              </div>
              <div className="top-card-action">
                <a 
                  href={`https://wa.me/${cleanWhatsapp}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="top-card-link link-green"
                >
                  {t('contact_card3_link')} <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* Card 4: E-posta İletişim */}
            <motion.div 
              className="top-contact-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="top-card-header">
                <div className="card-icon-square icon-orange">
                  <Mail size={22} />
                </div>
                <div className="top-card-info">
                  <h3>{t('contact_card4_title')}</h3>
                  <p>{t('contact_card4_sub')}</p>
                </div>
              </div>
              <div className="top-card-action">
                <a href={`mailto:${localizedCompany.email}`} className="top-card-value" style={{ textDecoration: 'none' }}>
                  {localizedCompany.email}
                </a>
              </div>
            </motion.div>

          </div>

          {/* Main Content Split Section */}
          <div className="contact-main-grid">
            
            {/* Left Column: Form Card */}
            <div className="contact-form-card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#ffffff' }}>{t('contact_submitted_title')}</h3>
                  <p style={{ color: '#94a3b8', maxWidth: '400px', lineHeight: '1.6' }}>
                    {t('contact_submitted_desc')}
                  </p>
                  <button 
                    className="btn-submit-orange" 
                    style={{ maxWidth: '240px', marginTop: '1rem' }} 
                    onClick={() => { setSubmitted(false); setCaptchaChecked(false); }}
                  >
                    {t('contact_btn_new')}
                  </button>
                </div>
              ) : (
                <>
                  <span className="form-tag">{t('contact_form_tag')}</span>
                  <h2 className="form-title">{t('contact_form_title')}</h2>
                  <p className="form-desc">{t('contact_form_desc')}</p>

                  <form onSubmit={handleSubmit}>
                    
                    {/* Row 1 */}
                    <div className="form-grid-row">
                      <div className="dark-input-group">
                        <label>{t('contact_label_name')}</label>
                        <input 
                          type="text" 
                          required 
                          placeholder={t('contact_place_name')} 
                          className="dark-input"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>

                      <div className="dark-input-group">
                        <label>{t('contact_label_email')}</label>
                        <input 
                          type="email" 
                          required 
                          placeholder={t('contact_place_email')} 
                          className="dark-input"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="form-grid-row">
                      <div className="dark-input-group">
                        <label>{t('contact_label_phone')}</label>
                        <input 
                          type="tel" 
                          placeholder={t('contact_place_phone')} 
                          className="dark-input"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>

                      <div className="dark-input-group">
                        <label>{t('contact_label_company')}</label>
                        <input 
                          type="text" 
                          placeholder={t('contact_place_company')} 
                          className="dark-input"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 3: Subject / Sector dropdown */}
                    <div className="dark-input-group">
                      <label>{t('contact_label_subject')}</label>
                      <select 
                        required
                        className="dark-input dark-select"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="" disabled>{t('contact_place_subject')}</option>
                        {localizedSectors.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                        <option value="genel">{language === 'en' ? 'General Inquiry / Holding' : 'Genel İletişim / Holding'}</option>
                        <option value="is_birligi">{language === 'en' ? 'Partnership & Collaboration' : 'İş Birliği & Ortaklık'}</option>
                      </select>
                    </div>

                    {/* Row 4: Message */}
                    <div className="dark-input-group">
                      <label>{t('contact_label_message')}</label>
                      <textarea 
                        rows={4} 
                        required
                        placeholder={t('contact_place_message')}
                        className="dark-input"
                        style={{ resize: 'vertical' }}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    {/* Row 5: Captcha verification */}
                    <div className="captcha-box">
                      <div className="captcha-left">
                        <input 
                          type="checkbox" 
                          id="captchaCheck"
                          className="captcha-checkbox"
                          checked={captchaChecked}
                          onChange={(e) => setCaptchaChecked(e.target.checked)}
                        />
                        <label htmlFor="captchaCheck" className="captcha-label">
                          {t('contact_captcha')}
                        </label>
                      </div>
                      <div className="captcha-right">
                        <svg className="captcha-logo-icon" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <span>reCAPTCHA</span>
                        <span style={{ fontSize: '0.55rem', opacity: 0.7 }}>{language === 'en' ? 'Privacy - Terms' : 'Gizlilik - Şartlar'}</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-submit-orange">
                      {t('contact_btn_send')} <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Right Column: Sidebar Stack */}
            <div className="contact-sidebar">
              
              {/* Sidebar Card 1: Ofis Konumumuz */}
              <div className="sidebar-card">
                <div className="sidebar-header">
                  <MapPin size={22} className="sidebar-icon-orange" />
                  <h4>{t('contact_sidebar_map_title')}</h4>
                </div>

                <div className="map-container">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="map-btn-overlay"
                  >
                    {t('contact_sidebar_map_open')} <ExternalLink size={12} />
                  </a>
                  <iframe 
                    title="Nima Plaza Office Location"
                    className="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2778848766155!2d29.0084364!3d41.0772221!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab65d456789ab%3A0x123456789abcdef!2sLevent%2C%20B%C3%BCy%C3%BCkdere%20Cd.%20No%3A195%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Sidebar Card 2: Çalışma Saatlerimiz */}
              <div className="sidebar-card">
                <div className="sidebar-header">
                  <Clock size={22} className="sidebar-icon-blue" />
                  <h4>{t('contact_sidebar_hours_title')}</h4>
                </div>

                <div className="hours-list">
                  <div className="hour-row">
                    <span className="hour-label">{t('contact_sidebar_mon_fri')}</span>
                    <span className="hour-value">09:00 - 18:00</span>
                  </div>

                  <div className="hour-row">
                    <span className="hour-label">{t('contact_sidebar_sat')}</span>
                    <span className="hour-value">10:00 - 15:00</span>
                  </div>

                  <div className="hour-row">
                    <span className="hour-label">{t('contact_sidebar_sun')}</span>
                    <span className="status-badge-closed">{t('contact_sidebar_closed')}</span>
                  </div>
                </div>

                {/* Bottom Notice Banner */}
                <div className="notice-banner">
                  <span style={{ fontSize: '1rem', lineHeight: 1 }}>✨</span>
                  <span>{t('contact_sidebar_notice')}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
