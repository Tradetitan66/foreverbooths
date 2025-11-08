import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-stone-50/95 backdrop-blur-sm shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center">
          <img
            src="/FOREVER BOOTH NO BG.png"
            alt="Forever Booths"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
}
