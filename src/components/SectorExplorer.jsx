import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, ExternalLink, Eye } from 'lucide-react';
import { sectors } from '../data/sectors';
import './SectorExplorer.css';

export default function SectorExplorer({ onOpenProposal, onPreviewImage }) {
  const [activeId, setActiveId] = useState(sectors[0].id);

  const activeSector = sectors.find(s => s.id === activeId) || sectors[0];
  const IconComponent = activeSector.icon;

  return (
    <section className="sector-explorer-section">
      <div className="container">
        <div className="explorer-header">
          <div className="badge-pill">
            <Sparkles size={14} /> İnteraktif Sektör Rehberi
          </div>
          <h2 className="display-title">Sektörlerimizi Keşfedin</h2>
          <p className="display-subtitle">
            Hizmet sunduğumuz 6 ana sektörün detaylarını, öne çıkan projelerini ve uzmanlıklarımızı inceleyin.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="explorer-tabs">
          {sectors.map((s) => {
            const SIcon = s.icon;
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
                <div className="explorer-stats-grid">
                  {activeSector.stats.map((st, i) => (
                    <div key={i} className="explorer-stat-item">
                      <span className="stat-val">{st.value}</span>
                      <span className="stat-lbl">{st.label}</span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="explorer-features">
                  <h4>Öne Çıkan Uzmanlık Alanları:</h4>
                  <ul>
                    {activeSector.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} style={{ color: activeSector.color }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="explorer-actions">
                  <Link to={activeSector.path} className="btn-modern btn-dark">
                    Sektör Sayfasına Git <ArrowRight size={18} />
                  </Link>
                  <button 
                    className="btn-modern btn-outline"
                    onClick={() => onOpenProposal(activeSector.id)}
                  >
                    Teklif İste
                  </button>
                </div>
              </div>

              {/* Right Column - Visual Card Showcase */}
              <div className="explorer-visual">
                <div 
                  className="visual-image-wrapper"
                  onClick={() => onPreviewImage(activeSector.heroImage, activeSector.name, activeSector.description)}
                >
                  <img src={activeSector.heroImage} alt={activeSector.name} />
                  <div className="visual-overlay">
                    <div className="preview-btn">
                      <Eye size={20} /> Görseli Büyüt
                    </div>
                  </div>
                </div>

                {/* Featured Reference Preview */}
                {activeSector.references && activeSector.references[0] && (
                  <div className="visual-ref-box">
                    <div className="ref-tag">Örnek Başarı Hikayesi</div>
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
        </AnimatePresence>
      </div>
    </section>
  );
}
