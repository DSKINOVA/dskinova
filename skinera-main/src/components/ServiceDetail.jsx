import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AppointmentModal from "./AppointmentModal.jsx";
import HeroThree from "./HeroThree.jsx";
import { getServiceById } from "../data/mockData";
import { getExpandedService } from "../data/servicesExpanded";
import bgFlower from "../../public/Images/Our-Service/bg-Flower-png-Use-It-InLargeWidth.png";
import ServiceExtras from "./ServiceExtras.jsx";
import ClientFaq from "./ClientFaq.jsx";
import { getBeforeAfterImage } from "../data/beforeAfterImages";

export default function ServiceDetail({ serviceId }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);

  const params = typeof useParams === "function" ? useParams() : {};

  const effectiveId =
    serviceId || (params ? params.id : undefined) || "laser-hair-removal-treatment-in-jaipur";



  const service =
    getExpandedService(effectiveId) || getServiceById(effectiveId);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  const beforeAfterImg = getBeforeAfterImage(effectiveId);

  // ===================== SEO ======================
  const seoMetaTitle = service?.seo?.meta_title || service?.title;
  const seoMetaDescription = service?.seo?.meta_description || service?.short;
  const seoFocusKeyphrase = service?.seo?.focus_keyphrase || "";
  const seoSlug = service?.seo?.slug || service?.id;
  const seoImage = service?.image;

  // Scroll to Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* SEO Helmet */}
      <Helmet>
        <title>{seoMetaTitle}</title>
        <meta name="description" content={seoMetaDescription} />
        <meta name="keywords" content={seoFocusKeyphrase} />
        <link rel="canonical" href={`/${seoSlug}`} />
        <meta property="og:title" content={seoMetaTitle} />
        <meta property="og:description" content={seoMetaDescription} />
        <meta property="og:image" content={seoImage} />
        <meta name="twitter:title" content={seoMetaTitle} />
        <meta name="twitter:description" content={seoMetaDescription} />
        <meta name="twitter:image" content={seoImage} />
      </Helmet>

      <Header onBookAppointment={openAppointment} />

      <HeroThree
        title={service.title}
        introPara={service.short}
      />

      {/* ================= IMAGE + OVERVIEW SECTION ================= */}
      <div className="relative overflow-hidden py-16">

        {/* side decorations */}
        <img
          src={bgFlower}
          alt=""
          className="pointer-events-none select-none hidden md:block absolute left-0 top-6 h-[520px] opacity-60"
        />
        <img
          src={bgFlower}
          alt=""
          className="pointer-events-none select-none hidden md:block absolute right-0 top-6 h-[520px] opacity-60 -scale-x-100"
        />

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-lg shadow">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
                  />
                </div>
              </div>

              {/* OVERVIEW RIGHT SIDE */}
              <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-domine font-medium text-[#b37556]">
                    {service.overview.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.overview.description}
                  </p>
                </div>

                {/* Included / Excluded */}
                <div>
                  <h3 className="text-lg sm:text-xl font-domine font-medium text-[#b37556] mb-3">
                    Included & Excluded
                  </h3>

                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <ul className="space-y-2">
                        {service.included?.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <ul className="space-y-2">
                        {service.excluded?.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-red-500">✗</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="mt-4">
                    <button
                      onClick={openAppointment}
                      className="bg-[#c98963] hover:bg-[#be7f58] text-white w-full sm:w-auto px-6 py-3 rounded-lg"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= EXTRA FEATURES ================= */}
      <ServiceExtras />

      {/* ================= BEFORE/AFTER SECTION ================= */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

          <h2 className="text-3xl font-domine text-center text-[#b37556] mb-8">
            Before & After Results
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <img
                src={beforeAfterImg || service.image}
                alt="Before After"
                className="w-full h-[300px] sm:h-[400px] rounded-lg object-cover shadow"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-xl font-domine text-[#b37556]">
                Transform Your Skin with {service.title}
              </h3>

              <p className="text-gray-600">
                Experience visible improvement with our modern techniques designed to rejuvenate your skin.
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Visible improvement in skin texture</li>
                <li>Reduction in fine lines & wrinkles</li>
                <li>Improved tone & glow</li>
                <li>Long-lasting natural results</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MAIN LONG CONTENT COMING FROM DATA ================= */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

          <h1 className="text-3xl text-center font-domine text-[#b37556] mb-6">
            {service.mainh1}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {service.mainh1data}
          </p>

          {/* first h2 */}
          <h2 className="text-2xl font-domine text-[#b37556] mb-4">
            {service.firsth2}
          </h2>
          <p className="text-gray-600 mb-6">
            {service.firsth2data}
          </p>

          {/* second h2 */}
          <h2 className="text-2xl font-domine text-[#b37556] mb-4">
            {service.sech2}
          </h2>
          <p className="text-gray-600 mb-6">
            {service.sech2data}
          </p>

          {/* h3 blocks */}
          <h3 className="text-xl font-domine text-[#b37556] mb-4">
            {service.firsth3}
          </h3>
          <p className="text-gray-600 mb-6">
            {service.firsth3data}
          </p>

          <h3 className="text-xl font-domine text-[#b37556] mb-4">
            {service.sech3}
          </h3>
          <p className="text-gray-600 mb-6">
            {service.sech3data}
          </p>

          <h3 className="text-xl font-domine text-[#b37556] mb-4">
            {service.thih3}
          </h3>
          <p className="text-gray-600 mb-6">
            {service.thih3data}
          </p>

          <h3 className="text-xl font-domine text-[#b37556] mb-4">
            {service.fourh3}
          </h3>
          <p className="text-gray-600 mb-6">
            {service.fourh3data}
          </p>

        </div>
      </div>

      {/* FAQ */}
      <ClientFaq />

      <Footer />

      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={(data) => console.log("Appointment:", data)}
      />
    </div>
  );
}
