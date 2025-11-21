import React from "react";
import { Link } from "react-router-dom";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import AppointmentModal from "./AppointmentModal";

export default function Cosmatic() {
  // ======================= SEO DATA ===========================
  const seoMetaTitle =
    "Advanced Cosmetologist in Jaipur | Dskinova Skin Specialists";
  const seoMetaDescription =
    "Find the best Cosmetologist in Jaipur at Dskinova for expert skin & hair treatments. Glow smarter—limited appointments available. Book now!";
  const seoFocusKeyword = "Cosmetologist in Jaipur";
  const seoSlug = "cosmetologist-in-jaipur";

  // ======================= FIXED STATE ===========================
  const [appointmentOpen, setAppointmentOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ================= SEO TAGS ================= */}
      <Helmet>
        <title>{seoMetaTitle}</title>
        <meta name="description" content={seoMetaDescription} />
        <meta name="keywords" content={seoFocusKeyword} />
        <link rel="canonical" href={`https://www.dskinova.com/${seoSlug}`} />

        {/* Open Graph (Facebook / WhatsApp) */}
        <meta property="og:title" content={seoMetaTitle} />
        <meta property="og:description" content={seoMetaDescription} />
        <meta property="og:image" content={skin} />
        <meta
          property="og:url"
          content={`https://www.dskinova.com/${seoSlug}`}
        />

        {/* Twitter Card */}
        <meta name="twitter:title" content={seoMetaTitle} />
        <meta name="twitter:description" content={seoMetaDescription} />
        <meta name="twitter:image" content={skin} />
      </Helmet>

      {/* ======================================================== */}

      {/* HEADER + HERO PROPER FIXED */}
      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

   
      {/* PAGE SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stylish Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-domine font-semibold text-[#BE7F58] leading-tight tracking-tight mb-4">
              Cosmetologist in Jaipur
            </h1>

            {/* Golden underline */}
            <div className="w-24 h-1 bg-[#BE7F58] mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Your complete guide to expert skincare, beauty treatments, and
              professional cosmetology services in Jaipur.
            </p>
          </div>

          {/* Section Block */}
          <div className="space-y-20">
            {/* Who is a Cosmetologist */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Who is a Cosmetologist?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                A cosmetologist is a trained professional who specializes in
                skin, hair, beauty, and wellness treatments. Unlike a regular
                beautician, cosmetologists use advanced techniques and
                scientific understanding to deliver safe and effective beauty
                solutions.
              </p>
            </div>

            {/* Why Visit a Professional */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Why Visit a Professional Cosmetologist?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Professional cosmetologists provide personalized care, safe
                treatments, and long-term beauty solutions. From anti-aging
                facials to advanced hair rejuvenation, expert care boosts
                confidence and ensures lasting results.
              </p>
            </div>

            {/* Popular Services */}
            <div>
              <h2 className="text-center text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-10">
                Popular Cosmetology Services in Jaipur
              </h2>

              <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-10 items-start">
                {/* List */}
                <div className="flex-1 text-lg text-gray-600 space-y-4">
                  <p>
                    Jaipur offers a wide range of advanced cosmetology services
                    for all beauty needs:
                  </p>

                  <ul className="space-y-4 list-disc list-inside">
                    <li>
                      <strong>Hair Treatments:</strong> Keratin, smoothening,
                      scalp therapies.
                    </li>
                    <li>
                      <strong>Skin Care:</strong> Acne treatments, anti-aging
                      facials, deep cleansing.
                    </li>
                    <li>
                      <strong>Makeup Services:</strong> Bridal, party & HD
                      makeup.
                    </li>
                    <li>
                      <strong>Beauty Services:</strong> Manicure, pedicure,
                      waxing, threading.
                    </li>
                  </ul>

                  <p>
                    Modern Jaipur cosmetologists combine traditional & modern
                    beauty science for excellent results.
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={skin}
                    alt="Cosmetology expert in Jaipur"
                    className="w-full md:w-[460px] h-[350px] object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* How to Choose */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                How to Choose the Right Cosmetologist
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
                Choosing the right cosmetologist ensures better and safer
                results.
              </p>

              <ul className="max-w-3xl mx-auto text-left text-gray-600 text-lg space-y-3 list-disc">
                <li>Certified and trained professional</li>
                <li>Positive client reviews</li>
                <li>Clean & hygienic clinic environment</li>
                <li>Detailed consultation before treatment</li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Benefits of Regular Cosmetic Treatments
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                From glowing skin to stronger hair, regular cosmetology sessions
                improve appearance, boost confidence, and promote self-care.
              </p>
            </div>

            {/* Conclusion */}
            <div className="text-center">
              <h4 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Conclusion
              </h4>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                A skilled cosmetologist in Jaipur can transform your skin, hair,
                and beauty journey. Experience the power of professional care
                and elevate your natural beauty today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* APPOINTMENT MODAL → FIXED STATES */}
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        onSubmit={() => setAppointmentOpen(false)}
      />
    </div>
  );
}
