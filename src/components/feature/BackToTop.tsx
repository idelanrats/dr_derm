
import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-warm-gold hover:bg-amber-700 text-white rounded-full shadow-lg hover:shadow-warm-gold-lg transition-all duration-300 flex items-center justify-center cursor-pointer transform hover:-translate-y-1 hover:scale-110 group"
          aria-label="Back to top"
        >
          <i className="ri-arrow-up-line text-xl group-hover:animate-bounce"></i>
        </button>
      )}
    </>
  );
};

export default BackToTop;
