// src/components/TimedPopup.jsx

import React, { useState, useEffect, useCallback } from 'react';

// NOTE: This component assumes Tailwind CSS is configured in your project.

const TimedPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check Session Storage on mount
  useEffect(() => {
    // Check if the user has dismissed the popup in this session
    const dismissedStatus = sessionStorage.getItem('popupDismissed');
    if (dismissedStatus === 'true') {
      setIsDismissed(true);
    }
  }, []);

  // Set the 10-second timer
  useEffect(() => {
    if (isDismissed) return; // Skip if already dismissed

    // Show the popup after 10,000 milliseconds (10 seconds)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    // Cleanup: Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [isDismissed]);

  // Handler to close the popup and set the dismissal flag
  const handleClose = useCallback(() => {
    setShowPopup(false);
    setIsDismissed(true);
    // Store dismissal status in session storage
    sessionStorage.setItem('popupDismissed', 'true');
  }, []);

  if (!showPopup) return null;

  return (
    // Backdrop: Fixed position ensures it doesn't block core content scroll
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-70 transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container: Mobile-friendly width and centering */}
      <div className="relative w-full max-w-sm md:max-w-md bg-white rounded-xl shadow-2xl p-6 md:p-8 transform transition-all">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 transition-colors"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Popup Content: Newsletter Signup Example */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ✨ Don't Miss Out!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe for exclusive insights and a **special 15% offer** just for new visitors.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleClose(); alert("Thank you for signing up!"); }}>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 mb-3 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
            >
              Get My Offer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TimedPopup;