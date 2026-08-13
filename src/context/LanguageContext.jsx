import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  tr: {
    // Navigation
    nav_home: "Ana Sayfa",
    nav_sectors: "Sektörler",
    nav_about: "Kurumsal",
    nav_contact: "İletişim",
    nav_proposal: "Teklif Al",
    nav_quick_proposal: "Hızlı Proje Teklifi Al",
    nav_sectors_header: "FAALİYET ALANLARIMIZ",

    // Hero Slides
    hero_slide1_badge: "Kurumsal Holding Yapısı",
    hero_slide1_title: "Geleceğin Teknolojilerini<br/><span>Bugünden</span> İnşa Ediyoruz.",
    hero_slide1_subtitle: "NIMA Grup; 6 farklı stratejik sektörde yenilikçi mühendislik, dijital dönüşüm ve kurumsal çözümleriyle sürdürülebilir değer üretir.",
    hero_slide1_stat1_num: "25+ Yıl",
    hero_slide1_stat1_txt: "Sektörel Liderlik",
    hero_slide1_stat2_num: "500+",
    hero_slide1_stat2_txt: "Tamamlanan Proje",

    hero_slide2_badge: "Telekomünikasyon Altyapısı",
    hero_slide2_title: "Telekomünikasyon & 5G<br/><span>Fiber Optik</span> Altyapı.",
    hero_slide2_subtitle: "81 ilde kesintisiz fiber optik haritalama, yer altı radar tespiti ve yüksek performanslı baz istasyonu altyapı mühendisliği.",
    hero_slide2_stat1_num: "12,500+ km",
    hero_slide2_stat1_txt: "Fiber Optik Hat",
    hero_slide2_stat2_num: "81 İlde",
    hero_slide2_stat2_txt: "Saha Operasyonu",

    hero_slide3_badge: "Yazılım & Teknoloji",
    hero_slide3_title: "Yapay Zeka Destekli<br/><span>Yazılım & Bulut</span> Sistemleri.",
    hero_slide3_subtitle: "Kurumsal ERP, mobil uygulamalar ve DevSecOps bulut mimarileri ile şirketinizin dijital dönüşümünü kurguluyoruz.",
    hero_slide3_stat1_num: "1.2M+",
    hero_slide3_stat1_txt: "Aktif Kullanıcı",
    hero_slide3_stat2_num: "%99.99",
    hero_slide3_stat2_txt: "Sistem Uptime",

    hero_slide4_badge: "Kurumsal Promosyon",
    hero_slide4_title: "Prestijli & Sürdürülebilir<br/><span>Kurumsal Hediye</span> Çözümleri.",
    hero_slide4_subtitle: "Markanıza değer katan eco-friendly, özel tasarım VIP setler ve teknolojik kurumsal hediye koleksiyonları.",
    hero_slide4_stat1_num: "2.5M+",
    hero_slide4_stat1_txt: "Üretilen Ürün",
    hero_slide4_stat2_num: "%100 Eko",
    hero_slide4_stat2_txt: "Sürdürülebilir Seri",

    hero_slide5_badge: "Strateji & Reklam",
    hero_slide5_title: "Stratejik Yönetim &<br/><span>360° Reklam</span> Ajansı.",
    hero_slide5_subtitle: "Şirket birleşmelerinden performans pazarlamasına, markanızı zirveye taşıyan uçtan uca danışmanlık ve kreatif güç.",
    hero_slide5_stat1_num: "50M+",
    hero_slide5_stat1_txt: "Erişilen Kitle",
    hero_slide5_stat2_num: "$500M+",
    hero_slide5_stat2_txt: "Yönetilen Bütçe",

    hero_slide6_badge: "Eğitim & İnovasyon Akademisi",
    hero_slide6_title: "Kurumsal Gelişim &<br/><span>Geleceğin Yetenekleri</span>.",
    hero_slide6_subtitle: "Şirket içi akademiler, dijital eğitim platformları ve teknik yetkinlik programlarıyla geleceğin liderlerini yetiştiriyoruz.",
    hero_slide6_stat1_num: "15,000+",
    hero_slide6_stat1_txt: "Sertifikalı Mezun",
    hero_slide6_stat2_num: "120+",
    hero_slide6_stat2_txt: "Kurumsal Akademi",

    hero_slide7_badge: "Stratejik Danışmanlık",
    hero_slide7_title: "Global Dönüşüm &<br/><span>Yönetim Danışmanlığı</span>.",
    hero_slide7_subtitle: "Uluslararası pazar analizi, operasyonel verimlilik ve stratejik büyüme mimarileri ile şirketleri global pazarlara taşıyoruz.",
    hero_slide7_stat1_num: "18+ Ülke",
    hero_slide7_stat1_txt: "Küresel Danışmanlık",
    hero_slide7_stat2_num: "%40+",
    hero_slide7_stat2_txt: "Ortalama Büyüme",

    hero_cta_explore: "Sektörleri Keşfet",
    hero_cta_proposal: "Proje Teklifi Al",
    hero_trust_iso: "ISO 9001 / 27001 Onaylı",
    hero_trust_ops: "81 İlde Aktif Operasyon",

    // Home Page - Kısaca Biz
    home_biz_badge: "Kısaca Biz",
    home_biz_title: "Geleceğe Değer Katan<br /><span>Öncü Holding Yapısı</span>",
    home_biz_subtitle: "NIMA Grup; telekomünikasyon altyapısından yapay zeka yazılımlarına, kurumsal promosyondan stratejik danışmanlık ve reklama kadar 6 ana sektörde faaliyet gösteren lider holding yapısıdır.",
    home_biz_card1_title: "Yenilikçi Mühendislik & Ar-Ge",
    home_biz_card1_desc: "Yapay zeka, 5G fiber optik altyapı haritalama ve mikrohizmet mimarileri ile uluslararası standartlarda yüksek teknoloji üretiyoruz.",
    home_biz_card2_title: "Global Operasyon & 81 İl Saha Ağımız",
    home_biz_card2_desc: "Türkiye'nin 81 ilindeki kesintisiz saha operasyonlarımızın yanı sıra Almanya ve Dubai merkezlerimizle küresel ölçekte hizmet veriyoruz.",
    home_biz_card3_title: "Tavizsiz Kalite & Sürdürülebilirlik",
    home_biz_card3_desc: "ISO 9001, 27001 ve 45001 kalitesinde denetlenen iş süreçleri ve karbon ayak izini azaltan çevre dostu üretim anlayışı.",
    home_biz_btn: "Kurumsal Yapımızı Detaylı İnceleyin",

    // Sector Explorer
    explorer_badge: "İnteraktif Sektör Rehberi",
    explorer_title: "Sektörlerimizi Keşfedin",
    explorer_subtitle: "Hizmet sunduğumuz 6 ana sektörün detaylarını, öne çıkan projelerini ve uzmanlıklarımızı inceleyin.",
    explorer_features_title: "Öne Çıkan Uzmanlık Alanları:",
    explorer_btn_page: "Sektör Sayfasına Git",
    explorer_btn_proposal: "Teklif İste",
    explorer_ref_tag: "Örnek Başarı Hikayesi",

    // Projects Portfolio
    portfolio_badge: "Başarı Hikayeleri & Portföy",
    portfolio_title: "Öne Çıkan Projelerimiz",
    portfolio_subtitle: "Sektör liderleri için hayata geçirdiğimiz yüksek etkili projelerde arama ve filtreleme yapın.",
    portfolio_search_placeholder: "Proje veya hizmet adı ile arayın...",
    portfolio_all: "Tüm Sektörler",
    portfolio_details: "Detaylar",

    // Nima Difference
    diff_badge: "Nima Farkı",
    diff_title: "Neden Nima Grup?",
    diff_subtitle: "Köklü tecrübemiz, yenilikçi yaklaşımımız ve tavizsiz kalite ilkemizle şirketleri geleceğin dijital dünyasına taşıyoruz.",
    diff_item1_title: "Sürdürülebilirlik & Çevre Odaklılık",
    diff_item1_desc: "Karbon ayak izini azaltan yeşil teknoloji ve geri dönüştürülebilir malzeme standartları.",
    diff_item2_title: "Uluslararası Sertifikalı Standartlar",
    diff_item2_desc: "ISO 9001, ISO 27001 ve ISO 45001 kalitesinde denetlenen iş süreçleri.",
    diff_item3_title: "%99.8 Müşteri Memnuniyeti",
    diff_item3_desc: "7/24 kesintisiz destek, şeffaf raporlama ve bütçe uyumluluğu garantisi.",
    diff_btn: "Kurumsal Profilimiz",
    diff_card_quote: "\"Geleceğe Güvenle Şekil Veriyoruz\"",
    diff_card_sub: "1200+ Çalışan • 81 İl • 6 Sektör",

    // FAQs
    faqs_title: "Sıkça Sorulan Sorular",
    faqs_subtitle: "NIMA Grup hakkında merak edilen tüm konular ve yanıtları.",

    // CTA Section
    cta_title: "Projenizi Birlikte Hayata Geçirelim",
    cta_subtitle: "Sektörünüze özel yenilikçi çözümlerimizi konuşmak için hemen teklif alın veya uzman ekibimizle iletişime geçin.",
    cta_btn_proposal: "Hızlı Teklif Al",
    cta_btn_contact: "İletişime Geçin",

    // Direct Contact Channels Template
    direct_title: "Direkt İletişim Kanalları",
    direct_subtitle: "Telefon, WhatsApp veya sosyal medya hesaplarımız üzerinden hızlıca temsilcilerimizle görüşün.",
    direct_wa_title: "WhatsApp Canlı Destek",
    direct_phone_title: "Telefon İletişim",
    direct_label_address: "ADRES:",
    direct_label_email: "E-POSTA:",
    direct_social_title: "Sosyal Medya & Diğer Kanallar",

    // Contact Page Dark Theme
    contact_card1_title: "Genel Merkez",
    contact_card1_link: "Haritada Yol Tarifi Al",
    contact_card2_title: "Telefon & Santral",
    contact_card2_sub: "Tüm soru ve talepleriniz için doğrudan bize ulaşın.",
    contact_card3_title: "WhatsApp Canlı Destek",
    contact_card3_sub: "Hızlı ve anlık müşteri hizmetleri temsilcisi ile görüşün.",
    contact_card3_link: "WhatsApp Sohbet Başlat",
    contact_card4_title: "E-posta İletişim",
    contact_card4_sub: "Teklif ve kurumsal iş birlikleri için e-posta gönderin.",

    contact_form_tag: "İLETİŞİM FORMU",
    contact_form_title: "Bize Mesaj Gönderin",
    contact_form_desc: "Formu doldurarak projeniz veya merak ettikleriniz hakkında hemen teklif alabilirsiniz.",
    contact_label_name: "Adınız Soyadınız *",
    contact_place_name: "Adınız Soyadınız",
    contact_label_email: "E-posta Adresiniz *",
    contact_place_email: "ornek@sirket.com",
    contact_label_phone: "Telefon Numaranız",
    contact_place_phone: "+90 (5XX) XXX XX XX",
    contact_label_company: "Şirket / Kurum Adı",
    contact_place_company: "Kurum / Şirket Adı",
    contact_label_subject: "İletişim Konusu *",
    contact_place_subject: "Lütfen bir konu seçiniz",
    contact_label_message: "Mesajınız *",
    contact_place_message: "Projeniz veya sorunuz hakkında detay yazabilirsiniz...",
    contact_captcha: "Ben robot değilim",
    contact_btn_send: "Gönder",
    contact_submitted_title: "Mesajınız İletildi!",
    contact_submitted_desc: "İletişim talebiniz başarıyla alınmıştır. İlgili sektör temsilcimiz en geç 24 saat içerisinde dönüş yapacaktır.",
    contact_btn_new: "Yeni Mesaj Gönder",

    contact_sidebar_map_title: "Ofis Konumumuz",
    contact_sidebar_map_open: "Haritalar'da aç",
    contact_sidebar_hours_title: "Çalışma Saatlerimiz",
    contact_sidebar_mon_fri: "Pazartesi - Cuma:",
    contact_sidebar_sat: "Cumartesi:",
    contact_sidebar_sun: "Pazar:",
    contact_sidebar_closed: "Kapalı",
    contact_sidebar_notice: "WhatsApp Hattımız Etkinlik Süreçlerinde 7/24 Hizmetinizdedir.",

    // Sector Page
    sector_tab_overview: "Genel Bakış & Hizmetler",
    sector_tab_process: "Çalışma Metodolojisi",
    sector_tab_partners: "Çözüm Ortaklarımız",
    sector_tab_references: "Referanslar & Projeler",
    sector_tab_contact: "Direkt İletişim",
    sector_tab_faqs: "Sıkça Sorulan Sorular",

    sector_overview_badge: "Uzmanlığı",
    sector_overview_title: "Geleceği Şekillendiren<br/>Çözümler",
    sector_overview_desc1: "alanında sektördeki en son teknolojileri, uluslararası en iyi uygulamaları ve yüksek mühendislik standartlarını harmanlıyoruz.",
    sector_overview_desc2: "Özel proje gereksinimlerinize yanıt veren esnek, ölçeklenebilir ve yüksek performanslı çözümlerimizle iş süreçlerinizde maksimum verimlilik hedefliyoruz.",
    sector_overview_btn: "İçin Teklif Al",
    sector_features_heading: "Öne Çıkan Hizmet Başlıkları",

    sector_process_title: "Nasıl Çalışıyoruz?",
    sector_process_sub: "Sürecin her adımında şeffaf, ölçülebilir ve sonuç odaklı bir yaklaşım benimsiyoruz.",

    sector_partners_badge: "Güçlü Ekosistem",
    sector_partners_title: "Çözüm Ortaklarımız",
    sector_partners_sub: "Uluslararası standartlarda projeler sunmak için alanında lider teknoloji ve çözüm sağlayıcıları ile güçlerimizi birleştiriyoruz.",
    sector_partner_tag: "Stratejik Çözüm Ortağı",

    sector_references_badge: "Örnek Başarı Öyküleri",
    sector_references_title: "Referanslarımız",
    sector_references_sub: "Sektörünüzde hayata geçirdiğimiz yüksek etkili projelerimizden öne çıkanlar.",

    sector_cta_title: "Projenizi Başlatın",
    sector_cta_sub: "İhtiyaçlarınıza özel teknik detayları ve bütçe planlamasını görüşmek için uzman ekibimizle iletişim kurun.",
    sector_cta_btn: "Hızlı Proje Teklifi Al",

    // About Page
    about_hero_title: "Geleceği Şekillendiren<br/><span>Kurumsal Güç</span>.",
    about_hero_sub: "1999 yılından bu yana 6 ana sektörde inovasyon, teknoloji ve sürdürülebilir büyüme odaklı çözümler sunmaktadır.",
    about_badge: "Şirket Profili & Tarihçe",

    about_vision_title: "Vizyonumuz",
    about_vision_desc: "Faaliyet gösterdiğimiz tüm sektörlerde, teknolojiyi insan odaklı ve sürdürülebilir bir yaklaşımla harmanlayarak küresel pazarda ilham veren, standart belirleyen lider bir holding yapısı olmak.",
    about_mission_title: "Misyonumuz",
    about_mission_desc: "Paydaşlarımıza en yüksek katma değeri sunmak; şeffaf, güvenilir ve yenilikçi hizmet anlayışıyla topluma ve çevreye duyarlı sürdürülebilir iş modelleri geliştirmek.",

    about_milestones_badge: "Tarihsel Başarı Yolculuğu",
    about_milestones_title: "Kilometre Taşlarımız",
    about_milestones_sub: "1999'dan günümüze büyüme ve dönüşüm hikayemiz.",
    about_milestone_tag: "Dönüm Noktası",

    about_values_title: "Temel Değerlerimiz",
    about_values_sub: "Attığımız her adımda rehber edindiğimiz kurumsal ilkelerimiz.",

    about_standards_title: "Küresel Kalite Standartları",
    about_standards_sub: "Tüm operasyonlarımız uluslararası sertifikasyonlar ve sürdürülebilirlik protokollerine göre yürütülmektedir.",
    about_std1: "ISO 9001 Kalite",
    about_std2: "ISO 27001 Bilgi Güvenliği",
    about_std3: "ISO 45001 İSG",
    about_std4: "%100 Sürdürülebilirlik",

    // Proposal Modal
    modal_badge: "Hızlı Proje Teklifi",
    modal_header: "Projenizi Birlikte Planlayalım",
    modal_step1_title: "1. İlgilendiğiniz Sektörü Seçin",
    modal_step2_title: "2. Tahmini Bütçe ve Kapsam",
    modal_step3_title: "3. İletişim Bilgileriniz",
    modal_budget_label: "Proje Bütçe Aralığı",
    modal_details_label: "Proje Özeti veya İhtiyaçlarınız",
    modal_details_place: "Hedefleriniz, zaman takviminiz veya özel istekleriniz...",
    modal_btn_next: "Devam Et",
    modal_btn_prev: "Geri",
    modal_btn_submit: "Teklifi Gönder",
    modal_success_title: "Teklif Talebiniz Alındı!",
    modal_success_desc: "Uzman ekibimiz projenizi inceleyip 24 saat içerisinde sizinle iletişime geçecektir.",

    // Footer
    footer_desc: "Telekomünikasyondan yazılıma, danışmanlıktan reklama 6 ana sektörde yenilikçi ve öncü çözümleriyle kurumsal geleceği inşa eden holding.",
    footer_title_sectors: "SEKTÖRLERİMİZ",
    footer_title_corp: "KURUMSAL",
    footer_title_contact: "İLETİŞİM",
    footer_rights: "Tüm hakları saklıdır.",

    // Generic
    lang_tr: "Türkçe",
    lang_en: "English"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_sectors: "Sectors",
    nav_about: "Corporate",
    nav_contact: "Contact",
    nav_proposal: "Get Quote",
    nav_quick_proposal: "Quick Project Quote",
    nav_sectors_header: "OUR SECTORS OF ACTIVITY",

    // Hero Slides
    hero_slide1_badge: "Corporate Holding Structure",
    hero_slide1_title: "Building the Technologies of<br/><span>Tomorrow</span> Today.",
    hero_slide1_subtitle: "NIMA Group delivers sustainable value with innovative engineering, digital transformation, and corporate solutions across 6 strategic sectors.",
    hero_slide1_stat1_num: "25+ Years",
    hero_slide1_stat1_txt: "Industry Leadership",
    hero_slide1_stat2_num: "500+",
    hero_slide1_stat2_txt: "Completed Projects",

    hero_slide2_badge: "Telecommunications Infrastructure",
    hero_slide2_title: "Telecommunications & 5G<br/><span>Fiber Optic</span> Infrastructure.",
    hero_slide2_subtitle: "Uninterrupted fiber optic mapping, underground radar detection, and high-performance cell tower infrastructure engineering across 81 provinces.",
    hero_slide2_stat1_num: "12,500+ km",
    hero_slide2_stat1_txt: "Fiber Optic Line",
    hero_slide2_stat2_num: "81 Cities",
    hero_slide2_stat2_txt: "Field Operations",

    hero_slide3_badge: "Software & Technology",
    hero_slide3_title: "AI-Powered<br/><span>Software & Cloud</span> Systems.",
    hero_slide3_subtitle: "We engineer your digital transformation with corporate ERP, mobile applications, and DevSecOps cloud architectures.",
    hero_slide3_stat1_num: "1.2M+",
    hero_slide3_stat1_txt: "Active Users",
    hero_slide3_stat2_num: "99.99%",
    hero_slide3_stat2_txt: "System Uptime",

    hero_slide4_badge: "Corporate Promotional Products",
    hero_slide4_title: "Prestigious & Sustainable<br/><span>Corporate Gift</span> Solutions.",
    hero_slide4_subtitle: "Eco-friendly, custom-designed VIP sets and technological corporate gift collections that elevate your brand.",
    hero_slide4_stat1_num: "2.5M+",
    hero_slide4_stat1_txt: "Products Produced",
    hero_slide4_stat2_num: "100% Eco",
    hero_slide4_stat2_txt: "Sustainable Line",

    hero_slide5_badge: "Strategy & Advertising",
    hero_slide5_title: "Strategic Management &<br/><span>360° Ad</span> Agency.",
    hero_slide5_subtitle: "End-to-end consulting and creative power that elevates your brand to the top, from M&As to performance marketing.",
    hero_slide5_stat1_num: "50M+",
    hero_slide5_stat1_txt: "Audience Reached",
    hero_slide5_stat2_num: "$500M+",
    hero_slide5_stat2_txt: "Managed Budget",

    hero_slide6_badge: "Education & Innovation Academy",
    hero_slide6_title: "Corporate Growth &<br/><span>Future Talent</span>.",
    hero_slide6_subtitle: "We train tomorrow's leaders with in-house corporate academies, digital learning platforms, and technical competency programs.",
    hero_slide6_stat1_num: "15,000+",
    hero_slide6_stat1_txt: "Certified Graduates",
    hero_slide6_stat2_num: "120+",
    hero_slide6_stat2_txt: "Corporate Academies",

    hero_slide7_badge: "Strategic Consulting",
    hero_slide7_title: "Global Transformation &<br/><span>Management Consulting</span>.",
    hero_slide7_subtitle: "We expand companies into global markets with international market analysis, operational efficiency, and growth architectures.",
    hero_slide7_stat1_num: "18+ Countries",
    hero_slide7_stat1_txt: "Global Consulting",
    hero_slide7_stat2_num: "40%+",
    hero_slide7_stat2_txt: "Average Growth",

    hero_cta_explore: "Explore Sectors",
    hero_cta_proposal: "Get Project Quote",
    hero_trust_iso: "ISO 9001 / 27001 Certified",
    hero_trust_ops: "Active Operations in 81 Cities",

    // Home Page - Kısaca Biz
    home_biz_badge: "Briefly About Us",
    home_biz_title: "Leading Holding Adding<br /><span>Value to the Future</span>",
    home_biz_subtitle: "NIMA Group is a leading holding operating in 6 main sectors, ranging from telecommunications infrastructure to AI software, corporate gifts, strategic consulting, and advertising.",
    home_biz_card1_title: "Innovative Engineering & R&D",
    home_biz_card1_desc: "We develop high technology to international standards using artificial intelligence, 5G fiber optic infrastructure mapping, and microservices architectures.",
    home_biz_card2_title: "Global Operations & 81-City Field Network",
    home_biz_card2_desc: "In addition to our uninterrupted field operations in 81 provinces across Turkey, we serve globally from our hubs in Germany and Dubai.",
    home_biz_card3_title: "Uncompromising Quality & Sustainability",
    home_biz_card3_desc: "Business processes audited to ISO 9001, 27001, and 45001 standards, with eco-friendly production reducing our carbon footprint.",
    home_biz_btn: "Explore Our Corporate Profile",

    // Sector Explorer
    explorer_badge: "Interactive Sector Guide",
    explorer_title: "Discover Our Sectors",
    explorer_subtitle: "Explore the details, featured projects, and expertise across the 6 core sectors we serve.",
    explorer_features_title: "Featured Areas of Expertise:",
    explorer_btn_page: "Go to Sector Page",
    explorer_btn_proposal: "Request Quote",
    explorer_ref_tag: "Success Case Study",

    // Projects Portfolio
    portfolio_badge: "Success Stories & Portfolio",
    portfolio_title: "Our Featured Projects",
    portfolio_subtitle: "Search and filter through high-impact projects delivered for industry leaders.",
    portfolio_search_placeholder: "Search by project or service name...",
    portfolio_all: "All Sectors",
    portfolio_details: "Details",

    // Nima Difference
    diff_badge: "The Nima Difference",
    diff_title: "Why Nima Group?",
    diff_subtitle: "With deep experience, an innovative approach, and uncompromising quality principles, we carry companies into tomorrow's digital world.",
    diff_item1_title: "Sustainability & Environmental Focus",
    diff_item1_desc: "Green technology and recyclable material standards that reduce carbon footprint.",
    diff_item2_title: "International Certified Standards",
    diff_item2_desc: "Business processes audited under ISO 9001, ISO 27001, and ISO 45001 quality.",
    diff_item3_title: "99.8% Customer Satisfaction",
    diff_item3_desc: "24/7 continuous support, transparent reporting, and budget compliance guarantee.",
    diff_btn: "Our Corporate Profile",
    diff_card_quote: "\"Shaping the Future with Confidence\"",
    diff_card_sub: "1200+ Employees • 81 Cities • 6 Sectors",

    // FAQs
    faqs_title: "Frequently Asked Questions",
    faqs_subtitle: "Everything you need to know about NIMA Group.",

    // CTA Section
    cta_title: "Let's Bring Your Project to Life",
    cta_subtitle: "Get a quote now or contact our expert team to discuss custom innovative solutions for your industry.",
    cta_btn_proposal: "Get Quick Quote",
    cta_btn_contact: "Get in Touch",

    // Direct Contact Channels Template
    direct_title: "Direct Contact Channels",
    direct_subtitle: "Get in touch with our representatives quickly via Phone, WhatsApp, or our social media accounts.",
    direct_wa_title: "WhatsApp Live Support",
    direct_phone_title: "Phone Contact",
    direct_label_address: "ADDRESS:",
    direct_label_email: "E-MAIL:",
    direct_social_title: "Social Media & Other Channels",

    // Contact Page Dark Theme
    contact_card1_title: "Headquarters",
    contact_card1_link: "Get Directions on Map",
    contact_card2_title: "Phone & Switchboard",
    contact_card2_sub: "Contact us directly for all inquiries and requests.",
    contact_card3_title: "WhatsApp Live Support",
    contact_card3_sub: "Chat with a customer service representative instantly.",
    contact_card3_link: "Start WhatsApp Chat",
    contact_card4_title: "E-mail Contact",
    contact_card4_sub: "Send an email for quotes and corporate partnerships.",

    contact_form_tag: "CONTACT FORM",
    contact_form_title: "Send Us a Message",
    contact_form_desc: "Fill out the form to receive an immediate proposal regarding your project or questions.",
    contact_label_name: "Full Name *",
    contact_place_name: "Full Name",
    contact_label_email: "E-mail Address *",
    contact_place_email: "example@company.com",
    contact_label_phone: "Phone Number",
    contact_place_phone: "+90 (5XX) XXX XX XX",
    contact_label_company: "Company / Institution Name",
    contact_place_company: "Company Name",
    contact_label_subject: "Contact Topic *",
    contact_place_subject: "Please select a topic",
    contact_label_message: "Your Message *",
    contact_place_message: "Write details about your project or question...",
    contact_captcha: "I am not a robot",
    contact_btn_send: "Send",
    contact_submitted_title: "Message Delivered!",
    contact_submitted_desc: "Your contact request has been received. Our sector representative will contact you within 24 hours.",
    contact_btn_new: "Send Another Message",

    contact_sidebar_map_title: "Office Location",
    contact_sidebar_map_open: "Open in Maps",
    contact_sidebar_hours_title: "Working Hours",
    contact_sidebar_mon_fri: "Monday - Friday:",
    contact_sidebar_sat: "Saturday:",
    contact_sidebar_sun: "Sunday:",
    contact_sidebar_closed: "Closed",
    contact_sidebar_notice: "Our WhatsApp Line is at Your Service 24/7 During Event Processes.",

    // Sector Page
    sector_tab_overview: "Overview & Services",
    sector_tab_process: "Work Methodology",
    sector_tab_partners: "Solution Partners",
    sector_tab_references: "References & Projects",
    sector_tab_contact: "Direct Contact",
    sector_tab_faqs: "Frequently Asked Questions",

    sector_overview_badge: "Expertise",
    sector_overview_title: "Solutions Shaping<br/>the Future",
    sector_overview_desc1: "We blend the latest industry technologies, international best practices, and high engineering standards.",
    sector_overview_desc2: "We aim for maximum efficiency in your business processes with flexible, scalable, and high-performance solutions tailored to your project requirements.",
    sector_overview_btn: "Get Quote For",
    sector_features_heading: "Featured Service Highlights",

    sector_process_title: "How We Work",
    sector_process_sub: "We adopt a transparent, measurable, and results-oriented approach at every step.",

    sector_partners_badge: "Strong Ecosystem",
    sector_partners_title: "Our Solution Partners",
    sector_partners_sub: "We combine our strengths with leading technology and solution providers to deliver projects at international standards.",
    sector_partner_tag: "Strategic Solution Partner",

    sector_references_badge: "Sample Success Stories",
    sector_references_title: "Our References",
    sector_references_sub: "Highlights from high-impact projects we have implemented in your sector.",

    sector_cta_title: "Start Your Project",
    sector_cta_sub: "Contact our expert team to discuss custom technical details and budget planning.",
    sector_cta_btn: "Get Quick Project Quote",

    // About Page
    about_hero_title: "Corporate Power<br/><span>Shaping the Future</span>.",
    about_hero_sub: "Providing innovation, technology, and sustainable growth solutions across 6 main sectors since 1999.",
    about_badge: "Company Profile & History",

    about_vision_title: "Our Vision",
    about_vision_desc: "To be a leading holding structure that inspires and sets standards in the global market by blending technology with a human-centered and sustainable approach in all sectors we operate in.",
    about_mission_title: "Our Mission",
    about_mission_desc: "To deliver the highest value to our stakeholders; to develop sustainable business models sensitive to society and the environment with a transparent, reliable, and innovative service concept.",

    about_milestones_badge: "Historical Success Journey",
    about_milestones_title: "Our Milestones",
    about_milestones_sub: "Our story of growth and transformation from 1999 to the present day.",
    about_milestone_tag: "Milestone",

    about_values_title: "Core Values",
    about_values_sub: "The corporate principles that guide us in every step we take.",

    about_standards_title: "Global Quality Standards",
    about_standards_sub: "All our operations are conducted in accordance with international certifications and sustainability protocols.",
    about_std1: "ISO 9001 Quality",
    about_std2: "ISO 27001 Information Security",
    about_std3: "ISO 45001 OHS",
    about_std4: "100% Sustainability",

    // Proposal Modal
    modal_badge: "Quick Project Quote",
    modal_header: "Let's Plan Your Project Together",
    modal_step1_title: "1. Select Sector of Interest",
    modal_step2_title: "2. Estimated Budget & Scope",
    modal_step3_title: "3. Your Contact Information",
    modal_budget_label: "Project Budget Range",
    modal_details_label: "Project Summary or Requirements",
    modal_details_place: "Your goals, timeline, or special requests...",
    modal_btn_next: "Continue",
    modal_btn_prev: "Back",
    modal_btn_submit: "Submit Proposal",
    modal_success_title: "Proposal Request Received!",
    modal_success_desc: "Our expert team will review your project and contact you within 24 hours.",

    // Footer
    footer_desc: "Building the corporate future with innovative and pioneering solutions across 6 main sectors from telecommunications to software, consulting, and advertising.",
    footer_title_sectors: "OUR SECTORS",
    footer_title_corp: "CORPORATE",
    footer_title_contact: "CONTACT",
    footer_rights: "All rights reserved.",

    // Generic
    lang_tr: "Türkçe",
    lang_en: "English"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('nima_lang') || 'tr';
  });

  useEffect(() => {
    localStorage.setItem('nima_lang', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const t = (key, fallback = '') => {
    return translations[language]?.[key] || translations['tr']?.[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
