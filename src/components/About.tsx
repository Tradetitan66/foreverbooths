import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function About() {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('gallery-images')
        .list();

      if (error) throw error;

      const imageFile = data.find(file =>
        file.name.toLowerCase().includes('forever_booths_handcrafted')
      );

      if (imageFile) {
        const { data: urlData } = supabase.storage
          .from('gallery-images')
          .getPublicUrl(imageFile.name);
        setImageUrl(urlData.publicUrl);
      }
    } catch (error) {
      console.error('Error loading image:', error);
    }
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 lg:order-1 group">
              <div className="aspect-[4/5] overflow-hidden max-w-md mx-auto">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Forever Booths handcrafted oak photo booth"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl text-[#4a2020] mb-6 leading-tight hover:text-amber-700 transition-colors duration-300">
                About us
              </h2>
              <p className="text-[#4a2020]/80 text-base leading-relaxed font-light hover:text-[#4a2020] transition-colors duration-300">
                Handcrafted oak meets vintage charm. Our photo booths and telephone guestbooks blend seamlessly into luxury events, capturing beautiful memories with meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
