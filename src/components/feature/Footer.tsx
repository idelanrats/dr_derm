import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/5 to-mint-green/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section-y md:py-section-y lg:py-16">
        {/* Booking CTA Section */}
        <div className="mb-16 text-center bg-gradient-to-br from-warm-gold/10 to-mint-green/10 rounded-3xl p-12 border border-warm-gold/20">
          <h3 className="text-3xl font-playfair font-semibold text-white mb-4">
            Ready to Transform Your Skin?
          </h3>
          <p className="text-body-lg text-gray-300 font-lato mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation with Dr. Mhlanga today and start your journey to healthier, more beautiful skin.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-warm-gold text-white px-8 py-4 rounded-full hover:bg-amber-700 hover:shadow-warm-gold-lg transition-all duration-300 font-medium font-lato whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105"
          >
            <i className="ri-calendar-line mr-2 text-xl"></i>
            Book An Appointment
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://drmhlangaskincare.co.za/wp-content/uploads/2024/01/cropped-Untitled-1-248x62.png" 
                alt="Dr. Mhlanga Skincare" 
                className="h-16 w-auto brightness-125 contrast-125 filter drop-shadow-lg"
              />
            </div>
            <p className="text-gray-300 font-lato text-body leading-relaxed mb-6">
              Professional dermatology and aesthetic treatments with personalized care for healthy, beautiful skin.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-warm-gold hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-warm-gold"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-warm-gold hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-warm-gold"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-warm-gold hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-warm-gold"
              >
                <i className="ri-twitter-line text-lg"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-warm-gold hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-warm-gold"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-warm-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body hover:translate-x-1 transform inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body hover:translate-x-1 transform inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body hover:translate-x-1 transform inline-block"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body hover:translate-x-1 transform inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-warm-gold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-phone-line text-warm-gold"></i>
                </div>
                <div className="space-y-1">
                  <a href="tel:+27184687207" className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body block">
                    018-468-7207
                  </a>
                  <a href="tel:+27184647207" className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body block">
                    018-464-7207
                  </a>
                  <a href="tel:+27573524916" className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body block">
                    057-352-4916
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-mail-line text-warm-gold"></i>
                </div>
                <a href="mailto:info@drmhlangaskincare.co.za" className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body">
                  info@drmhlangaskincare.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-whatsapp-line text-warm-gold"></i>
                </div>
                <a href="https://wa.me/27184687207" className="text-gray-300 hover:text-warm-gold transition-colors duration-300 font-lato text-body">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-warm-gold">Operating Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-lato text-body">Mon - Fri</span>
                <span className="text-white font-lato text-body">08:30 - 17:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-lato text-body">Saturday</span>
                <span className="text-white font-lato text-body">10:00 - 13:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-lato text-body">Sunday</span>
                <span className="text-white font-lato text-body">10:00 - 13:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-lato text-sm">
              © 2024 Dr. Mhlanga Skincare. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-warm-gold transition-colors duration-300 font-lato text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-warm-gold transition-colors duration-300 font-lato text-sm"
              >
                Terms of Service
              </Link>
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-warm-gold transition-colors duration-300 font-lato text-sm"
              >
                Created by Naledi Leshakhe
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
