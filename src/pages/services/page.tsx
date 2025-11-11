import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import TreatmentCategories from './components/TreatmentCategories';
import TreatmentDetails from './components/TreatmentDetails';
import ProcessSection from './components/ProcessSection';
import BackToTop from '../../components/feature/BackToTop';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TreatmentCategories />
        <TreatmentDetails />
        <ProcessSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
