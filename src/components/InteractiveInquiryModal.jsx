import { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send } from 'lucide-react';
import { sectors } from '../data/sectors';
import './InteractiveInquiryModal.css';

export default function InteractiveInquiryModal({ isOpen, onClose, defaultSectorId = '' }) {
  const [step, setStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState(defaultSectorId || sectors[0].id);
  const [budget, setBudget] = useState('50.000 - 150.000 TL');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentSectorObj = sectors.find(s => s.id === selectedSector) || sectors[0];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      onClose();
    }, 3000);
  };

  return (
    <div className="inquiry-modal-backdrop" onClick={onClose}>
      <div className="inquiry-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="modal-success-state">
            <div className="success-icon-wrapper">
              <Check size={40} />
            </div>
            <h2>Teklif Talebiniz Alındı!</h2>
            <p>Uzman ekibimiz <strong>{currentSectorObj.name}</strong> alanındaki projenizi inceleyip 24 saat içerisinde sizinle iletişime geçecektir.</p>
          </div>
        ) : (
          <>
            {/* Header & Steps */}
            <div className="modal-header">
              <div className="badge-pill">
                <Sparkles size={14} /> Hızlı Proje Teklifi
              </div>
              <h2>Projenizi Birlikte Planlayalım</h2>
              
              <div className="modal-steps-indicator">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`step-line ${step >= 2 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`step-line ${step >= 3 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
              </div>
            </div>

            {/* Step 1: Sector Selection */}
            {step === 1 && (
              <div className="modal-step-content">
                <h3>1. İlgilendiğiniz Sektörü Seçin</h3>
                <div className="sector-picker-grid">
                  {sectors.map((sec) => {
                    const IconComp = sec.icon;
                    return (
                      <div
                        key={sec.id}
                        className={`sector-pick-item ${selectedSector === sec.id ? 'selected' : ''}`}
                        onClick={() => setSelectedSector(sec.id)}
                        style={{ '--accent': sec.color }}
                      >
                        <div className="pick-icon">
                          <IconComp size={22} />
                        </div>
                        <div className="pick-text">
                          <h4>{sec.shortName}</h4>
                          <p>{sec.badge}</p>
                        </div>
                        {selectedSector === sec.id && <Check size={18} className="pick-check" />}
                      </div>
                    );
                  })}
                </div>

                <div className="modal-footer-nav">
                  <span className="step-label">Adım 1 / 3</span>
                  <button className="btn-modern btn-dark" onClick={handleNext}>
                    Devam Et <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Scope & Budget */}
            {step === 2 && (
              <div className="modal-step-content">
                <h3>2. Tahmini Bütçe ve Kapsam</h3>
                
                <div className="input-group">
                  <label>Proje Bütçe Aralığı</label>
                  <div className="budget-options">
                    {['25.000 - 50.000 TL', '50.000 - 150.000 TL', '150.000 - 500.000 TL', '500.000+ TL / Kurumsal'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`budget-chip ${budget === b ? 'active' : ''}`}
                        onClick={() => setBudget(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="input-group">
                  <label>Proje Özeti veya İhtiyaçlarınız</label>
                  <textarea
                    rows={3}
                    placeholder="Hedefleriniz, zaman takviminiz veya özel istekleriniz..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <div className="modal-footer-nav">
                  <button className="btn-modern btn-outline" onClick={handlePrev}>
                    <ArrowLeft size={18} /> Geri
                  </button>
                  <button className="btn-modern btn-dark" onClick={handleNext}>
                    İletişim Bilgileri <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="modal-step-content">
                <h3>3. İletişim Bilgileriniz</h3>
                
                <div className="form-grid-2">
                  <div className="input-group">
                    <label>Adınız Soyadınız *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>E-posta Adresiniz *</label>
                    <input
                      type="email"
                      required
                      placeholder="ahmet@sirketiniz.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="input-group">
                    <label>Telefon Numarası *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+90 532 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Şirket Unvanı</label>
                    <input
                      type="text"
                      placeholder="XYZ Holding A.Ş."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="modal-summary-box">
                  <span><strong>Seçilen Sektör:</strong> {currentSectorObj.name}</span>
                  <span><strong>Bütçe:</strong> {budget}</span>
                </div>

                <div className="modal-footer-nav">
                  <button type="button" className="btn-modern btn-outline" onClick={handlePrev}>
                    <ArrowLeft size={18} /> Geri
                  </button>
                  <button type="submit" className="btn-modern btn-dark">
                    Teklifi Gönder <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
