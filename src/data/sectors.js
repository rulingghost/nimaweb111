import { Antenna, Code, Gift, GraduationCap, Briefcase, Megaphone } from 'lucide-react';

export const sectors = [
  {
    id: 'telekomunikasyon',
    name: 'Telekomünikasyon Altyapı Tespit',
    shortName: 'Telekomünikasyon',
    path: '/telekomunikasyon',
    icon: Antenna,
    description: 'Güvenilir ve ileri teknoloji telekomünikasyon altyapı tespit ve projelendirme hizmetleri. Fiber optik ve baz istasyonu alanlarında uçtan uca çözümler sunuyoruz.',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000',
    color: '#D12F0E',
    features: [
      'Kapsamlı Saha Analizi',
      'Fiber Optik Haritalama',
      'Radyo Frekans (RF) Ölçümleri',
      'Altyapı Projelendirme'
    ],
    process: [
      { title: 'Keşif ve Analiz', desc: 'Uzman ekiplerimizle sahada detaylı incelemeler yapıyoruz.' },
      { title: 'Projelendirme', desc: 'İhtiyaca uygun, maliyet etkin ağ altyapı tasarımları oluşturuyoruz.' },
      { title: 'Uygulama', desc: 'Standartlara uygun ve güvenli donanım kurulumlarını gerçekleştiriyoruz.' }
    ],
    partners: [
      { id: 1, name: 'Ericsson', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ericsson_logo.svg/200px-Ericsson_logo.svg.png' },
      { id: 2, name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Huawei_logo.svg/200px-Huawei_logo.svg.png' },
      { id: 3, name: 'Nokia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/200px-Nokia_wordmark.svg.png' }
    ],
    references: [
      { id: 1, name: 'Kuzey Marmara Fiber Ağı', description: 'Otoyol güzergahı boyunca 400km fiber optik hattının tespiti ve projelendirilmesi.' },
      { id: 2, name: 'Şehir İçi Genişbant Projesi', description: 'Büyükşehir belediyesi sınırları içerisinde akıllı şehir altyapı kurulumları.' },
    ]
  },
  {
    id: 'yazilim',
    name: 'Yazılım & Teknoloji Çözümleri',
    shortName: 'Yazılım',
    path: '/yazilim',
    icon: Code,
    description: 'Kurumsal iş süreçlerinizi dijitalleştiren, yenilikçi, güvenli ve ölçeklenebilir özel yazılım çözümleri üretiyoruz.',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000',
    color: '#F6C310',
    features: [
      'Özel ERP/CRM Çözümleri',
      'Mobil Uygulama Geliştirme',
      'Bulut (Cloud) Mimarisi',
      'Siber Güvenlik Danışmanlığı'
    ],
    process: [
      { title: 'Gereksinim Analizi', desc: 'İşletmenizin dijital dönüşüm ihtiyaçlarını haritalandırıyoruz.' },
      { title: 'Agile Geliştirme', desc: 'Esnek ve şeffaf geliştirme döngüleri ile yazılımı inşa ediyoruz.' },
      { title: 'Test ve Devreye Alma', desc: 'Kapsamlı güvenlik testleri sonrası sisteminizi canlıya alıyoruz.' }
    ],
    partners: [
      { id: 3, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png' },
      { id: 4, name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png' },
    ],
    references: [
      { id: 3, name: 'Global Lojistik ERP', description: 'Uluslararası taşımacılık yapan firma için tüm operasyonları tek ekranda toplayan sistem.' },
      { id: 4, name: 'Fintech Mobil Cüzdan', description: '100.000+ aktif kullanıcısı olan yüksek güvenlikli mobil ödeme altyapısı.' },
    ]
  },
  {
    id: 'promosyon',
    name: 'Kurumsal Promosyon Ürünleri',
    shortName: 'Promosyon',
    path: '/promosyon',
    icon: Gift,
    description: 'Markanızı müşterilerinizin zihninde kalıcı kılacak, yaratıcı ve yüksek kaliteli kurumsal hediye çözümleri.',
    heroImage: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=2000',
    color: '#E97B1A',
    features: [
      'VIP Kurumsal Setler',
      'Teknolojik Hediyeler',
      'Sürdürülebilir Ürünler',
      'Özel Tasarım Üretim'
    ],
    process: [
      { title: 'Marka Analizi', desc: 'Marka kimliğinize en uygun konseptleri belirliyoruz.' },
      { title: 'Tasarım ve Numune', desc: 'Özel tasarımlar hazırlayıp numune onayınıza sunuyoruz.' },
      { title: 'Üretim ve Dağıtım', desc: 'Yüksek kalite standartlarında üretim yapıp teslimatı gerçekleştiriyoruz.' }
    ],
    partners: [
      { id: 4, name: 'Montblanc', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Montblanc_Logo.svg/200px-Montblanc_Logo.svg.png' },
    ],
    references: [
      { id: 5, name: 'Uluslararası Banka Yılbaşı Seti', description: '50.000 çalışan için özel tasarlanmış sürdürülebilir yılbaşı konsept hediye kutuları.' },
    ]
  },
  {
    id: 'egitim',
    name: 'Kurumsal Eğitim Hizmetleri',
    shortName: 'Eğitim',
    path: '/egitim',
    icon: GraduationCap,
    description: 'Ekiplerinizin yetkinliklerini artıran, interaktif ve modern öğrenme metotlarıyla tasarlanmış profesyonel eğitim programları.',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000',
    color: '#B7442E',
    features: [
      'Liderlik Gelişimi',
      'Satış ve İkna Teknikleri',
      'Çevik (Agile) Yönetim',
      'Dijital Okuryazarlık'
    ],
    process: [
      { title: 'İhtiyaç Tespiti', desc: 'Kurumunuzun hedefleri doğrultusunda eğitim ihtiyaçlarını ölçümlüyoruz.' },
      { title: 'İçerik Tasarımı', desc: 'Uzman eğitmenlerimizle size özel modüler içerikler üretiyoruz.' },
      { title: 'Ölçme ve Değerlendirme', desc: 'Eğitim sonrası gelişim takibi ve etki analizi raporları sunuyoruz.' }
    ],
    partners: [
      { id: 5, name: 'Udemy Business', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/200px-Udemy_logo.svg.png' },
    ],
    references: [
      { id: 6, name: 'Yönetici Geliştirme Programı', description: 'Türkiye’nin önde gelen perakende zincirinin 500 yöneticisi için 6 aylık liderlik serüveni.' },
    ]
  },
  {
    id: 'danismanlik',
    name: 'Stratejik Yönetim Danışmanlığı',
    shortName: 'Danışmanlık',
    path: '/danismanlik',
    icon: Briefcase,
    description: 'İşletmenizi pazar dinamiklerine hazırlayan, operasyonel verimliliği artıran ve sürdürülebilir büyümeyi hedefleyen stratejik danışmanlık.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000',
    color: '#F1D55A',
    features: [
      'Finansal Yeniden Yapılandırma',
      'Süreç Optimizasyonu',
      'Pazara Giriş Stratejileri',
      'İnsan Kaynakları Danışmanlığı'
    ],
    process: [
      { title: 'Mevcut Durum Analizi', desc: 'Röntgen çekerek şirketin finansal ve operasyonel açıklarını buluyoruz.' },
      { title: 'Stratejik Planlama', desc: 'Kısa, orta ve uzun vadeli aksiyon planları oluşturuyoruz.' },
      { title: 'Uygulama Refakati', desc: 'Değişim yönetimi sürecinde ekiplerinize liderlik ediyoruz.' }
    ],
    partners: [
      { id: 6, name: 'McKinsey', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/McKinsey_%26_Company_Logo.svg/200px-McKinsey_%26_Company_Logo.svg.png' },
    ],
    references: [
      { id: 7, name: 'KOBİ Dönüşüm Projesi', description: 'Üretim sektöründeki köklü firmanın yalın üretim prensipleriyle kapasitesinin %40 artırılması.' },
    ]
  },
  {
    id: 'reklam',
    name: 'Tam Hizmet Reklam Ajansı',
    shortName: 'Reklam',
    path: '/reklam',
    icon: Megaphone,
    description: 'Markanızı rakiplerinizden ayıran, hedef kitlenizle duygusal bağ kuran etkili, yaratıcı ve veri odaklı reklam kampanyaları.',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    color: '#D12F0E',
    features: [
      'Marka Konumlandırma',
      'Dijital Pazarlama & SEO',
      'Medya Planlama ve Satın Alma',
      'Kreatif Prodüksiyon'
    ],
    process: [
      { title: 'Brief ve Strateji', desc: 'Hedef kitle araştırması ve pazar dinamikleri analizi yapıyoruz.' },
      { title: 'Yaratıcı Süreç', desc: 'Kampanya ana fikrini ve görsel dünyasını inşa ediyoruz.' },
      { title: 'Yayın ve Optimizasyon', desc: 'Kampanyayı yayına alıyor, eş zamanlı veri analizi ile optimize ediyoruz.' }
    ],
    partners: [
      { id: 7, name: 'Google Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
      { id: 8, name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' },
    ],
    references: [
      { id: 8, name: 'Lansman Kampanyası', description: 'Yeni nesil elektrikli araç markasının Türkiye pazarına girişindeki tüm 360 derece iletişim faaliyetleri.' },
    ]
  }
];

export const companyInfo = {
  name: 'NIMA GRUP',
  email: 'info@nimagrup.com',
  phone: '+90 (212) 555 00 00',
  address: 'Levent Mah. Büyükdere Cad. Nima Plaza Beşiktaş / İstanbul',
  description: 'Farklı sektörlerdeki derin uzmanlığı ile kurumları geleceğe taşıyan, yenilikçi ve öncü holding.'
};
