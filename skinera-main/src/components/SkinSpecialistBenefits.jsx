import React from "react";

export default function SkinSpecialistBenefits() {
  const benefits = [
    "Professional Dermatologists: Highly trained experts with years of experience.",
    "Modern Technology: Latest diagnostic tools for accurate results.",
    "Individualized Care: Treatments tailored to your unique skin needs.",
    "Hygiene & Safety: Maintaining the highest standards of cleanliness.",
    "Proven Results: Trusted by countless satisfied clients for visible improvements.",
  ];

  const tips = [
    "Stay hydrated and eat vitamin-rich foods.",
    "Apply sunscreen daily to protect from UV rays.",
    "Use dermatologist-recommended mild skincare products.",
    "Avoid harsh cosmetics and home remedies.",
    "Get regular skin check-ups for early issue detection.",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Why Choose Dskinova */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-domine font-medium text-[#BE7F58] mb-6">
              Why Choose Dskinova – Best Skin Specialist in Jaipur
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 bg-[#f0e3db] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i
                      className="fa-solid fa-check text-[#a05f3d] text-xs"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cost and Tips */}
          <div className="space-y-8">
            {/* Cost Section */}
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-2xl sm:text-3xl font-domine font-medium text-[#BE7F58] mb-4">
                Cost of Skin Treatments in Jaipur
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Prices at Dskinova vary depending on concerns and required
                sessions. Our affordable packages ensure quality care, from acne
                and laser treatments to anti-aging solutions. Every session offers
                value, comfort, and confidence.
              </p>
            </div>

            {/* Tips Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-domine font-medium text-[#BE7F58] mb-6">
                Dermatologist Tips for Healthy Skin
              </h3>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mt-16 bg-gradient-to-r from-[#f7e6d9] to-white rounded-2xl p-8 sm:p-12 text-center">
          <h4 className="text-xl sm:text-2xl font-domine font-medium text-[#BE7F58] mb-4">
            Conclusion
          </h4>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Choosing the right skin specialist in Jaipur is the first step toward
            healthier, more confident skin. At Dskinova, we combine medical expertise
            with modern technology to deliver visible and lasting results. Whether
            it's acne, pigmentation, or signs of aging, our dermatologists will help
            you rediscover your natural glow.
          </p>
        </div>
      </div>
    </section>
  );
}

