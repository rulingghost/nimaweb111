import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Check, Clock, Globe, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import { companyInfo, sectors, aboutHeroImg } from '../data/sectors';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Hero 
        title="Bizimle<br/><span>İletişime</span> Geçin."
        subtitle="Sorularınız, iş ortaklığı teklifleriniz veya projeleriniz için uzman ekibimizle 7/24 görüşmeye hazırız."
        image={aboutHeroImg}
        badgeText="İletişim & Danışma"
        showButton={false}
      />

      <section className="section bg-secondary">
        <div className="container">
          <div className="split-layout">
            
            {/* Contact Info & Hours */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>Genel Merkez</h2>
                <p className="regular-text" style={{ maxWidth: '480px', color: 'var(--text-muted)' }}>
                  Projelerinizi detaylandırmak ve bir fincan kahve eşliğinde stratejilerinizi kurgulamak için Levent Plaza ofisimize bekliyoruz.
                </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <motion.div 
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.25rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}
                  whileHover={{ x: 6 }}
                >
                  <div style={{ padding: '0.85rem', backgroundColor: 'rgba(209, 47, 14, 0.1)', borderRadius: 'var(--radius-md)', color: '#D12F0E' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Adres</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>{companyInfo.address}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.25rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}
                  whileHover={{ x: 6 }}
                >
                  <div style={{ padding: '0.85rem', backgroundColor: 'rgba(246, 195, 16, 0.15)', borderRadius: 'var(--radius-md)', color: '#D12F0E' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Telefon</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{companyInfo.phone}</p>
                    <span style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: '600' }}>✓ Santral Ekibimiz Yayında</span>
                  </div>
                </motion.div>

                <motion.div 
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.25rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}
                  whileHover={{ x: 6 }}
                >
                  <div style={{ padding: '0.85rem', backgroundColor: 'rgba(233, 123, 26, 0.1)', borderRadius: 'var(--radius-md)', color: '#E97B1A' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Kurumsal E-posta</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{companyInfo.email}</p>
                  </div>
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: '#09090b', color: '#ffffff', borderRadius: 'var(--radius-lg)' }}>
                  <Clock size={24} color="#F6C310" />
                  <div>
                    <h5 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '600' }}>Çalışma Saatleri</h5>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Hafta İçi: 08:30 - 18:30 | Cumartesi: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Card */}
            <div style={{ background: '#ffffff', padding: '3rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento-hover)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700' }}>Mesajınız İletildi!</h3>
                  <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>
                    İletişim talebiniz başarıyla alınmıştır. İlgili sektör temsilcimiz en geç 24 saat içerisinde dönüş yapacaktır.
                  </p>
                  <button className="btn-modern btn-outline" onClick={() => setSubmitted(false)}>
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Mesaj Gönderin</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Formu doldurarak bize ulaşabilirsiniz.</p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div className="input-group">
                        <label>Adınız Soyadınız *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Ahmet Yılmaz" 
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>E-posta Adresi *</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="ahmet@sirket.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div className="input-group">
                        <label>Telefon Numarası</label>
                        <input 
                          type="tel" 
                          placeholder="+90 532 000 00 00"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>İlgilendiğiniz Sektör</label>
                        <select 
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', outline: 'none' }}
                          value={form.sector}
                          onChange={(e) => setForm({ ...form, sector: e.target.value })}
                        >
                          <option value="">Genel İletişim / Holding</option>
                          {sectors.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="input-group">
                      <label>Mesajınız *</label>
                      <textarea 
                        rows={4} 
                        required
                        placeholder="Proje gereksinimleriniz veya sormak istediğiniz sorular..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                    
                    <button type="submit" className="btn-modern btn-dark" style={{ alignSelf: 'flex-start', padding: '1rem 2.5rem' }}>
                      Mesajı Gönder <ArrowRight size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Interactive Map Visual Card */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: 'var(--bg-secondary)', 
            borderRadius: 'var(--radius-xl)', 
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <div className="badge-pill">
                <Globe size={14} /> Konum & Ulaşım
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginTop: '0.5rem' }}>Nima Plaza Levent</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '500px' }}>
                Büyükdere Caddesi üzerinde, Levent Metro İstasyonu 2 numaralı çıkışa 100 metre yürüme mesafesinde.
              </p>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-modern btn-dark"
            >
              Google Maps'te Aç <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
