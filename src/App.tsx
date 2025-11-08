import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experiences', 'gallery', 'testimonials', 'enquiry'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeSection={activeSection} />
      <div className="fixed top-6 left-6 z-50">
        <img
          src="/FOREVER BOOTH NO BG.png"
          alt="Forever Booths"
          className="w-16 md:w-20 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
      <main>
        <Hero />
        <About />
        <Experiences />
        <Gallery />
        <Testimonials />
        <Enquiry />
        <Footer />
      </main>
      <AdminPanel />
    </div>
  );
}

export default App;
