export default function Hero() {

  const handleEnquiry = () => {
    window.open('https://n8n.srv1004168.hstgr.cloud/form/7d781480-9074-4d3a-9664-4a58e26163ce', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#5a2e2e] via-[#4a2020] to-[#3a1818]">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="flex justify-center items-center">
          <div className="max-w-2xl text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:opacity-80 transition-opacity mx-auto mb-12"
            >
              <img
                src="/FOREVER BOOTH NO BG.png"
                alt="Forever Booths"
                className="w-48 md:w-56"
              />
            </button>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-50 mb-8 leading-tight">
              memories,
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">we make them</span>
              <br />
              <span className="italic font-light text-5xl md:text-6xl lg:text-7xl">unforgettable</span>
            </h1>

            <p className="text-stone-200 text-lg md:text-xl leading-relaxed font-light mb-12 max-w-xl mx-auto">
              Timeless craftsmanship meets modern technology. We create unforgettable photo experiences for life's most celebrated moments.
            </p>

            <button
              onClick={handleEnquiry}
              className="px-10 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-light tracking-wider text-sm"
            >
              Enquire today
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
