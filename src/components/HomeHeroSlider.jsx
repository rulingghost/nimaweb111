import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import './Hero.css';

export default function HomeHeroSlider({ onOpenProposal }) {
  const { language, t } = useLanguage();
  const { content, getContent } = useContent();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeContent = getContent ? getContent(language) : content;
  const heroData = activeContent?.hero || {};
  const slides = heroData.slides && heroData.slides.length > 0 ? heroData.slides : [
    {
      id: 'default_1',
      badge: heroData.badge || 'NİMA GRUP DİJİTAL VE STRATEJİK EKOSİSTEMİ',
      title: heroData.title || 'Geleceğin Teknolojisi ve Çözümlerini Birlikte İnşa Ediyoruz',
      subtitle: heroData.subtitle || 'Telekomünikasyon altyapısından yapay zeka destekli yazılımlara uçtan uca inovasyon.',
      image: heroData.bgImage || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      color: '#D12F0E',
      statNum: heroData.stats?.[0]?.num || '150+',
      statTxt: heroData.stats?.[0]?.label || 'Proje'
    }
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  return (
    <section 
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Viewport */}
      <div className="hero-track-container">
        <div 
          className="hero-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, sIdx) => (
            <div key={slide.id || sIdx} className="hero-slide">
              <div className="container hero-inner">
                {/* Left Content */}
                <div className="hero-text-box">
                  <div className="hero-badge">
                    <Sparkles size={14} style={{ color: slide.color || '#D12F0E' }} />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />

                  <p className="hero-subtitle">{slide.subtitle}</p>

                  <div className="hero-actions">
                    <a href={heroData.primaryBtnLink || '#sectors'} className="btn-modern btn-dark">
                      {heroData.primaryBtnText || t('hero_cta_explore')}
                      <ArrowRight size={18} />
                    </a>
                    {onOpenProposal && (
                      <button 
                        className="btn-modern btn-outline"
                        onClick={onOpenProposal}
                      >
                        {heroData.secondaryBtnText || t('hero_cta_proposal')}
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Image */}
                <div className="hero-image-box">
                  <div className="hero-card">
                    <img src={slide.image} alt={slide.badge || 'Hero'} />
                    {(slide.statNum || slide.statTxt) && (
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

      {/* Navigation Controls */}
      {slides.length > 1 && (
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
