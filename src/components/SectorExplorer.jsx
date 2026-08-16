import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Sparkles,
  Radio, Cpu, Gift, Layers, Compass, Briefcase, Award, ShieldCheck, Globe
} from 'lucide-react';
import { getSectors } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import './SectorExplorer.css';

const ICON_MAP = {
  Radio,
  Cpu,
  Gift,
  Layers,
  Compass,
  Briefcase,
  Award,
  ShieldCheck,
  Globe
};

export default function SectorExplorer({ onOpenProposal }) {
  const { language, t } = useLanguage();
  const { content } = useContent();
  
  const defaultSectors = getSectors(language);
  const adminServices = content?.services?.items || [];
  
  const localizedSectors = defaultSectors.map(def => {
    const matched = adminServices.find(s => s.id === def.id || s.path === def.path);
    if (!matched) return def;
    return {
      ...def,
      name: matched.title || def.name,
      shortName: matched.shortName || matched.title || def.shortName,
      description: matched.desc || matched.description || def.description,
      badge: matched.badge || def.badge,
      color: matched.color || def.color,
      lightColor: matched.color ? `${matched.color}20` : def.lightColor,
      heroImage: matched.image || def.heroImage,
      features: matched.points || def.features,
      icon: (matched.icon && ICON_MAP[matched.icon]) || def.icon
    };
  });

  const [activeId, setActiveId] = useState(localizedSectors[0]?.id || 'telekomunikasyon');

  const activeSector = localizedSectors.find(s => s.id === activeId) || localizedSectors[0];
  const IconComponent = activeSector?.icon || Radio;

  return (
    <section className="sector-explorer-section">
      <div className="container">
        <div className="explorer-header">
          <div className="badge-pill">
            <Sparkles size={14} /> {t('explorer_badge')}
          </div>
          <h2 className="display-title">{t('explorer_title')}</h2>
          <p className="display-subtitle">
            {t('explorer_subtitle')}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="explorer-tabs">
          {localizedSectors.map((s) => {
            const SIcon = s.icon || Radio;
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                className={`explorer-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveId(s.id)}
                style={{ '--active-color': s.color }}
              >
                <SIcon size={18} />
                <span>{s.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Display */}
        <AnimatePresence mode="wait">
          {activeSector && (
            <motion.div
              key={activeSector.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="explorer-content-card"
              style={{ '--accent': activeSector.color }}
            >
              <div className="explorer-grid">
                {/* Left Column - Info & Features */}
                <div className="explorer-info">
                  <div className="explorer-badge" style={{ background: activeSector.lightColor, color: activeSector.color }}>
                    <IconComponent size={18} />
                    <span>{activeSector.badge}</span>
                  </div>

                  <h3 className="explorer-title">{activeSector.name}</h3>
                  <p className="explorer-desc">{activeSector.description}</p>

                  {/* Sector Stats Bar */}
                  {activeSector.stats && activeSector.stats.length > 0 && (
                    <div className="explorer-stats-grid">
                      {activeSector.stats.map((st, i) => (
                        <div key={i} className="explorer-stat-item">
                          <span className="stat-val">{st.value}</span>
                          <span className="stat-lbl">{st.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features List */}
                  {activeSector.features && activeSector.features.length > 0 && (
                    <div className="explorer-features">
                      <h4>{t('explorer_features_title')}</h4>
                      <ul>
                        {activeSector.features.slice(0, 4).map((feat, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={16} style={{ color: activeSector.color }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="explorer-actions">
                    <Link to={activeSector.path} className="btn-modern btn-dark">
                      {t('explorer_btn_page')} <ArrowRight size={18} />
                    </Link>
                    <button 
                      className="btn-modern btn-outline"
                      onClick={() => onOpenProposal(activeSector.id)}
                    >
                      {t('explorer_btn_proposal')}
                    </button>
                  </div>
                </div>

                {/* Right Column - Visual Card Showcase */}
                <div className="explorer-visual">
                  <div className="visual-image-wrapper">
                    <img src={activeSector.heroImage} alt={activeSector.name} />
                  </div>

                  {/* Featured Reference Preview */}
                  {activeSector.references && activeSector.references[0] && (
                    <div className="visual-ref-box">
                      <div className="ref-tag">{t('explorer_ref_tag')}</div>
                      <h5>{activeSector.references[0].name}</h5>
                      <p>{activeSector.references[0].description}</p>
                      {activeSector.references[0].metric && (
                        <span className="ref-metric-badge">{activeSector.references[0].metric}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
