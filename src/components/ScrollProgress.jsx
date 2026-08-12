import { useState, useEffect } from 'react';
import { ArrowUp, MessageSquarePlus } from 'lucide-react';
import './ScrollProgress.css';

export default function ScrollProgress({ onOpenProposal }) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentPercent = (window.scrollY / totalHeight) * 100;
        setScrollPercent(currentPercent);
      }
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Reading Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }} />

      {/* Floating Action Buttons */}
      <div className={`floating-actions ${showTopBtn ? 'visible' : ''}`}>
        <button 
          className="floating-btn proposal-trigger-btn"
          onClick={onOpenProposal}
          title="Hızlı Proje Teklifi Al"
        >
          <MessageSquarePlus size={20} />
          <span>Teklif Al</span>
        </button>

        <button 
          className="floating-btn back-to-top-btn"
          onClick={scrollToTop}
          title="Yukarı Çık"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
}
