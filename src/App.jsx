import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SectorPage from './pages/SectorPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollProgress from './components/ScrollProgress';
import InteractiveInquiryModal from './components/InteractiveInquiryModal';
import ImageLightbox from './components/ImageLightbox';
import NimaAiAssistant from './components/NimaAiAssistant';

function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [proposalSectorId, setProposalSectorId] = useState('');
  
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    image: '',
    title: '',
    description: ''
  });

  const handleOpenProposal = (sectorId = '') => {
    setProposalSectorId(sectorId);
    setIsProposalOpen(true);
  };

  const handleCloseProposal = () => {
    setIsProposalOpen(false);
  };

  const handlePreviewImage = (image, title, description) => {
    setLightboxData({
      isOpen: true,
      image,
      title,
      description
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <Router>
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
                  onPreviewImage={handlePreviewImage} 
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
                  onPreviewImage={handlePreviewImage} 
                />
              } 
            />
          </Routes>
        </div>

        {/* Floating Intelligent AI Chat Assistant Widget */}
        <NimaAiAssistant onOpenProposal={() => handleOpenProposal()} />

        {/* Global Footer */}
        <Footer />

        {/* Interactive Proposal Modal */}
        <InteractiveInquiryModal 
          isOpen={isProposalOpen} 
          onClose={handleCloseProposal}
          defaultSectorId={proposalSectorId}
        />

        {/* Fullscreen Image Lightbox Modal */}
        {lightboxData.isOpen && (
          <ImageLightbox 
            image={lightboxData.image}
            title={lightboxData.title}
            description={lightboxData.description}
            onClose={handleCloseLightbox}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
