import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, ShieldCheck, 
  ChevronDown, CheckCircle2, Sparkles, MessageSquarePlus, Search, Cpu, Globe, ArrowRight
} from 'lucide-react';
import HomeHeroSlider from '../components/HomeHeroSlider';
import SectorExplorer from '../components/SectorExplorer';
import { getSectors, getCompanyInfo, mainHeroImg, projectAnalyticsImg } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import './Home.css';

export default function Home({ onOpenProposal }) {
  const { language, t } = useLanguage();
  const { content } = useContent();
  const [projectSearch, setProjectSearch] = useState('');
  const [selectedFilterSector, setSelectedFilterSector] = useState('all');

  const localizedSectors = getSectors(language);
  const localizedCompany = getCompanyInfo(language);

  const filteredSectors = localizedSectors.filter(s => {
    const matchesSector = selectedFilterSector === 'all' || s.id === selectedFilterSector;
    const matchesQuery = !projectSearch.trim() || 
      s.name.toLowerCase().includes(projectSearch.toLowerCase()) || 
      s.description.toLowerCase().includes(projectSearch.toLowerCase()) ||
      (s.references && s.references.some(r => r.name.toLowerCase().includes(projectSearch.toLowerCase())));
    return matchesSector && matchesQuery;
  });

  return (
    <main>
      {/* Animated Multi-Slide Hero Section for Home Page */}
      <HomeHeroSlider onOpenProposal={onOpenProposal} />

      {/* Kısaca Biz (Briefly About Us) Section */}
      <section className="section kisaca-biz-section">
        <div className="container">
          <div className="kisaca-biz-wrapper">
            <div className="kisaca-biz-header">
              <div className="badge-pill">
                <Sparkles size={14} /> {t('home_biz_badge')}
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }} dangerouslySetInnerHTML={{ __html: t('home_biz_title') }} />
              <p className="display-subtitle" style={{ margin: '0 auto' }}>
                {t('home_biz_subtitle')}
              </p>
            </div>

            <div className="kisaca-biz-grid">
              <motion.div 
                className="biz-card" 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="biz-icon-box" style={{ background: 'rgba(209, 47, 14, 0.1)', color: '#D12F0E' }}>
                  <Cpu size={28} />
                </div>
                <h3>{t('home_biz_card1_title')}</h3>
                <p>{t('home_biz_card1_desc')}</p>
              </motion.div>

              <motion.div 
                className="biz-card" 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="biz-icon-box" style={{ background: 'rgba(246, 195, 16, 0.15)', color: '#D12F0E' }}>
                  <Globe size={28} />
                </div>
                <h3>{t('home_biz_card2_title')}</h3>
                <p>{t('home_biz_card2_desc')}</p>
              </motion.div>

              <motion.div 
                className="biz-card" 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="biz-icon-box" style={{ background: 'rgba(233, 123, 26, 0.1)', color: '#E97B1A' }}>
                  <ShieldCheck size={28} />
                </div>
                <h3>{t('home_biz_card3_title')}</h3>
                <p>{t('home_biz_card3_desc')}</p>
              </motion.div>
            </div>

            <div className="kisaca-biz-footer">
              <Link to="/hakkimizda" className="btn-modern btn-dark">
                {t('home_biz_btn')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sector Explorer Tab Component */}
      <SectorExplorer 
        onOpenProposal={onOpenProposal} 
      />

      {/* Visual Project Highlights Showcase with Search & Filter */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header center">
            <div className="badge-pill">
              <Sparkles size={14} /> {t('portfolio_badge')}
            </div>
            <h2 className="display-title">{t('portfolio_title')}</h2>
            <p className="display-subtitle">
              {t('portfolio_subtitle')}
            </p>
          </div>

          {/* Search & Filter Control Bar */}
          <div className="portfolio-filter-bar">
            <div className="portfolio-search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder={t('portfolio_search_placeholder')}
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
              />
            </div>

            <div className="portfolio-chips">
              <button 
                className={`filter-chip ${selectedFilterSector === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilterSector('all')}
              >
                {t('portfolio_all')}
              </button>
              {localizedSectors.map(s => (
                <button
                  key={s.id}
                  className={`filter-chip ${selectedFilterSector === s.id ? 'active' : ''}`}
                  onClick={() => setSelectedFilterSector(s.id)}
                >
                  {s.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-showcase-grid">
            {filteredSectors.map((s) => (
              <motion.div 
                key={s.id} 
                className="project-showcase-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-img-box">
                  <img src={s.heroImage} alt={s.name} />
                  <span className="project-sector-tag" style={{ background: s.color }}>
                    {s.shortName}
                  </span>
                </div>

                <div className="project-body">
                  <h4>{s.references[0]?.name || s.name}</h4>
                  <p>{s.references[0]?.description || s.description}</p>

                  <div className="project-footer">
                    {s.references[0]?.metric && (
                      <span className="project-metric">{s.references[0].metric}</span>
                    )}
                    <Link to={s.path} className="project-link-btn">
                      {t('portfolio_details')} <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References & Trusted Brands Section with Clickable Links */}
      <section className="section bg-secondary home-references-section" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '2.5rem' }}>
            <div className="badge-pill">
              <Sparkles size={14} /> {content?.references?.badge || 'GÜVENEN MARKALAR'}
            </div>
            <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
              {content?.references?.title || 'Referanslarımız ve Başarı Hikayeleri'}
            </h2>
            <p className="display-subtitle">
              {content?.references?.subtitle || 'Türkiye’nin ve dünyanın önde gelen markalarıyla değer üreten projelere imza attık.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {(content?.references?.items || [
              { id: '1', name: 'Turkcell Altyapı İş Ortaklığı', category: 'Telekomünikasyon', link: 'https://sarfea.com.tr', logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80' },
              { id: '2', name: 'FinansBank SaaS Entegrasyonu', category: 'Yazılım & Finans', link: 'https://sarfea.com.tr', logoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80' },
              { id: '3', name: 'Ege Yapı Açık Hava Kampanyası', category: 'Reklam & Medya', link: 'https://sarfea.com.tr', logoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80' },
              { id: '4', name: 'Borusan Strateji & Akademi', category: 'Eğitim & Danışmanlık', link: 'https://sarfea.com.tr', logoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80' }
            ]).map((refItem) => (
              <a
                key={refItem.id}
                href={refItem.link || 'https://sarfea.com.tr'}
                target="_blank"
                rel="noopener noreferrer"
                title={`${refItem.name} - Detayları İnceleyin`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-bento)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {refItem.logoUrl ? (
                      <img 
                        src={refItem.logoUrl} 
                        alt={refItem.name} 
                        style={{ maxHeight: '45px', maxWidth: '160px', objectFit: 'contain', borderRadius: '4px' }} 
                      />
                    ) : (
                      <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>{refItem.name}</span>
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.25rem', color: 'var(--text-main)' }}>
                      {refItem.name}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: '#D12F0E', fontWeight: '600', background: 'rgba(209, 47, 14, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '100px' }}>
                      {refItem.category || 'Referans'} ↗
                    </span>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-content">
              <h2 className="cta-title">{t('cta_title')}</h2>
              <p className="cta-desc">
                {t('cta_subtitle')}
              </p>
              <div className="cta-actions">
                <button 
                  className="btn-modern btn-dark cta-btn"
                  onClick={() => onOpenProposal()}
                >
                  <MessageSquarePlus size={18} /> {t('cta_btn_proposal')}
                </button>
                <Link to="/iletisim" className="btn-modern btn-outline cta-btn-white">
                  {t('cta_btn_contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
