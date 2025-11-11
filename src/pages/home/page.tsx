
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import NewsletterPopup from '../../components/feature/NewsletterPopup';
import BackToTop from '../../components/feature/BackToTop';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import TestimonialsPreview from './components/TestimonialsPreview';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <WhyChooseUs />
        <BeforeAfterGallery />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
      <NewsletterPopup />
      <BackToTop />
    </div>
  );
}
