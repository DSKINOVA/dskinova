import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import { Helmet } from "react-helmet";
import AppointmentModal from "./AppointmentModal.jsx";
import skin from "../../public/Images/blogs/skin doctor in jaipur.jpg";

export default function SkinDoctor() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // ========================== SEO DATA =============================
  const seoMetaTitle =
    "Skin Doctor in Jaipur | Expert Dermatologist for All Skin Issues";

  const seoMetaDesc =
    "Skin doctor in Jaipur offering advanced acne, pigmentation & laser treatments at Dskinova. Limited slots available—book your appointment now!";

  const seoKeywords =
    "skin doctor in Jaipur, dermatologist in Jaipur, Dskinova";

  const canonicalURL = "https://dskinova.in/skin-doctor-in-jaipur";

  const seoImage =
    "https://dskinova.in/assets/images/skin-doctor-in-jaipur.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* ===================== SEO Helmet ===================== */}
      <Helmet>
        <title>{seoMetaTitle}</title>
        <meta name="description" content={seoMetaDesc} />
        <meta name="keywords" content={seoKeywords} />

        {/* Canonical */}
        <link rel="canonical" href={canonicalURL} />

        {/* Open Graph (Facebook / Instagram) */}
        <meta property="og:title" content={seoMetaTitle} />
        <meta property="og:description" content={seoMetaDesc} />
        <meta property="og:image" content={seoImage} />
        <meta property="og:url" content={canonicalURL} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={seoMetaTitle} />
        <meta name="twitter:description" content={seoMetaDesc} />
        <meta name="twitter:image" content={seoImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Internal & External Links for SEO */}
        {/* <link rel="internal" href="https://dskinova.in/" />
        <link rel="external" href="https://www.webmd.com/" /> */}
      </Helmet>
      {/* ======================================================== */}

      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Skin Doctor in Jaipur – Expert Dermatology & Advanced Skin Care by
              Dskinova
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Finding a reliable skin doctor in Jaipur is essential when you’re
              dealing with acne, pigmentation, dull skin, tanning, or
              hair-related concerns. Jaipur’s hot climate, pollution, and
              lifestyle stress often make skin problems more common. That’s why
              choosing an experienced dermatologist is important for
              long-lasting results. At Dskinova, you receive advanced skin and
              hair treatments designed specifically for your skin type and
              concerns.
            </p>
          </div>

          {/* Why You Need a Trusted Skin Doctor */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Why You Need a Trusted Skin Doctor in Jaipur
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              People in Jaipur often experience acne, dark spots, dryness, tan,
              aging, and changing weather due to intense sun exposure and
              climate shifts. A professional dermatologist in Jaipur understands
              the local skin challenges and offers medically certified remedies
              that are not just short-term solutions. At Dskinova, treatments
              are based on thorough diagnosis to guarantee healthy and natural
              outcomes.
            </p>
          </div>

          {/* Common Skin Issues */}
          <div className="mt-5">
            <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Common Conditions Treated at Dskinova
            </h2>

            {/* FLEX ROW - UL LEFT, IMAGE RIGHT */}
            <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl mx-auto">
              {/* LEFT SIDE – LIST */}
              <div className="flex-1">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-base sm:text-lg leading-relaxed">
                  <li>Acne and acne scars</li>
                  <li>Open pores</li>
                  <li>Pigmentation and melasma</li>
                  <li>Sun damage and tanning</li>
                  <li>Anti-aging treatments</li>
                  <li>Dull and uneven skin tone</li>
                  <li>Hair fall and dandruff</li>
                  <li>Allergies and dermatological infections</li>
                </ul>
              </div>

              {/* RIGHT SIDE – IMAGE */}
              <div className="flex-1 flex justify-center">
                <img
                  src={skin}
                  alt="Skin conditions treated at Dskinova"
                  className="w-full max-w-sm rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Advanced Dermatology Treatments */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Advanced Dermatology Treatments at Dskinova
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Dskinova combines expertise and technology to provide safe,
              visible, and long-lasting outcomes. Some of the top treatments
              offered include:
            </p>
            <label className="block text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Laser Hair Removal:</strong> Painless and long-term
                  removal of unwanted hair using advanced laser systems.
                </li>
                <li>
                  <strong>Acne & Scar Removal:</strong> Acne treatments using
                  chemical peels or laser resurfacing.
                </li>
                <li>
                  <strong>Pigmentation / Melasma Treatment:</strong> Targeted
                  treatments for dark spots, melasma, and uneven skin tone.
                </li>
                <li>
                  <strong>Anti-Aging Solutions:</strong> Hydrafacials, peels,
                  tightening procedures, and non-surgical treatments for
                  wrinkles and sagging skin.
                </li>
                <li>
                  <strong>Hair Fall & Scalp Treatments:</strong> PRP therapy,
                  scalp rejuvenation, and regrowth treatments.
                </li>
              </ul>
            </label>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mt-5">
              All treatments are customized to suit your skin type, age, and
              lifestyle to achieve the best results.
            </p>
          </div>

          {/* Why Choose Dskinova */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Why Choose Dskinova as Your Skin Doctor in Jaipur?
            </h3>
            <label className="block text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Extremely Qualified Dermatologists:</strong> Our
                  experts are clinically trained and experienced in dermatology
                  and cosmetic therapies.
                </li>
                <li>
                  <strong>Individualized Treatment Programs:</strong> Treatments
                  are tailored based on individual skin types for the best
                  outcomes.
                </li>
                <li>
                  <strong>Advanced Technology:</strong> We use high-quality
                  machines for laser treatments, acne therapy, and anti-aging
                  procedures.
                </li>
                <li>
                  <strong>Honest Consultation:</strong> Only necessary
                  treatments are suggested, focusing on long-term improvements.
                </li>
                <li>
                  <strong>Natural & Long-term Results:</strong> Dskinova
                  guarantees lasting improvements that look natural and enhance
                  your skin’s health.
                </li>
              </ul>
            </label>
          </div>

          {/* How to Choose the Best Skin Doctor */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              How to Choose the Best Skin Doctor in Jaipur
            </h3>
            <label className="block text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <ul className="list-disc pl-5 space-y-2">
                <li>Doctor’s qualifications</li>
                <li>Clinic’s reputation & reviews</li>
                <li>Quality of equipment</li>
                <li>Cleanliness & hygiene</li>
                <li>Aftercare support</li>
              </ul>
            </label>
            <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Dskinova fulfills all these criteria, making it one of the top
              dermatology clinics in Jaipur.
            </p>
          </div>

          {/* FAQs */}
          <div className="mt-5">
            <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              FAQs About Visiting a Skin Doctor in Jaipur
            </h3>
            <label className="block text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>When should I visit a dermatologist?</strong>
                  <p>
                    If you have persistent acne, hair loss, pigmentation,
                    rashes, or any continuous skin problems, it's a good idea to
                    visit a specialist.
                  </p>
                </li>
                <li>
                  <strong>Are laser treatments safe?</strong>
                  <p>
                    Yes. Dskinova uses FDA-approved laser systems, which are
                    safe and painless.
                  </p>
                </li>
                <li>
                  <strong>How soon can I expect results?</strong>
                  <p>
                    Treatment results depend on the severity of the condition.
                    Some may resolve in weeks, while others may require multiple
                    sessions.
                  </p>
                </li>
              </ol>
            </label>
          </div>

          {/* Conclusion */}
          <div className="mt-5">
            <h4 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
              Conclusion
            </h4>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              Healthy, glowing skin begins with choosing the right skin doctor
              in Jaipur. Dskinova ensures clear, youthful, and confident skin
              through expert dermatologists, advanced technology, and
              personalized care.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        onSubmit={() => setAppointmentOpen(false)}
      />
    </div>
  );
}
