import React, { useState } from "react";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import AppointmentModal from "./AppointmentModal";
import { useNavigate } from "react-router-dom";
import SkinCli from "../../public/Images/SkinClinic/skin-clinic-in-jaipur.jpg";

const SkinClinic = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const navigat = useNavigate();

  const metaTitle =
    "Skin Clinic in Jaipur | Dskinova – Book Your Appointment Today";

  const metaDescription =
    "Skin clinic in Jaipur – Dskinova offers expert skincare treatments and personalized care. Book your consultation today for healthy skin.";

  const seoFocusKeyword =
    "skin clinic in jaipur, dermatologist in jaipur, skin specialist jaipur";

  const seoSlug = "skin-clinic-in-jaipur";

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{metaTitle}</title>

        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={seoFocusKeyword} />

        <link rel="canonical" href={`https://www.dskinova.com/${seoSlug}`} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={skin} />
        <meta
          property="og:url"
          content={`https://www.dskinova.com/${seoSlug}`}
        />

        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={skin} />

        <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.position" content="26.9124;75.7873" />
        <meta name="ICBM" content="26.9124,75.7873" />
      </Helmet>

      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-domine font-semibold text-[#BE7F58] leading-tight tracking-tight mb-4">
              Skin Clinic in Jaipur
            </h1>

            <div className="w-24 h-1 bg-[#BE7F58] mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Beauty today goes beyond glowing skin—it reflects overall wellness
              and confidence. With rising pollution, stress, and lifestyle
              changes, skin problems are becoming common across all age groups.
              Choosing the right skin clinic in Jaipur is essential for safe,
              effective, and long-term skincare solutions. Dskinova is a trusted
              dermatology clinic offering personalized treatments tailored to
              individual skin needs.
            </p>
          </div>

          <div className="space-y-20">
            <div className="text-center px-4 py-10">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Why Visiting a Professional Skin Clinic in Jaipur Matters
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                Many individuals rely on home remedies or over-the-counter
                products, which often provide temporary relief or worsen skin
                conditions. A professional skin clinic in Jaipur ensures expert
                diagnosis, medically approved treatments, and customized care
                plans. At Dskinova, experienced skin specialists deliver safe
                and result-oriented solutions for long-lasting skin health.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-left font-semibold text-gray-800 mb-4">
                <span className="cursor-pointer" onClick={() => navigat("/")}>
                  {" "}
                  Common Skin Problems
                </span>{" "}
                Treated at a Skin Clinic in Jaipur
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                A reputed skincare clinic in Jaipur treats a wide range of skin
                concerns using advanced dermatological methods. At Dskinova,
                treatments focus on improving both skin health and appearance.
              </p>

              <ul className="list-decimal list-inside text-left text-gray-700">
                <li>Acne and acne scar treatment</li>
                <li>High hygiene and safety standards</li>
                <li>Anti-aging and wrinkle reduction</li>
                <li>Laser hair removal</li>
                <li>Skin allergy and infection treatment</li>
                <li>Open pores and uneven skin tone solutions</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Advanced Technology and Modern Skin Care Solutions
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                What differentiates a professional{" "}
                <span
                  className="cursor-pointer text-black text-bold"
                  onClick={() =>
                    navigat("/skin-lightening-and-whitening")
                  }
                >
                  skin clinic in Jaipur
                </span>{" "}
                is the use of advanced equipment and clinically tested
                procedures. Dskinova uses certified products and eco-safe
                machines. From laser treatments to non-invasive cosmetic
                procedures, all services are designed to deliver visible results
                with minimal downtime.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">
                Experienced Skin Specialists You Can Trust
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Choosing the right skin clinic in Jaipur means trusting
                qualified and experienced dermatologists. At Dskinova, every
                patient receives detailed consultation, skin analysis, and a
                personalized treatment plan. The clinic focuses on treating the
                root cause of skin problems while improving overall skin health.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">
                  How to Choose the Best Skin Clinic in Jaipur
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Before selecting a skin clinic in Jaipur, consider the
                  following factors:
                </p>

                <ul className="list-decimal list-inside text-left text-gray-700 space-y-2">
                  <li>Dermatologist’s experience and qualifications</li>
                  <li>High hygiene and safety standards</li>
                  <li>Use of advanced and certified equipment</li>
                  <li>Transparent consultation and treatment process</li>
                  <li>Positive patient reviews and testimonials</li>
                </ul>
              </div>

              {/* RIGHT SIDE – IMAGE */}
              <div className="flex justify-center">
                <img
                  src={SkinCli}
                  alt="Best Skin Clinic in Jaipur"
                  className="rounded-xl shadow-lg w-full max-w-sm object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Benefits of Choosing a Local Skin Clinic in Jaipur
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                A local skin clinic in Jaipur offers convenience, better
                follow-up care, and treatments suited to the city’s climate.
                Dskinova understands skin concerns caused by Jaipur’s heat,
                dust, and pollution, providing targeted solutions for long-term
                skin protection.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Conclusion
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
                If you are looking for a reliable skin clinic in Jaipur,
                Dskinova is an ideal choice. With advanced technology,
                experienced dermatologists, and a patient-centric approach,
                Dskinova is committed to helping you achieve healthy, confident,
                and radiant skin safely and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </div>
  );
};

export default SkinClinic;
