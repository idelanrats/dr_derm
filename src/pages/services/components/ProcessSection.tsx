const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Comprehensive skin assessment and discussion of your concerns and goals.",
      duration: "30-45 minutes",
      icon: "ri-user-heart-line"
    },
    {
      number: "02",
      title: "Personalized Treatment Plan",
      description: "Custom treatment plan designed specifically for your skin type and concerns.",
      duration: "Included in consultation",
      icon: "ri-file-text-line"
    },
    {
      number: "03",
      title: "Treatment Session",
      description: "Professional treatment performed with the highest standards of care and safety.",
      duration: "Varies by treatment",
      icon: "ri-hand-heart-line"
    },
    {
      number: "04",
      title: "Follow-up Care",
      description: "Ongoing support and monitoring to ensure optimal results and skin health.",
      duration: "As needed",
      icon: "ri-heart-line"
    }
  ];

  return (
    <section className="section-y bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] mb-4">
            Our Treatment Process
          </h2>
          <p className="text-lg text-[#1E1E1E] max-w-2xl mx-auto leading-relaxed">
            Experience our comprehensive approach to skincare with a proven process 
            that ensures the best possible outcomes for every patient.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-[#CBA659]/30 transform translate-x-4 z-0"></div>
                )}
                
                <div className="bg-gradient-to-br from-[#F4D8D8] to-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#CBA659] rounded-full flex items-center justify-center mb-2">
                        <i className={`${step.icon} text-white text-xl`}></i>
                      </div>
                      <div className="text-2xl font-serif text-[#CBA659] font-bold">{step.number}</div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-serif text-[#1E1E1E] mb-2">{step.title}</h3>
                      <p className="text-[#1E1E1E] mb-3 leading-relaxed">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#CBA659] font-medium">
                        <i className="ri-time-line"></i>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="mt-16 bg-[#A7D8C0]/20 rounded-lg p-8">
          <h3 className="text-2xl font-serif text-[#1E1E1E] text-center mb-8">
            What to Expect During Your Visit
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A7D8C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h4 className="font-medium text-[#1E1E1E] mb-2">Safe Environment</h4>
              <p className="text-sm text-[#1E1E1E] leading-relaxed">
                Sterile, professional clinic environment with the highest safety standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CBA659] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-smile-line text-2xl text-white"></i>
              </div>
              <h4 className="font-medium text-[#1E1E1E] mb-2">Personalized Care</h4>
              <p className="text-sm text-[#1E1E1E] leading-relaxed">
                Individual attention and customized treatment plans for optimal results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4D8D8] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-line text-2xl text-white"></i>
              </div>
              <h4 className="font-medium text-[#1E1E1E] mb-2">Expert Care</h4>
              <p className="text-sm text-[#1E1E1E] leading-relaxed">
                Treatment by qualified professionals with years of dermatology experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;