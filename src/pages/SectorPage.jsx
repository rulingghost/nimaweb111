import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Sparkles, MessageSquarePlus, 
  ChevronDown, Award, TrendingUp, Layers, HelpCircle, Handshake, Briefcase
} from 'lucide-react';
import Hero from '../components/Hero';
import DirectContactChannels from '../components/DirectContactChannels';
import { getSectors, getCompanyInfo } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';

export default function SectorPage({ onOpenProposal }) {
  const { sectorId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(0);
  const { language, t } = useLanguage();
  
  const localizedSectors = getSectors(language);
  const localizedCompany = getCompanyInfo(language);
  const sector = localizedSectors.find(s => s.path === `/${sectorId}`);

  if (!sector) {
    return <Navigate to="/" replace />;
  }

  const IconComp = sector.icon;

  return (
    <main>
      {/* Sector Hero */}
      <Hero 
        title={sector.name}
        subtitle={sector.description}
        image={sector.heroImage}
        badgeText={sector.badge}
        color={sector.color}
        showButton={false}
      />
      
      {/* Sector Quick Stats Bar */}
      <section className="section pb-0" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="stats-grid">
            {sector.stats.map((st, idx) => (
              <div key={idx} className="stat-card" style={{ borderTop: `4px solid ${sector.color}` }}>
                <span className="stat-number">{st.value}</span>
                <span className="stat-text">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <section className="section bg-secondary" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[
              { id: 'overview', label: t('sector_tab_overview') },
              { id: 'process', label: t('sector_tab_process') },
              { id: 'partners', label: t('sector_tab_partners') },
              { id: 'references', label: t('sector_tab_references') },
              { id: 'contact', label: t('sector_tab_contact') },
              { id: 'faqs', label: t('sector_tab_faqs') }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`explorer-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                style={{ '--active-color': sector.color }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="split-layout"
            >
              <div>
                <div className="badge-pill" style={{ background: sector.lightColor, color: sector.color }}>
                  <IconComp size={16} /> {sector.shortName} {t('sector_overview_badge')}
                </div>
                <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }} dangerouslySetInnerHTML={{ __html: t('sector_overview_title') }} />
                <p className="large-text" style={{ color: sector.color, margin: '1rem 0 1.5rem' }}>
                  {sector.name} {t('sector_overview_desc1')}
                </p>
                <p className="regular-text" style={{ marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {t('sector_overview_desc2')}
                </p>
                
                <button 
                  className="btn-modern btn-dark"
                  onClick={() => onOpenProposal(sector.id)}
                >
                  <MessageSquarePlus size={18} /> {sector.shortName} {t('sector_overview_btn')}
                </button>
              </div>

              <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>{t('sector_features_heading')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {sector.features.map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)' }}>
                      <CheckCircle2 size={20} color={sector.color} />
                      <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Process */}
          {activeTab === 'process' && sector.process && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="display-title" style={{ fontSize: '2.5rem' }}>{t('sector_process_title')}</h2>
                <p className="display-subtitle" style={{ margin: '0 auto' }}>{t('sector_process_sub')}</p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {sector.process.map((step, index) => (
                  <div key={index} style={{ 
                    padding: '2.5rem 2rem', 
                    background: '#ffffff', 
                    border: '1px solid var(--border-light)', 
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-bento)',
                    position: 'relative'
                  }}>
                    <div style={{ 
                      width: '3rem', height: '3rem', 
                      background: sector.color, color: '#ffffff', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: '50%', fontWeight: '700', fontSize: '1.25rem',
                      marginBottom: '1.5rem'
                    }}>
                      {index + 1}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab 3: Partners */}
          {activeTab === 'partners' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div className="badge-pill" style={{ background: sector.lightColor, color: sector.color, display: 'inline-flex', margin: '0 auto 1rem' }}>
                  <Handshake size={16} /> {t('sector_partners_badge')}
                </div>
                <h2 className="display-title" style={{ fontSize: '2.5rem' }}>{sector.shortName} {t('sector_partners_title')}</h2>
                <p className="display-subtitle" style={{ margin: '0 auto' }}>
                  {t('sector_partners_sub')}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {sector.partners && sector.partners.length > 0 ? (
                  sector.partners.map((partner) => (
                    <div 
                      key={partner.id} 
                      style={{ 
                        background: '#ffffff', 
                        borderRadius: 'var(--radius-xl)', 
                        border: '1px solid var(--border-light)', 
                        padding: '2.5rem 2rem',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-bento)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.25rem'
                      }}
                    >
                      <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          style={{ maxHeight: '55px', maxWidth: '180px', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span style="font-size:1.5rem;font-weight:700;color:${sector.color}">${partner.name}</span>`;
                          }}
                        />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.35rem' }}>{partner.name}</h3>
                        <span style={{ 
                          fontSize: '0.78rem', 
                          fontWeight: '700', 
                          color: sector.color, 
                          background: sector.lightColor, 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '100px',
                          display: 'inline-block' 
                        }}>
                          {t('sector_partner_tag')}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: 'center', color: 'var(--text-muted)', gridColumn: '1 / -1' }}>Bu sektör için çözüm ortakları güncellenmektedir.</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Tab 4: References & Completed Projects */}
          {activeTab === 'references' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div className="badge-pill" style={{ background: sector.lightColor, color: sector.color, display: 'inline-flex', margin: '0 auto 1rem' }}>
                  <Briefcase size={16} /> {t('sector_references_badge')}
                </div>
                <h2 className="display-title" style={{ fontSize: '2.5rem' }}>{sector.shortName} {t('sector_references_title')}</h2>
                <p className="display-subtitle" style={{ margin: '0 auto' }}>{t('sector_references_sub')}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {sector.references.map((ref) => (
                  <div key={ref.id} style={{ background: '#ffffff', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-bento)' }}>
                    <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                      <img src={sector.heroImage} alt={ref.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      {ref.metric && (
                        <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: sector.color, color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700' }}>
                          {ref.metric}
                        </span>
                      )}
                      {ref.status && (
                        <span style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(8px)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600' }}>
                          ✓ {ref.status}
                        </span>
                      )}
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>{ref.name}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{ref.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab 5: Direct Contact */}
          {activeTab === 'contact' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              <DirectContactChannels 
                whatsappNumber={localizedCompany.whatsapp}
                phoneNumber={localizedCompany.phone}
                email={localizedCompany.email}
                address={localizedCompany.address}
              />
            </motion.div>
          )}

          {/* Tab 6: FAQs */}
          {activeTab === 'faqs' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ maxWidth: '850px', margin: '0 auto' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="display-title" style={{ fontSize: '2.5rem' }}>{sector.shortName} FAQ</h2>
                <p className="display-subtitle" style={{ margin: '0 auto' }}>{t('faqs_subtitle')}</p>
              </div>

              {sector.faqs ? (
                <div className="faqs-accordion">
                  {sector.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index}
                        className={`faq-item ${isOpen ? 'open' : ''}`}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        <div className="faq-question">
                          <h4>{faq.q}</h4>
                          <ChevronDown size={20} className="faq-icon" />
                        </div>
                        {isOpen && (
                          <div className="faq-answer">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No additional FAQs for this sector.</p>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Sector Solution Partners Section */}
      {sector.partners && sector.partners.length > 0 && (
        <section className="section bg-main" style={{ padding: '5rem 0 3rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="badge-pill" style={{ background: sector.lightColor, color: sector.color, display: 'inline-flex', margin: '0 auto 0.75rem' }}>
                <Handshake size={14} /> {t('sector_partners_badge')}
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                {sector.shortName} {t('sector_partners_title')}
              </h2>
              <p className="display-subtitle" style={{ margin: '0 auto' }}>
                {t('sector_partners_sub')}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
              {sector.partners.map((partner) => (
                <div 
                  key={partner.id}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    boxShadow: 'var(--shadow-bento)'
                  }}
                >
                  <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      style={{ maxHeight: '48px', maxWidth: '160px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span style="font-size:1.4rem;font-weight:700;color:${sector.color}">${partner.name}</span>`;
                      }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{partner.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>{t('sector_partner_tag')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sector References Showcase Section */}
      {sector.references && sector.references.length > 0 && (
        <section className="section bg-secondary" style={{ padding: '5rem 0 4rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="badge-pill" style={{ background: sector.lightColor, color: sector.color, display: 'inline-flex', margin: '0 auto 0.75rem' }}>
                <Briefcase size={14} /> {t('sector_references_badge')}
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                {sector.shortName} {t('sector_references_title')}
              </h2>
              <p className="display-subtitle" style={{ margin: '0 auto' }}>
                {t('sector_references_sub')}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {sector.references.map((ref) => (
                <div key={ref.id} style={{ background: '#ffffff', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-bento)' }}>
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img src={sector.heroImage} alt={ref.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {ref.metric && (
                      <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: sector.color, color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700' }}>
                        {ref.metric}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: '1.75rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{ref.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>{ref.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sector Direct Contact Section */}
      <section className="section bg-main" style={{ padding: '5rem 0 3rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '580px', width: '100%' }}>
            <DirectContactChannels 
              whatsappNumber={localizedCompany.whatsapp}
              phoneNumber={localizedCompany.phone}
              email={localizedCompany.email}
              address={localizedCompany.address}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="section bg-secondary" style={{ paddingTop: '3rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>{sector.shortName} {t('sector_cta_title')}</h2>
          <p className="display-subtitle" style={{ margin: '0 auto 2.5rem' }}>
            {t('sector_cta_sub')}
          </p>
          <button 
            className="btn-modern btn-dark" 
            style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}
            onClick={() => onOpenProposal(sector.id)}
          >
            {t('sector_cta_btn')} <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
