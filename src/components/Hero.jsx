import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ title, subtitle, color = 'var(--text-main)', image, showButton = false }) {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          {showButton && (
            <div style={{ marginTop: '2.5rem' }}>
              <a href="#sectors" className="btn-modern btn-dark">
                Sektörleri Keşfet
                <ArrowRight size={18} />
              </a>
            </div>
          )}
        </div>
        
        {image && (
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src={image} alt="Nima Grup" className="hero-image" />
              <div className="hero-image-overlay" style={{ background: color }}></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
