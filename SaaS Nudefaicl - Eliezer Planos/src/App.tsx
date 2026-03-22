import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CloakingWrapper from './components/CloakingWrapper';
import Header from './components/Header';
import ImageSelection from './components/ImageSelection';
import LoadingScreen from './components/LoadingScreen';
import ComparisonViewer from './components/ComparisonViewer';
import PremiumPage from './components/PremiumPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import SupportChat from './components/SupportChat';
import { AppProvider } from './context/AppContext';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <CloakingWrapper>
      <AppProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<ImageSelection />} />
                <Route path="/loading" element={<LoadingScreen />} />
                <Route path="/comparison" element={<ComparisonViewer />} />
                <Route path="/premium" element={<PremiumPage />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </main>
            <Footer />
            <SupportChat />
          </div>
        </Router>
      </AppProvider>
    </CloakingWrapper>
  );
}

export default App;