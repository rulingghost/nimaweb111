import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SectorPage from './pages/SectorPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import InteractiveInquiryModal from './components/InteractiveInquiryModal';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ContentProvider, useContent } from './context/ContentContext';

function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [proposalSectorId, setProposalSectorId] = useState('');

  const { language } = useLanguage();
  const { content, getContent } = useContent();
  const activeContent = getContent ? getContent(language) : content;

  // Dynamic SEO & Title Sync
  useEffect(() => {
    if (isAdmin) {
      document.title = 'NİMA Grup Yönetim Paneli';
      return;
    }

    const defaultTitle = language === 'en'
      ? 'NIMA GROUP | Telecommunication, Software & Innovation'
      : 'NİMA GRUP | Telekomünikasyon, Yazılım & İnovasyon Ekosistemi';

    document.title = activeContent?.seo?.metaTitle || defaultTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = activeContent?.seo?.metaDescription || (language === 'en' 
      ? 'Leading technology ecosystem driving digital transformation in telecommunications, software, and corporate solutions.'
      : 'Telekomünikasyon altyapısından yapay zekaya, medyadan yönetim danışmanlığına öncü kurumsal teknoloji ekosistemi.');

    // Update Meta Keywords
    if (activeContent?.seo?.keywords) {
      let metaKeys = document.querySelector('meta[name="keywords"]');
      if (!metaKeys) {
        metaKeys = document.createElement('meta');
        metaKeys.name = 'keywords';
        document.head.appendChild(metaKeys);
      }
      metaKeys.content = activeContent.seo.keywords;
    }
  }, [language, activeContent, isAdmin]);

  const handleOpenProposal = (sectorId = '') => {
    setProposalSectorId(sectorId);
    setIsProposalOpen(true);
  };

  const handleCloseProposal = () => {
    setIsProposalOpen(false);
  };

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Top Reading Progress & Floating Buttons */}
      <ScrollProgress onOpenProposal={() => handleOpenProposal()} />

      {/* Global Navigation Header */}
      <Navbar onOpenProposal={() => handleOpenProposal()} />

      {/* Main Content Pages */}
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onOpenProposal={handleOpenProposal} 
              />
            } 
          />
          <Route 
            path="/hakkimizda" 
            element={
              <About 
                onOpenProposal={handleOpenProposal} 
              />
            } 
          />
          <Route 
            path="/iletisim" 
            element={<Contact />} 
          />
          <Route 
            path="/:sectorId" 
            element={
              <SectorPage 
                onOpenProposal={handleOpenProposal} 
              />
            } 
          />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Proposal Modal */}
      <InteractiveInquiryModal 
        isOpen={isProposalOpen} 
        onClose={handleCloseProposal}
        defaultSectorId={proposalSectorId}
      />
    </div>
  );
}

function App() {
  return (
    <ContentProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <AppLayout />
        </Router>
      </LanguageProvider>
    </ContentProvider>
  );
}

export default App;
