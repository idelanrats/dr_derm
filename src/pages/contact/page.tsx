import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';

const ContactPage = () => {
  const locations = [
    {
      name: "Klerksdorp",
      address: "20 Hartley str, Wilkoppies, Klerksdorp, 257",
      note: "(opposite Life Anncron Hospital)",
      mapSrc: "https://maps.google.com/maps?q=20%20Hartley%20str%2C%20Wilkoppies%2C%20Klerksdorp%2C%20257&t=m&z=17&output=embed&iwloc=near"
    },
    {
      name: "Potchefstroom",
      address: "Mediclinic, suite 205, 66 Meyer St, Potchefstroom, 2520",
      note: "",
      mapSrc: "https://maps.google.com/maps?q=Mediclinic%2C%20suite%20205%2C%2066%20Meyer%20St%2C%20Potchefstroom%2C%202520&t=m&z=17&output=embed&iwloc=near"
    },
    {
      name: "Welkom",
      address: "Mediclinic, suite 100, Meulen St, Welkom Central, Welkom, 9459",
      note: "",
      mapSrc: "https://maps.google.com/maps?q=Mediclinic%2C%20suite%20100%2C%20Meulen%20St%2C%20Welkom%20Central%2C%20Welkom%2C%209459&t=m&z=17&output=embed&iwloc=near"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-gradient-to-br from-blush-pink/30 to-mint-green/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-dark-charcoal mb-6">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-warm-gold mx-auto mb-8"></div>
              <p className="text-body-lg text-dark-charcoal/80 font-lato max-w-3xl mx-auto leading-relaxed">
                Ready to start your journey to healthier skin? Get in touch with Dr. Mhlanga Skincare today to schedule your consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="text-center p-8 bg-gradient-to-br from-blush-pink/30 to-mint-green/20 rounded-2xl">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-phone-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-4">Call Us</h3>
                <a 
                  href="tel:018-468-7207" 
                  className="text-warm-gold hover:text-amber-700 transition-colors text-body-lg font-lato font-medium cursor-pointer"
                >
                  018-468-7207
                </a>
              </div>

              {/* Email */}
              <div className="text-center p-8 bg-gradient-to-br from-mint-green/20 to-blush-pink/30 rounded-2xl">
                <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-mail-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-4">Email Us</h3>
                <a 
                  href="mailto:info@drmhlangaskincare.co.za" 
                  className="text-mint-green hover:text-mint-600 transition-colors text-body-lg font-lato font-medium cursor-pointer"
                >
                  info@drmhlangaskincare.co.za
                </a>
              </div>

              {/* Hours */}
              <div className="text-center p-8 bg-gradient-to-br from-warm-gold/20 to-mint-green/20 rounded-2xl">
                <div className="w-16 h-16 bg-blush-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-4">Open Hours</h3>
                <div className="text-dark-charcoal/80 font-lato text-body">
                  <p>Mon-Fri 08:30 – 17:00</p>
                  <p>Sat-Sun 10:00 – 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations and Booking Form */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Locations */}
              <div>
                <h2 className="text-4xl font-playfair font-bold text-dark-charcoal mb-8">
                  Find Us
                </h2>
                
                <div className="space-y-8">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-playfair font-semibold text-dark-charcoal mb-3">
                        {location.name}
                      </h3>
                      <p className="text-dark-charcoal/80 font-lato text-body mb-2">
                        {location.address}
                      </p>
                      {location.note && (
                        <p className="text-dark-charcoal/60 font-lato italic text-sm mb-4">
                          {location.note}
                        </p>
                      )}
                      
                      {/* Map */}
                      <div className="w-full h-48 rounded-lg overflow-hidden">
                        <iframe
                          src={location.mapSrc}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${location.name} Location`}
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Form */}
              <div>
                <h2 className="text-4xl font-playfair font-bold text-dark-charcoal mb-8">
                  Book An Appointment
                </h2>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <p className="text-dark-charcoal/80 font-lato text-body mb-6">
                    Thank you for your request — we'll contact you within 24 hours to confirm your appointment.
                  </p>
                  
                  {/* Google Form Embed */}
                  <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdPpfshCI_TDkf2Jc-7UKbBTd0Smz035X9gl3D02XYGUsK0Hg/viewform?embedded=true"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Book an Appointment Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Contact */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair font-bold text-dark-charcoal mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-body-lg text-dark-charcoal/80 font-lato mb-8 max-w-2xl mx-auto">
              Contact us directly via WhatsApp for quick responses to your questions or urgent skin concerns.
            </p>
            <a 
              href="https://web.whatsapp.com/send?phone=27635502017&text=Hello" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold font-lato text-body-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-2xl mr-3"></i>
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
