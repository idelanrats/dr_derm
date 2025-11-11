import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';

const AboutPage = () => {
  const certifications = [
    {
      image: "https://drmhlangaskincare.co.za/wp-content/uploads/2024/01/diagnostic-lab-certi-24.png",
      alt: "Professional Certification 1"
    },
    {
      image: "https://drmhlangaskincare.co.za/wp-content/uploads/2024/01/diagnostic-lab-certi-23-1.png",
      alt: "Professional Certification 2"
    },
    {
      image: "https://drmhlangaskincare.co.za/wp-content/uploads/2024/01/diagnostic-lab-certi-2-1.png",
      alt: "Professional Certification 3"
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
                About Dr. Mhlanga Skincare
              </h1>
              <div className="w-24 h-1 bg-warm-gold mx-auto mb-8"></div>
              <p className="text-body-lg text-dark-charcoal/80 font-lato max-w-3xl mx-auto leading-relaxed">
                Your trusted partner in dermatological excellence, providing comprehensive skin care solutions across South Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Dr. Mhlanga Section */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Doctor Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="https://drmhlangaskincare.co.za/wp-content/uploads/2024/01/pharma-company-template-founder-photo-01.png" 
                    alt="Dr. T.S Mhlanga - Specialist Dermatologist" 
                    className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-warm-gold/20 rounded-full opacity-60"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-mint-green/20 rounded-full opacity-40"></div>
              </div>

              {/* Content */}
              <div>
                <p className="text-warm-gold font-semibold font-lato text-body-lg mb-4">About Us</p>
                <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-4">
                  Dr. T.S Mhlanga
                </h2>
                <h3 className="text-2xl font-playfair font-semibold text-dark-charcoal mb-6">
                  SPECIALIST DERMATOLOGIST
                </h3>
                <div className="w-16 h-1 bg-warm-gold mb-6"></div>
                
                <p className="text-body-lg font-lato font-medium text-dark-charcoal/80 mb-6 italic">
                  MBChB(UCT) Mmed (UKZN) FCDerm(SA)
                </p>
                
                <div className="space-y-6 text-dark-charcoal/80 font-lato text-body leading-relaxed">
                  <p>
                    <strong>Dr. Sthembiso Mhlanga</strong> is a qualified Specialist dermatologist and Director of Mhlanga Skincare Inc., a dermatology clinic established in 2023. He is registered with the Health Professions Council of South Africa and holds a Master of Medicine degree in Dermatology from the University of KwaZulu-Natal.
                  </p>
                  
                  <p>
                    He graduated from the University of Cape Town with a Bachelor of Medicine and a Bachelor of Surgery in 2014. He served his residency in the KwaZulu-Natal from Stanger (GJGM) Hospital, Addington Hospital, Inkosi Albert Luthuli Central Hospital, and King Edward VIII Hospital.
                  </p>
                  
                  <p>
                    Dr. Mhlanga brings years of experience in both medical and aesthetic dermatology, providing comprehensive care for patients of all ages. His expertise spans across various skin conditions, from common dermatological issues to complex medical cases requiring specialized treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-charcoal mb-6">
                Our Mission & Values
              </h2>
              <div className="w-24 h-1 bg-warm-gold mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blush-pink/30 to-mint-green/20 rounded-2xl">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-heart-pulse-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-4">Excellence in Care</h3>
                <p className="text-dark-charcoal/80 font-lato text-body leading-relaxed">
                  Providing the highest standard of dermatological care using evidence-based practices and cutting-edge technology.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-mint-green/20 to-blush-pink/30 rounded-2xl">
                <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-heart-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-4">Patient-Centered</h3>
                <p className="text-dark-charcoal/80 font-lato text-body leading-relaxed">
                  Every treatment plan is tailored to meet the unique needs and goals of each individual patient.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-warm-gold/20 to-mint-green/20 rounded-2xl">
                <div className="w-16 h-16 bg-blush-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark-charcoal mb-4">Trust & Safety</h3>
                <p className="text-dark-charcoal/80 font-lato text-body leading-relaxed">
                  Building lasting relationships through transparent communication and safe, effective treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Memberships */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark-charcoal mb-6">
                Proud Member Of
              </h2>
              <div className="w-24 h-1 bg-warm-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={cert.image}
                    alt={cert.alt}
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-section-y md:py-section-y lg:py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Your Journey to Skin Wellness Begins with Us
            </h2>
            <p className="text-body-lg text-gray-300 font-lato max-w-4xl mx-auto mb-8 leading-relaxed">
              As leaders in dermatological care, we offer a range of services tailored to meet the unique needs of each patient. From routine skin exams to advanced treatments for various skin conditions, our expert dermatologists leverage cutting-edge technologies and evidence-based practices to deliver exceptional care.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-warm-gold text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 font-semibold font-lato text-body-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap cursor-pointer"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
