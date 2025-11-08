import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/forever_booths_handcrafted_oak_wood_photo_booth_setup_on_tripod_in_a_luxurious_wedding_or_event_spa_qmpkxvv5lqwzk0a6e8pn_13.png',
      alt: 'Handcrafted oak photo booth at luxury wedding venue',
    },
    {
      src: '/stylish_guests_joyfully_posing_with_forever_booths_photo_booth_at_a_premium_event_sophisticated_att_v6qal5rpwe2w8tiudp0v_11.png',
      alt: 'Guests enjoying Forever Booths photo experience at elegant event',
    },
    {
      src: '/stylish_guests_joyfully_posing_with_forever_booths_photo_booth_at_a_premium_event_sophisticated_att_9841xfuajs4crfruzb5s_13.png',
      alt: 'Wedding party capturing memories with Forever Booths',
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-gradient-to-b from-[#5a2e2e] to-[#4a2020]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-stone-50 mb-12 italic hover:text-amber-300 transition-colors duration-300">
              Gallery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square p-4 bg-gradient-to-br from-amber-900/30 to-amber-700/20 rounded-tl-[60px] rounded-br-[60px] shadow-2xl hover:shadow-amber-500/30 transition-all duration-300">
                  <div className="absolute inset-3 border-2 border-amber-600/40 rounded-tl-[50px] rounded-br-[50px]" />
                  <div className="relative w-full h-full overflow-hidden rounded-tl-[48px] rounded-br-[48px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-amber-400 transition-all hover:scale-110 duration-200"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery image fullscreen"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
