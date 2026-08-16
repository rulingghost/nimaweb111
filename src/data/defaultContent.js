export const defaultContent = {
  navigation: {
    brandName: 'NIMA GRUP.',
    brandLogoMark: 'N',
    logoUrl: '',
    items: [
      { id: 'home', title: 'Ana Sayfa', path: '/', badge: '', hasChildren: false, children: [] },
      { id: 'about', title: 'Hakkımızda', path: '/hakkimizda', badge: '', hasChildren: false, children: [] },
      { 
        id: 'sectors', 
        title: 'Sektörlerimiz', 
        path: '/#sectors', 
        badge: '6 Sektör', 
        hasChildren: true,
        children: [
          { id: 'telecom', title: 'Telekomünikasyon', path: '/telekomunikasyon', badge: 'Altyapı', icon: 'Radio', color: '#D12F0E' },
          { id: 'software', title: 'Yazılım ve Teknoloji', path: '/yazilim', badge: 'AI & Cloud', icon: 'Cpu', color: '#F6C310' },
          { id: 'promotion', title: 'Promosyon & Kurumsal', path: '/promosyon', badge: 'Kurumsal', icon: 'Sparkles', color: '#E97B1A' },
          { id: 'advertising', title: 'Açık Hava Reklamcılık', path: '/reklam', badge: 'Görsel Çözümler', icon: 'Layers', color: '#B7442E' },
          { id: 'education', title: 'Eğitim & Danışmanlık', path: '/egitim', badge: 'Gelişim', icon: 'Compass', color: '#2563EB' },
          { id: 'consulting', title: 'Yönetim & Strateji', path: '/danismanlik', badge: 'Strateji', icon: 'ShieldCheck', color: '#059669' }
        ] 
      },
      { id: 'contact', title: 'İletişim', path: '/iletisim', badge: '', hasChildren: false, children: [] }
    ]
  },

  announcement: {
    enabled: false,
    text: '🚀 2026 Kurumsal İnovasyon ve Teknoloji Raporumuz Yayınlandı!',
    btnText: 'Hemen İnceleyin',
    btnLink: '/yazilim'
  },

  inquiryModal: {
    badge: 'HIZLI VE ÜCRETSİZ TEKLİF',
    title: 'Projeniz İçin 24 Saatte Fiyat Teklifi Alın',
    successTitle: 'Teklif Talebiniz Başarıyla Alındı!',
    successDesc: 'Uzman mühendis ve danışman ekibimiz en geç 24 saat içinde sizinle iletişime geçecektir.'
  },

  globalOffices: {
    badge: 'GLOBAL AĞ & TEMSİLCİLİKLER',
    title: 'Küresel Hizmet ve İletişim Ağımız',
    subtitle: "Türkiye'den Avrupa ve Orta Doğu'ya uzanan küresel lokasyonlarımız ile kesintisiz operasyon sağlıyoruz.",
    items: [
      { id: '1', city: 'İstanbul (HQ)', badge: 'Genel Merkez', name: 'Nima Grup Plaza', role: 'Yönetim & Operasyon Merkezi', address: 'Büyükdere Cad. No:195 Levent / İstanbul', phone: '+90 (212) 555 01 23' },
      { id: '2', city: 'Ankara', badge: 'Bölge Müdürlüğü', name: 'İç Anadolu Temsilciliği', role: 'Kamu & Altyapı Çözümleri', address: 'Çankaya Cad. No:45 Çankaya / Ankara', phone: '+90 (312) 555 01 24' },
      { id: '3', city: 'İzmir', badge: 'Ege Şubesi', name: 'Ege Operasyon Merkezi', role: 'Lojistik & Tanıtım Hizmetleri', address: 'Atatürk Org. San. Bölgesi Çiğli / İzmir', phone: '+90 (232) 555 01 25' },
      { id: '4', city: 'Londra (UK)', badge: 'Global İrtibat', name: 'Nima International Ltd.', role: 'Avrupa Teknoloji & Danışmanlık', address: '124 City Road, London EC1V 2NX', phone: '+44 20 7946 0912' }
    ]
  },
  
  hero: {
    badge: 'NİMA GRUP DİJİTAL VE STRATEJİK EKOSİSTEMİ',
    title: 'Geleceğin Teknolojisi ve Çözümlerini Birlikte İnşa Ediyoruz',
    subtitle: 'Telekomünikasyon altyapısından yapay zeka destekli yazılımlara, kurumsal stratejiden açık hava reklamcılığına kadar tüm sektörlerde uçtan uca inovasyon.',
    primaryBtnText: 'Sektörleri Keşfedin',
    primaryBtnLink: '/#sectors',
    secondaryBtnText: 'Teklif Alın',
    secondaryBtnLink: '/iletisim',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80',
    stats: [
      { id: '1', num: '6+', label: 'Stratejik Sektör' },
      { id: '2', num: '150+', label: 'Tamamlanan Proje' },
      { id: '3', num: '%99.8', label: 'Müşteri Memnuniyeti' },
      { id: '4', num: '24/7', label: 'Kesintisiz Destek' }
    ],
    slides: [
      {
        id: '1',
        badge: 'Mühendislik & İletişim',
        title: 'Telekomünikasyon Altyapısında Güçlü ve Güvenilir Çözümler',
        subtitle: 'Fiber optik şebekeler, baz istasyonları ve 5G entegrasyonuyla geleceğe kesintisiz bağlantı.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
        color: '#D12F0E',
        statNum: '10K+ Km',
        statTxt: 'Fiber Optik Hat'
      },
      {
        id: '2',
        badge: 'Yapay Zeka & Bulut',
        title: 'Ölçeklenebilir Yazılım ve Kurumsal Bulut Mimarileri',
        subtitle: 'İş süreçlerinizi hızlandıran ve verimliliği artıran yeni nesil akıllı yazılım ekosistemleri.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
        color: '#F6C310',
        statNum: '50M+',
        statTxt: 'İşlenen API İsteği'
      },
      {
        id: '3',
        badge: 'Kurumsal Kimlik & Tanıtım',
        title: 'Markanıza Değer Katan Özgün Promosyon Çözümleri',
        subtitle: 'Yüksek kalite standartlarında kurumsal hediyeler ve prestijli marka ürünleri.',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80',
        color: '#E97B1A',
        statNum: '500K+',
        statTxt: 'Üretilen Ürün'
      }
    ]
  },

  kisacaBiz: {
    badge: 'KISACA BİZ',
    title: 'Geleceği Şekillendiren Entegre Çözümler',
    subtitle: '6 ana sektörde inovasyon ve güven odaklı hizmet anlayışımızla işinizi büyütüyoruz.',
    btnText: 'Kurumsal Hikayemiz',
    btnLink: '/hakkimizda',
    cards: [
      { id: '1', title: 'İleri Teknoloji & İnovasyon', desc: 'Sektörün en güncel teknolojilerini iş süreçlerinize entegre ederek verimliliği maksimize ediyoruz.', icon: 'Cpu', color: '#D12F0E' },
      { id: '2', title: 'Global Standartlarda Kalite', desc: 'Uluslararası standartlarda sertifikalı süreçlerle güvenilir ve sürdürülebilir sonuçlar üretiyoruz.', icon: 'Globe', color: '#F6C310' },
      { id: '3', title: 'Uçtan Uca Proje Yönetimi', desc: 'Fikirden uygulamaya, keşiften teslime kadar tüm aşamalarda tek muhatap garantisi.', icon: 'ShieldCheck', color: '#E97B1A' }
    ]
  },

  portfolio: {
    badge: 'BAŞARI HİKAYELERİ & PROJELER',
    title: 'Sektörlerimizde Hayata Geçirdiğimiz Öncü Projeler',
    subtitle: 'Telekomünikasyondan yazılıma, açık havadan eğitime Türkiye genelinde ve küresel ölçekte tamamladığımız projeler.',
    items: [
      {
        id: '1',
        sectorId: 'telekomunikasyon',
        sectorName: 'Telekomünikasyon',
        title: 'Kuzey Marmara Fiber Ağı',
        description: 'Otoyol güzergahı boyunca 400km kesintisiz yüksek hızlı fiber optik hattının tespiti ve 3D projelendirilmesi.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
        metric: '400 km Hat',
        color: '#D12F0E',
        link: '/telekomunikasyon'
      },
      {
        id: '2',
        sectorId: 'yazilim',
        sectorName: 'Yazılım',
        title: 'Global Lojistik ERP Platformu',
        description: 'Uluslararası taşımacılık yapan firma için tüm operasyonları, filo takibini ve gümrüklemeyi yöneten bulut platform.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        metric: '%40 Verimlilik',
        color: '#F6C310',
        link: '/yazilim'
      },
      {
        id: '3',
        sectorId: 'promosyon',
        sectorName: 'Promosyon',
        title: 'Uluslararası Banka Yılbaşı VIP Seti',
        description: '50.000 çalışan ve prestijli müşteri için özel tasarlanmış ahşap ve bambu konsept hediyeler.',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
        metric: '50.000 Kutulama',
        color: '#E97B1A',
        link: '/promosyon'
      },
      {
        id: '4',
        sectorId: 'egitim',
        sectorName: 'Eğitim',
        title: 'Yönetici Liderlik Akademi Serüveni',
        description: 'Perakende zincirinin 500 mağaza yöneticisine özel tasarlanan 6 aylık modüler liderlik okulu.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        metric: '500 Lider',
        color: '#B7442E',
        link: '/egitim'
      },
      {
        id: '5',
        sectorId: 'danismanlik',
        sectorName: 'Danışmanlık',
        title: 'KOBİ Sanayi Dönüşüm Projesi',
        description: 'Üretim sektöründeki köklü firmanın yalın üretim prensipleriyle operasyonel kapasitesinin %40 artırılması.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        metric: '%40 Kapasite',
        color: '#F1D55A',
        link: '/danismanlik'
      },
      {
        id: '6',
        sectorId: 'reklam',
        sectorName: 'Reklam',
        title: 'Milli Teknoloji Hamlesi LED Ağı',
        description: 'Türkiye\'nin 81 ilinde eş zamanlı yayın yapan dijital açık hava ekran kampanyası.',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
        metric: '81 İl Ağı',
        color: '#D12F0E',
        link: '/reklam'
      }
    ]
  },

  whyUs: {
    badge: 'NEDEN NİMA GRUP?',
    title: 'Bizi Farklı Kılan Değerlerimiz',
    subtitle: '25 yılı aşkın deneyimimiz ve inovatif bakış açımızla kurumların en güvenilir çözüm ortağıyız.',
    items: [
      { id: '1', title: 'Stratejik Bütünlük', desc: '6 ana sektörün gücünü birleştirerek çok yönlü ve entegre çözümler sunuyoruz.' },
      { id: '2', title: 'Hızlı & Çevik Uygulama', desc: 'Bürokrasiden uzak, dinamik ve esnek proje yönetim yaklaşımıyla zaman kazandırıyoruz.' },
      { id: '3', title: 'Sürdürülebilir Değer', desc: 'Sadece bugünün değil, geleceğin ihtiyaçlarını da öngören kalıcı sistemler inşa ediyoruz.' }
    ],
    btnText: 'Daha Fazlasını Öğrenin',
    btnLink: '/hakkimizda',
    quoteTitle: '“Başarı tesadüf değildir; doğru strateji, güçlü altyapı ve tavizsiz kalitenin eseridir.”',
    quoteSubtitle: 'NİMA GRUP YÖNETİM KURULU'
  },

  cta: {
    title: 'Yeni Bir Proje Başlatmaya Hazır mısınız?',
    subtitle: 'Sektörünüze özel yenilikçi çözümlerimiz ve avantajlı tekliflerimiz için uzman ekibimizle hemen iletişime geçin.',
    primaryBtnText: 'Hemen Teklif Alın',
    secondaryBtnText: 'Bize Ulaşın',
    secondaryBtnLink: '/iletisim'
  },

  visionMission: {
    visionTitle: 'Vizyonumuz',
    visionDesc: 'Faaliyet gösterdiğimiz tüm sektörlerde sürdürülebilir inovasyon ve üstün teknolojiyle Türkiye\'nin ve bölgenin en güvenilir, öncü holding ekosistemi olmak.',
    missionTitle: 'Misyonumuz',
    missionDesc: 'Müşterilerimize ve paydaşlarımıza en yüksek kalitede, etik, güvenilir ve yenilikçi çözümler sunarak dijital ve operasyonel dönüşümlerine katma değer sağlamak.'
  },

  about: {
    badge: 'HAKKIMIZDA & DEĞERLERİMİZ',
    title: 'Yenilikçi Vizyon, Güçlü Altyapı ve Sürdürülebilir Başarı',
    subtitle: 'Nima Grup, farklı sektörlerdeki uzmanlığı tek çatı altında toplayarak kurumların dijital ve operasyonel dönüşümüne liderlik eder.',
    paragraphs: [
      'Nima Grup, telekomünikasyon, yazılım, kurumsal tanıtım ve stratejik danışmanlık alanlarında faaliyet gösteren öncü bir iş ekosistemidir.',
      'Müşterilerimize yalnızca bir hizmet değil, rekabet avantajı sağlayan entegre ve sürdürülebilir iş modelleri sunuyoruz. Güçlü Ar-Ge birimimiz ve uzman kadromuzla her projede mükemmelliği hedefliyoruz.'
    ],
    experienceYears: '12+',
    completedProjects: '150+',
    features: [
      { id: '1', title: 'Yüksek Teknoloji & AI', desc: 'En son nesil yapay zeka ve bulut çözümleriyle iş akışlarınızı geleceğe taşıyoruz.', icon: 'Cpu' },
      { id: '2', title: 'Küresel Standartlar', desc: 'Uluslararası kalite, güvenlik ve sürdürülebilirlik ilkelerine tam bağlılık.', icon: 'Globe' },
      { id: '3', title: 'Güvenilir Ortaklık', desc: 'Şeffaf iş süreçleri ve uzun vadeli değer odaklı stratejik iş ortaklıkları.', icon: 'ShieldCheck' }
    ],
    standardsTitle: 'Küresel Standartlarda Yönetim ve Güvenilirlik',
    standardsSubtitle: 'Uluslararası kalite, çevre ve bilgi güvenliği standartlarımızla sektörde çıtayı belirliyoruz.',
    standardsList: [
      'ISO 9001: Kalite Yönetim Sistemi',
      'ISO 27001: Bilgi Güvenliği Standardı',
      'ISO 45001: İş Sağlığı ve Güvenliği',
      'ISO 14001: Çevre Yönetim Sistemi'
    ]
  },

  journey: {
    badge: 'ZAMAN ÇİZELGESİ',
    title: 'Başarı ve Dönüşüm Yolculuğumuz',
    subtitle: 'Kuruluşumuzdan bu yana sürekli büyüyen ve inovasyon üreten şirket tarihimiz',
    items: [
      { id: '1', year: '2015', title: 'Kuruluş & Telekomünikasyon', desc: 'Telekomünikasyon altyapı projeleri ve fiber hat yatırımlarıyla faaliyete başladık.', badge: 'Başlangıç' },
      { id: '2', year: '2018', title: 'Yazılım ve Ar-Ge Merkezi', desc: 'Kurumsal SaaS, yapay zeka ve bulut mimarileri geliştiren teknoloji birimimiz faaliyete geçti.', badge: 'Genişleme' },
      { id: '3', year: '2021', title: 'Açık Hava & Medya Ekosistemi', desc: 'Açık hava reklam alanları ve kurumsal promosyon ürünleri portföyümüze eklendi.', badge: 'Büyüme' },
      { id: '4', year: '2024', title: 'Yapay Zeka & Global Çözümler', desc: 'Yapay zeka odaklı iş otomasyonları ve uluslararası kurumsal ortaklıklar devreye alındı.', badge: 'İnovasyon' }
    ]
  },

  services: {
    badge: 'UZMANLIK ALANLARIMIZ',
    title: 'Faaliyet Gösterdiğimiz Stratejik Sektörler',
    subtitle: 'Her sektörde uzmanlaşmış ekiplerimizle entegre ve anahtar teslim çözümler sunuyoruz.',
    items: [
      {
        id: 'telecom',
        title: 'Telekomünikasyon ve Altyapı',
        shortName: 'Telekom',
        description: 'Fiber optik hat çekimi, baz istasyonu kurulumları, ağ yönetimi ve 5G hazırlık altyapısı.',
        icon: 'Radio',
        color: '#D12F0E',
        badge: 'Kritik Altyapı',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
        path: '/telekomunikasyon',
        points: ['Fiber Optik Hat Kurulumu', 'Baz İstasyonu Entegrasyonu', 'Veri Merkezi Ağ Yönetimi', '7/24 Saha Bakım Destek'],
        faqs: [
          { q: 'Altyapı tespitinde hangi teknolojileri kullanıyorsunuz?', a: 'Yer altı radarları (GPR), yüksek çözünürlüklü lazer tarayıcılar (LiDAR) ve GIS tabanlı dijital haritalama sistemleri kullanıyoruz.' },
          { q: 'Projelerin teslim süresi ortalama ne kadardır?', a: 'Proje ölçeğine bağlı olarak küçük ve orta ölçekli saha tespitleri 1-3 hafta, büyükşehir altyapı projeleri 1-3 ay sürmektedir.' },
          { q: 'Çevre ve iş güvenliği sertifikalarınız var mı?', a: 'Evet, ISO 9001, ISO 45001 ve ISO 27001 sertifikalarına tam uyumlu çalışmaktayız.' }
        ]
      },
      {
        id: 'software',
        title: 'Yazılım ve Teknoloji Çözümleri',
        shortName: 'Yazılım',
        description: 'Kurumsal SaaS platformları, yapay zeka otomasyonları, mobil ve web uygulamaları.',
        icon: 'Cpu',
        color: '#F6C310',
        badge: 'Yapay Zeka & Bulut',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        path: '/yazilim',
        points: ['Özel Web & Mobil Yazılım', 'AI ve Makine Öğrenimi', 'Bulut Veri Mimarisi', 'Siber Güvenlik & Entegrasyon'],
        faqs: [
          { q: 'Hangi yazılım dilleri ve teknolojileri tercih ediyorsunuz?', a: 'React, Node.js, Python, Go, Java, Flutter ve bulut teknolojilerinde (AWS/GCP/Azure) uzmanız.' },
          { q: 'Var olan eski sistemlerimizle entegrasyon sağlayabilir misiniz?', a: 'Evet, Legacy sistemlerinize özel REST/SOAP API adaptörleri yazarak veri kaybı olmadan dönüşüm sağlıyoruz.' },
          { q: 'Geliştirilen yazılımların bakım ve SLA desteği nasıl işliyor?', a: 'Canlıya alma sonrasında 7/24 SLA garantisi, düzenli güvenlik yamaları ve performans optimizasyonu sağlıyoruz.' }
        ]
      },
      {
        id: 'promotion',
        title: 'Promosyon ve Kurumsal Ürünler',
        shortName: 'Promosyon',
        description: 'Markanızı prestijle temsil eden özel tasarım kurumsal hediyeler ve vip promosyon setleri.',
        icon: 'Sparkles',
        color: '#E97B1A',
        badge: 'Kurumsal Kimlik',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
        path: '/promosyon',
        points: ['Özel Tasarım VIP Hediyeler', 'Teknolojik Promosyon Ürünleri', 'Eko-Dostu Sürdürülebilir Setler', 'Hızlı ve Kaliteli Üretim'],
        faqs: [
          { q: 'Minimum sipariş adediniz (MOQ) ne kadardır?', a: 'Ürün tipine bağlı olarak standart ürünlerde 50 adet, tamamen özel üretimlerde 100 adetten başlamaktadır.' },
          { q: 'Çevre dostu sertifikalı ürünleriniz var mı?', a: 'Evet, FSC sertifikalı kağıt, bambu, dönüştürülmüş plastik ve organik pamuk ürün portföyümüz mevcuttur.' },
          { q: 'Numune gönderimi yapıyor musunuz?', a: 'Evet, seri üretim öncesinde markanıza özel logolu dijital 3D model ve fiziksel numune onayı sunuyoruz.' }
        ]
      },
      {
        id: 'advertising',
        title: 'Açık Hava ve Reklamcılık',
        shortName: 'Açık Hava',
        description: 'LED ekranlar, billboard ağları, bina giydirme ve yaratıcı medya kampanyaları.',
        icon: 'Layers',
        color: '#B7442E',
        badge: 'Medya & Reklam',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
        path: '/reklam',
        points: ['Dijital LED Billboardlar', 'Şehir İçi Megalight Ağları', 'Bina & Cephe Giydirme', 'Hedef Kitle Odaklı Planlama'],
        faqs: [
          { q: 'Reklam kampanyalarımızın gösterim ve erişim raporlaması nasıl yapılıyor?', a: 'Dijital LED ekranlarımızda anlık izleyici yoğunluğu, görüntülenme sayısı ve kampanya süresi detaylı analitik raporlarla sunulur.' },
          { q: 'Kreatif tasarım ve prodüksiyon desteği sağlıyor musunuz?', a: 'Evet, bünyemizdeki tasarım ekibi 3D animasyon, video kurgu ve açık hava formatlarına uygun kreatifler üretmektedir.' }
        ]
      },
      {
        id: 'education',
        title: 'Eğitim ve Danışmanlık',
        shortName: 'Eğitim',
        description: 'Kurumsal gelişim akademisi, liderlik atölyeleri ve teknik sertifikasyon programları.',
        icon: 'Compass',
        color: '#2563EB',
        badge: 'Yetenek Gelişimi',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        path: '/egitim',
        points: ['Kurumsal Liderlik Akademisi', 'Teknoloji & Veri Eğitimleri', 'Kariyer ve Yetenek Yönetimi', 'Sertifikalı Uzmanlık Kampları'],
        faqs: [
          { q: 'Eğitimler yüz yüze mi yoksa online mı gerçekleşiyor?', a: 'İsteğe bağlı olarak yüz yüze hibrit sınıf ortamında veya etkileşimli dijital platformumuz üzerinden sunulmaktadır.' },
          { q: 'Eğitim sonunda katılımcılara sertifika veriliyor mu?', a: 'Evet, uluslararası geçerliliği olan kurumsal katılım ve başarı sertifikaları verilmektedir.' }
        ]
      },
      {
        id: 'consulting',
        title: 'Yönetim ve Strateji Danışmanlığı',
        shortName: 'Yönetim',
        description: 'Şirket birleşmeleri, dijital dönüşüm yol haritaları ve operasyonel verimlilik danışmanlığı.',
        icon: 'ShieldCheck',
        color: '#059669',
        badge: 'Strateji',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        path: '/danismanlik',
        points: ['Dijital Dönüşüm Stratejisi', 'Operasyonel Süreç İyileştirme', 'Mali ve Risk Danışmanlığı', 'Büyüme & Pazar Giriş Analizleri'],
        faqs: [
          { q: 'Danışmanlık sürecinde ne kadar süre şirkette bulunuyorsunuz?', a: 'Projelerin ihtiyacına göre tam zamanlı yerinde refakat veya haftalık stratejik koordinasyon toplantıları düzenliyoruz.' },
          { q: 'Yatırım ve maliyet dönüşüm (ROI) garantisi var mı?', a: 'Süreç analizinde belirlediğimiz KPI ve tasarruf hedeflerine ulaşılmasını şeffaf metriklerle takip ediyoruz.' }
        ]
      }
    ]
  },

  testimonials: {
    badge: 'MÜŞTERİ DENEYİMİ',
    title: 'İş Ortaklarımızın Değerlendirmeleri',
    subtitle: 'Birlikte başarıya ulaştığımız kurum ve yöneticilerin deneyimleri',
    items: [
      {
        id: '1',
        name: 'Ahmet Yılmaz',
        role: 'Teknoloji Direktörü (CTO)',
        company: 'Global Telekom A.Ş.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        text: 'Nima Grup ile yürüttüğümüz fiber altyapı ve veri merkezi projesinde gösterdikleri profesyonellik takdire şayan. Zamanından önce ve sıfır kesintiyle teslim ettiler.',
        rating: 5
      },
      {
        id: '2',
        name: 'Zeynep Kaya',
        role: 'Pazarlama & İletişim Müdürü',
        company: 'Nova Holding',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
        text: 'Açık hava LED ekran kampanyamız ve kurumsal promosyon ürünlerimizin kalitesi markamızın algısını belirgin biçimde yükseltti. Teşekkür ederiz.',
        rating: 5
      },
      {
        id: '3',
        name: 'Mehmet Demir',
        role: 'Genel Müdür',
        company: 'Delta Lojistik Çözümleri',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        text: 'Yönetim ve strateji danışmanlığı desteği sayesinde tüm tedarik zincirimizi yapay zeka ile optimize ettik. Operasyonel maliyetlerimizde %25 tasarruf sağladık.',
        rating: 5
      }
    ]
  },

  references: {
    badge: 'GÜVENEN MARKALAR',
    title: 'Referanslarımız ve Başarı Hikayeleri',
    subtitle: 'Türkiye’nin ve dünyanın önde gelen markalarıyla değer üreten projelere imza attık.',
    items: [
      {
        id: '1',
        name: 'Turkcell Altyapı İş Ortaklığı',
        category: 'Telekomünikasyon',
        logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      },
      {
        id: '2',
        name: 'FinansBank SaaS Entegrasyonu',
        category: 'Yazılım & Finans',
        logoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      },
      {
        id: '3',
        name: 'Ege Yapı Açık Hava Kampanyası',
        category: 'Reklam & Medya',
        logoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      },
      {
        id: '4',
        name: 'Borusan Strateji & Akademi',
        category: 'Eğitim & Danışmanlık',
        logoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      }
    ]
  },

  contact: {
    badge: 'İLETİŞİM',
    title: 'Yeni Bir Proje Başlatmaya Hazır mısınız?',
    subtitle: 'Sorularınız, iş ortaklığı talepleriniz ve teklif almak için uzman ekibimize 7/24 ulaşabilirsiniz.',
    phone: '+90 (212) 555 01 23',
    phoneSecondary: '+90 (532) 123 45 67',
    email: 'info@nimagrup.com',
    emailSupport: 'destek@nimagrup.com',
    address: 'Büyükdere Caddesi No: 199, Levent Plaza Kat: 14, Beşiktaş / İstanbul',
    workingHours: 'Pazartesi - Cuma: 08:30 - 18:30',
    mapEmbedUrl: 'https://maps.google.com'
  },

  footer: {
    description: 'Nima Grup; telekomünikasyon, teknoloji, açık hava reklamcılığı ve strateji alanlarında entegre çözümler sunan öncü kurumsal ekosistemdir.',
    copyright: '© 2026 NİMA GRUP. Tüm hakları saklıdır.',
    newsletterTitle: 'Sektörel İnovasyon Bültenimize Katılın',
    newsletterSubtitle: 'Teknoloji, telekomünikasyon ve yönetim dünyasından en son analizler ve raporlar e-postanızda.',
    socials: [
      { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Globe' },
      { id: 'twitter', name: 'Twitter / X', url: 'https://twitter.com', icon: 'Share2' },
      { id: 'instagram', name: 'Instagram', url: 'https://instagram.com', icon: 'MessageCircle' },
      { id: 'youtube', name: 'YouTube', url: 'https://youtube.com', icon: 'Send' }
    ]
  },

  images: {
    logoUrl: '',
    heroBg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80',
    aboutImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80',
    contactImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2069&q=80'
  },

  security: {
    adminPassword: 'nima2026!'
  }
};

export const defaultContentEn = {
  navigation: {
    brandName: 'NIMA GROUP.',
    brandLogoMark: 'N',
    logoUrl: '',
    items: [
      { id: 'home', title: 'Home', path: '/', badge: '', hasChildren: false, children: [] },
      { id: 'about', title: 'About Us', path: '/hakkimizda', badge: '', hasChildren: false, children: [] },
      { 
        id: 'sectors', 
        title: 'Our Sectors', 
        path: '/#sectors', 
        badge: '6 Sectors', 
        hasChildren: true,
        children: [
          { id: 'telecom', title: 'Telecommunications', path: '/telekomunikasyon', badge: 'Infrastructure', icon: 'Radio', color: '#D12F0E' },
          { id: 'software', title: 'Software & Technology', path: '/yazilim', badge: 'AI & Cloud', icon: 'Cpu', color: '#F6C310' },
          { id: 'promotion', title: 'Corporate Promotion', path: '/promosyon', badge: 'Corporate', icon: 'Sparkles', color: '#E97B1A' },
          { id: 'advertising', title: 'Outdoor Advertising', path: '/reklam', badge: 'Visual Solutions', icon: 'Layers', color: '#B7442E' },
          { id: 'education', title: 'Training & Advisory', path: '/egitim', badge: 'Development', icon: 'Compass', color: '#2563EB' },
          { id: 'consulting', title: 'Management & Strategy', path: '/danismanlik', badge: 'Strategy', icon: 'ShieldCheck', color: '#059669' }
        ] 
      },
      { id: 'contact', title: 'Contact', path: '/iletisim', badge: '', hasChildren: false, children: [] }
    ]
  },

  announcement: {
    enabled: false,
    text: '🚀 Our 2026 Corporate Innovation and Technology Report is Published!',
    btnText: 'Explore Now',
    btnLink: '/yazilim'
  },

  inquiryModal: {
    badge: 'FAST & FREE PROPOSAL',
    title: 'Get a Price Quote for Your Project in 24 Hours',
    successTitle: 'Proposal Request Received Successfully!',
    successDesc: 'Our expert engineering and consulting team will contact you within 24 hours at the latest.'
  },

  globalOffices: {
    badge: 'GLOBAL NETWORK & REPRESENTATIVES',
    title: 'Our Global Service and Communication Network',
    subtitle: 'We provide seamless operations with our global locations spanning from Turkey to Europe and the Middle East.',
    items: [
      { id: '1', city: 'Istanbul (HQ)', badge: 'Headquarters', name: 'Nima Group Plaza', role: 'Management & Operations Center', address: 'Buyukdere Ave. No:195 Levent / Istanbul', phone: '+90 (212) 555 01 23' },
      { id: '2', city: 'Ankara', badge: 'Regional Office', name: 'Central Anatolia Office', role: 'Public & Infrastructure Solutions', address: 'Cankaya Ave. No:45 Cankaya / Ankara', phone: '+90 (312) 555 01 24' },
      { id: '3', city: 'Izmir', badge: 'Aegean Branch', name: 'Aegean Operations Center', role: 'Logistics & Promotion Services', address: 'Ataturk Org. Ind. Zone Cigli / Izmir', phone: '+90 (232) 555 01 25' },
      { id: '4', city: 'London (UK)', badge: 'Global Liaison', name: 'Nima International Ltd.', role: 'European Technology & Consulting', address: '124 City Road, London EC1V 2NX', phone: '+44 20 7946 0912' }
    ]
  },
  
  hero: {
    badge: 'NIMA GROUP DIGITAL & STRATEGIC ECOSYSTEM',
    title: 'Building Tomorrow\'s Technology and Solutions Together',
    subtitle: 'End-to-end innovation across all sectors, from telecommunications infrastructure to AI software, corporate strategy, and outdoor advertising.',
    primaryBtnText: 'Explore Sectors',
    primaryBtnLink: '/#sectors',
    secondaryBtnText: 'Get Quote',
    secondaryBtnLink: '/iletisim',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80',
    stats: [
      { id: '1', num: '6+', label: 'Strategic Sectors' },
      { id: '2', num: '150+', label: 'Completed Projects' },
      { id: '3', num: '99.8%', label: 'Customer Satisfaction' },
      { id: '4', num: '24/7', label: 'Continuous Support' }
    ],
    slides: [
      {
        id: '1',
        badge: 'Engineering & Telecom',
        title: 'Strong and Reliable Telecom Infrastructure Solutions',
        subtitle: 'Uninterrupted connection to the future with fiber optic networks, cell towers, and 5G integration.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
        color: '#D12F0E',
        statNum: '10K+ Km',
        statTxt: 'Fiber Optic Line'
      },
      {
        id: '2',
        badge: 'AI & Cloud',
        title: 'Scalable Software and Enterprise Cloud Architectures',
        subtitle: 'Next-generation intelligent software ecosystems accelerating your business processes and enhancing efficiency.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
        color: '#F6C310',
        statNum: '50M+',
        statTxt: 'Processed API Requests'
      },
      {
        id: '3',
        badge: 'Corporate Identity & Gifts',
        title: 'Original Promotional Solutions Adding Value to Your Brand',
        subtitle: 'High quality standard corporate gifts and prestigious brand merchandise.',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80',
        color: '#E97B1A',
        statNum: '500K+',
        statTxt: 'Products Produced'
      }
    ]
  },

  kisacaBiz: {
    badge: 'ABOUT US IN BRIEF',
    title: 'Integrated Solutions Shaping the Future',
    subtitle: 'We grow your business with our innovation and trust-driven service approach across 6 main sectors.',
    btnText: 'Our Corporate Story',
    btnLink: '/hakkimizda',
    cards: [
      { id: '1', title: 'Advanced Technology & Innovation', desc: 'Integrating the industry’s most up-to-date technologies into your workflows to maximize efficiency.', icon: 'Cpu', color: '#D12F0E' },
      { id: '2', title: 'Global Standard Quality', desc: 'Delivering reliable and sustainable outcomes through processes certified to international standards.', icon: 'Globe', color: '#F6C310' },
      { id: '3', title: 'End-to-End Project Management', desc: 'Single point of contact guarantee across all stages, from conception to execution, discovery to handover.', icon: 'ShieldCheck', color: '#E97B1A' }
    ]
  },

  portfolio: {
    badge: 'SUCCESS STORIES & PROJECTS',
    title: 'Pioneering Projects Across Our Sectors',
    subtitle: 'Projects completed nationwide and internationally across telecommunications, software, outdoor advertising, and education.',
    items: [
      {
        id: '1',
        sectorId: 'telekomunikasyon',
        sectorName: 'Telecommunications',
        title: 'Northern Marmara Fiber Network',
        description: 'Detection and 3D engineering design of a 400km uninterrupted high-speed fiber optic line along highway routes.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
        metric: '400 km Line',
        color: '#D12F0E',
        link: '/telekomunikasyon'
      },
      {
        id: '2',
        sectorId: 'yazilim',
        sectorName: 'Software',
        title: 'Global Logistics ERP Platform',
        description: 'Cloud platform managing all operations, fleet tracking, and customs clearance for an international transport firm.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        metric: '40% Efficiency',
        color: '#F6C310',
        link: '/yazilim'
      },
      {
        id: '3',
        sectorId: 'promosyon',
        sectorName: 'Promotion',
        title: 'International Bank New Year VIP Set',
        description: 'Specially crafted wood and bamboo concept gifts for 50,000 employees and prestigious clients.',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
        metric: '50K Gift Boxes',
        color: '#E97B1A',
        link: '/promosyon'
      },
      {
        id: '4',
        sectorId: 'egitim',
        sectorName: 'Education',
        title: 'Executive Leadership Academy Series',
        description: '6-month modular leadership academy tailored for 500 store managers of a major retail chain.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        metric: '500 Leaders',
        color: '#B7442E',
        link: '/egitim'
      },
      {
        id: '5',
        sectorId: 'danismanlik',
        sectorName: 'Consulting',
        title: 'SME Industrial Transformation Project',
        description: 'Increasing operational capacity by 40% using lean manufacturing principles for a legacy industrial enterprise.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        metric: '40% Capacity',
        color: '#F1D55A',
        link: '/danismanlik'
      },
      {
        id: '6',
        sectorId: 'reklam',
        sectorName: 'Advertising',
        title: 'National Technology Initiative LED Network',
        description: 'Digital outdoor screen campaign broadcasting simultaneously across 81 cities.',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
        metric: '81 City Network',
        color: '#D12F0E',
        link: '/reklam'
      }
    ]
  },

  whyUs: {
    badge: 'WHY NIMA GROUP?',
    title: 'The Values That Set Us Apart',
    subtitle: 'With over 25 years of experience and an innovative mindset, we are the most reliable solution partner for enterprises.',
    items: [
      { id: '1', title: 'Strategic Integrity', desc: 'Combining the power of 6 core sectors to deliver multifaceted and integrated solutions.' },
      { id: '2', title: 'Fast & Agile Delivery', desc: 'Saving time with a dynamic, flexible project management approach free from bureaucracy.' },
      { id: '3', title: 'Sustainable Value', desc: 'Building durable systems that anticipate not only today’s but also tomorrow’s needs.' }
    ],
    btnText: 'Learn More',
    btnLink: '/hakkimizda',
    quoteTitle: '“Success is not a coincidence; it is the product of sound strategy, robust infrastructure, and uncompromising quality.”',
    quoteSubtitle: 'NIMA GROUP BOARD OF DIRECTORS'
  },

  cta: {
    title: 'Ready to Start a New Project?',
    subtitle: 'Contact our expert team today to discuss customized innovative solutions and favorable terms for your sector.',
    primaryBtnText: 'Get Quote Now',
    secondaryBtnText: 'Contact Us',
    secondaryBtnLink: '/iletisim'
  },

  visionMission: {
    visionTitle: 'Our Vision',
    visionDesc: 'To be the most trusted, leading holding ecosystem in Turkey and the region through sustainable innovation and superior technology in all sectors we operate in.',
    missionTitle: 'Our Mission',
    missionDesc: 'To provide our clients and stakeholders with the highest quality, ethical, reliable, and innovative solutions, adding value to their digital and operational transformation.'
  },

  about: {
    badge: 'ABOUT US & OUR VALUES',
    title: 'Innovative Vision, Strong Infrastructure, and Sustainable Success',
    subtitle: 'Nima Group leads enterprises in digital and operational transformation by uniting cross-sector expertise under one roof.',
    paragraphs: [
      'Nima Group is a leading business ecosystem operating across telecommunications, software, corporate promotion, and strategic consulting.',
      'We offer our clients integrated and sustainable business models that deliver competitive advantage, not just a service. With our strong R&D department and expert team, we aim for excellence in every project.'
    ],
    experienceYears: '12+',
    completedProjects: '150+',
    features: [
      { id: '1', title: 'High Technology & AI', desc: 'Carrying your workflows into the future with state-of-the-art AI and cloud solutions.', icon: 'Cpu' },
      { id: '2', title: 'Global Standards', desc: 'Full commitment to international quality, security, and sustainability principles.', icon: 'Globe' },
      { id: '3', title: 'Trusted Partnership', desc: 'Transparent business processes and long-term value-driven strategic partnerships.', icon: 'ShieldCheck' }
    ],
    standardsTitle: 'Global Quality Standards & Reliability',
    standardsSubtitle: 'Setting the industry benchmark with our international quality, environmental, and information security standards.',
    standardsList: [
      'ISO 9001: Quality Management System',
      'ISO 27001: Information Security Standard',
      'ISO 45001: Occupational Health & Safety',
      'ISO 14001: Environmental Management System'
    ]
  },

  journey: {
    badge: 'TIMELINE',
    title: 'Our Journey of Success and Transformation',
    subtitle: 'Our company history of continuous growth and innovation since inception',
    items: [
      { id: '1', year: '2015', title: 'Founding & Telecom', desc: 'Started operations with telecommunications infrastructure projects and fiber optic investments.', badge: 'Inception' },
      { id: '2', year: '2018', title: 'Software & R&D Hub', desc: 'Launched our technology unit developing enterprise SaaS, artificial intelligence, and cloud architectures.', badge: 'Expansion' },
      { id: '3', year: '2021', title: 'Outdoor & Media Ecosystem', desc: 'Added outdoor advertising spaces and corporate promotional products to our portfolio.', badge: 'Growth' },
      { id: '4', year: '2024', title: 'AI & Global Solutions', desc: 'Deployed AI-driven business automations and international corporate partnerships.', badge: 'Innovation' }
    ]
  },

  services: {
    badge: 'OUR AREAS OF EXPERTISE',
    title: 'Strategic Sectors We Operate In',
    subtitle: 'We provide integrated, turnkey solutions with dedicated specialized teams in each sector.',
    items: [
      {
        id: 'telecom',
        title: 'Telecommunications & Infrastructure',
        shortName: 'Telecom',
        description: 'Fiber optic cable laying, cell tower installations, network management, and 5G readiness infrastructure.',
        icon: 'Radio',
        color: '#D12F0E',
        badge: 'Critical Infrastructure',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
        path: '/telekomunikasyon',
        points: ['Fiber Optic Line Installation', 'Cell Tower Integration', 'Data Center Network Management', '24/7 Field Maintenance Support'],
        faqs: [
          { q: 'Which technologies do you use for infrastructure detection?', a: 'We use ground-penetrating radar (GPR), high-resolution laser scanners (LiDAR), and GIS-based digital mapping systems.' },
          { q: 'What is the average project delivery timeframe?', a: 'Depending on scale, small-to-medium field detections take 1-3 weeks, while metropolitan infrastructure projects take 1-3 months.' },
          { q: 'Do you possess environmental and occupational safety certifications?', a: 'Yes, we operate in full compliance with ISO 9001, ISO 45001, and ISO 27001 certifications.' }
        ]
      },
      {
        id: 'software',
        title: 'Software & Technology Solutions',
        shortName: 'Software',
        description: 'Enterprise SaaS platforms, artificial intelligence automations, mobile and web applications.',
        icon: 'Cpu',
        color: '#F6C310',
        badge: 'AI & Cloud',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        path: '/yazilim',
        points: ['Custom Web & Mobile Apps', 'AI & Machine Learning', 'Cloud Data Architectures', 'Cybersecurity & Integration'],
        faqs: [
          { q: 'Which programming languages and technologies do you specialize in?', a: 'We specialize in React, Node.js, Python, Go, Java, Flutter, and leading cloud providers (AWS/GCP/Azure).' },
          { q: 'Can you integrate with our existing legacy systems?', a: 'Yes, we build custom REST/SOAP API adapters for legacy systems ensuring seamless transformation without data loss.' },
          { q: 'How is ongoing maintenance and SLA support handled?', a: 'We provide 24/7 SLA guarantees, regular security patching, and proactive performance optimizations post-launch.' }
        ]
      },
      {
        id: 'promotion',
        title: 'Promotion & Corporate Merchandise',
        shortName: 'Promotion',
        description: 'Specially designed corporate gifts and VIP promotional sets representing your brand with prestige.',
        icon: 'Sparkles',
        color: '#E97B1A',
        badge: 'Corporate Identity',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
        path: '/promosyon',
        points: ['Custom Designed VIP Gifts', 'Tech Promotional Products', 'Eco-Friendly Sustainable Sets', 'Fast & High Quality Production'],
        faqs: [
          { q: 'What is your minimum order quantity (MOQ)?', a: 'Depending on product type, starting from 50 units for standard products and 100 units for fully bespoke production.' },
          { q: 'Do you offer certified eco-friendly products?', a: 'Yes, our catalog features FSC-certified paper, bamboo, recycled plastics, and organic cotton merchandise.' },
          { q: 'Do you provide sample approvals before full production?', a: 'Yes, we provide custom-branded digital 3D models and physical sample approval prior to mass production.' }
        ]
      },
      {
        id: 'advertising',
        title: 'Outdoor & Advertising Media',
        shortName: 'Outdoor Media',
        description: 'LED screens, billboard networks, building wraps, and high-impact creative media campaigns.',
        icon: 'Layers',
        color: '#B7442E',
        badge: 'Media & Advertising',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
        path: '/reklam',
        points: ['Digital LED Billboards', 'City Megalight Networks', 'Building & Facade Wrapping', 'Audience-Targeted Planning'],
        faqs: [
          { q: 'How are campaign impressions and reach measured and reported?', a: 'Real-time viewer density, total impressions, and campaign duration on digital LED screens are presented with detailed analytics.' },
          { q: 'Do you provide creative design and video production support?', a: 'Yes, our in-house creative team produces 3D animations, video edits, and outdoor-optimized graphic assets.' }
        ]
      },
      {
        id: 'education',
        title: 'Training & Consulting Academy',
        shortName: 'Academy',
        description: 'Corporate development academies, leadership workshops, and technical certification programs.',
        icon: 'Compass',
        color: '#2563EB',
        badge: 'Talent Growth',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        path: '/egitim',
        points: ['Corporate Leadership Academy', 'Tech & Data Training', 'Career & Talent Management', 'Certified Expertise Bootcamps'],
        faqs: [
          { q: 'Are trainings conducted in-person or online?', a: 'Offered in in-person hybrid classroom settings or through our interactive digital platform based on preference.' },
          { q: 'Are participants awarded certificates upon completion?', a: 'Yes, internationally recognized corporate certificates of participation and achievement are issued.' }
        ]
      },
      {
        id: 'consulting',
        title: 'Management & Strategy Advisory',
        shortName: 'Management',
        description: 'M&A advisory, digital transformation roadmaps, and operational efficiency consulting.',
        icon: 'ShieldCheck',
        color: '#059669',
        badge: 'Strategy',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        path: '/danismanlik',
        points: ['Digital Transformation Strategy', 'Operational Process Improvement', 'Financial & Risk Advisory', 'Growth & Market Entry Analysis'],
        faqs: [
          { q: 'How long do consultants remain on-site during advisory projects?', a: 'We provide full-time on-site presence or weekly strategic coordination sessions based on project scope.' },
          { q: 'Is there a return on investment (ROI) benchmark?', a: 'We track attainment of predefined KPIs and cost-saving targets through transparent metric dashboards.' }
        ]
      }
    ]
  },

  testimonials: {
    badge: 'CLIENT EXPERIENCE',
    title: 'Feedback from Our Business Partners',
    subtitle: 'Experiences of enterprises and executives with whom we achieved success together',
    items: [
      {
        id: '1',
        name: 'Ahmet Yilmaz',
        role: 'Chief Technology Officer (CTO)',
        company: 'Global Telecom Inc.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        text: 'The professionalism demonstrated by Nima Group in our fiber infrastructure and data center project was exemplary. Delivered ahead of schedule with zero downtime.',
        rating: 5
      },
      {
        id: '2',
        name: 'Zeynep Kaya',
        role: 'Marketing & Communications Director',
        company: 'Nova Holding',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
        text: 'Our outdoor LED screen campaign and high quality corporate promotional merchandise significantly elevated our brand perception. Thank you.',
        rating: 5
      },
      {
        id: '3',
        name: 'Mehmet Demir',
        role: 'General Manager',
        company: 'Delta Logistics Solutions',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        text: 'With their management and strategic consulting support, we optimized our entire supply chain using AI, achieving 25% savings in operational costs.',
        rating: 5
      }
    ]
  },

  references: {
    badge: 'TRUSTED BRANDS',
    title: 'Our References and Success Stories',
    subtitle: 'We have executed high-value projects with Turkey\'s and the world\'s leading brands.',
    items: [
      {
        id: '1',
        name: 'Turkcell Infrastructure Partnership',
        category: 'Telecommunications',
        logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      },
      {
        id: '2',
        name: 'FinansBank SaaS Integration',
        category: 'Software & Finance',
        logoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      },
      {
        id: '3',
        name: 'Ege Yapi Outdoor Campaign',
        category: 'Advertising & Media',
        logoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      },
      {
        id: '4',
        name: 'Borusan Strategy & Academy',
        category: 'Training & Consulting',
        logoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80',
        link: 'https://sarfea.com.tr'
      }
    ]
  },

  contact: {
    badge: 'CONTACT',
    title: 'Ready to Launch a New Project?',
    subtitle: 'You can reach our expert team 24/7 for your questions, partnership inquiries, and quote requests.',
    phone: '+90 (212) 555 01 23',
    phoneSecondary: '+90 (532) 123 45 67',
    email: 'info@nimagrup.com',
    emailSupport: 'destek@nimagrup.com',
    address: 'Buyukdere Avenue No: 199, Levent Plaza Floor: 14, Besiktas / Istanbul',
    workingHours: 'Monday - Friday: 08:30 - 18:30',
    mapEmbedUrl: 'https://maps.google.com'
  },

  footer: {
    description: 'Nima Group is a pioneering enterprise ecosystem offering integrated solutions in telecommunications, technology, outdoor advertising, and strategy.',
    copyright: '© 2026 NIMA GROUP. All rights reserved.',
    newsletterTitle: 'Subscribe to Our Industry Innovation Bulletin',
    newsletterSubtitle: 'Receive the latest analysis and reports from technology, telecommunications, and management in your inbox.',
    socials: [
      { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Globe' },
      { id: 'twitter', name: 'Twitter / X', url: 'https://twitter.com', icon: 'Share2' },
      { id: 'instagram', name: 'Instagram', url: 'https://instagram.com', icon: 'MessageCircle' },
      { id: 'youtube', name: 'YouTube', url: 'https://youtube.com', icon: 'Send' }
    ]
  },

  images: {
    logoUrl: '',
    heroBg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80',
    aboutImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80',
    contactImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2069&q=80'
  },

  security: {
    adminPassword: 'nima2026!'
  }
};

// Embed default English content into defaultContent
defaultContent.en = defaultContentEn;

