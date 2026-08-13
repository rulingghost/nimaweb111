import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, ShieldCheck, 
  ChevronDown, CheckCircle2, Sparkles, MessageSquarePlus, Search, Cpu, Globe, ArrowRight
} from 'lucide-react';
import Hero from '../components/Hero';
import SectorExplorer from '../components/SectorExplorer';
import { getSectors, getCompanyInfo, mainHeroImg, projectAnalyticsImg } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

export default function Home({ onOpenProposal }) {
  const { language, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);
  const [projectSearch, setProjectSearch] = useState('');
  const [selectedFilterSector, setSelectedFilterSector] = useState('all');

  const localizedSectors = getSectors(language);
  const localizedCompany = getCompanyInfo(language);

  const homeFaqs = language === 'en' ? [
    {
      q: "Which core sectors does NIMA Group operate in?",
      a: "NIMA Group operates across 6 primary sectors: Telecommunications Infrastructure Detection, Software & Technology Solutions, Corporate Promotional Products, Corporate Training Services, Strategic Management Consulting, and Full-Service Advertising Agency."
    },
    {
      q: "How does your project proposal process work?",
      a: "Once you submit your request via our quote button or contact form, our expert team in the relevant sector gets back to you within 24 hours with a detailed needs analysis and budget planning."
    },
    {
      q: "Do you hold international standards and certifications?",
      a: "Yes, all our business processes are fully certified under ISO 9001 Quality Management, ISO 27001 Information Security, and ISO 45001 Occupational Health and Safety standards."
    },
    {
      q: "Can we bundle services across multiple sectors into a single package?",
      a: "Absolutely! Thanks to the integrated holding structure of our group companies, we can package together, for instance, ERP software installation, corporate training, and launch advertising campaigns into a single unified agreement."
    }
  ] : [
    {
      q: "NIMA Grup hangi ana sektörlerde faaliyet göstermektedir?",
      a: "NIMA Grup; Telekomünikasyon Altyapı Tespit, Yazılım & Teknoloji Çözümleri, Kurumsal Promosyon Ürünleri, Kurumsal Eğitim Hizmetleri, Stratejik Yönetim Danışmanlığı ve Tam Hizmet Reklam Ajansı olmak üzere 6 temel sektörde faaliyet yürütmektedir."
    },
    {
      q: "Proje teklif süreciniz nasıl işliyor?",
      a: "Teklif butonumuz veya iletişim formumuz üzerinden talebinizi ilettiğinizde, ilgili sektördeki uzman ekibimiz 24 saat içinde detaylı bir ihtiyaç analizi ve bütçe planlaması ile dönüş yapmaktadır."
    },
    {
      q: "Uluslararası standartlar ve sertifikasyonlarınız mevcut mu?",
      a: "Evet, tüm süreçlerimiz ISO 9001 Kalite Yönetimi, ISO 27001 Bilgi Güvenliği ve ISO 45001 İş Sağlığı ve Güvenliği standartlarına tam uyumlu olarak sertifikalandırılmıştır."
    },
    {
      q: "Farklı sektörlerdeki hizmetleri tek bir paket altında alabilir miyiz?",
      a: "Kesinlikle! Grup şirketlerimizin entegre yapısı sayesinde örneğin hem yazılım ERP kurulumu hem kurumsal eğitim hem de lansman reklam kampanyası paket olarak sunulabilmektedir."
    }
  ];

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
      {/* Animated Hero Section */}
      <Hero 
        title={t('hero_slide1_title')}
        subtitle={t('hero_slide1_subtitle')}
        image={mainHeroImg}
        showButton={true}
        onOpenProposal={onOpenProposal}
      />

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

      {/* Modern Corporate About Preview */}
      <section className="section">
        <div className="container">
          <div className="split-layout align-center">
            <div className="split-text">
              <div className="badge-pill">
                <ShieldCheck size={14} /> {t('diff_badge')}
              </div>
              <h2 className="display-title">{t('diff_title')}</h2>
              <p className="large-text">
                {t('diff_subtitle')}
              </p>
              
              <ul className="core-values-list">
                <li>
                  <CheckCircle2 size={20} className="text-brand" />
                  <div>
                    <strong>{t('diff_item1_title')}</strong>
                    <p>{t('diff_item1_desc')}</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-brand" />
                  <div>
                    <strong>{t('diff_item2_title')}</strong>
                    <p>{t('diff_item2_desc')}</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-brand" />
                  <div>
                    <strong>{t('diff_item3_title')}</strong>
                    <p>{t('diff_item3_desc')}</p>
                  </div>
                </li>
              </ul>

              <Link to="/hakkimizda" className="btn-modern btn-dark" style={{ marginTop: '2rem' }}>
                {t('diff_btn')}
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="split-visual-card">
              <div className="visual-card-inner">
                <img src={projectAnalyticsImg} alt="Nima Grup Analiz" />
                <div className="visual-card-glass">
                  <h3>{t('diff_card_quote')}</h3>
                  <p>{t('diff_card_sub')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQs Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header center">
            <h2 className="display-title">{t('faqs_title')}</h2>
            <p className="display-subtitle">{t('faqs_subtitle')}</p>
          </div>

          <div className="faqs-accordion">
            {homeFaqs.map((faq, index) => {
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
