import React, { useEffect } from "react";

const SCRIPT_ID = "elfsight-platform-script";
const SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

export default function ElfsightGoogleReviews() {
  useEffect(() => {
    // Ensure the Elfsight platform script is loaded only once.
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
      return;
    }

    // Re-initialize the widget if the script already exists (e.g., navigating via SPA).
    if (window.elfsight && typeof window.elfsight.platform?.init === "function") {
      window.elfsight.platform.init();
    }
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Google Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What our patients say
          </h2>
         
        </div>

        <div
          className="elfsight-app-10b7f00b-c4fd-4ae2-ad91-c9ad54629351"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}

