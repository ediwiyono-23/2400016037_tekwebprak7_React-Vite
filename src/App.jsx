import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PilarSection from "./components/PilarSection";
import ScheduleSection from "./components/ScheduleSection";
import CardGallery from "./components/CardGallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PilarSection />
      <ScheduleSection />
      <CardGallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
