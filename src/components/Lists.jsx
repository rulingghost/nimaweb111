import './Lists.css';

export function PartnerList({ partners, color }) {
  if (!partners || partners.length === 0) return null;

  return (
    <section className="section bg-subtle" id="is-ortaklari">
      <div className="container">
        <h2 className="section-title" style={{ color }}>İş Ortakları</h2>
        <p className="section-subtitle">Gücümüzü paylaştığımız değerli iş ortaklarımız.</p>
        
        <div className="partner-grid">
          {partners.map(partner => (
            <div key={partner.id} className="partner-card glass-panel">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReferenceList({ references, color }) {
  if (!references || references.length === 0) return null;

  return (
    <section className="section" id="referanslar">
      <div className="container">
        <h2 className="section-title" style={{ color }}>Referanslar</h2>
        <p className="section-subtitle">Başarıyla tamamladığımız projeler ve mutlu müşterilerimiz.</p>
        
        <div className="reference-grid">
          {references.map(ref => (
            <div key={ref.id} className="reference-card">
              <div className="reference-content glass-panel" style={{ borderTop: `4px solid ${color}` }}>
                <h3 className="reference-name">{ref.name}</h3>
                <p className="reference-desc">{ref.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
