import { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send } from 'lucide-react';
import { getSectors } from '../data/sectors';
import { useLanguage } from '../context/LanguageContext';
import './InteractiveInquiryModal.css';

export default function InteractiveInquiryModal({ isOpen, onClose, defaultSectorId = '' }) {
  const { language, t } = useLanguage();
  const localizedSectors = getSectors(language);

  const [step, setStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState(defaultSectorId || localizedSectors[0].id);
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

  const currentSectorObj = localizedSectors.find(s => s.id === selectedSector) || localizedSectors[0];

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
            <h2>{t('modal_success_title')}</h2>
            <p>{t('modal_success_desc')}</p>
          </div>
        ) : (
          <>
            {/* Header & Steps */}
            <div className="modal-header">
              <div className="badge-pill">
                <Sparkles size={14} /> {t('modal_badge')}
              </div>
              <h2>{t('modal_header')}</h2>
              
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
                <h3>{t('modal_step1_title')}</h3>
                <div className="sector-picker-grid">
                  {localizedSectors.map((sec) => {
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
                  <span className="step-label">{language === 'en' ? 'Step 1 / 3' : 'Adım 1 / 3'}</span>
                  <button className="btn-modern btn-dark" onClick={handleNext}>
                    {t('modal_btn_next')} <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Scope & Budget */}
            {step === 2 && (
              <div className="modal-step-content">
                <h3>{t('modal_step2_title')}</h3>
                
                <div className="input-group">
                  <label>{t('modal_details_label')}</label>
                  <textarea
                    rows={3}
                    placeholder={t('modal_details_place')}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <div className="modal-footer-nav">
                  <button className="btn-modern btn-outline" onClick={handlePrev}>
                    <ArrowLeft size={18} /> {t('modal_btn_prev')}
                  </button>
                  <button className="btn-modern btn-dark" onClick={handleNext}>
                    {t('modal_btn_next')} <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="modal-step-content">
                <h3>{t('modal_step3_title')}</h3>
                
                <div className="form-grid-2">
                  <div className="input-group">
                    <label>{t('contact_label_name')}</label>
                    <input
                      type="text"
                      required
                      placeholder={t('contact_place_name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t('contact_label_email')}</label>
                    <input
                      type="email"
                      required
                      placeholder={t('contact_place_email')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="input-group">
                    <label>{t('contact_label_phone')}</label>
                    <input
                      type="tel"
                      required
                      placeholder={t('contact_place_phone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t('contact_label_company')}</label>
                    <input
                      type="text"
                      placeholder={t('contact_place_company')}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="modal-summary-box">
                  <span><strong>{language === 'en' ? 'Selected Sector:' : 'Seçilen Sektör:'}</strong> {currentSectorObj.name}</span>
                </div>

                <div className="modal-footer-nav">
                  <button type="button" className="btn-modern btn-outline" onClick={handlePrev}>
                    <ArrowLeft size={18} /> {t('modal_btn_prev')}
                  </button>
                  <button type="submit" className="btn-modern btn-dark">
                    {t('modal_btn_submit')} <Send size={18} />
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
