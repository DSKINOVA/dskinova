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
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Cosmetologist in Jaipur: YourGuide to Professional Beauty and
              Skincare
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              In today’s fast-paced world, taking care of your skin, hair, and
              overall appearance is more important than ever. Finding a trusted
              cosmetologist in Jaipur can make all the difference. These beauty
              experts combine knowledge, experience, and professional techniques
              to help you look and feel your best. Jaipur, known for its rich
              culture and heritage, is also emerging as a hub for modern beauty
              and wellness services.
            </p>
          </div>

          {/* Who is a Cosmetologist */}
          <div>
            <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6">
              Who is a Cosmetologist?
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              A cosmetologist is an individual who is trained to deal with hair,
              skin and beauty treatments. The cosmetologist as opposed to a
              general beautician is an expert in the sophisticated methods and
              he/she knows the science behind every treatment. They have diverse
              services including skincare, hair care, makeup and therapeutic
              treatments. With the help of a cosmetologist in Jaipur, you can be
              sure that your beauty routine is safe, effective and unique.
            </p>
          </div>
          {/* Who is a Professional */}
          <div>
            <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6">
              Why Visit a Professional Cosmetologist?
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Home made beauty tricks can be very alluring, however, there is no
              match to professional attention. A cosmetologist in Jaipur is able
              to treat and resolve certain issues of the skin or hair, and
              provide tailored care, as well as instructing on the long-term
              well-being. Anti-aging facials, hair strengthening therapies,
              professional cosmetology can make sure of safety, hygiene and
              visible results. Expert care is not only a way of improving your
              appearance but also the way to improve your confidence and
              well-being.
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
                <p>
                  The cosmetology business in Jaipur has also expanded fast and
                  it presents a variety of services that can meet all beauty
                  requirements:
                </p>
                <ul className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
                  <li>
                    <strong>Hair Treatments:</strong> Hair coloring, keratin
                    treatment, hair spa and scalp treatments.
                  </li>
                  <li>
                    <strong>Skin Care:</strong> Skin care, anti-aging, skin
                    care, and acne care.
                  </li>
                  <li>
                    <strong>Makeup Services:</strong> Wedding make-up, party
                    make-up and business make-up.
                  </li>
                  <li>
                    <strong>Other Services:</strong> Manicure, Pedicure, Waxing,
                    Threading and beauty therapy.
                  </li>
                </ul>
                <p>
                  Most cosmetologists in Jaipur combine both modern and
                  traditional Indian beauty activities, which offer a
                  comprehensive view of oneself and self-care.
                </p>
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

          {/* Right  Jaipur */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine text-[#BE7F58] mb-6">
              How to Choose the Right Cosmetologist in Jaipur
            </h3>

            <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6 md:gap-10 items-start justify-center px-4">
              {/* Left List */}
              <div className="flex-1 text-center md:text-left">
                <p className="mb-4 text-gray-600 text-base">
                  The choice of the appropriate professional is a key to the
                  success. Look for:
                </p>

                <ul className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 list-disc list-inside">
                  <li>
                    Certified experience and qualifications in cosmetology.
                  </li>
                  <li>Good reviews and testimonials by clients.</li>
                  <li>
                    A hairdressing salon with high hygienic and safety
                    standards.
                  </li>
                  <li>A session to consult you on your needs.</li>
                </ul>

                <p className="mt-4 text-gray-600 text-base">
                  These measures will assist you in locating a good
                  cosmetologist in Jaipur who realizes your special needs in
                  regard to beauty.
                </p>
              </div>
            </div>
          </div>

          {/* Right  Cosmetology */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine text-[#BE7F58] mb-6">
              Benefits of Regular Cosmetic Treatments
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Frequent visits to a cosmetologist can enhance the skin texture,
              hair conditions, and the appearance. Professional treatments are
              used to minimise frizz, acne and ageing effects and make the
              wearer more confident. Also, a relaxing ambiance of a properly
              furnished salon can decrease stress levels and encourages mental
              health.
            </p>
          </div>

          {/* Why Services */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine text-[#BE7F58] mb-6">
              Why Jaipur is a Great Place for Cosmetology Services
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Jaipur is quickly emerging as an attraction site among beauty and
              wellness users. The city has the availability of highly
              professional people, modern salons and quality beauty products.
              The cosmetologists of Jaipur offer different services to skin and
              hair types with a combination of traditional and modern methods.
              That is why it is easy and satisfying to find a reliable
              cosmetologist in Jaipur.
            </p>
          </div>

          {/* Conclusion */}
          <div className="mt-5">
            <h4 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine text-[#BE7F58] mb-6">
              Conclusion
            </h4>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              An experienced cosmetologist in Jaipur will change your beauty
              regime and make you attain a healthy skin and hair. Youspend money
              on your appearance, confidence, and well-being by making the
              correct choice of an expert. Whether it is skincare, hair salons,
              or cosmetics, Jaipur boasts of some of the best cosmetologists who
              can make you look and feel good. Wait no longer--book an
              appointment and see how much better professional care can make you
              feel.
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
