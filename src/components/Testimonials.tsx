export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The highlight of our wedding. Exceptional quality and our guests loved it. We'll treasure these memories forever.",
      author: 'Sarah & Michael',
      event: 'Wedding',
    },
    {
      quote:
        "The telephone guestbook was such a unique touch. Beautifully crafted and incredibly moving to hear heartfelt messages from loved ones.",
      author: 'Emily Chen',
      event: 'Wedding',
    },
    {
      quote:
        "Exceeded every expectation. Custom branding looked incredible and the team was professional throughout. Our guests are still talking about it.",
      author: 'David Thompson',
      event: 'Corporate Event',
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#1a1a1a] mb-16 lg:mb-20 leading-tight max-w-5xl mx-auto hover:text-amber-700 transition-colors duration-300">
            Don't just take our words. Over 1000+ people trust us.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f5f5f7] rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:bg-amber-50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <blockquote className="text-[#1a1a1a] text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="text-[#1a1a1a] font-semibold text-lg mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-[#666666] text-sm">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
