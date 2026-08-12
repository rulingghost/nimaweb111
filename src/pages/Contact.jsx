import Hero from '../components/Hero';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/sectors';

export default function Contact() {
  return (
    <main>
      <Hero 
        title="Bizimle<br/><span>İletişime</span> Geçin."
        subtitle="Sorularınız, iş ortaklığı teklifleriniz veya projeleriniz için uzman ekibimizle görüşmeye hazırız."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
      />
      <section className="section bg-secondary">
        <div className="container">
          <div className="split-layout">
            
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>Merkez Ofis</h2>
                <p className="regular-text" style={{ maxWidth: '400px' }}>
                  Kahvenizi yudumlarken projenizi konuşmak için ofisimize davetlisiniz.
                </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', color: 'var(--brand-primary)' }}>
                    <MapPin size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>Adres</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '250px' }}>{companyInfo.address}</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', color: 'var(--brand-primary)' }}>
                    <Phone size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>Telefon</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{companyInfo.phone}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', color: 'var(--brand-primary)' }}>
                    <Mail size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>E-posta</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Contact Form */}
            <div style={{ background: 'var(--bg-main)', padding: '3rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem' }}>Mesaj Gönderin</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Adınız Soyadınız</label>
                    <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--text-main)' }}>E-posta Adresi</label>
                    <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', outline: 'none' }} />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--text-main)' }}>İlgilendiğiniz Sektör</label>
                  <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', outline: 'none', appearance: 'none' }}>
                    <option value="">Genel İletişim</option>
                    <option value="telekomunikasyon">Telekomünikasyon</option>
                    <option value="yazilim">Yazılım</option>
                    <option value="promosyon">Promosyon</option>
                    <option value="egitim">Eğitim</option>
                    <option value="danismanlik">Danışmanlık</option>
                    <option value="reklam">Reklam</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Mesajınız</label>
                  <textarea rows="5" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                
                <button type="button" className="btn-modern btn-dark" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                  Gönder <ArrowRight size={18} />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
