
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      id: 1,
      title: 'Acne Treatment Success',
      treatment: 'Medical Acne Therapy',
      duration: '3 months',
      beforeImage: 'https://readdy.ai/api/search-image?query=Before%20acne%20treatment%20photo%20showing%20moderate%20facial%20acne%2C%20skin%20imperfections%2C%20medical%20dermatology%20case%20study%2C%20professional%20clinical%20photography%2C%20realistic%20skin%20condition%20documentation&width=400&height=500&seq=before-acne-001&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=After%20acne%20treatment%20photo%20showing%20clear%20healthy%20skin%2C%20smooth%20complexion%2C%20successful%20dermatology%20treatment%20results%2C%20professional%20clinical%20photography%2C%20beautiful%20skin%20transformation&width=400&height=500&seq=after-acne-001&orientation=portrait',
      description: 'Complete acne clearance with personalized treatment plan including topical therapy and lifestyle modifications.'
    },
    {
      id: 2,
      title: 'Pigmentation Correction',
      treatment: 'Pigmentation Therapy',
      duration: '4 months',
      beforeImage: 'https://readdy.ai/api/search-image?query=Before%20pigmentation%20treatment%20photo%20showing%20uneven%20skin%20tone%2C%20dark%20spots%2C%20hyperpigmentation%2C%20medical%20dermatology%20case%20study%2C%20professional%20clinical%20photography&width=400&height=500&seq=before-pigment-001&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=After%20pigmentation%20treatment%20photo%20showing%20even%20skin%20tone%2C%20reduced%20dark%20spots%2C%20clear%20complexion%2C%20successful%20dermatology%20treatment%20results%2C%20professional%20clinical%20photography&width=400&height=500&seq=after-pigment-001&orientation=portrait',
      description: 'Significant improvement in skin tone evenness and reduction of hyperpigmentation through targeted therapy.'
    },
    {
      id: 3,
      title: 'Anti-Aging Treatment',
      treatment: 'Aesthetic Rejuvenation',
      duration: '6 months',
      beforeImage: 'https://readdy.ai/api/search-image?query=Before%20anti-aging%20treatment%20photo%20showing%20fine%20lines%2C%20wrinkles%2C%20aging%20skin%2C%20medical%20dermatology%20case%20study%2C%20professional%20clinical%20photography&width=400&height=500&seq=before-aging-001&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=After%20anti-aging%20treatment%20photo%20showing%20smoother%20skin%2C%20reduced%20wrinkles%2C%20youthful%20appearance%2C%20successful%20aesthetic%20treatment%20results%2C%20professional%20clinical%20photography&width=400&height=500&seq=after-aging-001&orientation=portrait',
      description: 'Remarkable skin rejuvenation with reduced fine lines and improved skin texture through comprehensive aesthetic care.'
    },
    {
      id: 4,
      title: 'Eczema Management',
      treatment: 'Medical Dermatology',
      duration: '2 months',
      beforeImage: 'https://readdy.ai/api/search-image?query=Before%20eczema%20treatment%20photo%20showing%20inflamed%20skin%2C%20redness%2C%20skin%20irritation%2C%20medical%20dermatology%20case%20study%2C%20professional%20clinical%20photography&width=400&height=500&seq=before-eczema-001&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=After%20eczema%20treatment%20photo%20showing%20calm%20healthy%20skin%2C%20reduced%20inflammation%2C%20clear%20complexion%2C%20successful%20medical%20treatment%20results%2C%20professional%20clinical%20photography&width=400&height=500&seq=after-eczema-001&orientation=portrait',
      description: 'Effective eczema control with customized treatment protocol and ongoing skin barrier restoration.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [transformations.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="py-section-y md:py-section-y lg:py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-warm-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-mint-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-6">
            Real 
            <span className="text-warm-gold relative">
              {" "}Transformations
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-warm-gold to-amber-400"></div>
            </span>
          </h2>
          <p className="text-body-lg text-dark-charcoal/80 font-lato max-w-3xl mx-auto leading-relaxed">
            See the remarkable results our patients have achieved with Dr. Mhlanga's expert dermatological care
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative bg-gradient-to-br from-blush-pink/20 to-mint-green/20 rounded-3xl p-8 lg:p-12 shadow-soft-lg border border-mint-green/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before/After Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Before Image */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-soft">
                    <div className="text-center mb-3">
                      <span className="inline-block bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-lato font-medium">
                        Before
                      </span>
                    </div>
                    <img 
                      src={transformations[currentSlide].beforeImage}
                      alt={`Before ${transformations[currentSlide].title}`}
                      className="w-full h-64 object-cover object-top rounded-xl shadow-soft"
                    />
                  </div>
                </div>

                {/* After Image */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-warm-gold/20 to-amber-400/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-soft">
                    <div className="text-center mb-3">
                      <span className="inline-block bg-warm-gold text-white px-3 py-1 rounded-full text-sm font-lato font-medium">
                        After
                      </span>
                    </div>
                    <img 
                      src={transformations[currentSlide].afterImage}
                      alt={`After ${transformations[currentSlide].title}`}
                      className="w-full h-64 object-cover object-top rounded-xl shadow-soft"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-arrow-left-line text-xl text-dark-charcoal"></i>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-arrow-right-line text-xl text-dark-charcoal"></i>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-playfair font-semibold text-dark-charcoal mb-3">
                  {transformations[currentSlide].title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center bg-warm-gold/10 text-warm-gold px-3 py-1.5 rounded-full text-sm font-lato font-medium">
                    <i className="ri-medical-mask-line mr-1.5"></i>
                    {transformations[currentSlide].treatment}
                  </span>
                  <span className="inline-flex items-center bg-mint-green/20 text-dark-charcoal px-3 py-1.5 rounded-full text-sm font-lato font-medium">
                    <i className="ri-time-line mr-1.5"></i>
                    {transformations[currentSlide].duration}
                  </span>
                </div>
                <p className="text-body text-dark-charcoal/80 font-lato leading-relaxed">
                  {transformations[currentSlide].description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-soft border border-mint-green/20">
                  <div className="text-2xl font-playfair font-bold text-warm-gold mb-1">100%</div>
                  <div className="text-sm text-dark-charcoal/70 font-lato">Patient Satisfaction</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-soft border border-mint-green/20">
                  <div className="text-2xl font-playfair font-bold text-warm-gold mb-1">Safe</div>
                  <div className="text-sm text-dark-charcoal/70 font-lato">FDA Approved</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-warm-gold text-white px-6 py-3 rounded-full hover:bg-amber-700 hover:shadow-warm-gold-lg transition-all duration-300 font-medium font-lato whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Book Your Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-warm-gold shadow-warm-gold' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-warm-gold to-amber-500 rounded-3xl p-12 text-white shadow-warm-gold-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/90 to-amber-500/90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-playfair font-semibold mb-4">
              Ready for Your Own Transformation?
            </h3>
            <p className="text-body-lg font-lato mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied patients who have achieved remarkable results with Dr. Mhlanga's expert care.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-warm-gold px-8 py-4 rounded-full hover:bg-gray-50 hover:shadow-soft-lg transition-all duration-300 font-medium font-lato whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105"
            >
              <i className="ri-calendar-line mr-2 text-xl"></i>
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
