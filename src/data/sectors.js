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
  projectAnalyticsImg,
  telecomImg,
  softwareImg,
  promotionImg,
  educationImg,
  consultingImg,
  advertisingImg
};

export const sectors = [
  {
    id: 'telekomunikasyon',
    name: 'Telekomünikasyon Altyapı Tespit',
    name_en: 'Telecommunications Infrastructure Detection',
    shortName: 'Telekomünikasyon',
    shortName_en: 'Telecommunications',
    path: '/telekomunikasyon',
    icon: Antenna,
    badge: 'Yüksek Hızlı Altyapı',
    badge_en: 'High Speed Infrastructure',
    description: 'Güvenilir ve ileri teknoloji telekomünikasyon altyapı tespit ve projelendirme hizmetleri. Fiber optik, 5G ve baz istasyonu alanlarında uçtan uca çözümler sunuyoruz.',
    description_en: 'Reliable and high-tech telecommunications infrastructure detection and project engineering services. End-to-end solutions in fiber optics, 5G, and cell towers.',
    heroImage: telecomImg,
    color: '#D12F0E',
    lightColor: 'rgba(209, 47, 14, 0.12)',
    stats: [
      { label: 'Fiber Optik Hat', value: '12,500+ km' },
      { label: 'Tespit Edilen Saha', value: '4,200+' },
      { label: 'Saha Tamamlama', value: '%99.8' },
      { label: 'Aktif Şehir', value: '81 İlde' }
    ],
    stats_en: [
      { label: 'Fiber Optik Line', value: '12,500+ km' },
      { label: 'Sites Detected', value: '4,200+' },
      { label: 'Field Completion', value: '99.8%' },
      { label: 'Active Cities', value: '81 Provinces' }
    ],
    features: [
      'Kapsamlı Saha Analizi & Jeo-Radar Tespiti',
      'Fiber Optik Güzergah Haritalama & CAD/GIS',
      'Radyo Frekans (RF) ve Sinyal Kalite Ölçümleri',
      'Uçtan Uca Telekomünikasyon Altyapı Projelendirme',
      '7/24 Kesintisiz Altyapı İzleme ve Bakım',
      'Bina İçi Kablosuz Erişim (DAS) Çözümleri'
    ],
    features_en: [
      'Comprehensive Field Analysis & GPR Detection',
      'Fiber Optic Route Mapping & CAD/GIS',
      'Radio Frequency (RF) & Signal Quality Measurements',
      'End-to-End Telecom Infrastructure Project Design',
      '24/7 Uninterrupted Infrastructure Monitoring & Maintenance',
      'In-Building Distributed Antenna System (DAS) Solutions'
    ],
    process: [
      { title: 'Saha Keşif ve Jeotermal Analiz', desc: 'Gelişmiş radar ve lazer ölçüm cihazları ile yer altı ve üstü altyapı tespiti gerçekleştiriyoruz.' },
      { title: '3D Projelendirme & Haritalama', desc: 'GIS tabanlı dijital ikiz ve CAD formatında yüksek hassasiyetli projeler kurguluyoruz.' },
      { title: 'Sertifikalı Kurulum & Devreye Alma', desc: 'Uluslararası standartlara uygun olarak yüksek performanslı fiber ve anten montajı yapıyoruz.' },
      { title: 'Test, Kabul ve Bakım', desc: 'OTDR ve sinyal analiz testleri sonrasında periyodik bakım desteği sunuyoruz.' }
    ],
    process_en: [
      { title: 'Field Discovery & Subsurface Analysis', desc: 'Detecting underground and surface infrastructure using advanced radar and laser measuring devices.' },
      { title: '3D Project Engineering & Mapping', desc: 'Designing high-precision digital twin and CAD format projects based on GIS.' },
      { title: 'Certified Installation & Commissioning', desc: 'Mounting high-performance fiber and antennas according to international standards.' },
      { title: 'Testing, Acceptance & Maintenance', desc: 'Providing periodic maintenance support following OTDR and signal analysis tests.' }
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
    references_en: [
      { id: 1, name: 'North Marmara Fiber Network', description: 'Detection and 3D design of a 400km uninterrupted high-speed fiber optic line along highway routes.', metric: '400 km Line', status: 'Completed' },
      { id: 2, name: 'Smart City Broadband Project', description: 'Wireless and wired infrastructure installation for 1500+ sensor points for metropolitan municipality.', metric: '1500+ Points', status: 'In Progress' },
      { id: 3, name: 'National 5G Tower Integration', description: 'Signal measurement and infrastructure reinforcement project at 250+ tower sites nationwide.', metric: '250+ Towers', status: 'Completed' }
    ],
    faqs: [
      { q: 'Altyapı tespitinde hangi teknolojileri kullanıyorsunuz?', a: 'Yer altı radarları (GPR), yüksek çözünürlüklü lazer tarayıcılar (LiDAR) ve GIS tabanlı dijital haritalama sistemleri kullanıyoruz.' },
      { q: 'Projelerin teslim süresi ortalama ne kadardır?', a: 'Proje ölçeğine bağlı olarak küçük ve orta ölçekli saha tespitleri 1-3 hafta, büyükşehir altyapı projeleri 1-3 ay sürmektedir.' },
      { q: 'Çevre ve iş güvenliği sertifikalarınız var mı?', a: 'Evet, ISO 9001, ISO 45001 ve ISO 27001 sertifikalarına tam uyumlu çalışmaktayız.' }
    ],
    faqs_en: [
      { q: 'What technologies do you use in infrastructure detection?', a: 'We use Ground Penetrating Radar (GPR), high-resolution LiDAR scanners, and GIS-based digital mapping systems.' },
      { q: 'What is the average project delivery time?', a: 'Depending on scale, small to medium field detections take 1-3 weeks, while metropolitan projects take 1-3 months.' },
      { q: 'Do you have environmental and occupational safety certificates?', a: 'Yes, we operate fully compliant with ISO 9001, ISO 45001, and ISO 27001 certifications.' }
    ]
  },
  {
    id: 'yazilim',
    name: 'Yazılım & Teknoloji Çözümleri',
    name_en: 'Software & Technology Solutions',
    shortName: 'Yazılım',
    shortName_en: 'Software',
    path: '/yazilim',
    icon: Code,
    badge: 'Yapay Zeka & Bulut',
    badge_en: 'Artificial Intelligence & Cloud',
    description: 'Kurumsal iş süreçlerinizi dijitalleştiren, yenilikçi, yapay zeka destekli, son derece güvenli ve ölçeklenebilir özel yazılım sistemleri geliştiriyoruz.',
    description_en: 'We develop innovative, AI-assisted, highly secure, and scalable custom software systems that digitize your corporate business processes.',
    heroImage: softwareImg,
    color: '#F6C310',
    lightColor: 'rgba(246, 195, 16, 0.15)',
    stats: [
      { label: 'Aktif Kullanıcı', value: '1.2M+' },
      { label: 'Yazılım Projesi', value: '180+' },
      { label: 'Sistem Uptime', value: '%99.99' },
      { label: 'Kod Güvenliği', value: 'DevSecOps' }
    ],
    stats_en: [
      { label: 'Active Users', value: '1.2M+' },
      { label: 'Software Projects', value: '180+' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Code Security', value: 'DevSecOps' }
    ],
    features: [
      'Özel Kurumsal ERP & CRM Yazılım Çözümleri',
      'iOS & Android Mobil Uygulama Geliştirme',
      'Bulut (AWS / Azure / GCP) Mimarisi ve DevSecOps',
      'Yapay Zeka & Makine Öğrenmesi Entegrasyonları',
      'Mikrohizmet (Microservices) & REST/GraphQL API',
      'Siber Güvenlik, Veri Şifreleme ve Sızma Testleri'
    ],
    features_en: [
      'Custom Corporate ERP & CRM Software Solutions',
      'iOS & Android Mobile App Development',
      'Cloud (AWS / Azure / GCP) Architecture & DevSecOps',
      'Artificial Intelligence & Machine Learning Integrations',
      'Microservices & REST/GraphQL API Architecture',
      'Cybersecurity, Data Encryption & Penetration Testing'
    ],
    process: [
      { title: 'Gereksinim & Mimari Analiz', desc: 'İş süreçlerinizi inceleyerek en uygun teknoloji yığınını ve mikrohizmet mimarisini kurguluyoruz.' },
      { title: 'Agile & Sprint Bazlı Geliştirme', desc: '2 haftalık sprintler halinde çalışan prototipleri sürekli test ortamına aktarıyoruz.' },
      { title: 'Otomatize Test & CI/CD Pipeline', desc: 'Birim, entegrasyon ve siber güvenlik testlerinden geçen kodları kesintisiz canlıya alıyoruz.' },
      { title: '7/24 İzleme & Bakım', desc: 'Sistem yüklerini anlık izleyen otomatize loglama ve destek ekibimizle yanınızdayız.' }
    ],
    process_en: [
      { title: 'Requirements & Architecture Analysis', desc: 'Analyzing your business processes to construct the optimal tech stack and microservices architecture.' },
      { title: 'Agile & Sprint-Based Development', desc: 'Deploying working prototypes to test environments continuously in 2-week sprints.' },
      { title: 'Automated Testing & CI/CD Pipeline', desc: 'Deploying code passing unit, integration, and security tests smoothly into production.' },
      { title: '24/7 Monitoring & Maintenance', desc: 'Standing by with automated logging and support teams monitoring system loads in real time.' }
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
    references_en: [
      { id: 3, name: 'Global Logistics ERP Platform', description: 'Cloud platform managing operations, fleet tracking, and customs clearing for an international transport company.', metric: '40% Efficiency', status: 'Completed' },
      { id: 4, name: 'Fintech Mobile Wallet & Payment', description: 'High-security payment system with 200,000+ active users, compliant with regulatory standards.', metric: '200K+ Users', status: 'In Progress' },
      { id: 5, name: 'AI Demand & Sales Forecasting', description: 'Artificial intelligence algorithm predicting real-time stock and demand for a retail giant.', metric: '95% Accuracy', status: 'Completed' }
    ],
    faqs: [
      { q: 'Hangi yazılım dilleri ve teknolojileri tercih ediyorsunuz?', a: 'React, Node.js, Python, Go, Java, Flutter ve bulut teknolojilerinde (AWS/GCP/Azure) uzmanız.' },
      { q: 'Var olan eski sistemlerimizle entegrasyon sağlayabilir misiniz?', a: 'Evet, Legacy sistemlerinize özel REST/SOAP API adaptörleri yazarak veri kaybı olmadan dönüşüm sağlıyoruz.' }
    ],
    faqs_en: [
      { q: 'Which programming languages and tech stacks do you prefer?', a: 'We specialize in React, Node.js, Python, Go, Java, Flutter, and cloud platforms (AWS/GCP/Azure).' },
      { q: 'Can you integrate with our existing legacy systems?', a: 'Yes, we build custom REST/SOAP API adapters for legacy systems to ensure seamless data transition.' }
    ]
  },
  {
    id: 'promosyon',
    name: 'Kurumsal Promosyon Ürünleri',
    name_en: 'Corporate Promotional Products',
    shortName: 'Promosyon',
    shortName_en: 'Promotion',
    path: '/promosyon',
    icon: Gift,
    badge: 'Prestij & Kalite',
    badge_en: 'Prestige & Quality',
    description: 'Markanızı müşterilerinizin zihninde kalıcı kılacak, yüksek prestijli, özgün ve çevre dostu kurumsal hediye çözümleri tasarlıyoruz.',
    description_en: 'We design high-prestige, unique, and eco-friendly corporate gift solutions that keep your brand memorable to your clients.',
    heroImage: promotionImg,
    color: '#E97B1A',
    lightColor: 'rgba(233, 123, 26, 0.12)',
    stats: [
      { label: 'Üretilen Ürün', value: '2.5M+' },
      { label: 'Kurumsal Müşteri', value: '350+' },
      { label: 'Sürdürülebilir Seri', value: '%100 Eko' },
      { label: 'Zamanında Teslimat', value: '%99.4' }
    ],
    stats_en: [
      { label: 'Products Produced', value: '2.5M+' },
      { label: 'Corporate Clients', value: '350+' },
      { label: 'Sustainable Series', value: '100% Eco' },
      { label: 'On-Time Delivery', value: '99.4%' }
    ],
    features: [
      'VIP Kurumsal Özel Tasarım Setler',
      'Teknolojik & Akıllı Promosyon Ürünleri',
      'Çevre Dostu & Sürdürülebilir Ürünler',
      'Özel Ambalaj ve Lazer/Baskı Kişiselleştirmesi',
      'Toplu Dağıtım ve Dünya Geneli Lojistik',
      'Fuar ve Lansman Özel Konsept Üretimi'
    ],
    features_en: [
      'VIP Corporate Custom-Designed Gift Sets',
      'Technological & Smart Promotional Items',
      'Eco-Friendly & Sustainable Products',
      'Custom Packaging & Laser/Print Personalization',
      'Bulk Distribution & Worldwide Logistics',
      'Exhibition & Launch Event Concept Production'
    ],
    process: [
      { title: 'Marka Kimliği & Konsept Seçimi', desc: 'Sektörünüze ve bütçenize uygun en etkili hediye kategorilerini belirliyoruz.' },
      { title: '3D Tasarım & Numune Onayı', desc: 'Baskı öncesinde ürünlerin numunelerini 3D ve fiziksel olarak onayınıza sunuyoruz.' },
      { title: 'Hassas Üretim & Kalite Kontrol', desc: 'Yüksek kalite standartlarında üretiyor ve tek tek kalite kontrolünden geçiriyoruz.' },
      { title: 'Özel Paketleme ve Dağıtım', desc: 'Kişiselleştirilmiş kutularda adreslerinize güvenle teslim ediyoruz.' }
    ],
    process_en: [
      { title: 'Brand Identity & Concept Selection', desc: 'Determining the most effective gift categories suited to your industry and budget.' },
      { title: '3D Design & Sample Approval', desc: 'Submitting 3D and physical samples for your approval prior to mass printing.' },
      { title: 'Precision Manufacturing & Quality Control', desc: 'Manufacturing at high quality standards and performing individual quality inspections.' },
      { title: 'Custom Packaging & Distribution', desc: 'Delivering safely to your target addresses in personalized boxes.' }
    ],
    partners: [
      { id: 4, name: 'Montblanc', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Montblanc_Logo.svg/200px-Montblanc_Logo.svg.png' }
    ],
    references: [
      { id: 5, name: 'Uluslararası Banka Yılbaşı VIP Seti', description: '50.000 çalışan ve prestijli müşteri için özel tasarlanmış ahşap ve bambu konsept hediyeler.', metric: '50.000 Kutulama', status: 'Tamamlandı' },
      { id: 6, name: 'Teknoloji Zirvesi Katılımcı Kitleri', description: '10.000 katılımcı için özel logolu powerbank, kablosuz kulaklık ve deri ajanda seti.', metric: '10.000 Set', status: 'Tamamlandı' }
    ],
    references_en: [
      { id: 5, name: 'International Bank VIP New Year Set', description: 'Custom-designed wooden and bamboo gift sets for 50,000 employees and executive clients.', metric: '50,000 Boxes', status: 'Completed' },
      { id: 6, name: 'Tech Summit Participant Kits', description: 'Custom-branded powerbank, wireless earbuds, and leather notebook set for 10,000 attendees.', metric: '10,000 Sets', status: 'Completed' }
    ],
    faqs: [
      { q: 'Minimum sipariş adediniz (MOQ) ne kadardır?', a: 'Ürün tipine bağlı olarak standart ürünlerde 50 adet, tamamen özel üretimlerde 100 adetten başlamaktadır.' },
      { q: 'Çevre dostu sertifikalı ürünleriniz var mı?', a: 'Evet, FSC sertifikalı kağıt, bambu, dönüştürülmüş plastik ve organik pamuk ürün portföyümüz mevcuttur.' }
    ],
    faqs_en: [
      { q: 'What is your minimum order quantity (MOQ)?', a: 'Depending on product type, standard items start at 50 units, while fully custom productions start at 100 units.' },
      { q: 'Do you have certified eco-friendly products?', a: 'Yes, our portfolio includes FSC-certified paper, bamboo, recycled plastics, and organic cotton.' }
    ]
  },
  {
    id: 'egitim',
    name: 'Kurumsal Eğitim Hizmetleri',
    name_en: 'Corporate Training Services',
    shortName: 'Eğitim',
    shortName_en: 'Training',
    path: '/egitim',
    icon: GraduationCap,
    badge: 'Gelişim & İnovasyon',
    badge_en: 'Growth & Innovation',
    description: 'Ekiplerinizin yetkinliklerini en üst seviyeye çıkaran, interaktif ve modern öğrenme metotlarıyla tasarlanmış profesyonel gelişim programları.',
    description_en: 'Professional development programs designed with interactive, modern learning methodologies that elevate your teams\' competencies to the highest level.',
    heroImage: educationImg,
    color: '#B7442E',
    lightColor: 'rgba(183, 68, 46, 0.12)',
    stats: [
      { label: 'Eğitilen Çalışan', value: '45,000+' },
      { label: 'Eğitim Programı', value: '120+' },
      { label: 'Katılımcı Memnuniyeti', value: '4.9 / 5' },
      { label: 'Sertifikasyon', value: 'Uluslararası' }
    ],
    stats_en: [
      { label: 'Employees Trained', value: '45,000+' },
      { label: 'Training Programs', value: '120+' },
      { label: 'Participant Satisfaction', value: '4.9 / 5' },
      { label: 'Certification', value: 'International' }
    ],
    features: [
      'Üst Düzey Liderlik ve Yönetici Gelişimi',
      'B2B Satış, Müzakere ve İkna Teknikleri Akademisi',
      'Çevik (Agile & Scrum) Dönüşüm Eğitimi',
      'Kurumsal Dijital Okuryazarlık ve Yapay Zeka Kullanımı',
      'Vaka Analizli İnteraktif Atölye Çalışmaları',
      'Eğitim Sonrası Yetkinlik Ölçüm & Etki Raporlaması'
    ],
    features_en: [
      'Executive Leadership & Manager Development',
      'B2B Sales, Negotiation & Persuasion Academy',
      'Agile & Scrum Transformation Training',
      'Corporate Digital Literacy & AI Utilization',
      'Case Study Interactive Workshop Sessions',
      'Post-Training Competency Measurement & Impact Reporting'
    ],
    process: [
      { title: 'Yetkinlik & İhtiyaç Analizi', desc: 'Şirketinizin hedefleri doğrultusunda mevcut yetkinlik açıklarını tespit ediyoruz.' },
      { title: 'Özel Müfredat Tasarımı', desc: 'Sektörel vakalara dayalı, interaktif ve modüler eğitim müfredatları hazırlıyoruz.' },
      { title: 'Uzman Eğitmenlerle Uygulama', desc: 'Sektör lideri uzman eğitmenlerimizle teoriyi pratikle birleştiriyoruz.' },
      { title: 'Gelişim Takibi & Raporlama', desc: 'Eğitim sonrasında katılımcı gelişimini 3 ve 6 aylık periyotlarda ölçüyoruz.' }
    ],
    process_en: [
      { title: 'Competency & Needs Analysis', desc: 'Identifying current competency gaps aligned with your organization\'s goals.' },
      { title: 'Custom Curriculum Design', desc: 'Preparing interactive and modular training curricula based on industry case studies.' },
      { title: 'Execution with Expert Trainers', desc: 'Combining theory with practice alongside industry-leading expert trainers.' },
      { title: 'Growth Tracking & Reporting', desc: 'Measuring participant development in 3 and 6-month post-training cycles.' }
    ],
    partners: [
      { id: 5, name: 'Udemy Business', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/200px-Udemy_logo.svg.png' }
    ],
    references: [
      { id: 6, name: 'Yönetici Liderlik Akademi Serüveni', description: 'Perakende zincirinin 500 mağaza yöneticisine özel tasarlanan 6 aylık modüler liderlik okulu.', metric: '500 Lider', status: 'Tamamlandı' },
      { id: 7, name: 'Agile Kurumsal Dönüşüm Programı', description: 'Telekom firmasının 1200 mühendisine çevik metodoloji ve proje yönetimi sertifikasyonu.', metric: '1200 Mühendis', status: 'Tamamlandı' }
    ],
    references_en: [
      { id: 6, name: 'Executive Leadership Academy Journey', description: '6-month modular leadership academy tailored for 500 store managers of a retail chain.', metric: '500 Leaders', status: 'Completed' },
      { id: 7, name: 'Agile Corporate Transformation Program', description: 'Agile methodology and project management certification for 1200 engineers at a telecom firm.', metric: '1200 Engineers', status: 'Completed' }
    ],
    faqs: [
      { q: 'Eğitimler yüz yüze mi yoksa online mı gerçekleşiyor?', a: 'İsteğe bağlı olarak yüz yüze hibrit sınıf ortamında veya etkileşimli dijital platformumuz üzerinden sunulmaktadır.' }
    ],
    faqs_en: [
      { q: 'Are training sessions in-person or online?', a: 'Delivered in-person, in hybrid classroom settings, or via our interactive digital learning platform upon request.' }
    ]
  },
  {
    id: 'danismanlik',
    name: 'Stratejik Yönetim Danışmanlığı',
    name_en: 'Strategic Management Consulting',
    shortName: 'Danışmanlık',
    shortName_en: 'Consulting',
    path: '/danismanlik',
    icon: Briefcase,
    badge: 'Strateji & Büyüme',
    badge_en: 'Strategy & Growth',
    description: 'İşletmenizi küresel pazar dinamiklerine hazırlayan, operasyonel verimliliği artıran ve sürdürülebilir kârlılığı hedefleyen danışmanlık hizmetleri.',
    description_en: 'Consulting services preparing your business for global market dynamics, boosting operational efficiency, and driving sustainable profitability.',
    heroImage: consultingImg,
    color: '#F1D55A',
    lightColor: 'rgba(241, 213, 90, 0.15)',
    stats: [
      { label: 'Yönetilen Bütçe', value: '$500M+' },
      { label: 'Dönüşüm Projesi', value: '95+' },
      { label: 'Ortalama Tasarruf', value: '%28' },
      { label: 'Sektörel Uzmanlık', value: '12 Sektör' }
    ],
    stats_en: [
      { label: 'Budget Managed', value: '$500M+' },
      { label: 'Transformation Projects', value: '95+' },
      { label: 'Average Savings', value: '28%' },
      { label: 'Industry Expertise', value: '12 Sectors' }
    ],
    features: [
      'Kurumsal Finans & Yeniden Yapılandırma',
      'Yalın Üretim ve Süreç Optimizasyonu',
      'Uluslararası Pazara Giriş & İhracat Stratejisi',
      'İnsan Kaynakları & Organizasyonel Tasarım',
      'Dijital Dönüşüm Yol Haritası Belirleme',
      'Şirket Birleşme ve Satın Alma (M&A) Danışmanlığı'
    ],
    features_en: [
      'Corporate Finance & Restructuring',
      'Lean Production & Process Optimization',
      'International Market Entry & Export Strategy',
      'Human Resources & Organizational Design',
      'Digital Transformation Roadmap Definition',
      'Mergers & Acquisitions (M&A) Advisory'
    ],
    process: [
      { title: 'Detaylı Şirket Röntgeni & Teşhis', desc: 'Finansal, operasyonel ve teknolojik altyapınızı derinlemesine inceliyoruz.' },
      { title: 'Stratejik Aksiyon Yol Haritası', desc: 'Ölçülebilir KPI ve ROI hedefleri içeren kısa, orta ve uzun vadeli plan çıkarıyoruz.' },
      { title: 'Birebir Uygulama Refakati', desc: 'Sadece danışmanlık vermekle kalmayıp, dönüşüm sürecinde sahada liderlik ediyoruz.' },
      { title: 'Sürekli Performans Denetimi', desc: 'Elde edilen kazanımların kalıcı olması için dönemsel denetimler yapıyoruz.' }
    ],
    process_en: [
      { title: 'Deep Company Diagnosis & X-Ray', desc: 'Examining your financial, operational, and technological infrastructure in depth.' },
      { title: 'Strategic Action Roadmap', desc: 'Formulating short, medium, and long-term plans containing measurable KPIs and ROI targets.' },
      { title: 'Hands-on Implementation Coaching', desc: 'Leading on the field during transformation rather than merely offering advice.' },
      { title: 'Continuous Performance Audit', desc: 'Conducting periodic audits to ensure that performance gains remain permanent.' }
    ],
    partners: [
      { id: 6, name: 'McKinsey', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/McKinsey_%26_Company_Logo.svg/200px-McKinsey_%26_Company_Logo.svg.png' }
    ],
    references: [
      { id: 8, name: 'KOBİ Sanayi Dönüşüm Projesi', description: 'Üretim sektöründeki köklü firmanın yalın üretim prensipleriyle operasyonel kapasitesinin %40 artırılması.', metric: '%40 Kapasite', status: 'Tamamlandı' },
      { id: 9, name: 'Yurtdışı Pazara Açılım Stratejisi', description: 'Gıda markasının Avrupa ve Orta Doğu pazarında 14 ülkeye ihracat ağının kurulması.', metric: '14 Ülke', status: 'Tamamlandı' }
    ],
    references_en: [
      { id: 8, name: 'SME Industrial Transformation Project', description: 'Increasing operational capacity by 40% using lean manufacturing principles for an industrial firm.', metric: '40% Capacity', status: 'Completed' },
      { id: 9, name: 'Overseas Expansion Strategy', description: 'Establishing an export network across 14 countries in Europe and Middle East for a food brand.', metric: '14 Countries', status: 'Completed' }
    ],
    faqs: [
      { q: 'Danışmanlık sürecinde ne kadar süre şirkette bulunuyorsunuz?', a: 'Projelerin ihtiyacına göre tam zamanlı yerinde refakat veya haftalık stratejik koordinasyon toplantıları düzenliyoruz.' }
    ],
    faqs_en: [
      { q: 'How long do consultants remain on-site at the company?', a: 'We arrange full-time on-site presence or weekly strategic coordination meetings based on project scope.' }
    ]
  },
  {
    id: 'reklam',
    name: 'Tam Hizmet Reklam Ajansı',
    name_en: 'Full Service Advertising Agency',
    shortName: 'Reklam',
    shortName_en: 'Advertising',
    path: '/reklam',
    icon: Megaphone,
    badge: '360° Pazarlama & Kreatif',
    badge_en: '360° Marketing & Creative',
    description: 'Markanızı rakiplerinizden ayıran, hedef kitlenizle duygusal ve güçlü bağlar kuran, yüksek dönüşüm odaklı yaratıcı reklam kampanyaları.',
    description_en: 'High-conversion creative ad campaigns that set your brand apart from competitors and build strong emotional connections with your audience.',
    heroImage: advertisingImg,
    color: '#D12F0E',
    lightColor: 'rgba(209, 47, 14, 0.12)',
    stats: [
      { label: 'Erişilen Kitle', value: '50M+' },
      { label: 'Ödüllü Kampanya', value: '32' },
      { label: 'Ortalama ROI', value: '4.5x' },
      { label: 'Aylık İçerik', value: '1,500+' }
    ],
    stats_en: [
      { label: 'Audience Reached', value: '50M+' },
      { label: 'Awarded Campaigns', value: '32' },
      { label: 'Average ROI', value: '4.5x' },
      { label: 'Monthly Content', value: '1,500+' }
    ],
    features: [
      '360° Marka Konumlandırma & Kimlik Tasarımı',
      'Performans Pazarlaması, SEO & Google Ads',
      'Sosyal Medya Yönetimi & Prodüksiyon',
      'Medya Planlama ve Ulusal Satın Alma',
      '3D Animasyon & Reklam Filmi Prodüksiyonu',
      'Influencer Pazarlaması & İtibar Yönetimi'
    ],
    features_en: [
      '360° Brand Positioning & Identity Design',
      'Performance Marketing, SEO & Google Ads',
      'Social Media Management & Production',
      'Media Planning & National Buying',
      '3D Animation & TV Commercial Production',
      'Influencer Marketing & Reputation Management'
    ],
    process: [
      { title: 'Tüketici İçgörüsü ve Brief Analizi', desc: 'Pazarı, rakipleri ve hedef kitlenizin satın alma davranışlarını inceliyoruz.' },
      { title: 'Yaratıcı Konsept & Big Idea', desc: 'Markanız için akılda kalıcı, özgün kampanya söylemi ve görsel dünyasını kurguluyoruz.' },
      { title: 'Çok Kanallı Yayın & Prodüksiyon', desc: 'TV, Dijital, Açıkhava ve Sosyal medyada eş zamanlı lansman başlatıyoruz.' },
      { title: 'Anlık Veri Analizi ve Optimizasyon', desc: 'Kampanya boyunca dönüşüm verilerini takip ederek reklam harcamalarınızı optimize ediyoruz.' }
    ],
    process_en: [
      { title: 'Consumer Insight & Brief Analysis', desc: 'Analyzing the market, competitors, and purchasing behaviors of your target audience.' },
      { title: 'Creative Concept & Big Idea', desc: 'Crafting memorable, original campaign slogans and visual worlds for your brand.' },
      { title: 'Multi-Channel Launch & Production', desc: 'Launching synchronized campaigns across TV, Digital, Outdoor, and Social Media.' },
      { title: 'Real-Time Data Analysis & Optimization', desc: 'Tracking conversion data throughout the campaign to optimize ad spend ROI.' }
    ],
    partners: [
      { id: 7, name: 'Google Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
      { id: 8, name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' }
    ],
    references: [
      { id: 10, name: 'Elektrikli Araç Lansman Kampanyası', description: 'Yeni nesil EV markasının Türkiye pazarına girişindeki tüm 360 derece iletişim ve dijital lansman faaliyetleri.', metric: '15M+ İzlenme', status: 'Tamamlandı' },
      { id: 11, name: 'E-Ticaret Dönüşüm ve SEO Hamlesi', description: 'Moda markasının dijital reklam ROI oranını 2.1x seviyesinden 5.8x seviyesine çıkaran performans kampanyası.', metric: '5.8x ROAS', status: 'Tamamlandı' }
    ],
    references_en: [
      { id: 10, name: 'Electric Vehicle Launch Campaign', description: '360-degree communication and digital launch activities for a new-gen EV brand entering the market.', metric: '15M+ Views', status: 'Completed' },
      { id: 11, name: 'E-Commerce Conversion & SEO Move', description: 'Performance campaign raising digital ad ROI from 2.1x to 5.8x for a fashion brand.', metric: '5.8x ROAS', status: 'Completed' }
    ],
    faqs: [
      { q: 'Performans pazarlamasında bütçe yönetimi nasıl yapılıyor?', a: 'Harcadığınız her 1 TL’nin dönüşüm oranını anlık dashboardlar üzerinden şeffaf şekilde raporluyoruz.' }
    ],
    faqs_en: [
      { q: 'How is budget managed in performance marketing?', a: 'We report conversion rates for every spent dollar transparently through real-time dashboards.' }
    ]
  }
];

export function getSectors(lang = 'tr') {
  return sectors.map(sec => {
    const isEn = lang === 'en';
    return {
      ...sec,
      name: (isEn ? sec.name_en : null) || sec.name,
      shortName: (isEn ? sec.shortName_en : null) || sec.shortName,
      badge: (isEn ? sec.badge_en : null) || sec.badge,
      description: (isEn ? sec.description_en : null) || sec.description,
      stats: (isEn ? sec.stats_en : null) || sec.stats,
      features: (isEn ? sec.features_en : null) || sec.features,
      process: (isEn ? sec.process_en : null) || sec.process,
      partners: (sec.partners || []).map(p => ({
        ...p,
        link: p.link || 'https://sarfea.com.tr'
      })),
      references: ((isEn ? sec.references_en : null) || sec.references || []).map(r => ({
        ...r,
        link: r.link || 'https://sarfea.com.tr'
      })),
      faqs: (isEn ? sec.faqs_en : null) || sec.faqs || []
    };
  });
}

export const companyMilestones = [
  { year: '1999', title: 'Kuruluş', desc: 'Telekomünikasyon altyapı projeleri ile temellerimiz atıldı.' },
  { year: '2005', title: 'Yazılım & Teknoloji', desc: 'Yazılım departmanımız kurularak ilk kurumsal ERP yazılımı geliştirildi.' },
  { year: '2012', title: 'Promosyon & Medya', desc: 'Kurumsal hediye üretimi ve tam hizmet reklam ajansı bünyemize katıldı.' },
  { year: '2018', title: 'Eğitim & Danışmanlık', desc: 'Stratejik yönetim danışmanlığı ve kurumsal akademi birimlerimiz faaliyete geçti.' },
  { year: '2024+', title: 'Global Şirketler Grubu', desc: '6 ana sektörde 1200+ uzman ile global standartlarda lider holding yapısı.' }
];

export const companyMilestones_en = [
  { year: '1999', title: 'Founding', desc: 'Our foundations were laid with telecommunications infrastructure projects.' },
  { year: '2005', title: 'Software & Tech', desc: 'Our software department was formed, developing our first corporate ERP system.' },
  { year: '2012', title: 'Promotion & Media', desc: 'Corporate gift manufacturing and a full-service ad agency joined our group.' },
  { year: '2018', title: 'Training & Advisory', desc: 'Strategic management consulting and corporate academy units launched operations.' },
  { year: '2024+', title: 'Global Enterprise Group', desc: 'Leading holding structure with 1200+ experts across 6 core sectors operating at global standards.' }
];

export function getCompanyMilestones(lang = 'tr') {
  return lang === 'en' ? companyMilestones_en : companyMilestones;
}

export const companyValues = [
  { icon: ShieldCheck, title: 'Güvenilirlik & Şeffaflık', desc: 'Tüm süreçlerimizde açık iletişim, etiktik ve tavizsiz iş ahlakı.' },
  { icon: Globe, title: 'Küresel Vizyon & İnovasyon', desc: 'Dünya standartlarında teknolojilerle sürdürülebilir çözümler üretmek.' },
  { icon: Cpu, title: 'Yapay Zeka & Dijital Dönüşüm', desc: 'Geleceğin teknolojilerini iş yapış biçimlerimize entegre etmek.' },
  { icon: Award, title: 'Mükemmeliyetçilik', desc: 'Müşterilerimize ve paydaşlarımıza en yüksek katma değeri sunmak.' }
];

export const companyValues_en = [
  { icon: ShieldCheck, title: 'Reliability & Transparency', desc: 'Open communication, ethics, and uncompromising business principles across all processes.' },
  { icon: Globe, title: 'Global Vision & Innovation', desc: 'Creating sustainable solutions powered by world-standard technologies.' },
  { icon: Cpu, title: 'AI & Digital Transformation', desc: 'Integrating technologies of the future into our business workflows.' },
  { icon: Award, title: 'Excellence', desc: 'Delivering the highest added value to our clients and stakeholders.' }
];

export function getCompanyValues(lang = 'tr') {
  return lang === 'en' ? companyValues_en : companyValues;
}

export const companyInfo = {
  name: 'NIMA GRUP',
  email: 'info@alx.com.tr',
  phone: '+90 (212) 555 01 23',
  whatsapp: '+90 (555) 012 34 56',
  address: 'Levent, Büyükdere Cd. No:195, Şişli / İstanbul',
  description: 'Telekomünikasyondan yazılıma, danışmanlıktan reklama 6 ana sektörde yenilikçi ve öncü çözümleriyle kurumsal geleceği inşa eden holding.'
};

export const companyInfo_en = {
  name: 'NIMA GROUP',
  email: 'info@alx.com.tr',
  phone: '+90 (212) 555 01 23',
  whatsapp: '+90 (555) 012 34 56',
  address: 'Levent, Buyukdere Cd. No:195, Sisli / Istanbul',
  description: 'Building the corporate future with innovative and pioneering solutions across 6 main sectors from telecommunications to software, consulting, and advertising.'
};

export function getCompanyInfo(lang = 'tr') {
  return lang === 'en' ? companyInfo_en : companyInfo;
}
