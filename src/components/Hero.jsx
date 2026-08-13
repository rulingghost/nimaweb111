import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { 
  mainHeroImg, telecomImg, softwareImg, 
  promotionImg, advertisingImg, educationImg, consultingImg 
} from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero({ 
  title, 
  subtitle, 
  badgeText, 
  color = '#D12F0E', 
  image, 
  showButton = true, 
  onOpenProposal 
}) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Default Multi-Slide Sector Carousel
  const defaultSlides = [
    {
      id: 1,
      badge: t('hero_slide1_badge'),
      title: t('hero_slide1_title'),
      subtitle: t('hero_slide1_subtitle'),
      image: mainHeroImg,
      color: '#D12F0E',
      statNum: t('hero_slide1_stat1_num'),
      statTxt: t('hero_slide1_stat1_txt')
    },
    {
      id: 2,
      badge: t('hero_slide2_badge'),
      title: t('hero_slide2_title'),
      subtitle: t('hero_slide2_subtitle'),
      image: telecomImg,
      color: '#D12F0E',
      statNum: t('hero_slide2_stat1_num'),
      statTxt: t('hero_slide2_stat1_txt')
    },
    {
      id: 3,
      badge: t('hero_slide3_badge'),
      title: t('hero_slide3_title'),
      subtitle: t('hero_slide3_subtitle'),
      image: softwareImg,
      color: '#F6C310',
      statNum: t('hero_slide3_stat1_num'),
      statTxt: t('hero_slide3_stat1_txt')
    },
    {
      id: 4,
      badge: t('hero_slide4_badge'),
      title: t('hero_slide4_title'),
      subtitle: t('hero_slide4_subtitle'),
      image: promotionImg,
      color: '#E97B1A',
      statNum: t('hero_slide4_stat1_num'),
      statTxt: t('hero_slide4_stat1_txt')
    },
    {
      id: 5,
      badge: t('hero_slide5_badge'),
      title: t('hero_slide5_title'),
      subtitle: t('hero_slide5_subtitle'),
      image: advertisingImg,
      color: '#B7442E',
      statNum: t('hero_slide5_stat1_num'),
      statTxt: t('hero_slide5_stat1_txt')
    },
    {
      id: 6,
      badge: t('hero_slide6_badge'),
      title: t('hero_slide6_title'),
      subtitle: t('hero_slide6_subtitle'),
      image: educationImg,
      color: '#2563EB',
      statNum: t('hero_slide6_stat1_num'),
      statTxt: t('hero_slide6_stat1_txt')
    },
    {
      id: 7,
      badge: t('hero_slide7_badge'),
      title: t('hero_slide7_title'),
      subtitle: t('hero_slide7_subtitle'),
      image: consultingImg,
      color: '#059669',
      statNum: t('hero_slide7_stat1_num'),
      statTxt: t('hero_slide7_stat1_txt')
    }
  ];

  // If custom title is passed (Contact, About, SectorPage), use single custom slide mode
  const slides = title ? [
    {
      id: 'custom',
      badge: badgeText || t('hero_slide1_badge'),
      title: title,
      subtitle: subtitle,
      image: image || mainHeroImg,
      color: color,
      statNum: '',
      statTxt: ''
    }
  ] : defaultSlides;

  const isCarousel = slides.length > 1;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!isCarousel || isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isCarousel, isPaused, current]);

  return (
    <section 
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Main Viewport */}
      <div className="hero-track-container">
        <div 
          className="hero-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="hero-slide">
              <div className="container hero-inner">
                {/* Left Text Content */}
                <div className="hero-text-box">
                  {slide.badge && (
                    <div className="hero-badge">
                      <Sparkles size={14} style={{ color: slide.color }} />
                      <span>{slide.badge}</span>
                    </div>
                  )}

                  <h1 
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />

                  {slide.subtitle && (
                    <p className="hero-subtitle">{slide.subtitle}</p>
                  )}

                  {showButton && !title && (
                    <div className="hero-actions">
                      <a href="#sectors" className="btn-modern btn-dark">
                        {t('hero_cta_explore')}
                        <ArrowRight size={18} />
                      </a>
                      {onOpenProposal && (
                        <button 
                          className="btn-modern btn-outline"
                          onClick={onOpenProposal}
                        >
                          {t('hero_cta_proposal')}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Visual Image */}
                <div className="hero-image-box">
                  <div className="hero-card">
                    <img src={slide.image} alt={slide.badge || 'Hero Image'} />
                    {slide.statNum && (
                      <div className="hero-float-card">
                        <span className="float-num">{slide.statNum}</span>
                        <span className="float-txt">{slide.statTxt}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Bar for Multi-Slide Carousel */}
      {isCarousel && (
        <div className="hero-nav-bar">
          <button className="nav-arrow-btn" onClick={prevSlide} aria-label="Önceki">
            <ChevronLeft size={24} />
          </button>

          <div className="nav-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`nav-dot ${idx === current ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Slayt ${idx + 1}`}
              />
            ))}
          </div>

          <button className="nav-arrow-btn" onClick={nextSlide} aria-label="Sonraki">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
