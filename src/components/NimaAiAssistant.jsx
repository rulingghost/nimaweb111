import { useState } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sectors } from '../data/sectors';
import './NimaAiAssistant.css';

export default function NimaAiAssistant({ onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Merhaba! Ben NIMA Akıllı Danışman. Holdingimizin 6 faaliyet alanı ve çözümlerimiz hakkında size nasıl yardımcı olabilirim?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    { label: 'Telekom altyapı hizmetleri nelerdir?', sectorId: 'telekomunikasyon' },
    { label: 'Özel yazılım projesi süresi nedir?', sectorId: 'yazilim' },
    { label: 'Hızlı bütçe teklifi nasıl alabilirim?', action: 'proposal' },
    { label: 'Genel merkez nerede?', topic: 'address' }
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Generate intelligent response
    setTimeout(() => {
      let botResponseText = "Sorunuz için teşekkürler! NIMA Grup olarak 6 ana sektörde uzman kadromuzla hizmet veriyoruz. Detaylı bütçe teklifi için Teklif Al butonunu kullanabilirsiniz.";
      
      const lower = query.toLowerCase();

      if (lower.includes('telekom') || lower.includes('fiber') || lower.includes('5g')) {
        botResponseText = "Telekomünikasyon birimimiz 81 ilde 12.500+ km fiber optik hat tespiti, 3D haritalama, RF ölçümü ve baz istasyonu projelendirmesi sunmaktadır.";
      } else if (lower.includes('yazılım') || lower.includes('erp') || lower.includes('mobil') || lower.includes('kod')) {
        botResponseText = "Yazılım ekibimiz özel ERP/CRM, bulut mimarisi, iOS/Android mobil uygulamalar ve yapay zeka entegrasyonlarında DevSecOps standartlarıyla çalışır.";
      } else if (lower.includes('promosyon') || lower.includes('hediye')) {
        botResponseText = "Kurumsal promosyon birimimiz VIP özel tasarım kutular, teknolojik aksesuarlar ve %100 çevre dostu geri dönüştürülmüş ürün serileri üretmektedir.";
      } else if (lower.includes('eğitim') || lower.includes('liderlik')) {
        botResponseText = "Kurumsal akademi birimimiz üst düzey liderlik, B2B satış ve Çevik (Agile) yönetim okulları tasarlayarak 45.000+ çalışanı eğitmiştir.";
      } else if (lower.includes('adres') || lower.includes('nerede') || lower.includes('ulaşım')) {
        botResponseText = "Genel merkezimiz İstanbul Levent Plaza'dadır (Büyükdere Cad. No:142). Ayrıca Ankara, İzmir, Frankfurt ve Dubai'de bölge temsilciliklerimiz mevcuttur.";
      } else if (lower.includes('teklif') || lower.includes('fiyat') || lower.includes('bütçe')) {
        botResponseText = "Projeleriniz için 24 saat içinde detaylı bütçe çalışması sunuyoruz. Aşağıdaki butondan hemen teklif sihirbazını başlatabilirsiniz!";
      }

      const botMsg = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Trigger Bubble */}
      <button 
        className={`ai-assistant-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="NIMA Asistan"
      >
        {isOpen ? <X size={22} /> : <Bot size={22} />}
        {!isOpen && <span className="ai-pulse-dot" />}
      </button>

      {/* Chat Drawer */}
      {isOpen && (
        <div className="ai-chat-drawer">
          <div className="ai-chat-header">
            <div className="ai-header-info">
              <div className="ai-avatar">
                <Bot size={20} />
              </div>
              <div>
                <h4>NIMA AI Assistant</h4>
                <span className="ai-status"><CheckCircle2 size={12} color="#22c55e" /> Çevrimiçi • Yanıt Hazır</span>
              </div>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="ai-messages-body">
            {messages.map((m) => (
              <div key={m.id} className={`ai-message-bubble ${m.sender}`}>
                <p>{m.text}</p>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          <div className="ai-suggestions-row">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                className="ai-suggestion-chip"
                onClick={() => {
                  if (q.action === 'proposal') {
                    onOpenProposal();
                  } else {
                    handleSend(q.label);
                  }
                }}
              >
                {q.label}
              </button>
            ))}
          </div>

          <form 
            className="ai-chat-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Sorunuzu buraya yazın..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="ai-send-btn">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
