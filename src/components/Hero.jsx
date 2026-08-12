import { ArrowRight, Sparkles, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ 
  title, 
  subtitle, 
  badgeText = "Kurumsal Holding Yapısı",
  color = '#D12F0E', 
  image, 
  showButton = false,
  onOpenProposal
}) {
  return (
    <section className="hero">
      {/* Background Animated Gradient Blobs */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1" style={{ background: color }} />
        <div className="blob blob-2" />
      </div>

      <div className="container hero-container">
        {/* Hero Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {badgeText && (
            <div className="hero-badge">
              <Sparkles size={14} style={{ color }} />
              <span>{badgeText}</span>
            </div>
          )}

          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }}></h1>
          
          <p className="hero-subtitle">{subtitle}</p>

          {showButton && (
            <div className="hero-cta-group">
              <a href="#sectors" className="btn-modern btn-dark">
                Sektörleri Keşfet
                <ArrowRight size={18} />
              </a>

              {onOpenProposal && (
                <button 
                  className="btn-modern btn-outline"
                  onClick={() => onOpenProposal()}
                >
                  Proje Teklifi Al
                </button>
              )}
            </div>
          )}

          {/* Quick trust metrics */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <ShieldCheck size={18} style={{ color }} />
              <span>ISO 9001 / 27001 Onaylı</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span>81 İlde Aktif Operasyon</span>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Right Visual */}
        {image && (
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-image-wrapper">
              <img src={image} alt="NIMA Grup" className="hero-image" />
              <div className="hero-image-overlay" style={{ background: `linear-gradient(180deg, transparent 40%, ${color}22 100%)` }}></div>

              {/* Floating Interactive Badge */}
              <motion.div 
                className="floating-glass-card card-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="glass-icon" style={{ color }}>★</div>
                <div>
                  <div className="glass-number">25+ Yıl</div>
                  <div className="glass-text">Sektörel Liderlik</div>
                </div>
              </motion.div>

              <motion.div 
                className="floating-glass-card card-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="glass-icon" style={{ color: '#22c55e' }}>✓</div>
                <div>
                  <div className="glass-number">500+</div>
                  <div className="glass-text">Tamamlanan Proje</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      <a href="#sectors" className="hero-scroll-indicator" aria-label="Aşağı Kaydır">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
