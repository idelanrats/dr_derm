import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush-pink/30 via-white to-mint-green/20 py-section-y md:py-section-y lg:py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/ece5776bbcd9be3dff5ef9cd5ed3458d/5b44d95790ac6e116c04353a089e6f0f.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-warm-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-mint-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-dark-charcoal mb-6 leading-tight">
                Transform Your 
                <span className="text-warm-gold relative">
                  {" "}Skin
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-gold to-amber-400"></div>
                </span>
              </h1>
              <p className="text-body-lg text-dark-charcoal/80 font-lato leading-relaxed max-w-2xl">
                Experience professional dermatology care with Dr. T.S Mhlanga. 
                From medical treatments to aesthetic enhancements, we provide 
                personalized solutions for healthy, beautiful skin.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'ri-award-line', text: '15+ Years Experience' },
                { icon: 'ri-user-heart-line', text: '5000+ Happy Patients' },
                { icon: 'ri-shield-check-line', text: 'Board Certified' },
                { icon: 'ri-map-pin-line', text: '3 Convenient Locations' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-mint-green/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-warm-gold to-amber-500 rounded-full flex items-center justify-center shadow-warm-gold">
                    <i className={`${benefit.icon} text-lg text-white`}></i>
                  </div>
                  <span className="text-dark-charcoal font-lato font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-warm-gold text-white px-8 py-4 rounded-full hover:bg-amber-700 hover:shadow-warm-gold-lg transition-all duration-300 font-medium font-lato text-center whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
              >
                <i className="ri-calendar-line mr-2 text-xl"></i>
                Book An Appointment
              </Link>
              <Link 
                to="/services" 
                className="bg-white/80 backdrop-blur-sm text-dark-charcoal px-8 py-4 rounded-full hover:bg-white hover:shadow-soft-lg border border-gray-200 transition-all duration-300 font-medium font-lato text-center whitespace-nowrap cursor-pointer transform hover:-translate-y-1 flex items-center justify-center"
              >
                <i className="ri-eye-line mr-2 text-xl"></i>
                View Services
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-gray-200/50">
              <a 
                href="tel:+27184687207" 
                className="flex items-center space-x-3 text-dark-charcoal hover:text-warm-gold transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft group-hover:shadow-warm-gold transition-all duration-300">
                  <i className="ri-phone-line text-xl text-warm-gold"></i>
                </div>
                <div>
                  <div className="text-sm text-dark-charcoal/70 font-lato">Call Us Now</div>
                  <div className="font-lato font-semibold">018-468-7207</div>
                </div>
              </a>
              
              <a 
                href="https://wa.me/27184687207" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-dark-charcoal hover:text-green-600 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft group-hover:shadow-green-500/30 transition-all duration-300">
                  <i className="ri-whatsapp-line text-xl text-green-500"></i>
                </div>
                <div>
                  <div className="text-sm text-dark-charcoal/70 font-lato">WhatsApp</div>
                  <div className="font-lato font-semibold">Message Us</div>
                </div>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slideInRight">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-warm-gold/20 to-mint-green/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-soft-lg">
                <img 
                  src="https://static.readdy.ai/image/ece5776bbcd9be3dff5ef9cd5ed3458d/3db1ca40714437a4d046d0264ca130a3.jpeg"
                  alt="Dr. T.S Mhlanga - Specialist Dermatologist"
                  className="w-full h-auto rounded-2xl object-cover object-top shadow-soft"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft-lg border border-mint-green/20">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold text-warm-gold">4.9★</div>
                    <div className="text-xs text-dark-charcoal/70 font-lato">Patient Rating</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft-lg border border-mint-green/20">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold text-warm-gold">15+</div>
                    <div className="text-xs text-dark-charcoal/70 font-lato">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-warm-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
