import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2a1515] py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:opacity-80 transition-opacity mx-auto mb-6 block"
            >
              <img
                src="/FOREVER BOOTH NO BG.png"
                alt="Forever Booths"
                className="w-40"
              />
            </button>
            <p className="text-stone-400 font-light italic text-sm mb-8">
              Beautifully made. Unforgettable moments.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://n8n.srv1004168.hstgr.cloud/form/7d781480-9074-4d3a-9664-4a58e26163ce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:hello@foreverbooths.com"
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center text-stone-400 text-sm font-light space-y-2 mb-8">
            <p className="flex items-center justify-center gap-2">
              <Mail size={16} />
              hello@foreverbooths.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin size={16} />
              Serving luxury events nationwide
            </p>
          </div>

          <div className="pt-8 border-t border-stone-700/30 text-center">
            <p className="text-stone-500 text-xs font-light">
              © {new Date().getFullYear()} Forever Booths. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
