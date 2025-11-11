
import { useState, useEffect } from 'react';
import Button from '../base/Button';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://readdy.ai/api/form/d45hktpiniomskj1efpg', {
        method: 'POST',
        body: new URLSearchParams({
          email: email
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-close-line text-xl"></i>
          </div>
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                Get Skincare Tips
              </h3>
              <p className="text-gray-600" style={{ fontFamily: '"Lato", sans-serif' }}>
                Subscribe to receive expert skincare advice, treatment updates, and exclusive offers from Dr. Mhlanga.
              </p>
            </div>

            <form onSubmit={handleSubmit} data-readdy-form id="newsletter-form">
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
              Thank You!
            </h3>
            <p className="text-gray-600" style={{ fontFamily: '"Lato", sans-serif' }}>
              You've successfully subscribed to our newsletter. Welcome to the Dr. Mhlanga Skincare family!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
