import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import NotFound from "./NotFound.jsx";
import { SERVER_URL } from "../services/api.js";

export default function ServiceDetail({ serviceId }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [apiService, setApiService] = useState(null);
  const [loading, setLoading] = useState(true);

  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);

  const params = typeof useParams === "function" ? useParams() : {};
  const navigate = typeof useNavigate === "function" ? useNavigate() : null;

  const effectiveId =
    serviceId || (params ? params.id : undefined) || "laser-hair-removal-treatment-in-jaipur";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let isMounted = true;
    async function loadService() {
      setLoading(true);
      try {
        // 1. Try exact match fetch
        const res = await fetch(
          `${SERVER_URL}/services/${effectiveId}`
        );
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data?.success && data?.item) {
            setApiService(data.item);
            if (data.redirectSlug && data.redirectSlug !== effectiveId && navigate) {
              navigate(`/${data.redirectSlug}`, { replace: true });
            }
            return;
          }
        }

        // 2. If exact match fails, fetch all services and do a fuzzy match on slugs
        const listRes = await fetch(`${SERVER_URL}/services`);
        if (listRes.ok) {
          const listData = await listRes.json();
          if (isMounted && listData?.success && Array.isArray(listData?.items)) {
            const match = listData.items.find(s => {
              const sSlug = (s.slug || "").toLowerCase();
              const effId = effectiveId.toLowerCase();
              return sSlug === effId || 
                     sSlug === `${effId}-jaipur` || 
                     `${effId}-jaipur` === sSlug ||
                     sSlug.includes(effId) || 
                     effId.includes(sSlug);
            });
            if (match) {
              setApiService(match);
              if (navigate && match.slug !== effectiveId) {
                navigate(`/${match.slug}`, { replace: true });
              }
              return;
            }
          }
        }
      } catch (err) {
        // Fallback to static
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadService();
    return () => { isMounted = false; };
  }, [effectiveId]);

  const service = apiService || getExpandedService(effectiveId) || getServiceById(effectiveId);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#BE7F58]"></div>
      </div>
    );
  }

  if (!service) {
    return <NotFound />;
  }

  const beforeAfterImg = getBeforeAfterImage(effectiveId);

  // SEO
  const seoMetaTitle = service?.seo?.meta_title || service?.title;
  const seoMetaDescription = service?.seo?.meta_description || service?.short;
  const seoFocusKeyphrase = service?.seo?.focus_keyphrase || "";
  const seoSlug = service?.seo?.slug || service?.id;
  const seoImage = service?.image;

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
      </Helmet>

      <Header onBookAppointment={openAppointment} />
      <HeroThree title={service.title} introPara={service.short} />

      {/* IMAGE + OVERVIEW */}
      <div className="relative overflow-hidden py-16">
        <img src={bgFlower} className="hidden md:block absolute left-0 top-6 h-[520px] opacity-60" />
        <img src={bgFlower} className="hidden md:block absolute right-0 top-6 h-[520px] opacity-60 -scale-x-100" />

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-lg shadow">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
                  />
                </div>
              </div>

              {/* OVERVIEW CONTENT */}
              <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
                <h3 className="text-lg sm:text-xl font-domine text-[#b37556]">
                  {service.overview.title}
                </h3>
                <div 
                  className="text-gray-600 text-sm leading-relaxed service-desc"
                  dangerouslySetInnerHTML={{ __html: service.overview.description }}
                />

                {/* Included / Excluded */}
                <h3 className="text-lg sm:text-xl font-domine mb-3 text-[#b37556]">
                  Included & Excluded
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    {service.included?.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-2">
                    {service.excluded?.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-red-500">✗</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Display */}
                {service.price > 0 && (
                  <div className="bg-rose-100/60 border border-rose-200 rounded-lg p-3 inline-block">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block">Starting Price</span>
                    <span className="text-xl font-bold text-[#b37556]">
                      {service.currency || "₹"}{service.price} <span className="text-xs font-normal text-gray-600">({service.priceNote || "per session"})</span>
                    </span>
                  </div>
                )}

                <button
                  onClick={openAppointment}
                  className="bg-[#c98963] hover:bg-[#be7f58] text-white w-full px-6 py-3 rounded-lg mt-4 font-medium transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceExtras />

      {/* BEFORE AFTER (DYNAMIC) */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-domine text-center text-[#b37556] mb-8">
            Before & After Results
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src={service.beforeAfter?.image || service.beforeAfterImage || beforeAfterImg || service.image}
              alt={`Before & After - ${service.title}`}
              className="w-full lg:w-1/2 h-[300px] sm:h-[400px] rounded-lg object-cover shadow border border-gray-100"
            />

            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-xl font-domine text-[#b37556]">
                {service.beforeAfter?.heading || `Transform Your Skin with ${service.title}`}
              </h3>

              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {service.beforeAfter?.description || "Experience visible improvement with our modern techniques designed to rejuvenate your skin."}
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                {service.beforeAfter?.points && service.beforeAfter.points.length > 0 ? (
                  service.beforeAfter.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))
                ) : (
                  <>
                    <li>Visible improvement in skin texture</li>
                    <li>Reduction in fine lines & wrinkles</li>
                    <li>Improved tone & glow</li>
                    <li>Long-lasting natural results</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

          {/* ===== MAIN H1 ===== */}
          {service.mainh1 && (
            <>
              <h1 className="text-3xl text-center font-domine text-[#b37556] mb-6">
                {service.mainh1}
              </h1>
              <p className="text-lg text-gray-600 mb-6 whitespace-pre-line">
                {service.mainh1data}
              </p>
            </>
          )}

          {/* ===== first h2 ===== */}
          {service.firsth2 && (
            <>
              <h2 className="text-2xl font-domine text-[#b37556] mb-4">{service.firsth2}</h2>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.firsth2data}</p>
            </>
          )}

          {/* ===== sech2 ===== */}
          {service.sech2 && (
            <>
              <h2 className="text-2xl font-domine text-[#b37556] mb-4">{service.sech2}</h2>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.sech2data}</p>
            </>
          )}

          {/* ===== sech20 ===== */}
          {service.sech20 && (
            <>
              <h2 className="text-2xl font-domine text-[#b37556] mb-4">{service.sech20}</h2>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.sech20data}</p>
            </>
          )}

          {/* ===== firsth3 ===== */}
          {service.firsth3 && (
            <>
              <h3 className="text-xl font-domine text-[#b37556] mb-4">{service.firsth3}</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.firsth3data}</p>
            </>
          )}

          {/* ===== firstth30 ===== */}
          {service.firstth30 && (
            <>
              <h3 className="text-xl font-domine text-[#b37556] mb-4">{service.firstth30}</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.firstth30data}</p>
            </>
          )}

          {/* ===== firstth301 ===== */}
          {service.firstth301 && (
            <>
              <h3 className="text-xl font-domine text-[#b37556] mb-4">{service.firstth301}</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.firstth301data}</p>
            </>
          )}

          {/* ===== firstth31 ===== */}
          {service.firstth31 && (
            <>
              <h3 className="text-xl font-domine text-[#b37556] mb-4">{service.firstth31}</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.firstth31data}</p>
            </>
          )}

          {/* ===== sech3 ===== */}
          {service.sech3 && (
            <>
              <h3 className="text-xl font-domine text-[#b37556] mb-4">{service.sech3}</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.sech3data}</p>
            </>
          )}

          {/* ===== thih3 ===== */}
          {service.thih3 && (
            <>
              <h3 className="text-xl font-domine text-[#b37556] mb-4">{service.thih3}</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{service.thih3data}</p>
            </>
          )}

          {/* ===== FINAL CONCLUSION (UNIVERSAL) ===== */}
          {(service.fourh3 || service.conclusionTitle) && (
            <>
              <h3 className="text-xl font-domine text-[#b37556] mb-4">
                {service.fourh3 || service.conclusionTitle}
              </h3>

              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {service.fourh3data || service.conclusionData}
              </p>
            </>
          )}

        </div>
      </div>

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
