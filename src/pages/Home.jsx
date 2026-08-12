import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, TrendingUp, Users, Award, ShieldCheck, 
  ChevronDown, CheckCircle2, Star, Eye, Sparkles, MessageSquarePlus, Search 
} from 'lucide-react';
import Hero from '../components/Hero';
import SectorExplorer from '../components/SectorExplorer';
import AnimatedCounter from '../components/AnimatedCounter';
import RoiCalculator from '../components/RoiCalculator';
import GlobalOfficesMap from '../components/GlobalOfficesMap';
import { sectors, companyInfo, mainHeroImg, projectAnalyticsImg } from '../data/sectors';
import './Home.css';

export default function Home({ onOpenProposal, onPreviewImage }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [projectSearch, setProjectSearch] = useState('');
  const [selectedFilterSector, setSelectedFilterSector] = useState('all');

  const testimonials = [
    {
      id: 1,
      quote: "NIMA Grup ile 400km fiber optik hattı projemizde çalıştık. Saha tespiti ve 3D haritalama konusundaki hız ve hassasiyetleri benzersizdi.",
      author: "Mehmet Yılmaz",
      role: "Altyapı & Telekomünikasyon Direktörü",
      company: "Global Net A.Ş.",
      rating: 5
    },
    {
      id: 2,
      quote: "Kurumsal ERP dönüşümümüzü 6 ay gibi kısa bir sürede tamamladılar. Operasyonel verimliliğimiz %40 arttı.",
      author: "Caner Aksoy",
      role: "Teknoloji Başkanı (CTO)",
      company: "Lojistik Şirketler Grubu",
      rating: 5
    },
    {
      id: 3,
      quote: "50.000 adet VIP sürdürülebilir kurumsal hediyemizi eksiksiz ve büyüleyici bir sunumla zamanında teslim ettiler.",
      author: "Zeynep Kaya",
      role: "Pazarlama ve İletişim Müdürü",
      company: "Uluslararası Bankacılık",
      rating: 5
    }
  ];

  const homeFaqs = [
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

  // Filter projects by search and sector
  const filteredSectors = sectors.filter(s => {
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
        title="Geleceğin Teknolojilerini<br/><span>Bugünden</span> İnşa Ediyoruz."
        subtitle={`${companyInfo.name}, 6 farklı stratejik sektörde yenilikçi mühendislik, dijital dönüşüm ve kurumsal çözümleriyle sürdürülebilir değer üretir.`}
        image={mainHeroImg}
        showButton={true}
        onOpenProposal={onOpenProposal}
      />

      {/* Stats Counter Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon-wrap"><TrendingUp size={26}/></div>
              <h3 className="stat-number">
                <AnimatedCounter value="25+" />
              </h3>
              <p className="stat-text">Yıllık Köklü Tecrübe</p>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon-wrap"><ShieldCheck size={26}/></div>
              <h3 className="stat-number">
                <AnimatedCounter value="500+" />
              </h3>
              <p className="stat-text">Tamamlanan Proje</p>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon-wrap"><Users size={26}/></div>
              <h3 className="stat-number">
                <AnimatedCounter value="1200+" />
              </h3>
              <p className="stat-text">Uzman Kadro</p>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon-wrap"><Award size={26}/></div>
              <h3 className="stat-number">
                <AnimatedCounter value="15" />
              </h3>
              <p className="stat-text">Ulusal & Uluslararası Ödül</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Sectors */}
      <section className="section bg-secondary" id="sectors">
        <div className="container">
          <div className="section-header center">
            <div className="badge-pill">
              <Sparkles size={14} /> Güçlü Sektörel Yapı
            </div>
            <h2 className="display-title">Faaliyet Alanlarımız</h2>
            <p className="display-subtitle">
              Sektör odaklı uzmanlık alanlarımız ile kurumunuz için ihtiyaca özel uçtan uca çözümler üretiyoruz.
            </p>
          </div>
          
          <div className="bento-grid">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                className={`bento-card item-${index}`}
                style={{ '--brand': sector.color }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={sector.path} className="bento-card-link">
                  <div className="bento-bg" style={{ backgroundImage: `url(${sector.heroImage})` }} />
                  <div className="bento-overlay" />
                  
                  <div className="bento-content">
                    <div className="bento-top">
                      <div className="bento-icon-wrapper" style={{ background: sector.lightColor, color: sector.color }}>
                        <sector.icon size={26} strokeWidth={1.8} />
                      </div>
                      <span className="bento-badge-tag">{sector.badge}</span>
                      <ArrowUpRight size={24} className="bento-arrow" />
                    </div>
                    
                    <div className="bento-bottom">
                      <h3 className="bento-title">{sector.name}</h3>
                      <p className="bento-desc">{sector.description}</p>
                      
                      <div className="bento-metrics">
                        {sector.stats.slice(0, 2).map((st, i) => (
                          <span key={i} className="bento-metric-chip">
                            <strong>{st.value}</strong> {st.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sector Explorer Tab Component */}
      <SectorExplorer 
        onOpenProposal={onOpenProposal} 
        onPreviewImage={onPreviewImage} 
      />

      {/* Interactive Project ROI Estimator Calculator */}
      <RoiCalculator onOpenProposal={onOpenProposal} />

      {/* Visual Project Highlights Showcase with Search & Filter */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header center">
            <div className="badge-pill">
              <Eye size={14} /> Başarı Hikayeleri & Portföy
            </div>
            <h2 className="display-title">Öne Çıkan Projelerimiz</h2>
            <p className="display-subtitle">
              Sektör liderleri için hayata geçirdiğimiz yüksek etkili projelerde arama ve filtreleme yapın.
            </p>
          </div>

          {/* Search & Filter Control Bar */}
          <div className="portfolio-filter-bar">
            <div className="portfolio-search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Proje veya hizmet adı ile arayın..."
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
              />
            </div>

            <div className="portfolio-chips">
              <button 
                className={`filter-chip ${selectedFilterSector === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilterSector('all')}
              >
                Tüm Sektörler
              </button>
              {sectors.map(s => (
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
                <div 
                  className="project-img-box"
                  onClick={() => onPreviewImage(s.heroImage, s.references[0]?.name || s.name, s.references[0]?.description || s.description)}
                >
                  <img src={s.heroImage} alt={s.name} />
                  <div className="project-img-overlay">
                    <span className="zoom-chip"><Eye size={16} /> İncele</span>
                  </div>
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
                      Detaylar <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <GlobalOfficesMap />

      {/* Modern Corporate About Preview */}
      <section className="section">
        <div className="container">
          <div className="split-layout align-center">
            <div className="split-text">
              <div className="badge-pill">
                <ShieldCheck size={14} /> Nima Farkı
              </div>
              <h2 className="display-title">Neden Nima Grup?</h2>
              <p className="large-text">
                Köklü tecrübemiz, yenilikçi yaklaşımımız ve tavizsiz kalite ilkemizle şirketleri geleceğin dijital dünyasına taşıyoruz.
              </p>
              
              <ul className="core-values-list">
                <li>
                  <CheckCircle2 size={20} className="text-brand" />
                  <div>
                    <strong>Sürdürülebilirlik & Çevre Odaklılık</strong>
                    <p>Karbon ayak izini azaltan yeşil teknoloji ve geri dönüştürülebilir malzeme standartları.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-brand" />
                  <div>
                    <strong>Uluslararası Sertifikalı Standartlar</strong>
                    <p>ISO 9001, ISO 27001 ve ISO 45001 kalitesinde denetlenen iş süreçleri.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-brand" />
                  <div>
                    <strong>%99.8 Müşteri Memnuniyeti</strong>
                    <p>7/24 kesintisiz destek, şeffaf raporlama ve bütçe uyumluluğu garantisi.</p>
                  </div>
                </li>
              </ul>

              <Link to="/hakkimizda" className="btn-modern btn-dark" style={{ marginTop: '2rem' }}>
                Kurumsal Profilimiz
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="split-visual-card">
              <div className="visual-card-inner">
                <img src={projectAnalyticsImg} alt="Nima Grup Analiz" />
                <div className="visual-card-glass">
                  <h3>"Geleceğe Güvenle Şekil Veriyoruz"</h3>
                  <p>1200+ Çalışan • 81 İl • 6 Sektör</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Carousel */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header center">
            <div className="badge-pill">
              <Star size={14} /> Müşteri Yorumları
            </div>
            <h2 className="display-title">İş Ortaklarımız Ne Diyor?</h2>
            <p className="display-subtitle">Birlikte başarıya ulaştığımız değerli yöneticilerin görüşleri.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <motion.div 
                key={t.id}
                className="testimonial-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F6C310" color="#F6C310" />
                  ))}
                </div>

                <p className="testimonial-quote">"{t.quote}"</p>

                <div className="testimonial-user">
                  <div className="user-avatar">{t.author.charAt(0)}</div>
                  <div>
                    <h5 className="user-name">{t.author}</h5>
                    <span className="user-role">{t.role} — <strong>{t.company}</strong></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQs Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header center">
            <h2 className="display-title">Sıkça Sorulan Sorular</h2>
            <p className="display-subtitle">NIMA Grup hakkında merak edilen tüm konular ve yanıtları.</p>
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
              <h2 className="cta-title">Projenizi Birlikte Hayata Geçirelim</h2>
              <p className="cta-desc">
                Sektörünüze özel yenilikçi çözümlerimizi konuşmak için hemen teklif alın veya uzman ekibimizle iletişime geçin.
              </p>
              <div className="cta-actions">
                <button 
                  className="btn-modern btn-dark cta-btn"
                  onClick={() => onOpenProposal()}
                >
                  <MessageSquarePlus size={18} /> Hızlı Teklif Al
                </button>
                <Link to="/iletisim" className="btn-modern btn-outline cta-btn-white">
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
