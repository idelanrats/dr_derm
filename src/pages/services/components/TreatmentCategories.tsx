const TreatmentCategories = () => {
  const categories = [
    {
      title: "Medical Dermatology",
      description: "Comprehensive treatment for skin conditions and diseases",
      icon: "ri-heart-pulse-line",
      treatments: ["Acne Treatment", "Eczema Management", "Psoriasis Care", "Skin Cancer Screening"],
      color: "from-[#F4D8D8] to-white"
    },
    {
      title: "Aesthetic Treatments",
      description: "Advanced cosmetic procedures for skin enhancement",
      icon: "ri-magic-line",
      treatments: ["Botox & Fillers", "Chemical Peels", "Laser Treatments", "Microneedling"],
      color: "from-[#A7D8C0] to-white"
    },
    {
      title: "Pigmentation Solutions",
      description: "Specialized treatments for uneven skin tone and dark spots",
      icon: "ri-sun-line",
      treatments: ["Melasma Treatment", "Age Spot Removal", "Post-Inflammatory Hyperpigmentation", "Skin Brightening"],
      color: "from-[#F9F9F9] to-white"
    }
  ];

  return (
    <section className="section-y bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] mb-4">
            Our Treatment Categories
          </h2>
          <p className="text-lg text-[#1E1E1E] max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of dermatological and aesthetic treatments, 
            each designed to address specific skin concerns with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${category.color} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#CBA659] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-serif text-[#1E1E1E] mb-2">{category.title}</h3>
                <p className="text-[#1E1E1E] leading-relaxed">{category.description}</p>
              </div>

              <div className="space-y-3">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <div 
                    key={treatmentIndex}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-[#CBA659] rounded-full"></div>
                    <span className="text-[#1E1E1E] font-medium">{treatment}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-[#CBA659] text-white py-3 rounded-lg font-medium hover:bg-[#B8954A] transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentCategories;