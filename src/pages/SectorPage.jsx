import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { PartnerList, ReferenceList } from '../components/Lists';
import { sectors } from '../data/sectors';

export default function SectorPage() {
  const { sectorId } = useParams();
  
  const sector = sectors.find(s => s.path === `/${sectorId}`);

  if (!sector) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      <Hero 
        title={sector.name}
        subtitle={sector.description}
        image={sector.heroImage}
        color={sector.color}
      />
      
      {/* Intro & Features */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="split-layout">
            <div>
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Vizyon &<br/>Hizmetler</h2>
            </div>
            <div>
              <p className="large-text" style={{ color: sector.color }}>
                {sector.name} alanında sektördeki en güncel teknolojileri ve en iyi uygulamaları kullanarak müşterilerimize özel çözümler sunuyoruz.
              </p>
              <p className="regular-text" style={{ marginBottom: '2rem' }}>
                Yüksek kalite standartlarımız ve uzman ekibimiz ile projelerinizi hayata geçiriyoruz. İnovasyon odaklı yaklaşımımız sayesinde sürdürülebilir büyüme sağlıyoruz. Müşterilerimizin rekabet avantajını koruması bizim birincil önceliğimizdir.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {sector.features && sector.features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                    <CheckCircle2 size={20} color={sector.color} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {sector.process && (
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Nasıl Çalışıyoruz?</h2>
              <p className="display-subtitle" style={{ margin: '0 auto' }}>Sürecin her adımında şeffaf, ölçülebilir ve sonuç odaklı bir yaklaşım benimsiyoruz.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {sector.process.map((step, index) => (
                <div key={index} style={{ 
                  padding: '2.5rem', 
                  background: 'var(--bg-bento)', 
                  border: '1px solid var(--border-light)', 
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-bento)',
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute', top: '-1rem', left: '2rem', 
                    width: '3rem', height: '3rem', 
                    background: sector.color, color: 'white', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '50%', fontWeight: '700', fontSize: '1.25rem'
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', marginTop: '1rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Render Partners and References if available */}
      <PartnerList partners={sector.partners} color={sector.color} />
      <ReferenceList references={sector.references} color={sector.color} />
    </main>
  );
}
