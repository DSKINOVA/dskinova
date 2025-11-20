import React from "react";
import { Link } from "react-router-dom";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import { Helmet } from "react-helmet";
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
        <meta property="og:url" content={`https://www.dskinova.com/${seoSlug}`} />

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

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Cosmetologist in Jaipur: Your Guide to Professional Beauty and Skincare
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              In today’s fast-paced world, taking care of your skin, hair, and overall appearance is more important than ever. 
              Finding a trusted cosmetologist in Jaipur can make all the difference. These beauty experts combine knowledge, 
              experience, and professional techniques to help you look and feel your best.
            </p>
          </div>

          {/* Who is a Cosmetologist */}
          <div>
            <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6">
              Who is a Cosmetologist?
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              A cosmetologist is trained to provide hair, skin, and beauty treatments using scientific and professional 
              methods. With their help, you can ensure that your beauty routine is safe, effective, and personalized. 
              Choosing an expert cosmetologist in Jaipur helps you achieve the best results with long-lasting benefits.
            </p>
          </div>

          {/* Popular Services */}
          <div className="mt-5">
            <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6">
              Popular Services Offered by Cosmetologists in Jaipur
            </h2>

            <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6 md:gap-10 items-start">

              {/* Left List */}
              <div className="flex-1 ">
                <ul className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
                  <li>
                    <strong>Hair Treatments:</strong> Hair coloring, keratin, hair spa & scalp care.
                  </li>
                  <li>
                    <strong>Skin Care:</strong> Anti-aging, acne treatment, rejuvenation therapies.
                  </li>
                  <li>
                    <strong>Makeup Services:</strong> Bridal, party & professional makeup.
                  </li>
                  <li>
                    <strong>Other Services:</strong> Manicure, pedicure, waxing, threading.
                  </li>
                </ul>
              </div>

              {/* Right Image */}
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src={skin}
                  alt="Best cosmetologist in Jaipur providing skin and hair treatments"
                  className="w-full md:w-[460px] h-[340px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Why Jaipur */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine text-[#BE7F58] mb-6">
              Why Jaipur is a Great Place for Cosmetology Services
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Jaipur is becoming a major hub for advanced beauty and wellness. The city offers expert cosmetologists, 
              high-quality salons, and modern treatment options. For deeper skin concerns, you can also visit our{" "}
              <Link to="/skin-doctor-in-jaipur" className="text-[#BE7F58] underline">
                Skin Doctor in Jaipur
              </Link>{" "}
             
             
             
            </p>
          </div>

          {/* Conclusion */}
          <div className="mt-5">
            <h4 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine text-[#BE7F58] mb-6">
              Conclusion
            </h4>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              A professional cosmetologist in Jaipur helps you achieve glowing skin and healthy hair with expert care. 
              Whether it’s skincare, makeup, or beauty treatments—Jaipur has some of the best cosmetology experts. 
              Don't wait—book your appointment today and experience advanced beauty care.
            </p>
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
