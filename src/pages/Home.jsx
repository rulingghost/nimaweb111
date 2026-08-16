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
  const { content, getContent } = useContent();
  const [projectSearch, setProjectSearch] = useState('');
  const [selectedFilterSector, setSelectedFilterSector] = useState('all');

  const localizedSectors = getSectors(language);
  const localizedCompany = getCompanyInfo(language);
  const activeContent = getContent ? getContent(language) : content;

  // Dynamic Portfolio / Projects Showcase from Admin Content
  const portfolioItems = activeContent?.portfolio?.items || [
    {
      id: '1',
      sectorId: 'telekomunikasyon',
      sectorName: 'Telekomünikasyon',
      title: 'Kuzey Marmara Fiber Ağı',
      description: 'Otoyol güzergahı boyunca 400km kesintisiz yüksek hızlı fiber optik hattının tespiti ve 3D projelendirilmesi.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      metric: '400 km Hat',
      color: '#D12F0E',
      link: '/telekomunikasyon'
    },
    {
      id: '2',
      sectorId: 'yazilim',
      sectorName: 'Yazılım',
      title: 'Global Lojistik ERP Platformu',
      description: 'Uluslararası taşımacılık yapan firma için tüm operasyonları, filo takibini ve gümrüklemeyi yöneten bulut platform.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      metric: '%40 Verimlilik',
      color: '#F6C310',
      link: '/yazilim'
    },
    {
      id: '3',
      sectorId: 'promosyon',
      sectorName: 'Promosyon',
      title: 'Uluslararası Banka Yılbaşı VIP Seti',
      description: '50.000 çalışan ve prestijli müşteri için özel tasarlanmış ahşap ve bambu konsept hediyeler.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      metric: '50.000 Kutulama',
      color: '#E97B1A',
      link: '/promosyon'
    },
    {
      id: '4',
      sectorId: 'egitim',
      sectorName: 'Eğitim',
      title: 'Yönetici Liderlik Akademi Serüveni',
      description: 'Perakende zincirinin 500 mağaza yöneticisine özel tasarlanan 6 aylık modüler liderlik okulu.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      metric: '500 Lider',
      color: '#B7442E',
      link: '/egitim'
    },
    {
      id: '5',
      sectorId: 'danismanlik',
      sectorName: 'Danışmanlık',
      title: 'KOBİ Sanayi Dönüşüm Projesi',
      description: 'Üretim sektöründeki köklü firmanın yalın üretim prensipleriyle operasyonel kapasitesinin %40 artırılması.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      metric: '%40 Kapasite',
      color: '#F1D55A',
      link: '/danismanlik'
    },
    {
      id: '6',
      sectorId: 'reklam',
      sectorName: 'Reklam',
      title: 'Milli Teknoloji Hamlesi LED Ağı',
      description: "Türkiye'nin 81 ilinde eş zamanlı yayın yapan dijital açık hava ekran kampanyası.",
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      metric: '81 İl Ağı',
      color: '#D12F0E',
      link: '/reklam'
    }
  ];

  const filteredPortfolio = portfolioItems.filter(p => {
    const matchesSector = selectedFilterSector === 'all' || 
      p.sectorId === selectedFilterSector || 
      (p.sectorName && p.sectorName.toLowerCase() === selectedFilterSector.toLowerCase());
    const matchesQuery = !projectSearch.trim() || 
      (p.title && p.title.toLowerCase().includes(projectSearch.toLowerCase())) || 
      (p.description && p.description.toLowerCase().includes(projectSearch.toLowerCase())) ||
      (p.sectorName && p.sectorName.toLowerCase().includes(projectSearch.toLowerCase()));
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
                <Sparkles size={14} /> {activeContent?.kisacaBiz?.badge || t('home_biz_badge')}
              </div>
              <h2 className="display-title" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
                {activeContent?.kisacaBiz?.title || t('home_biz_title')}
              </h2>
              <p className="display-subtitle" style={{ margin: '0 auto' }}>
                {activeContent?.kisacaBiz?.subtitle || t('home_biz_subtitle')}
              </p>
            </div>

            <div className="kisaca-biz-grid">
              {(activeContent?.kisacaBiz?.cards || [
                { id: '1', title: t('home_biz_card1_title'), desc: t('home_biz_card1_desc'), icon: 'Cpu', color: '#D12F0E' },
                { id: '2', title: t('home_biz_card2_title'), desc: t('home_biz_card2_desc'), icon: 'Globe', color: '#F6C310' },
                { id: '3', title: t('home_biz_card3_title'), desc: t('home_biz_card3_desc'), icon: 'ShieldCheck', color: '#E97B1A' }
              ]).map((c, cIdx) => (
                <motion.div 
                  key={c.id || cIdx} 
                  className="biz-card" 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="biz-icon-box" style={{ background: c.color ? `${c.color}20` : 'rgba(209, 47, 14, 0.1)', color: c.color || '#D12F0E' }}>
                    {c.icon === 'Globe' ? <Globe size={28} /> : c.icon === 'ShieldCheck' ? <ShieldCheck size={28} /> : <Cpu size={28} />}
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="kisaca-biz-footer">
              <Link to={activeContent?.kisacaBiz?.btnLink || '/hakkimizda'} className="btn-modern btn-dark">
                {activeContent?.kisacaBiz?.btnText || t('home_biz_btn')} <ArrowRight size={18} />
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
              <Sparkles size={14} /> {activeContent?.portfolio?.badge || t('portfolio_badge')}
            </div>
            <h2 className="display-title">{activeContent?.portfolio?.title || t('portfolio_title')}</h2>
            <p className="display-subtitle">
              {activeContent?.portfolio?.subtitle || t('portfolio_subtitle')}
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
            {filteredPortfolio.map((proj) => {
              const isExternal = (proj.link || '').startsWith('http');
              return (
                <motion.div 
                  key={proj.id} 
                  className="project-showcase-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-img-box">
                    <img src={proj.image} alt={proj.title} />
                    <span className="project-sector-tag" style={{ background: proj.color || '#D12F0E' }}>
                      {proj.sectorName || 'Sektör'}
                    </span>
                  </div>

                  <div className="project-body">
                    <h4>{proj.title}</h4>
                    <p>{proj.description}</p>

                    <div className="project-footer">
                      {proj.metric && (
                        <span className="project-metric">{proj.metric}</span>
                      )}
                      {isExternal ? (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          {t('portfolio_details')} <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <Link to={proj.link || '/'} className="project-link-btn">
                          {t('portfolio_details')} <ArrowUpRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Corporate About & Difference Preview */}
      <section className="section">
        <div className="container">
          <div className="split-layout align-center">
            <div className="split-text">
              <div className="badge-pill">
                <ShieldCheck size={14} /> {activeContent?.whyUs?.badge || t('diff_badge')}
              </div>
              <h2 className="display-title">{activeContent?.whyUs?.title || t('diff_title')}</h2>
              <p className="large-text">
                {activeContent?.whyUs?.subtitle || t('diff_subtitle')}
              </p>
              
              <ul className="core-values-list">
                {(activeContent?.whyUs?.items || [
                  { id: '1', title: t('diff_item1_title'), desc: t('diff_item1_desc') },
                  { id: '2', title: t('diff_item2_title'), desc: t('diff_item2_desc') },
                  { id: '3', title: t('diff_item3_title'), desc: t('diff_item3_desc') }
                ]).map((item, idx) => (
                  <li key={item.id || idx}>
                    <CheckCircle2 size={20} className="text-brand" />
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link to={activeContent?.whyUs?.btnLink || '/hakkimizda'} className="btn-modern btn-dark" style={{ marginTop: '2rem' }}>
                {activeContent?.whyUs?.btnText || t('diff_btn')}
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="split-visual-card">
              <div className="visual-card-inner">
                <img src={projectAnalyticsImg} alt="Nima Grup Analiz" />
                <div className="visual-card-glass">
                  <h3>{activeContent?.whyUs?.quoteTitle || t('diff_card_quote')}</h3>
                  <p>{activeContent?.whyUs?.quoteSubtitle || t('diff_card_sub')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References & Trusted Brands Section with Clickable Links */}
      <section className="section bg-secondary home-references-section" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '2.5rem' }}>
            <div className="badge-pill">
              <Sparkles size={14} /> {activeContent?.references?.badge || 'GÜVENEN MARKALAR'}
            </div>
            <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
              {activeContent?.references?.title || 'Referanslarımız ve Başarı Hikayeleri'}
            </h2>
            <p className="display-subtitle">
              {activeContent?.references?.subtitle || 'Türkiye’nin ve dünyanın önde gelen markalarıyla değer üreten projelere imza attık.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {(activeContent?.references?.items || [
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
              <h2 className="cta-title">{activeContent?.cta?.title || t('cta_title')}</h2>
              <p className="cta-desc">
                {activeContent?.cta?.subtitle || t('cta_subtitle')}
              </p>
              <div className="cta-actions">
                <button 
                  className="btn-modern btn-dark cta-btn"
                  onClick={() => onOpenProposal()}
                >
                  <MessageSquarePlus size={18} /> {activeContent?.cta?.primaryBtnText || t('cta_btn_proposal')}
                </button>
                <Link to={activeContent?.cta?.secondaryBtnLink || '/iletisim'} className="btn-modern btn-outline cta-btn-white">
                  {activeContent?.cta?.secondaryBtnText || t('cta_btn_contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
