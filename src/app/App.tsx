import { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { ConsultationPanel } from './components/ConsultationPanel';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { WhyCampE } from './components/WhyCampE';
import { Solutions } from './components/Solutions';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BusinessClaritySystems } from './pages/BusinessClaritySystems';
import { CloudITAdvisory } from './pages/CloudITAdvisory';
import { ControlDashboards } from './pages/ControlDashboards';
import { GovernanceControlReview } from './pages/GovernanceControlReview';
import { ProcessMapping } from './pages/ProcessMapping';
import { PowerBIService } from './pages/PowerBIService';
import { RiskVisibility } from './pages/RiskVisibility';
import { SystemsArchitecture } from './pages/SystemsArchitecture';

const routes = {
  '/services/power-bi-development': PowerBIService,
  '/services/governance-control-review': GovernanceControlReview,
  '/services/cloud-it-advisory': CloudITAdvisory,
  '/services/systems-architecture': SystemsArchitecture,
  '/solutions/business-clarity-systems': BusinessClaritySystems,
  '/solutions/control-dashboards': ControlDashboards,
  '/solutions/process-mapping': ProcessMapping,
  '/solutions/risk-visibility': RiskVisibility,
};

export default function App() {
  const [isConsultationPanelOpen, setIsConsultationPanelOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const RoutedPage = routes[pathname as keyof typeof routes];
  const openConsultationPanel = () => setIsConsultationPanelOpen(true);
  const closeConsultationPanel = () => setIsConsultationPanelOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <ScrollProgress />
      <CursorGlow />
      <Navbar onConsultationClick={openConsultationPanel} />
      {RoutedPage ? (
        <RoutedPage />
      ) : (
        <>
          <Hero />
          <TrustSection />
          <Solutions />
          <WhyCampE />
          <Industries />
          <Testimonials />
        </>
      )}
      <FinalCTA onConsultationClick={openConsultationPanel} />
      <Footer />
      <ConsultationPanel
        isOpen={isConsultationPanelOpen}
        onClose={closeConsultationPanel}
      />
    </div>
  );
}
