import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  mainHeroImg, telecomImg, softwareImg, promotionImg, 
  advertisingImg, educationImg, consultingImg 
} from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero({ 
  title, 
  subtitle, 
  badgeText,
  color = '#D12F0E', 
  image, 
  showButton = false,
  onOpenProposal,
  isMultiSlide = true
}) {
  const { t } = useLanguage();
  const [[slideIndex, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const defaultSlides = [
    {
      id: 'slide-1',
      badge: t('hero_slide1_badge'),
      title: t('hero_slide1_title'),
      subtitle: t('hero_slide1_subtitle'),
      color: '#D12F0E',
      image: mainHeroImg,
      stat1: { number: t('hero_slide1_stat1_num'), text: t('hero_slide1_stat1_txt') },
      stat2: { number: t('hero_slide1_stat2_num'), text: t('hero_slide1_stat2_txt') }
    },
    {
      id: 'slide-2',
      badge: t('hero_slide2_badge'),
      title: t('hero_slide2_title'),
      subtitle: t('hero_slide2_subtitle'),
      color: '#D12F0E',
      image: telecomImg,
      stat1: { number: t('hero_slide2_stat1_num'), text: t('hero_slide2_stat1_txt') },
      stat2: { number: t('hero_slide2_stat2_num'), text: t('hero_slide2_stat2_txt') }
    },
    {
      id: 'slide-3',
      badge: t('hero_slide3_badge'),
      title: t('hero_slide3_title'),
      subtitle: t('hero_slide3_subtitle'),
      color: '#F6C310',
      image: softwareImg,
      stat1: { number: t('hero_slide3_stat1_num'), text: t('hero_slide3_stat1_txt') },
      stat2: { number: t('hero_slide3_stat2_num'), text: t('hero_slide3_stat2_txt') }
    },
    {
      id: 'slide-4',
      badge: t('hero_slide4_badge'),
      title: t('hero_slide4_title'),
      subtitle: t('hero_slide4_subtitle'),
      color: '#E97B1A',
      image: promotionImg,
      stat1: { number: t('hero_slide4_stat1_num'), text: t('hero_slide4_stat1_txt') },
      stat2: { number: t('hero_slide4_stat2_num'), text: t('hero_slide4_stat2_txt') }
    },
    {
      id: 'slide-5',
      badge: t('hero_slide5_badge'),
      title: t('hero_slide5_title'),
      subtitle: t('hero_slide5_subtitle'),
      color: '#B7442E',
      image: advertisingImg,
      stat1: { number: t('hero_slide5_stat1_num'), text: t('hero_slide5_stat1_txt') },
      stat2: { number: t('hero_slide5_stat2_num'), text: t('hero_slide5_stat2_txt') }
    },
    {
      id: 'slide-6',
      badge: t('hero_slide6_badge'),
      title: t('hero_slide6_title'),
      subtitle: t('hero_slide6_subtitle'),
      color: '#2563EB',
      image: educationImg,
      stat1: { number: t('hero_slide6_stat1_num'), text: t('hero_slide6_stat1_txt') },
      stat2: { number: t('hero_slide6_stat2_num'), text: t('hero_slide6_stat2_txt') }
    },
    {
      id: 'slide-7',
      badge: t('hero_slide7_badge'),
      title: t('hero_slide7_title'),
      subtitle: t('hero_slide7_subtitle'),
      color: '#059669',
      image: consultingImg,
      stat1: { number: t('hero_slide7_stat1_num'), text: t('hero_slide7_stat1_txt') },
      stat2: { number: t('hero_slide7_stat2_num'), text: t('hero_slide7_stat2_txt') }
    }
  ];

  // If custom single page props are passed, use single slide mode
  const slides = isMultiSlide && !title ? defaultSlides : [
    {
      id: 'custom-slide',
      badge: badgeText || t('hero_slide1_badge'),
      title: title || defaultSlides[0].title,
      subtitle: subtitle || defaultSlides[0].subtitle,
      color: color,
      image: image || defaultSlides[0].image,
      stat1: defaultSlides[0].stat1,
      stat2: defaultSlides[0].stat2
    }
  ];

  const hasMultipleSlides = slides.length > 1;

  const paginate = (newDirection) => {
    if (!hasMultipleSlides) return;
    setSlide(([prevIndex]) => [
      (prevIndex + newDirection + slides.length) % slides.length,
      newDirection
    ]);
  };

  const goToSlide = (index) => {
    if (!hasMultipleSlides) return;
    const newDir = index > slideIndex ? 1 : -1;
    setSlide([index, newDir]);
  };

  useEffect(() => {
    if (!hasMultipleSlides || isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5500);

    return () => clearInterval(interval);
  }, [hasMultipleSlides, isPaused, slides.length, slideIndex]);

  const currentSlideIndex = ((slideIndex % slides.length) + slides.length) % slides.length;
  const currentSlide = slides[currentSlideIndex];

  // Framer Motion Sliding Variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98
    })
  };

  return (
    <section 
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Animated Gradient Blobs */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1" style={{ background: currentSlide.color }} />
        <div className="blob blob-2" />
      </div>

      <div className="container hero-container">
        {/* Animated Slide Content */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div 
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.35 },
              scale: { duration: 0.35 }
            }}
            drag={hasMultipleSlides ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100) {
                paginate(1);
              } else if (swipe > 100) {
                paginate(-1);
              }
            }}
            className="hero-slide-grid"
          >
            {/* Hero Left Content */}
            <div className="hero-content">
              {currentSlide.badge && (
                <div className="hero-badge">
                  <Sparkles size={14} style={{ color: currentSlide.color }} />
                  <span>{currentSlide.badge}</span>
                </div>
              )}

              <h1 
                className="hero-title" 
                dangerouslySetInnerHTML={{ __html: currentSlide.title }} 
              />
              
              <p className="hero-subtitle">{currentSlide.subtitle}</p>

              {(showButton || isMultiSlide) && (
                <div className="hero-cta-group">
                  <a href="#sectors" className="btn-modern btn-dark">
                    {t('hero_cta_explore')}
                    <ArrowRight size={18} />
                  </a>

                  {onOpenProposal && (
                    <button 
                      className="btn-modern btn-outline"
                      onClick={() => onOpenProposal()}
                    >
                      {t('hero_cta_proposal')}
                    </button>
                  )}
                </div>
              )}

              {/* Quick trust metrics */}
              <div className="hero-trust-bar">
                <div className="trust-item">
                  <ShieldCheck size={18} style={{ color: currentSlide.color }} />
                  <span>{t('hero_trust_iso')}</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-item">
                  <span>{t('hero_trust_ops')}</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img 
                  src={currentSlide.image} 
                  alt={currentSlide.badge} 
                  className="hero-image" 
                />
                <div 
                  className="hero-image-overlay" 
                  style={{ background: `linear-gradient(180deg, transparent 40%, ${currentSlide.color}22 100%)` }}
                />

                {/* Floating Interactive Badge 1 */}
                {currentSlide.stat1 && (
                  <motion.div 
                    className="floating-glass-card card-1"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="glass-icon" style={{ color: currentSlide.color }}>★</div>
                    <div>
                      <div className="glass-number">{currentSlide.stat1.number}</div>
                      <div className="glass-text">{currentSlide.stat1.text}</div>
                    </div>
                  </motion.div>
                )}

                {/* Floating Interactive Badge 2 */}
                {currentSlide.stat2 && (
                  <motion.div 
                    className="floating-glass-card card-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <div className="glass-icon" style={{ color: '#22c55e' }}>✓</div>
                    <div>
                      <div className="glass-number">{currentSlide.stat2.number}</div>
                      <div className="glass-text">{currentSlide.stat2.text}</div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Multi-Slide Navigation Controls */}
      {hasMultipleSlides && (
        <div className="hero-slider-controls">
          <button 
            className="slider-arrow-btn prev-btn" 
            onClick={() => paginate(-1)}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="slider-dots">
            {slides.map((s, index) => (
              <button
                key={s.id}
                className={`slider-dot ${index === currentSlideIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
                style={{ '--active-color': s.color }}
              >
                <span className="dot-thumb" />
                <span className="dot-label">{s.badge.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <button 
            className="slider-arrow-btn next-btn" 
            onClick={() => paginate(1)}
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>

          <span className="slider-counter">
            0{currentSlideIndex + 1} / 0{slides.length}
          </span>
        </div>
      )}

      <a href="#sectors" className="hero-scroll-indicator" aria-label="Scroll Down">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}

