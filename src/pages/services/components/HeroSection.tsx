
import { useState } from 'react';

const HeroSection = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-blush-pink to-mint-green py-section-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-playfair text-dark-charcoal mb-6">
              Professional Dermatology & Aesthetic Treatments
            </h1>
            <p className="text-body-lg md:text-xl text-dark-charcoal mb-8 leading-relaxed max-w-3xl mx-auto font-lato">
              Experience world-class skincare treatments tailored to your unique needs. Dr. Mhlanga combines medical expertise with cutting-edge technology to deliver exceptional results for all skin types and concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-soft-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-playfair font-semibold text-dark-charcoal mb-2">
                Book Your Appointment
              </h3>
              <p className="text-dark-charcoal/70 font-lato">
                Contact us to schedule your consultation
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="tel:+27184687207" 
                className="flex items-center justify-center bg-warm-gold text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300 font-lato font-medium whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                Call: 018-468-7207
              </a>
              
              <a 
                href="https://wa.me/27184687207" 
                className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300 font-lato font-medium whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp Us
              </a>
            </div>
            
            <button 
              onClick={() => setShowBookingModal(false)}
              className="w-full mt-6 text-dark-charcoal/70 hover:text-dark-charcoal transition-colors duration-300 font-lato cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
