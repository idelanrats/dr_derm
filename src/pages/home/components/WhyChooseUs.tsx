
const WhyChooseUs = () => {
  const features = [
    {
      icon: 'ri-award-line',
      title: 'Board Certified Expertise',
      description: 'Dr. Mhlanga is a qualified dermatologist with extensive training and certifications in both medical and aesthetic dermatology.',
      stats: '15+ Years Experience'
    },
    {
      icon: 'ri-heart-line',
      title: 'Personalized Care',
      description: 'Every treatment plan is customized to your unique skin type, concerns, and goals for optimal results.',
      stats: '5000+ Happy Patients'
    },
    {
      icon: 'ri-microscope-line',
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and latest treatment techniques for safe, effective, and comfortable procedures.',
      stats: 'Latest Equipment'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Convenient Locations',
      description: 'Three accessible clinic locations across South Africa to serve you better.',
      stats: '3 Clinic Locations'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-warm-gold/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-mint-green/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-6">
                Why Choose 
                <span className="text-warm-gold relative">
                  {" "}Dr. Mhlanga
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-warm-gold to-amber-400"></div>
                </span>
                ?
              </h2>
              <p className="text-xl text-dark-charcoal/80 font-lato leading-relaxed">
                Experience the difference of professional dermatology care with a personal touch. 
                Our commitment to excellence ensures you receive the best possible treatment outcomes.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group flex items-start space-x-4 p-6 bg-blush-pink/20 backdrop-blur-sm rounded-2xl hover:bg-blush-pink/30 hover:shadow-soft transition-all duration-300 border border-mint-green/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-warm-gold">
                    <i className={`${feature.icon} text-xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-playfair font-semibold text-dark-charcoal group-hover:text-warm-gold transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <span className="text-sm font-lato font-medium text-warm-gold bg-warm-gold/10 px-3 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-dark-charcoal/80 font-lato leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slideInRight">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-mint-green/20 to-warm-gold/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-soft-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20dermatology%20clinic%20interior%20with%20advanced%20medical%20equipment%2C%20clean%20professional%20environment%2C%20state-of-the-art%20treatment%20room%2C%20medical%20technology%2C%20sophisticated%20healthcare%20facility%2C%20premium%20skincare%20clinic%20setup%20with%20elegant%20lighting&width=600&height=700&seq=clinic-interior&orientation=portrait"
                  alt="Modern Dermatology Clinic Interior"
                  className="w-full h-auto rounded-2xl object-cover shadow-soft"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft-lg border border-mint-green/20">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold text-warm-gold">15+</div>
                    <div className="text-xs text-dark-charcoal/70 font-lato">Years Experience</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft-lg border border-mint-green/20">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold text-warm-gold">5000+</div>
                    <div className="text-xs text-dark-charcoal/70 font-lato">Happy Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-warm-gold to-amber-500 rounded-3xl p-12 text-white shadow-warm-gold-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/90 to-amber-500/90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-playfair font-semibold mb-4">
              Experience Professional Dermatology Care
            </h3>
            <p className="text-xl font-lato mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied patients who trust Dr. Mhlanga for their skincare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-warm-gold px-8 py-4 rounded-full hover:bg-gray-50 hover:shadow-soft-lg transition-all duration-300 font-medium font-lato whitespace-nowrap cursor-pointer transform hover:-translate-y-1 hover:scale-105">
                Schedule Consultation
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 border border-white/30 transition-all duration-300 font-medium font-lato whitespace-nowrap cursor-pointer transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;