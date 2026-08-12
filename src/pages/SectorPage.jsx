import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Sparkles, MessageSquarePlus, 
  ChevronDown, Award, TrendingUp, Layers, HelpCircle 
} from 'lucide-react';
import Hero from '../components/Hero';
import { PartnerList, ReferenceList } from '../components/Lists';
import { sectors } from '../data/sectors';

export default function SectorPage({ onOpenProposal }) {
  const { sectorId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(0);
  
  const sector = sectors.find(s => s.path === `/${sectorId}`);

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
              { id: 'overview', label: 'Genel Bakış & Hizmetler' },
              { id: 'process', label: 'Çalışma Metodolojisi' },
              { id: 'references', label: 'Başarı Hikayeleri' },
              { id: 'faqs', label: 'Sıkça Sorulan Sorular' }
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
                  <IconComp size={16} /> {sector.shortName} Uzmanlığı
                </div>
                <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  Geleceği Şekillendiren<br/>Çözümler
                </h2>
                <p className="large-text" style={{ color: sector.color, margin: '1rem 0 1.5rem' }}>
                  {sector.name} alanında sektördeki en son teknolojileri, uluslararası en iyi uygulamaları ve yüksek mühendislik standartlarını harmanlıyoruz.
                </p>
                <p className="regular-text" style={{ marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  Özel proje gereksinimlerinize yanıt veren esnek, ölçeklenebilir ve yüksek performanslı çözümlerimizle iş süreçlerinizde maksimum verimlilik hedefliyoruz.
                </p>
                
                <button 
                  className="btn-modern btn-dark"
                  onClick={() => onOpenProposal(sector.id)}
                >
                  <MessageSquarePlus size={18} /> {sector.shortName} İçin Teklif Al
                </button>
              </div>

              <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Öne Çıkan Hizmet Başlıkları</h3>
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
                <h2 className="display-title" style={{ fontSize: '2.5rem' }}>Nasıl Çalışıyoruz?</h2>
                <p className="display-subtitle" style={{ margin: '0 auto' }}>Sürecin her adımında şeffaf, ölçülebilir ve sonuç odaklı bir yaklaşım benimsiyoruz.</p>
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

          {/* Tab 3: References */}
          {activeTab === 'references' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="display-title" style={{ fontSize: '2.5rem' }}>Tamamlanan Projeler</h2>
                <p className="display-subtitle" style={{ margin: '0 auto' }}>{sector.name} alanındaki örnek başarı öykülerimiz.</p>
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

          {/* Tab 4: FAQs */}
          {activeTab === 'faqs' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ maxWidth: '850px', margin: '0 auto' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="display-title" style={{ fontSize: '2.5rem' }}>{sector.shortName} İle İlgili Sorular</h2>
                <p className="display-subtitle" style={{ margin: '0 auto' }}>Projenize başlamadan önce bilmek isteyebileceğiniz detaylar.</p>
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
                <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Bu sektör için ek SSS bulunmamaktadır.</p>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Render Partners */}
      <PartnerList partners={sector.partners} color={sector.color} />

      {/* Bottom CTA Card */}
      <section className="section bg-main">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>{sector.shortName} Projenizi Başlatın</h2>
          <p className="display-subtitle" style={{ margin: '0 auto 2.5rem' }}>
            İhtiyaçlarınıza özel teknik detayları ve bütçe planlamasını görüşmek için uzman ekibimizle iletişim kurun.
          </p>
          <button 
            className="btn-modern btn-dark" 
            style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}
            onClick={() => onOpenProposal(sector.id)}
          >
            Hızlı Proje Teklifi Al <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
