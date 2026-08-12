import { Globe, MapPin, Phone, Building2 } from 'lucide-react';
import { globalOffices, globalOfficesImg } from '../data/sectors';
import './GlobalOfficesMap.css';

export default function GlobalOfficesMap() {
  return (
    <section className="offices-section">
      <div className="container">
        <div className="offices-header center">
          <div className="badge-pill">
            <Globe size={14} /> Global Ağ & Temsilcilikler
          </div>
          <h2 className="display-title">Küresel Hizmet Ağı</h2>
          <p className="display-subtitle">
            Türkiye'den Avrupa ve Orta Doğu'ya uzanan küresel lokasyonlarımız ile kesintisiz operasyon sağlıyoruz.
          </p>
        </div>

        <div className="offices-grid">
          {globalOffices.map((off, idx) => (
            <div key={idx} className="office-card">
              <div className="office-top">
                <span className="office-city">{off.city}</span>
                <span className="office-badge">{off.badge}</span>
              </div>

              <h3 className="office-name">{off.name}</h3>
              <p className="office-role">{off.role}</p>

              <div className="office-details">
                <div className="detail-line">
                  <MapPin size={16} />
                  <span>{off.address}</span>
                </div>
                <div className="detail-line">
                  <Phone size={16} />
                  <span>{off.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
