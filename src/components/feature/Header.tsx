import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-divider-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://drmhlangaskincare.co.za/wp-content/uploads/2024/01/cropped-Untitled-1-248x62.png" 
              alt="Dr. Mhlanga Skincare" 
              className="h-14 w-auto brightness-110 contrast-125 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body relative group ${
                isActive('/') ? 'text-warm-gold' : ''
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body relative group ${
                isActive('/about') ? 'text-warm-gold' : ''
              }`}
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/services" 
              className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body relative group ${
                isActive('/services') ? 'text-warm-gold' : ''
              }`}
            >
              Our Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body relative group ${
                isActive('/contact') ? 'text-warm-gold' : ''
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-warm-gold text-white px-6 py-3 rounded-full hover:bg-amber-700 hover:shadow-warm-gold transition-all duration-300 font-medium font-lato text-body whitespace-nowrap cursor-pointer transform hover:-translate-y-0.5 hover:scale-105"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-dark-charcoal hover:text-warm-gold hover:bg-mint-green/20 transition-all duration-300 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-divider-100 bg-blush-pink/30 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body px-4 py-2 rounded-lg hover:bg-white/70 ${
                  isActive('/') ? 'text-warm-gold bg-white/70' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body px-4 py-2 rounded-lg hover:bg-white/70 ${
                  isActive('/about') ? 'text-warm-gold bg-white/70' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body px-4 py-2 rounded-lg hover:bg-white/70 ${
                  isActive('/services') ? 'text-warm-gold bg-white/70' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className={`text-dark-charcoal hover:text-warm-gold transition-all duration-300 font-medium font-lato text-body px-4 py-2 rounded-lg hover:bg-white/70 ${
                  isActive('/contact') ? 'text-warm-gold bg-white/70' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-warm-gold text-white px-6 py-3 rounded-full hover:bg-amber-700 hover:shadow-warm-gold transition-all duration-300 font-medium font-lato text-body text-center whitespace-nowrap cursor-pointer transform hover:scale-105 mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book an Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
