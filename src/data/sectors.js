import { Antenna, Code, Gift, GraduationCap, Briefcase, Megaphone, Zap, Globe, Cpu, Award, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

import telecomImg from '../assets/telecom_sector.png';
import softwareImg from '../assets/software_sector.png';
import promotionImg from '../assets/promotion_sector.png';
import educationImg from '../assets/education_sector.png';
import consultingImg from '../assets/consulting_sector.png';
import advertisingImg from '../assets/advertising_sector.png';
import mainHeroImg from '../assets/nima_main_hero.png';
import aboutHeroImg from '../assets/about_hero.png';
import teamLeadershipImg from '../assets/team_leadership.png';
import techLabImg from '../assets/tech_lab.png';
import globalOfficesImg from '../assets/global_offices.png';
import projectAnalyticsImg from '../assets/project_analytics.png';

export { 
  mainHeroImg, 
  aboutHeroImg, 
  teamLeadershipImg, 
  techLabImg, 
  globalOfficesImg, 
  projectAnalyticsImg 
};

export const sectors = [
  {
    id: 'telekomunikasyon',
    name: 'Telekomünikasyon Altyapı Tespit',
    shortName: 'Telekomünikasyon',
    path: '/telekomunikasyon',
    icon: Antenna,
    badge: 'Yüksek Hızlı Altyapı',
    description: 'Güvenilir ve ileri teknoloji telekomünikasyon altyapı tespit ve projelendirme hizmetleri. Fiber optik, 5G ve baz istasyonu alanlarında uçtan uca çözümler sunuyoruz.',
    heroImage: telecomImg,
    color: '#D12F0E',
    lightColor: 'rgba(209, 47, 14, 0.12)',
    stats: [
      { label: 'Fiber Optik Hat', value: '12,500+ km' },
      { label: 'Tespit Edilen Saha', value: '4,200+' },
      { label: 'Saha Tamamlama', value: '%99.8' },
      { label: 'Aktif Şehir', value: '81 İlde' }
    ],
    features: [
      'Kapsamlı Saha Analizi & Jeo-Radar Tespiti',
      'Fiber Optik Güzergah Haritalama & CAD/GIS',
      'Radyo Frekans (RF) ve Sinyal Kalite Ölçümleri',
      'Uçtan Uca Telekomünikasyon Altyapı Projelendirme',
      '7/24 Kesintisiz Altyapı İzleme ve Bakım',
      'Bina İçi Kablosuz Erişim (DAS) Çözümleri'
    ],
    process: [
      { title: 'Saha Keşif ve Jeotermal Analiz', desc: 'Gelişmiş radar ve lazer ölçüm cihazları ile yer altı ve üstü altyapı tespiti gerçekleştiriyoruz.' },
      { title: '3D Projelendirme & Haritalama', desc: 'GIS tabanlı dijital ikiz ve CAD formatında yüksek hassasiyetli projeler kurguluyoruz.' },
      { title: 'Sertifikalı Kurulum & Devreye Alma', desc: 'Uluslararası standartlara uygun olarak yüksek performanslı fiber ve anten montajı yapıyoruz.' },
      { title: 'Test, Kabul ve Bakım', desc: 'OTDR ve sinyal analiz testleri sonrasında periyodik bakım desteği sunuyoruz.' }
    ],
    partners: [
      { id: 1, name: 'Ericsson', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ericsson_logo.svg/200px-Ericsson_logo.svg.png' },
      { id: 2, name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Huawei_logo.svg/200px-Huawei_logo.svg.png' },
      { id: 3, name: 'Nokia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/200px-Nokia_wordmark.svg.png' }
    ],
    references: [
      { id: 1, name: 'Kuzey Marmara Fiber Ağı', description: 'Otoyol güzergahı boyunca 400km kesintisiz yüksek hızlı fiber optik hattının tespiti ve 3D projelendirilmesi.', metric: '400 km Hat', status: 'Tamamlandı' },
      { id: 2, name: 'Akıllı Şehir Genişbant Projesi', description: 'Büyükşehir belediyesi bünyesinde 1500+ sensör noktası için kablosuz ve kablolu altyapı kurulumu.', metric: '1500+ Nokta', status: 'Devam Ediyor' },
      { id: 3, name: 'Ulusal 5G Baz İstasyonu Entegrasyonu', description: 'Türkiye genelinde 250+ kule noktasında sinyal ölçümü ve altyapı güçlendirme projesi.', metric: '250+ Kule', status: 'Tamamlandı' }
    ],
    faqs: [
      { q: 'Altyapı tespitinde hangi teknolojileri kullanıyorsunuz?', a: 'Yer altı radarları (GPR), yüksek çözünürlüklü lazer tarayıcılar (LiDAR) ve GIS tabanlı dijital haritalama sistemleri kullanıyoruz.' },
      { q: 'Projelerin teslim süresi ortalama ne kadardır?', a: 'Proje ölçeğine bağlı olarak küçük ve orta ölçekli saha tespitleri 1-3 hafta, büyükşehir altyapı projeleri 1-3 ay sürmektedir.' },
      { q: 'Çevre ve iş güvenliği sertifikalarınız var mı?', a: 'Evet, ISO 9001, ISO 45001 ve ISO 27001 sertifikalarına tam uyumlu çalışmaktayız.' }
    ]
  },
  {
    id: 'yazilim',
    name: 'Yazılım & Teknoloji Çözümleri',
    shortName: 'Yazılım',
    path: '/yazilim',
    icon: Code,
    badge: 'Yapay Zeka & Bulut',
    description: 'Kurumsal iş süreçlerinizi dijitalleştiren, yenilikçi, yapay zeka destekli, son derece güvenli ve ölçeklenebilir özel yazılım sistemleri geliştiriyoruz.',
    heroImage: softwareImg,
    color: '#F6C310',
    lightColor: 'rgba(246, 195, 16, 0.15)',
    stats: [
      { label: 'Aktif Kullanıcı', value: '1.2M+' },
      { label: 'Yazılım Projesi', value: '180+' },
      { label: 'Sistem Uptime', value: '%99.99' },
      { label: 'Kod Güvenliği', value: 'DevSecOps' }
    ],
    features: [
      'Özel Kurumsal ERP & CRM Yazılım Çözümleri',
      'iOS & Android Mobil Uygulama Geliştirme',
      'Bulut (AWS / Azure / GCP) Mimarisi ve DevSecOps',
      'Yapay Zeka & Makine Öğrenmesi Entegrasyonları',
      'Mikrohizmet (Microservices) & REST/GraphQL API',
      'Siber Güvenlik, Veri Şifreleme ve Sızma Testleri'
    ],
    process: [
      { title: 'Gereksinim & Mimari Analiz', desc: 'İş süreçlerinizi inceleyerek en uygun teknoloji yığınını ve mikrohizmet mimarisini kurguluyoruz.' },
      { title: 'Agile & Sprint Bazlı Geliştirme', desc: '2 haftalık sprintler halinde çalışan prototipleri sürekli test ortamına aktarıyoruz.' },
      { title: 'Otomatize Test & CI/CD Pipeline', desc: 'Birim, entegrasyon ve siber güvenlik testlerinden geçen kodları kesintisiz canlıya alıyoruz.' },
      { title: '7/24 İzleme & Bakım', desc: 'Sistem yüklerini anlık izleyen otomatize loglama ve destek ekibimizle yanınızdayız.' }
    ],
    partners: [
      { id: 3, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png' },
      { id: 4, name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png' }
    ],
    references: [
      { id: 3, name: 'Global Lojistik ERP Platformu', description: 'Uluslararası taşımacılık yapan firma için tüm operasyonları, filo takibini ve gümrüklemeyi yöneten bulut platform.', metric: '%40 Verimlilik', status: 'Tamamlandı' },
      { id: 4, name: 'Fintech Mobil Cüzdan & Ödeme', description: '200.000+ aktif kullanıcısı olan, BDDK standartlarına tam uyumlu yüksek güvenlikli ödeme sistemi.', metric: '200K+ Kullanıcı', status: 'Devam Ediyor' },
      { id: 5, name: 'AI Destekli Satış Tahminleme', description: 'Perakende devi için anlık stok ve talep tahminlemesi yapan yapay zeka algoritması.', metric: '%95 Doğruluk', status: 'Tamamlandı' }
    ],
    faqs: [
      { q: 'Hangi yazılım dilleri ve teknolojileri tercih ediyorsunuz?', a: 'React, Node.js, Python, Go, Java, Flutter ve bulut teknolojilerinde (AWS/GCP/Azure) uzmanız.' },
      { q: 'Var olan eski sistemlerimizle entegrasyon sağlayabilir misiniz?', a: 'Evet, Legacy sistemlerinize özel REST/SOAP API adaptörleri yazarak veri kaybı olmadan dönüşüm sağlıyoruz.' }
    ]
  },
  {
    id: 'promosyon',
    name: 'Kurumsal Promosyon Ürünleri',
    shortName: 'Promosyon',
    path: '/promosyon',
    icon: Gift,
    badge: 'Prestij & Kalite',
    description: 'Markanızı müşterilerinizin zihninde kalıcı kılacak, yüksek prestijli, özgün ve çevre dostu kurumsal hediye çözümleri tasarlıyoruz.',
    heroImage: promotionImg,
    color: '#E97B1A',
    lightColor: 'rgba(233, 123, 26, 0.12)',
    stats: [
      { label: 'Üretilen Ürün', value: '2.5M+' },
      { label: 'Kurumsal Müşteri', value: '350+' },
      { label: 'Sürdürülebilir Seri', value: '%100 Eko' },
      { label: 'Zamanında Teslimat', value: '%99.4' }
    ],
    features: [
      'VIP Kurumsal Özel Tasarım Setler',
      'Teknolojik & Akıllı Promosyon Ürünleri',
      'Çevre Dostu & Sürdürülebilir Ürünler',
      'Özel Ambalaj ve Lazer/Baskı Kişiselleştirmesi',
      'Toplu Dağıtım ve Dünya Geneli Lojistik',
      'Fuar ve Lansman Özel Konsept Üretimi'
    ],
    process: [
      { title: 'Marka Kimliği & Konsept Seçimi', desc: 'Sektörünüze ve bütçenize uygun en etkili hediye kategorilerini belirliyoruz.' },
      { title: '3D Tasarım & Numune Onayı', desc: 'Baskı öncesinde ürünlerin numunelerini 3D ve fiziksel olarak onayınıza sunuyoruz.' },
      { title: 'Hassas Üretim & Kalite Kontrol', desc: 'Yüksek kalite standartlarında üretiyor ve tek tek kalite kontrolünden geçiriyoruz.' },
      { title: 'Özel Paketleme ve Dağıtım', desc: 'Kişiselleştirilmiş kutularda adreslerinize güvenle teslim ediyoruz.' }
    ],
    partners: [
      { id: 4, name: 'Montblanc', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Montblanc_Logo.svg/200px-Montblanc_Logo.svg.png' }
    ],
    references: [
      { id: 5, name: 'Uluslararası Banka Yılbaşı VIP Seti', description: '50.000 çalışan ve prestijli müşteri için özel tasarlanmış ahşap ve bambu konsept hediyeler.', metric: '50.000 Kutulama', status: 'Tamamlandı' },
      { id: 6, name: 'Teknoloji Zirvesi Katılımcı Kitleri', description: '10.000 katılımcı için özel logolu powerbank, kablosuz kulaklık ve deri ajanda seti.', metric: '10.000 Set', status: 'Tamamlandı' }
    ],
    faqs: [
      { q: 'Minimum sipariş adediniz (MOQ) ne kadardır?', a: 'Ürün tipine bağlı olarak standart ürünlerde 50 adet, tamamen özel üretimlerde 100 adetten başlamaktadır.' },
      { q: 'Çevre dostu sertifikalı ürünleriniz var mı?', a: 'Evet, FSC sertifikalı kağıt, bambu, dönüştürülmüş plastik ve organik pamuk ürün portföyümüz mevcuttur.' }
    ]
  },
  {
    id: 'egitim',
    name: 'Kurumsal Eğitim Hizmetleri',
    shortName: 'Eğitim',
    path: '/egitim',
    icon: GraduationCap,
    badge: 'Gelişim & İnovasyon',
    description: 'Ekiplerinizin yetkinliklerini en üst seviyeye çıkaran, interaktif ve modern öğrenme metotlarıyla tasarlanmış profesyonel gelişim programları.',
    heroImage: educationImg,
    color: '#B7442E',
    lightColor: 'rgba(183, 68, 46, 0.12)',
    stats: [
      { label: 'Eğitilen Çalışan', value: '45,000+' },
      { label: 'Eğitim Programı', value: '120+' },
      { label: 'Katılımcı Memnuniyeti', value: '4.9 / 5' },
      { label: 'Sertifikasyon', value: 'Uluslararası' }
    ],
    features: [
      'Üst Düzey Liderlik ve Yönetici Gelişimi',
      'B2B Satış, Müzakere ve İkna Teknikleri Akademisi',
      'Çevik (Agile & Scrum) Dönüşüm Eğitimi',
      'Kurumsal Dijital Okuryazarlık ve Yapay Zeka Kullanımı',
      'Vaka Analizli İnteraktif Atölye Çalışmaları',
      'Eğitim Sonrası Yetkinlik Ölçüm & Etki Raporlaması'
    ],
    process: [
      { title: 'Yetkinlik & İhtiyaç Analizi', desc: 'Şirketinizin hedefleri doğrultusunda mevcut yetkinlik açıklarını tespit ediyoruz.' },
      { title: 'Özel Müfredat Tasarımı', desc: 'Sektörel vakalara dayalı, interaktif ve modüler eğitim müfredatları hazırlıyoruz.' },
      { title: 'Uzman Eğitmenlerle Uygulama', desc: 'Sektör lideri uzman eğitmenlerimizle teoriyi pratikle birleştiriyoruz.' },
      { title: 'Gelişim Takibi & Raporlama', desc: 'Eğitim sonrasında katılımcı gelişimini 3 ve 6 aylık periyotlarda ölçüyoruz.' }
    ],
    partners: [
      { id: 5, name: 'Udemy Business', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/200px-Udemy_logo.svg.png' }
    ],
    references: [
      { id: 6, name: 'Yönetici Liderlik Akademi Serüveni', description: 'Perakende zincirinin 500 mağaza yöneticisine özel tasarlanan 6 aylık modüler liderlik okulu.', metric: '500 Lider', status: 'Tamamlandı' },
      { id: 7, name: 'Agile Kurumsal Dönüşüm Programı', description: 'Telekom firmasının 1200 mühendisine çevik metodoloji ve proje yönetimi sertifikasyonu.', metric: '1200 Mühendis', status: 'Tamamlandı' }
    ],
    faqs: [
      { q: 'Eğitimler yüz yüze mi yoksa online mı gerçekleşiyor?', a: 'İsteğe bağlı olarak yüz yüze hibrit sınıf ortamında veya etkileşimli dijital platformumuz üzerinden sunulmaktadır.' }
    ]
  },
  {
    id: 'danismanlik',
    name: 'Stratejik Yönetim Danışmanlığı',
    shortName: 'Danışmanlık',
    path: '/danismanlik',
    icon: Briefcase,
    badge: 'Strateji & Büyüme',
    description: 'İşletmenizi küresel pazar dinamiklerine hazırlayan, operasyonel verimliliği artıran ve sürdürülebilir kârlılığı hedefleyen danışmanlık hizmetleri.',
    heroImage: consultingImg,
    color: '#F1D55A',
    lightColor: 'rgba(241, 213, 90, 0.15)',
    stats: [
      { label: 'Yönetilen Bütçe', value: '$500M+' },
      { label: 'Dönüşüm Projesi', value: '95+' },
      { label: 'Ortalama Tasarruf', value: '%28' },
      { label: 'Sektörel Uzmanlık', value: '12 Sektör' }
    ],
    features: [
      'Kurumsal Finans & Yeniden Yapılandırma',
      'Yalın Üretim ve Süreç Optimizasyonu',
      'Uluslararası Pazara Giriş & İhracat Stratejisi',
      'İnsan Kaynakları & Organizasyonel Tasarım',
      'Dijital Dönüşüm Yol Haritası Belirleme',
      'Şirket Birleşme ve Satın Alma (M&A) Danışmanlığı'
    ],
    process: [
      { title: 'Detaylı Şirket Röntgeni & Teşhis', desc: 'Finansal, operasyonel ve teknolojik altyapınızı derinlemesine inceliyoruz.' },
      { title: 'Stratejik Aksiyon Yol Haritası', desc: 'Ölçülebilir KPI ve ROI hedefleri içeren kısa, orta ve uzun vadeli plan çıkarıyoruz.' },
      { title: 'Birebir Uygulama Refakati', desc: 'Sadece danışmanlık vermekle kalmayıp, dönüşüm sürecinde sahada liderlik ediyoruz.' },
      { title: 'Sürekli Performans Denetimi', desc: 'Elde edilen kazanımların kalıcı olması için dönemsel denetimler yapıyoruz.' }
    ],
    partners: [
      { id: 6, name: 'McKinsey', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/McKinsey_%26_Company_Logo.svg/200px-McKinsey_%26_Company_Logo.svg.png' }
    ],
    references: [
      { id: 8, name: 'KOBİ Sanayi Dönüşüm Projesi', description: 'Üretim sektöründeki köklü firmanın yalın üretim prensipleriyle operasyonel kapasitesinin %40 artırılması.', metric: '%40 Kapasite', status: 'Tamamlandı' },
      { id: 9, name: 'Yurtdışı Pazara Açılım Stratejisi', description: 'Gıda markasının Avrupa ve Orta Doğu pazarında 14 ülkeye ihracat ağının kurulması.', metric: '14 Ülke', status: 'Tamamlandı' }
    ],
    faqs: [
      { q: 'Danışmanlık sürecinde ne kadar süre şirkette bulunuyorsunuz?', a: 'Projelerin ihtiyacına göre tam zamanlı yerinde refakat veya haftalık stratejik koordinasyon toplantıları düzenliyoruz.' }
    ]
  },
  {
    id: 'reklam',
    name: 'Tam Hizmet Reklam Ajansı',
    shortName: 'Reklam',
    path: '/reklam',
    icon: Megaphone,
    badge: '360° Pazarlama & Kreatif',
    description: 'Markanızı rakiplerinizden ayıran, hedef kitlenizle duygusal ve güçlü bağlar kuran, yüksek dönüşüm odaklı yaratıcı reklam kampanyaları.',
    heroImage: advertisingImg,
    color: '#D12F0E',
    lightColor: 'rgba(209, 47, 14, 0.12)',
    stats: [
      { label: 'Erişilen Kitle', value: '50M+' },
      { label: 'Ödüllü Kampanya', value: '32' },
      { label: 'Ortalama ROI', value: '4.5x' },
      { label: 'Aylık İçerik', value: '1,500+' }
    ],
    features: [
      '360° Marka Konumlandırma & Kimlik Tasarımı',
      'Performans Pazarlaması, SEO & Google Ads',
      'Sosyal Medya Yönetimi & Prodüksiyon',
      'Medya Planlama ve Ulusal Satın Alma',
      '3D Animasyon & Reklam Filmi Prodüksiyonu',
      'Influencer Pazarlaması & İtibar Yönetimi'
    ],
    process: [
      { title: 'Tüketici İçgörüsü ve Brief Analizi', desc: 'Pazarı, rakipleri ve hedef kitlenizin satın alma davranışlarını inceliyoruz.' },
      { title: 'Yaratıcı Konsept & Big Idea', desc: 'Markanız için akılda kalıcı, özgün kampanya söylemi ve görsel dünyasını kurguluyoruz.' },
      { title: 'Çok Kanallı Yayın & Prodüksiyon', desc: 'TV, Dijital, Açıkhava ve Sosyal medyada eş zamanlı lansman başlatıyoruz.' },
      { title: 'Anlık Veri Analizi ve Optimizasyon', desc: 'Kampanya boyunca dönüşüm verilerini takip ederek reklam harcamalarınızı optimize ediyoruz.' }
    ],
    partners: [
      { id: 7, name: 'Google Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
      { id: 8, name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' }
    ],
    references: [
      { id: 10, name: 'Elektrikli Araç Lansman Kampanyası', description: 'Yeni nesil EV markasının Türkiye pazarına girişindeki tüm 360 derece iletişim ve dijital lansman faaliyetleri.', metric: '15M+ İzlenme', status: 'Tamamlandı' },
      { id: 11, name: 'E-Ticaret Dönüşüm ve SEO Hamlesi', description: 'Moda markasının dijital reklam ROI oranını 2.1x seviyesinden 5.8x seviyesine çıkaran performans kampanyası.', metric: '5.8x ROAS', status: 'Tamamlandı' }
    ],
    faqs: [
      { q: 'Performans pazarlamasında bütçe yönetimi nasıl yapılıyor?', a: 'Harcadığınız her 1 TL’nin dönüşüm oranını anlık dashboardlar üzerinden şeffaf şekilde raporluyoruz.' }
    ]
  }
];

export const globalOffices = [
  { city: 'İstanbul', name: 'Nima Plaza HQ', address: 'Levent Mah. Büyükdere Cad. No:142 Beşiktaş', role: 'Genel Merkez & Ar-Ge Center', phone: '+90 212 555 0000', badge: 'Ana Merkez' },
  { city: 'Ankara', name: 'Nima Teknokent', address: 'ODTÜ Teknokent İnovasyon Binası No:8 Çankaya', role: 'Telekom & Savunma Ar-Ge', phone: '+90 312 444 0000', badge: 'Ar-Ge Üssü' },
  { city: 'İzmir', name: 'Nima Ege Office', address: 'Mistral Kule Kat:18 Bayraklı', role: 'Lojistik & Yazılım Operasyon', phone: '+90 232 333 0000', badge: 'Bölge Ofisi' },
  { city: 'Frankfurt', name: 'Nima Europe GmbH', address: 'Mainzer Landstraße 180, 60327 Frankfurt am Main', role: 'Avrupa Operasyonları & M&A', phone: '+49 69 1234 5678', badge: 'Global Hub' },
  { city: 'Dubai', name: 'Nima MEA Tower', address: 'DIFC Gate Precinct Building 4, Dubai UAE', role: 'Orta Doğu & Körfez Pazarı', phone: '+971 4 987 6543', badge: 'Global Hub' }
];

export const companyMilestones = [
  { year: '1999', title: 'Kuruluş', desc: 'Telekomünikasyon altyapı projeleri ile temellerimiz atıldı.' },
  { year: '2005', title: 'Yazılım & Teknoloji', desc: 'Yazılım departmanımız kurularak ilk kurumsal ERP yazılımı geliştirildi.' },
  { year: '2012', title: 'Promosyon & Medya', desc: 'Kurumsal hediye üretimi ve tam hizmet reklam ajansı bünyemize katıldı.' },
  { year: '2018', title: 'Eğitim & Danışmanlık', desc: 'Stratejik yönetim danışmanlığı ve kurumsal akademi birimlerimiz faaliyete geçti.' },
  { year: '2024+', title: 'Global Şirketler Grubu', desc: '6 ana sektörde 1200+ uzman ile global standartlarda lider holding yapısı.' }
];

export const companyValues = [
  { icon: ShieldCheck, title: 'Güvenilirlik & Şeffaflık', desc: 'Tüm süreçlerimizde açık iletişim, etiktik ve tavizsiz iş ahlakı.' },
  { icon: Globe, title: 'Küresel Vizyon & İnovasyon', desc: 'Dünya standartlarında teknolojilerle sürdürülebilir çözümler üretmek.' },
  { icon: Cpu, title: 'Yapay Zeka & Dijital Dönüşüm', desc: 'Geleceğin teknolojilerini iş yapış biçimlerimize entegre etmek.' },
  { icon: Award, title: 'Mükemmeliyetçilik', desc: 'Müşterilerimize ve paydaşlarımıza en yüksek katma değeri sunmak.' }
];

export const companyInfo = {
  name: 'NIMA GRUP',
  email: 'info@nimagrup.com',
  phone: '+90 (212) 555 00 00',
  address: 'Levent Mah. Büyükdere Cad. Nima Plaza No:142 Beşiktaş / İstanbul',
  description: 'Telekomünikasyondan yazılıma, danışmanlıktan reklama 6 ana sektörde yenilikçi ve öncü çözümleriyle kurumsal geleceği inşa eden holding.'
};
