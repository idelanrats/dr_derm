
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: "ri-heart-pulse-line",
      title: "Acne Treatment",
      description: "Comprehensive acne management with advanced dermatological techniques and personalized treatment plans for clear, healthy skin.",
      features: ["Deep cleansing", "Prescription treatments", "Scar reduction"],
      color: "warm-gold"
    },
    {
      icon: "ri-magic-line",
      title: "Anti-Aging Solutions",
      description: "Advanced anti-aging treatments including Botox, fillers, and laser therapy to restore youthful skin appearance.",
      features: ["Botox injections", "Dermal fillers", "Laser resurfacing"],
      color: "mint-green"
    },
    {
      icon: "ri-shield-check-line",
      title: "Skin Cancer Screening",
      description: "Thorough skin examination and early detection of suspicious moles and lesions for your peace of mind.",
      features: ["Mole mapping", "Dermoscopy", "Risk assessment"],
      color: "blush-pink"
    },
    {
      icon: "ri-leaf-line",
      title: "Eczema & Psoriasis Care",
      description: "Specialized treatment for chronic skin conditions with personalized management plans and ongoing support.",
      features: ["Condition management", "Trigger identification", "Long-term care"],
      color: "warm-gold"
    },
    {
      icon: "ri-sparkle-line",
      title: "Chemical Peels",
      description: "Professional chemical peels to improve skin texture, reduce pigmentation, and reveal smoother, brighter skin.",
      features: ["Customized peels", "Texture improvement", "Pigmentation reduction"],
      color: "mint-green"
    },
    {
      icon: "ri-flashlight-line",
      title: "Laser Hair Removal",
      description: "Safe and effective laser hair removal for long-lasting smooth skin results on all body areas.",
      features: ["Advanced laser tech", "All skin types", "Long-lasting results"],
      color: "blush-pink"
    }
  ];

  return (
    <section className="py-section-y md:py-section-y lg:py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-6">
            Our Specialized Services
          </h2>
          <div className="w-24 h-1 bg-warm-gold mx-auto mb-8"></div>
          <p className="text-body-lg text-dark-charcoal/80 font-lato max-w-3xl mx-auto leading-relaxed">
            Comprehensive dermatological care with advanced treatments tailored to your unique skin needs and concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className={`w-16 h-16 bg-${service.color}/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-${service.color}`}></i>
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-4 group-hover:text-warm-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-dark-charcoal/80 font-lato text-body leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-dark-charcoal/70 font-lato">
                    <i className="ri-check-line text-mint-green mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/services" 
                className="text-warm-gold hover:text-amber-700 font-medium font-lato text-body inline-flex items-center group-hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                Learn More
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-warm-gold text-white px-8 py-4 rounded-full hover:bg-amber-700 hover:shadow-warm-gold-lg transition-all duration-300 font-semibold font-lato text-body-lg whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105"
          >
            <i className="ri-calendar-line mr-2"></i>
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
