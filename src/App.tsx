import { Heart, Calendar, Star, CheckCircle, MessageCircle, DollarSign, HelpCircle, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Empathy from './components/Empathy';
import Trust from './components/Trust';
import Proof from './components/Proof';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Empathy />
      <Trust />
      <Proof />
      <Testimonials />
      <Features />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
