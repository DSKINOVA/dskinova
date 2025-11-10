import React from "react";

export default function SkinConcernsAndTreatments() {
  const concerns = [
    {
      title: "Acnes and Pimples",
      description: "Advanced acne treatment and chemical peels for clear, smooth skin.",
      icon: "fa-solid fa-hand-sparkles",
    },
    {
      title: "Pigmentation, Dark Spots",
      description: "Laser treatment and even skin lightening.",
      icon: "fa-solid fa-circle-half-stroke",
    },
    {
      title: "Hair Loss & Dandruff",
      description: "PRP and scalp therapy for thicker, healthier hair.",
      icon: "fa-solid fa-scissors",
    },
    {
      title: "Anti-Aging Cures",
      description: "Botox, fillers, and wrinkle reduction treatments.",
      icon: "fa-solid fa-spa",
    },
    {
      title: "Skin Lightening and Glow",
      description: "Hydra facials and rejuvenation processes.",
      icon: "fa-solid fa-star",
    },
  ];

  const treatments = [
    {
      title: "Laser Treatments",
      description: "Used for acne scars, pigmentation, and skin resurfacing.",
      icon: "fa-solid fa-fire",
    },
    {
      title: "Chemical Peels",
      description: "To enhance texture, brightness, and tone.",
      icon: "fa-solid fa-droplet",
    },
    {
      title: "PRP Therapy",
      description: "To regrow hair and rejuvenate skin.",
      icon: "fa-solid fa-heart-pulse",
    },
    {
      title: "Hydra Facials",
      description: "For deep cleaning and instant glow.",
      icon: "fa-solid fa-water",
    },
    {
      title: "Botox/Fillers",
      description: "To maintain a youthful, fresh appearance.",
      icon: "fa-solid fa-syringe",
    },
  ];

  return (
    <section className="bg-[#fdf6f4] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Common Skin Concerns Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-8 text-center">
            Common Skin Concerns Treated at Dskinova by the Best Skin Specialist
            in Jaipur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concerns.map((concern, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#f0e3db] rounded-lg flex items-center justify-center text-xl text-[#a05f3d] mb-4">
                  <i className={concern.icon} aria-hidden="true"></i>
                </div>
                <h3 className="text-lg font-semibold text-[#4d1f1a] mb-2">
                  {concern.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {concern.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Treatments Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-8 text-center">
            Advanced Dermatology Treatments at Dskinova
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#f0e3db] rounded-lg flex items-center justify-center text-xl text-[#a05f3d] mb-4">
                  <i className={treatment.icon} aria-hidden="true"></i>
                </div>
                <h3 className="text-lg font-semibold text-[#4d1f1a] mb-2">
                  {treatment.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

