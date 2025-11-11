
import { Link } from 'react-router-dom';

const TreatmentDetails = () => {
  const treatments = [
    {
      title: "Acne Treatment",
      description: "Comprehensive acne management using advanced dermatological techniques and personalized treatment plans.",
      features: [
        "Deep pore cleansing and extraction",
        "Prescription topical treatments",
        "Chemical peels for acne scarring",
        "Lifestyle and skincare guidance",
        "Follow-up monitoring and adjustments"
      ],
      duration: "45-60 minutes",
      price: "From R850",
      image: "https://readdy.ai/api/search-image?query=Professional%20dermatologist%20performing%20acne%20treatment%20on%20patient%20face%20in%20modern%20medical%20clinic%20with%20clean%20white%20background%20and%20medical%20equipment%2C%20clinical%20skincare%20procedure%2C%20medical%20aesthetics&width=400&height=300&seq=acne1&orientation=landscape"
    },
    {
      title: "Anti-Aging Treatments",
      description: "Advanced anti-aging solutions to restore youthful skin appearance and reduce signs of aging.",
      features: [
        "Botox and dermal filler injections",
        "Laser skin resurfacing",
        "Collagen stimulation therapy",
        "Customized skincare regimens",
        "Preventive aging strategies"
      ],
      duration: "30-90 minutes",
      price: "From R1,200",
      image: "https://readdy.ai/api/search-image?query=Professional%20anti-aging%20facial%20treatment%20in%20luxury%20medical%20spa%20with%20dermatologist%20applying%20advanced%20skincare%20technology%20on%20mature%20woman%20face%2C%20clean%20white%20medical%20background%2C%20aesthetic%20medicine&width=400&height=300&seq=antiaging1&orientation=landscape"
    },
    {
      title: "Skin Cancer Screening",
      description: "Thorough skin examination and early detection of suspicious moles and skin lesions.",
      features: [
        "Full body mole mapping",
        "Dermoscopy examination",
        "Biopsy procedures when needed",
        "Risk assessment and education",
        "Regular monitoring schedules"
      ],
      duration: "30-45 minutes",
      price: "From R650",
      image: "https://readdy.ai/api/search-image?query=Professional%20dermatologist%20examining%20patient%20skin%20with%20dermoscope%20for%20cancer%20screening%20in%20modern%20medical%20clinic%2C%20medical%20examination%2C%20clean%20white%20clinical%20background%2C%20healthcare%20professional&width=400&height=300&seq=screening1&orientation=landscape"
    },
    {
      title: "Eczema & Psoriasis Care",
      description: "Specialized treatment for chronic skin conditions with personalized management plans.",
      features: [
        "Condition assessment and diagnosis",
        "Prescription medication management",
        "Trigger identification and avoidance",
        "Moisturizing and barrier repair",
        "Long-term management strategies"
      ],
      duration: "45 minutes",
      price: "From R750",
      image: "https://readdy.ai/api/search-image?query=Gentle%20dermatological%20treatment%20for%20sensitive%20skin%20conditions%20in%20professional%20medical%20clinic%2C%20doctor%20applying%20therapeutic%20cream%20to%20patient%20arm%2C%20clean%20white%20medical%20background%2C%20healthcare%20treatment&width=400&height=300&seq=eczema1&orientation=landscape"
    },
    {
      title: "Chemical Peels",
      description: "Professional chemical peels to improve skin texture, tone, and overall appearance.",
      features: [
        "Customized peel selection",
        "Pre-treatment skin preparation",
        "Professional application",
        "Post-peel care instructions",
        "Progressive treatment plans"
      ],
      duration: "30-45 minutes",
      price: "From R950",
      image: "https://readdy.ai/api/search-image?query=Professional%20chemical%20peel%20treatment%20being%20applied%20by%20dermatologist%20in%20modern%20medical%20spa%2C%20skincare%20professional%20applying%20peel%20solution%20to%20patient%20face%2C%20clean%20white%20clinical%20background%2C%20aesthetic%20treatment&width=400&height=300&seq=peel1&orientation=landscape"
    },
    {
      title: "Laser Hair Removal",
      description: "Safe and effective laser hair removal for long-lasting smooth skin results.",
      features: [
        "Advanced laser technology",
        "Customized treatment parameters",
        "Minimal discomfort procedures",
        "All skin types suitable",
        "Comprehensive treatment packages"
      ],
      duration: "15-60 minutes",
      price: "From R450",
      image: "https://readdy.ai/api/search-image?query=Professional%20laser%20hair%20removal%20treatment%20in%20modern%20medical%20clinic%2C%20dermatologist%20using%20advanced%20laser%20device%20on%20patient%20leg%2C%20clean%20white%20medical%20background%2C%20aesthetic%20laser%20technology&width=400&height=300&seq=laser1&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-6">
            Detailed Treatment Information
          </h2>
          <div className="w-24 h-1 bg-warm-gold mx-auto mb-8"></div>
          <p className="text-body-lg text-dark-charcoal/80 font-lato max-w-3xl mx-auto leading-relaxed">
            Comprehensive information about our specialized dermatological treatments and procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-warm-gold text-white px-3 py-1 rounded-full text-sm font-medium font-lato">
                  {treatment.price}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-3">
                  {treatment.title}
                </h3>
                <p className="text-dark-charcoal/80 font-lato text-body mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark-charcoal font-lato mb-2">Treatment Includes:</h4>
                  <ul className="space-y-1">
                    {treatment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-dark-charcoal/80 font-lato">
                        <i className="ri-check-line text-mint-green mr-2 mt-0.5 flex-shrink-0"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm text-dark-charcoal/70 font-lato mb-6">
                  <span className="flex items-center">
                    <i className="ri-time-line mr-1 text-warm-gold"></i>
                    {treatment.duration}
                  </span>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to="/contact"
                    className="w-full bg-warm-gold text-white py-3 px-6 rounded-full hover:bg-amber-700 transition-all duration-300 font-medium font-lato text-center block whitespace-nowrap cursor-pointer transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentDetails;
