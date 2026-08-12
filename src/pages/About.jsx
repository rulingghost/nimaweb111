import Hero from '../components/Hero';
import { Target, Compass, Users, Globe2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { companyInfo } from '../data/sectors';

export default function About() {
  return (
    <main>
      <Hero 
        title="Kurumsal<br/><span>Profilimiz</span>."
        subtitle={`${companyInfo.name} olarak, yenilikçi çözümlerle geleceği şekillendiriyoruz. Dünden bugüne sürdürülebilir büyüme yolculuğumuz.`}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Vision & Mission */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="split-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '3rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}>
              <Compass size={40} className="text-brand" />
              <h2 className="display-title" style={{ fontSize: '2.5rem' }}>Vizyonumuz</h2>
              <p className="regular-text" style={{ margin: 0 }}>
                Faaliyet gösterdiğimiz tüm sektörlerde, teknolojiyi insan odaklı bir yaklaşımla harmanlayıp yenilikçi ve sürdürülebilir çözümler sunarak ulusal ve küresel pazarda lider, referans alınan bir şirketler grubu olmak.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '3rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-bento)' }}>
              <Target size={40} className="text-brand" />
              <h2 className="display-title" style={{ fontSize: '2.5rem' }}>Misyonumuz</h2>
              <p className="regular-text" style={{ margin: 0 }}>
                Müşteri memnuniyetini en üst düzeyde tutarak; kaliteli, güvenilir ve rekabetçi hizmetler sunmak. Topluma, çevreye ve tüm paydaşlarımıza duyarlı, sürekli gelişim felsefesini benimseyen bir kurum kültürü yaşatmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Temel Değerlerimiz</h2>
            <p className="display-subtitle" style={{ margin: '0 auto' }}>Bizi biz yapan, attığımız her adımda rehber edindiğimiz kurumsal ilkelerimiz.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: ShieldCheck, title: 'Güvenilirlik', desc: 'Verdiğimiz sözlerin arkasında durur, şeffaf ve dürüst ilişkiler kurarız.' },
              { icon: Globe2, title: 'İnovasyon', desc: 'Statükoyu sorgular, değişime öncülük eder ve en yeni teknolojileri uygularız.' },
              { icon: HeartHandshake, title: 'İnsan Odaklılık', desc: 'Çalışanlarımızın ve müşterilerimizin mutluluğu tüm stratejilerimizin merkezindedir.' },
              { icon: Users, title: 'Takım Ruhu', desc: 'Ortak aklın gücüne inanır, başarıyı ve zorlukları birlikte paylaşırız.' }
            ].map((val, idx) => (
              <div key={idx} style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-bento)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)' }}>
                <val.icon size={32} style={{ margin: '0 auto 1.5rem', color: 'var(--brand-primary)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
