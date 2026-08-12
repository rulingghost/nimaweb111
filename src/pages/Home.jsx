import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import { sectors, companyInfo } from '../data/sectors';
import './Home.css';

export default function Home() {
  return (
    <main>
      <Hero 
        title="Geleceği<br/><span>İnşa</span> Ediyoruz."
        subtitle={`${companyInfo.name}, birden fazla sektörde yenilikçi ve öncü yaklaşımıyla sürdürülebilir değer yaratır. Geleceğin teknolojilerini bugünden kurguluyoruz.`}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
        showButton={true}
      />

      {/* Stats Section */}
      <section className="section pb-0">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><TrendingUp size={24}/></div>
              <h3 className="stat-number">25+</h3>
              <p className="stat-text">Yıllık Tecrübe</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ShieldCheck size={24}/></div>
              <h3 className="stat-number">500+</h3>
              <p className="stat-text">Tamamlanan Proje</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Users size={24}/></div>
              <h3 className="stat-number">1200+</h3>
              <p className="stat-text">Uzman Çalışan</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Award size={24}/></div>
              <h3 className="stat-number">15</h3>
              <p className="stat-text">Sektör Ödülü</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Sectors */}
      <section className="section bg-secondary" id="sectors" style={{ marginTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Faaliyet Alanlarımız</h2>
            <p className="display-subtitle">Global standartlarda hizmet sunduğumuz, ekonomiye yön veren ana sektörlerimiz.</p>
          </div>
          
          <div className="bento-grid">
            {sectors.map((sector, index) => (
              <Link 
                key={sector.id} 
                to={sector.path} 
                className={`bento-card item-${index}`}
                style={{ '--brand': sector.color }}
              >
                <div className="bento-bg"></div>
                <div className="bento-content">
                  <div className="bento-top">
                    <div className="bento-icon-wrapper" style={{ color: sector.color }}>
                      <sector.icon size={28} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight size={24} className="bento-arrow" />
                  </div>
                  
                  <div className="bento-bottom">
                    <h3 className="bento-title">{sector.name}</h3>
                    <p className="bento-desc">{sector.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Corporate About Preview */}
      <section className="section">
        <div className="container">
          <div className="split-layout">
            <div className="split-text">
              <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}>Neden<br/>Nima Grup?</h2>
            </div>
            <div className="split-content">
              <p className="large-text">
                Yılların getirdiği tecrübe, dinamik ve yenilikçi kadromuz ile her sektörde standartları yeniden belirliyoruz.
              </p>
              <p className="regular-text">
                Müşteri odaklı yaklaşımımız ve tavizsiz kalite anlayışımızla, sadece bugünün değil, yarının da sorunlarına çözümler üretiyoruz. Teknoloji, mühendislik ve stratejiyi tek bir potada eritiyoruz. Bizimle çalışan her kurum, geleceğe bir adım önde başlar.
              </p>
              
              <ul className="core-values">
                <li><ShieldCheck size={20} className="text-brand"/> Sürdürülebilirlik odaklı yaklaşım</li>
                <li><ShieldCheck size={20} className="text-brand"/> Global kalite standartları (ISO/IEC)</li>
                <li><ShieldCheck size={20} className="text-brand"/> %100 Müşteri Memnuniyeti hedefi</li>
              </ul>

              <Link to="/hakkimizda" className="btn-modern btn-outline" style={{ marginTop: '2.5rem' }}>
                Kurumsal Profilimiz
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-main border-top-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>Birlikte Büyüyelim</h2>
          <p className="display-subtitle" style={{ margin: '0 auto 3rem' }}>Projeleriniz veya olası iş ortaklıkları hakkında görüşmek için uzman ekibimizle hemen iletişime geçin.</p>
          <Link to="/iletisim" className="btn-modern btn-dark" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>
    </main>
  );
}
