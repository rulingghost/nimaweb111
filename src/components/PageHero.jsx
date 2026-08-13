import { Sparkles } from 'lucide-react';
import { mainHeroImg } from '../data/sectors';
import './Hero.css';

export default function PageHero({ 
  title, 
  subtitle, 
  badgeText, 
  color = '#D12F0E', 
  image 
}) {
  return (
    <section className="hero-slider page-hero-banner">
      <div className="container hero-inner">
        {/* Left Text Box */}
        <div className="hero-text-box">
          {badgeText && (
            <div className="hero-badge">
              <Sparkles size={14} style={{ color }} />
              <span>{badgeText}</span>
            </div>
          )}

          {title && (
            <h1 
              className="hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          {subtitle && (
            <p className="hero-subtitle">{subtitle}</p>
          )}
        </div>

        {/* Right Image Box */}
        <div className="hero-image-box">
          <div className="hero-card">
            <img src={image || mainHeroImg} alt={badgeText || 'Hero Image'} />
          </div>
        </div>
      </div>
    </section>
  );
}
