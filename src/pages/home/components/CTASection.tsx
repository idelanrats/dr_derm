
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-section-y md:py-section-y lg:py-20 bg-gradient-to-br from-warm-gold/10 to-mint-green/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blush-pink/20 to-mint-green/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-mint-green/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-6">
          Ready to Transform Your Skin?
        </h2>
        <div className="w-24 h-1 bg-warm-gold mx-auto mb-8"></div>
        <p className="text-body-lg text-dark-charcoal/80 font-lato max-w-3xl mx-auto leading-relaxed mb-12">
          Take the first step towards healthier, more beautiful skin. Schedule your consultation with Dr. Mhlanga today and discover personalized treatments designed just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/contact" 
            className="bg-warm-gold text-white px-8 py-4 rounded-full hover:bg-amber-700 hover:shadow-warm-gold-lg transition-all duration-300 font-semibold font-lato text-body-lg whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105"
          >
            <i className="ri-calendar-line mr-2"></i>
            Book Your Consultation
          </Link>
          
          <a 
            href="tel:018-468-7207" 
            className="bg-white text-warm-gold border-2 border-warm-gold px-8 py-4 rounded-full hover:bg-warm-gold hover:text-white transition-all duration-300 font-semibold font-lato text-body-lg whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105"
          >
            <i className="ri-phone-line mr-2"></i>
            Call Now: 018-468-7207
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-warm-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-heart-line text-2xl text-warm-gold"></i>
            </div>
            <h3 className="font-playfair font-semibold text-dark-charcoal mb-2">Personalized Care</h3>
            <p className="text-dark-charcoal/70 font-lato text-sm">Tailored treatments for your unique skin needs</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-mint-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-award-line text-2xl text-mint-green"></i>
            </div>
            <h3 className="font-playfair font-semibold text-dark-charcoal mb-2">Expert Results</h3>
            <p className="text-dark-charcoal/70 font-lato text-sm">Professional dermatological expertise</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blush-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-blush-pink"></i>
            </div>
            <h3 className="font-playfair font-semibold text-dark-charcoal mb-2">Safe & Effective</h3>
            <p className="text-dark-charcoal/70 font-lato text-sm">Proven treatments with lasting results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
