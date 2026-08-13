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
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [proposalSectorId, setProposalSectorId] = useState('');

  const handleOpenProposal = (sectorId = '') => {
    setProposalSectorId(sectorId);
    setIsProposalOpen(true);
  };

  const handleCloseProposal = () => {
    setIsProposalOpen(false);
  };

  return (
    <LanguageProvider>
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
      </Router>
    </LanguageProvider>
  );
}

export default App;
