import { Globe, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import './GlobalOfficesMap.css';

export default function GlobalOfficesMap() {
  const { language } = useLanguage();
  const { content, getContent } = useContent();
  const activeContent = getContent ? getContent(language) : content;

  const officesData = activeContent?.globalOffices || {
    badge: 'GLOBAL AĞ & TEMSİLCİLİKLER',
    title: 'Küresel Hizmet ve İletişim Ağımız',
    subtitle: "Türkiye'den Avrupa ve Orta Doğu'ya uzanan küresel lokasyonlarımız ile kesintisiz operasyon sağlıyoruz.",
    items: [
      { id: '1', city: 'İstanbul (HQ)', badge: 'Genel Merkez', name: 'Nima Grup Plaza', role: 'Yönetim & Operasyon Merkezi', address: 'Büyükdere Cad. No:195 Levent / İstanbul', phone: '+90 (212) 555 01 23' },
      { id: '2', city: 'Ankara', badge: 'Bölge Müdürlüğü', name: 'İç Anadolu Temsilciliği', role: 'Kamu & Altyapı Çözümleri', address: 'Çankaya Cad. No:45 Çankaya / Ankara', phone: '+90 (312) 555 01 24' },
      { id: '3', city: 'İzmir', badge: 'Ege Şubesi', name: 'Ege Operasyon Merkezi', role: 'Lojistik & Tanıtım Hizmetleri', address: 'Atatürk Org. San. Bölgesi Çiğli / İzmir', phone: '+90 (232) 555 01 25' },
      { id: '4', city: 'Londra (UK)', badge: 'Global İrtibat', name: 'Nima International Ltd.', role: 'Avrupa Teknoloji & Danışmanlık', address: '124 City Road, London EC1V 2NX', phone: '+44 20 7946 0912' }
    ]
  };

  const items = officesData.items || [];

  return (
    <section className="offices-section">
      <div className="container">
        <div className="offices-header center">
          <div className="badge-pill">
            <Globe size={14} /> {officesData.badge || 'Global Ağ & Temsilcilikler'}
          </div>
          <h2 className="display-title">{officesData.title || 'Küresel Hizmet Ağı'}</h2>
          <p className="display-subtitle">
            {officesData.subtitle || "Türkiye'den Avrupa ve Orta Doğu'ya uzanan küresel lokasyonlarımız ile kesintisiz operasyon sağlıyoruz."}
          </p>
        </div>

        <div className="offices-grid">
          {items.map((off, idx) => (
            <div key={off.id || idx} className="office-card">
              <div className="office-top">
                <span className="office-city">{off.city}</span>
                {off.badge && <span className="office-badge">{off.badge}</span>}
              </div>

              <h3 className="office-name">{off.name}</h3>
              {off.role && <p className="office-role">{off.role}</p>}

              <div className="office-details">
                {off.address && (
                  <div className="detail-line">
                    <MapPin size={16} />
                    <span>{off.address}</span>
                  </div>
                )}
                {off.phone && (
                  <div className="detail-line">
                    <Phone size={16} />
                    <span>{off.phone}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
