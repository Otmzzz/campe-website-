import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { WhyCampE } from './components/WhyCampE';
import { Solutions } from './components/Solutions';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <TrustSection />
      <WhyCampE />
      <Solutions />
      <Industries />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}