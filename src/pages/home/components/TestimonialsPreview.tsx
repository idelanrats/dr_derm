import { useState, useEffect } from 'react';

const TestimonialsPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Klerksdorp',
      rating: 5,
      text: 'Dr. Mhlanga transformed my skin completely. Her expertise in treating acne and the personalized care I received exceeded all my expectations. Highly recommended!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20African%20woman%20with%20clear%20healthy%20skin%2C%20natural%20smile%2C%20confident%20expression%2C%20skincare%20success%20story%2C%20dermatology%20patient%20testimonial%2C%20beautiful%20glowing%20complexion&width=150&height=150&seq=testimonial-1&orientation=squarish',
      treatment: 'Acne Treatment'
    },
    {
      name: 'Nomsa Dlamini',
      location: 'Welkom',
      rating: 5,
      text: 'Excellent dermatology care! Dr. Mhlanga diagnosed and treated my skin condition effectively. The staff is friendly and the clinic environment is very professional.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20African%20woman%20with%20radiant%20healthy%20skin%2C%20warm%20smile%2C%20professional%20appearance%2C%20successful%20dermatology%20treatment%2C%20confident%20patient%20testimonial%2C%20natural%20beauty&width=150&height=150&seq=testimonial-3&orientation=squarish',
      treatment: 'Medical Dermatology'
    },
    {
      name: 'Thandi Mokoena',
      location: 'Potchefstroom',
      rating: 5,
      text: 'I struggled with pigmentation for years until I found Dr. Mhlanga. Her treatment plan was thorough and the results are incredible. My confidence has been completely restored!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20African%20woman%20with%20even%20skin%20tone%2C%20radiant%20complexion%2C%20genuine%20smile%2C%20successful%20pigmentation%20treatment%2C%20dermatology%20patient%20testimonial%2C%20natural%20lighting%2C%20beautiful%20healthy%20skin&width=150&height=150&seq=testimonial-5&orientation=squarish',
      treatment: 'Pigmentation Treatment'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-light-grey relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-warm-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-mint-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-6">
            Patient 
            <span className="text-warm-gold relative">
              {" "}Stories
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-warm-gold to-amber-400"></div>
            </span>
          </h2>
          <p className="text-xl text-dark-charcoal/80 font-lato max-w-3xl mx-auto leading-relaxed">
            Real experiences from our valued patients who have transformed their skin with Dr. Mhlanga's expert care
          </p>
        </div>

        {/* Testimonials Grid - Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft-lg border border-mint-green/20 hover:shadow-warm-gold-lg transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Patient Photo */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-warm-gold/20 to-mint-green/20 rounded-full blur-lg"></div>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-soft mx-auto"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl text-warm-gold"></i>
                ))}
              </div>
              
              {/* Quote */}
              <div className="mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-warm-gold to-amber-500 rounded-full flex items-center justify-center shadow-warm-gold mx-auto mb-4">
                  <i className="ri-double-quotes-l text-lg text-white"></i>
                </div>
                <blockquote className="text-base font-lato text-dark-charcoal leading-relaxed italic text-center">
                  "{testimonial.text}"
                </blockquote>
              </div>

              {/* Patient Info */}
              <div className="text-center border-t border-gray-200 pt-6">
                <h4 className="text-lg font-playfair font-semibold text-dark-charcoal mb-2">
                  {testimonial.name}
                </h4>
                <p className="text-dark-charcoal/70 font-lato text-sm flex items-center justify-center mb-3">
                  <i className="ri-map-pin-line mr-2 text-warm-gold"></i>
                  {testimonial.location}
                </p>
                <div className="inline-flex items-center bg-warm-gold/10 text-warm-gold px-3 py-1.5 rounded-full text-xs font-lato font-medium">
                  <i className="ri-check-line mr-1.5"></i>
                  {testimonial.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-mint-green/20">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-gold to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-warm-gold">
              <i className="ri-star-line text-2xl text-white"></i>
            </div>
            <div className="text-3xl font-playfair font-bold text-warm-gold mb-2">4.9/5</div>
            <div className="text-dark-charcoal/80 font-lato">Average Rating</div>
          </div>
          
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-mint-green/20">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-gold to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-warm-gold">
              <i className="ri-user-heart-line text-2xl text-white"></i>
            </div>
            <div className="text-3xl font-playfair font-bold text-warm-gold mb-2">5000+</div>
            <div className="text-dark-charcoal/80 font-lato">Happy Patients</div>
          </div>
          
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-mint-green/20">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-gold to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-warm-gold">
              <i className="ri-award-line text-2xl text-white"></i>
            </div>
            <div className="text-3xl font-playfair font-bold text-warm-gold mb-2">15+</div>
            <div className="text-dark-charcoal/80 font-lato">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;