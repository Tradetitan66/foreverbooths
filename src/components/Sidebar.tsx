import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'enquiry', label: 'Enquiry' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-[#5a2e2e]/90 backdrop-blur-sm p-3 text-stone-200 hover:bg-[#4a2020] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop top navigation bar */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-[#5a2e2e]/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <img
              src="/forevery_HQ-removebg-preview.png"
              alt="Forever Booths"
              className="h-12"
            />

            <nav>
              <ul className="flex items-center gap-8">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`transition-all duration-200 hover:scale-110 ${
                        activeSection === section.id
                          ? 'text-amber-300'
                          : 'text-stone-300 hover:text-stone-100'
                      }`}
                    >
                      <span className="font-light tracking-wide">{section.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#5a2e2e] to-[#4a2020] shadow-2xl z-40 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-10">
          <div className="mb-16 pt-16">
            <img
              src="/forevery_HQ-removebg-preview.png"
              alt="Forever Booths"
              className="w-32 mx-auto"
            />
          </div>

          <nav className="flex-1">
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-6 py-4 transition-all duration-200 hover:bg-amber-900/20 ${
                      activeSection === section.id
                        ? 'text-amber-300'
                        : 'text-stone-300 hover:text-stone-100'
                    }`}
                  >
                    <span className="font-light tracking-wide text-lg">{section.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-8">
            <p className="text-xs text-stone-400 text-center font-light italic leading-relaxed">
              Beautifully made.
              <br />
              Unforgettable moments.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
