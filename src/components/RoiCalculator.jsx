import { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, Sparkles } from 'lucide-react';
import { sectors } from '../data/sectors';
import './RoiCalculator.css';

export default function RoiCalculator({ onOpenProposal }) {
  const [selectedSector, setSelectedSector] = useState('yazilim');
  const [teamSize, setTeamSize] = useState(25);
  const [durationMonths, setDurationMonths] = useState(6);
  const [scale, setScale] = useState('Orta Ölçekli (Kurumsal)');

  const currentSectorObj = sectors.find(s => s.id === selectedSector) || sectors[0];

  // Dynamic ROI & Metric calculations
  const estimatedEfficiencyGain = Math.min(95, Math.round(35 + (teamSize * 0.8) + (durationMonths * 1.5)));
  const estimatedTimeSavedHours = Math.round(teamSize * durationMonths * 42);
  const estimatedRoiMultiplier = (2.5 + (teamSize * 0.05) + (durationMonths * 0.15)).toFixed(1);

  return (
    <section className="roi-section">
      <div className="container">
        <div className="roi-card-wrapper">
          <div className="roi-header">
            <div className="badge-pill">
              <Calculator size={14} /> İnteraktif Simülatör
            </div>
            <h2>Proje ROI & Verimlilik Hesaplayıcı</h2>
            <p>Sektörünüze ve ölçeğinize göre NIMA Grup çözümlerinin sağlayacağı tahmini verimlilik ve zaman kazancını hesaplayın.</p>
          </div>

          <div className="roi-grid">
            {/* Inputs Column */}
            <div className="roi-inputs-col">
              <div className="roi-input-group">
                <label>Faaliyet Sektörünüz</label>
                <div className="roi-sector-chips">
                  {sectors.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      className={`roi-chip ${selectedSector === s.id ? 'active' : ''}`}
                      onClick={() => setSelectedSector(s.id)}
                      style={{ '--accent': s.color }}
                    >
                      {s.shortName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="roi-input-group">
                <div className="label-with-val">
                  <label>Proje / Ekip Büyüklüğü</label>
                  <span className="slider-val">{teamSize} Kişi</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5" 
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="roi-slider"
                />
              </div>

              <div className="roi-input-group">
                <div className="label-with-val">
                  <label>Hedeflenen Dönüşüm Süresi</label>
                  <span className="slider-val">{durationMonths} Ay</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  step="1" 
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="roi-slider"
                />
              </div>

              <div className="roi-input-group">
                <label>Proje Kapsamı</label>
                <select 
                  value={scale} 
                  onChange={(e) => setScale(e.target.value)}
                  className="roi-select"
                >
                  <option value="Başlangıç (Departman)">Başlangıç (Departman Düzeyi)</option>
                  <option value="Orta Ölçekli (Kurumsal)">Orta Ölçekli (Kurumsal)</option>
                  <option value="Büyük Ölçekli (Holding / Global)">Büyük Ölçekli (Holding / Global)</option>
                </select>
              </div>
            </div>

            {/* Live Outputs Column */}
            <div className="roi-outputs-col">
              <div className="output-badge">Tahmini Kazanım Metrikleri</div>

              <div className="output-metrics-list">
                <div className="output-metric-card">
                  <div className="output-icon" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e' }}>
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="metric-val">%{estimatedEfficiencyGain}</div>
                    <div className="metric-lbl">Operasyonel Verimlilik Artışı</div>
                  </div>
                </div>

                <div className="output-metric-card">
                  <div className="output-icon" style={{ background: 'rgba(209, 47, 14, 0.12)', color: '#D12F0E' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="metric-val">{estimatedTimeSavedHours.toLocaleString()} Saat</div>
                    <div className="metric-lbl">Yıllık Tahmini Zaman Kazancı</div>
                  </div>
                </div>

                <div className="output-metric-card">
                  <div className="output-icon" style={{ background: 'rgba(246, 195, 16, 0.15)', color: '#D12F0E' }}>
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <div className="metric-val">{estimatedRoiMultiplier}x ROI</div>
                    <div className="metric-lbl">Yatırımın Ortalama Geri Dönüş Hızı</div>
                  </div>
                </div>
              </div>

              <div className="roi-summary-note">
                <strong>Seçilen Sektör:</strong> {currentSectorObj.name} • {scale}
              </div>

              <button 
                className="btn-modern btn-dark roi-action-btn"
                onClick={() => onOpenProposal(selectedSector)}
              >
                Bu Hesaplamayla Hızlı Teklif Al <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
