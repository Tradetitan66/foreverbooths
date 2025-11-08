export default function Experiences() {
  const experiences = [
    {
      icon: `
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="38" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="40" cy="35" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M27 55 C27 48, 32 42, 40 42 C48 42, 53 48, 53 55" stroke="currentColor" stroke-width="1.5" fill="none"/>
        </svg>
      `,
      title: 'Weddings',
      description:
        'Elegant photo experiences tailored to your vision. Custom overlays and curated backdrops for your special day.',
    },
    {
      icon: `
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 50 L35 35 L40 45 L45 30 L50 40" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <circle cx="40" cy="40" r="25" stroke="currentColor" stroke-width="1.5" fill="none"/>
        </svg>
      `,
      title: 'Corporate',
      description:
        'Branded experiences for activations and celebrations. Custom graphics and instant sharing that blend creativity with professionalism.',
    },
    {
      icon: `
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="45" width="10" height="15" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <rect x="35" y="50" width="10" height="10" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <rect x="45" y="40" width="10" height="20" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <circle cx="30" cy="32" r="3" fill="currentColor"/>
          <circle cx="40" cy="35" r="3" fill="currentColor"/>
          <circle cx="50" cy="28" r="3" fill="currentColor"/>
        </svg>
      `,
      title: 'Parties & Events',
      description:
        'Perfect for milestones and celebrations. Capture candid moments and provide guests with instant keepsakes.',
    },
  ];

  return (
    <section id="experiences" className="py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-[#4a2020] mb-4 italic hover:text-amber-700 transition-colors duration-300">
              Our Services
            </h2>
          </div>

          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <div key={index} className="text-center group">
                <div
                  className="w-20 h-20 mx-auto mb-6 text-[#5a2e2e] transition-transform duration-300 group-hover:scale-110"
                  dangerouslySetInnerHTML={{ __html: experience.icon }}
                />
                <h3 className="font-serif text-4xl text-[#4a2020] mb-6 italic hover:text-amber-700 transition-colors duration-300">
                  {experience.title}
                </h3>
                <div className="w-full max-w-2xl mx-auto mb-6">
                  <div className="relative p-4 bg-gradient-to-br from-amber-900/20 to-amber-700/10 rounded-tl-[60px] rounded-br-[60px] shadow-xl border-2 border-amber-500/50 hover:shadow-2xl hover:border-amber-500/70 transition-all duration-300">
                    <div className="absolute inset-3 border-2 border-amber-400/40 rounded-tl-[50px] rounded-br-[50px]" />
                    <div className="relative overflow-hidden rounded-tl-[48px] rounded-br-[48px] border border-amber-300/30">
                      <img
                        src={
                          index === 0
                            ? '/wedding/stylish_guests_joyfully_posing_with_forever_booths_in_oak_wood_photo_booth_at_a_wedding_event_sophi_hxbqsvf9tada7haz4s69_0.png'
                            : index === 1
                            ? '/forever_booths_luxury_oak_wood_photo_booth_in_an_upscale_corporate_event_setting_sleek_minimal_deco_ygsm5dfs5i1fdq9m49um_0.png'
                            : '/stylish_guests_joyfully_posing_with_forever_booths_photo_booth_at_a_premium_event_sophisticated_att_9841xfuajs4crfruzb5s_13.png'
                        }
                        alt={experience.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[#4a2020]/80 text-base leading-relaxed font-light max-w-2xl mx-auto hover:text-[#4a2020] transition-colors duration-300">
                  {experience.description}
                </p>
                {index < experiences.length - 1 && (
                  <div className="mt-16 w-full max-w-md mx-auto h-px bg-[#5a2e2e]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
