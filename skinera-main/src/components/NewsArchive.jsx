// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import Hero from "./Hero.jsx";
// import AppointmentModal from "./AppointmentModal.jsx";

// export default function NewsArchive() {
//   const [appointmentOpen, setAppointmentOpen] = useState(false);
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let abort = false;
//     async function load() {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           (import.meta.env.VITE_SERVER_URL || "") + "/api/news"
//         );
//         const data = await res.json();
//         if (!abort && data?.success) {
//           setItems(Array.isArray(data.items) ? data.items : []);
//         }
//       } catch (e) {
//         if (!abort) setItems([]);
//       } finally {
//         if (!abort) setLoading(false);
//       }
//     }
//     load();
//     return () => {
//       abort = true;
//     };
//   }, []);

//   const formatDate = (d) => {
//     try {
//       return new Date(d).toLocaleDateString(undefined, {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       });
//     } catch {
//       return "";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Header onBookAppointment={() => setAppointmentOpen(true)} />
//       {/* Use the same hero as homepage */}
//       <Hero onBookAppointment={() => setAppointmentOpen(true)} />

//       {/* All News Grid */}
//       <section className="bg-white py-12 sm:py-16 ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-8 text-center">
//             All News
//           </h2>

//           {loading ? (
//             <div className="text-center text-gray-600 py-12">Loading news…</div>
//           ) : items.length === 0 ? (
//             <div className="text-center text-gray-600 py-12">
//               No news available yet.
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {items.map((article) => (
//                 <article
//                   key={article.slug}
//                   className="group border rounded-lg overflow-hidden"
//                 >
//                   <Link to={`/news/${article.slug}`}>
//                     <img
//                       src={article.cardImage || "/logo.png"}
//                       onError={(e) => (e.currentTarget.src = "/logo.png")}
//                       alt={article.title}
//                       className="w-full h-56 object-cover"
//                     />
//                   </Link>
//                   <div className="p-5">
//                     <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#BE7F58] transition-colors">
//                       <Link to={`/news/${article.slug}`}>{article.title}</Link>
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-2">
//                       {formatDate(article.date || article.createdAt)}
//                     </p>
//                     <p className="text-gray-700 text-sm mt-3 line-clamp-3">
//                       {article.excerpt}
//                     </p>
//                     <Link
//                       to={`/news/${article.slug}`}
//                       className="inline-block mt-4 text-[#c98963] hover:text-[#be7f58] font-medium"
//                     >
//                       Read More →
//                     </Link>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}

//           <section className="bg-white py-16 sm:py-20 lg:py-24">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               {/* Main Heading */}
//               <div className="text-center mb-12">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
//                   Skin Doctor in Jaipur – Expert Dermatology & Advanced Skin Care by Dskinova
//                 </h1>
//                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
//                   In today’s fast-paced world, taking care of your skin, hair,
//                   and overall appearance is more important than ever. Finding a
//                   trusted cosmetologist in Jaipur can make all the difference.
//                   These beauty experts combine knowledge, experience, and
//                   professional techniques to help you look and feel your best.
//                   Jaipur, known for its rich culture and heritage, is also
//                   emerging as a hub for modern beauty and wellness services.
//                 </p>
//               </div>

//               <div>
//                 <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
//                   Who is a Cosmetologist
//                 </h2>
//                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
//                   A cosmetologist is an individual who is trained to deal with
//                   hair, skin and beauty treatments. The cosmetologist as opposed
//                   to a general beautician is an expert in the sophisticated
//                   methods and he/she knows the science behind every treatment.
//                   They have diverse services including skincare, hair care,
//                   makeup and therapeutic treatments. With the help of a
//                   cosmetologist in Jaipur, you can be sure that your beauty
//                   routine is safe, effective and unique.
//                 </p>
//               </div>

//               <div className="mt-2">
//                 <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
//                   Why Visit a Professional Cosmetologist?
//                 </h2>
//                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
//                   Home made beauty tricks can be very alluring, however, there
//                   is no match to professional attention. A cosmetologist in
//                   Jaipur is able to treat and resolve certain issues of the skin
//                   or hair, and provide tailored care, as well as instructing on
//                   the long-term well-being. Anti-aging facials, hair
//                   strengthening therapies, professional cosmetology can make
//                   sure of safety, hygiene and visible results. Expert care is
//                   not only a way of improving your appearance but also the way
//                   to improve your confidence and well-being.
//                 </p>
//               </div>

//               <div className="mt-5">
//                 <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
//                   Popular Services Offered by Cosmetologists in Jaipur
//                 </h2>
//                 <ul className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
//                   <li>
//                     <strong>Hair Treatments:</strong> Hair coloring, keratin
//                     treatment, hair spa, and scalp treatments.
//                   </li>
//                   <li>
//                     <strong>Skin Care:</strong> Skin care, anti-aging, skin
//                     care, and acne care.
//                   </li>
//                   <li>
//                     <strong>Makeup Services:</strong> Wedding make-up, party
//                     make-up, and business make-up.
//                   </li>
//                   <li>
//                     <strong>Other Services:</strong> Manicure, Pedicure, Waxing,
//                     Threading, and beauty therapy.
//                   </li>
//                 </ul>
//               </div>

//               <div className="mt-5">
//                 <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
//                   Benefits of Regular Cosmetic Treatments
//                 </h3>
//                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
//                   Frequent visits to a cosmetologist can enhance the skin
//                   texture, hair conditions, and the appearance. Professional
//                   treatments are used to minimise frizz, acne and ageing effects
//                   and make the wearer more confident. Also, a relaxing ambiance
//                   of a properly furnished salon can decrease stress levels and
//                   encourages mental health.
//                 </p>
//               </div>

//               <div className="mt-5">
//                 <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
//                   Why Jaipur is a Great Place for Cosmetology Services
//                 </h3>
//                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
//                   Jaipur is quickly emerging as an attraction site among beauty
//                   and wellness users. The city has the availability of highly
//                   professional people, modern salons and quality beauty
//                   products. The cosmetologists of Jaipur offer different
//                   services to skin and hair types with a combination of
//                   traditional and modern methods. That is why it is easy and
//                   satisfying to find a reliable cosmetologist in Jaipur.
//                 </p>
//               </div>

//               <div className="mt-5">
//                 <h4 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
//                   Conclusion
//                 </h4>
//                 <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
//                   An experienced cosmetologist in Jaipur will change your beauty
//                   regime and make you attain a healthy skin and hair. Youspend
//                   money on your appearance, confidence, and well-being by making
//                   the correct choice of an expert. Whether it is skincare, hair
//                   salons, or cosmetics, Jaipur boasts of some of the best
//                   cosmetologists who can make you look and feel good. Wait no
//                   longer--book an appointment and see how much better
//                   professional care can make you feel.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>

//       <Footer />

//       <AppointmentModal
//         open={appointmentOpen}
//         onClose={() => setAppointmentOpen(false)}
//         onSubmit={() => setAppointmentOpen(false)}
//       />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import { Helmet } from "react-helmet-async"; 
import AppointmentModal from "./AppointmentModal.jsx";
import skin from "../../public/Images/blogs/skin doctor in jaipur.jpg";
import cosmo from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import girl from '../../public/Images/Thestory/girl.jpg'

export default function NewsArchive() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // ===================== SEO =====================
  const seoMetaTitle = "Skin & Beauty Experts in Jaipur | Dskinova";
  const seoMetaDesc =
    "Find the best Skin Doctor and Cosmetologist in Jaipur. Choose the right expert based on your skin & beauty needs.";
  const seoImage = skin;

  // ===================== FORCE OVERRIDE =====================
  useEffect(() => {
    // Remove all existing meta description to avoid conflict
    document
      .querySelectorAll("meta[name='description']")
      .forEach((m) => m.remove());

    // Remove any old keywords also
    document
      .querySelectorAll("meta[name='keywords']")
      .forEach((m) => m.remove());
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ===================== SEO TAGS ===================== */}
      <Helmet>
        <title>{seoMetaTitle}</title>

        <meta
          name="description"
          content={seoMetaDesc}
          key="desc"
          data-react-helmet="true"
        />

        <meta
          name="keywords"
          content="skin doctor in Jaipur, cosmetologist in Jaipur, dermatologist Jaipur"
          key="keywords"
          data-react-helmet="true"
        />

        <meta
          property="og:title"
          content={seoMetaTitle}
          key="og:title"
          data-react-helmet="true"
        />

        <meta
          property="og:description"
          content={seoMetaDesc}
          key="og:description"
          data-react-helmet="true"
        />

        <meta
          property="og:image"
          content={seoImage}
          key="og:image"
          data-react-helmet="true"
        />
      </Helmet>

      {/* ===================== HEADER + HERO ===================== */}
      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

      {/* ===================== 2 CARD SECTION ===================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] text-center mb-12">
            Choose Your Specialist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* CARD 1 */}
            <Link
              to="/skin-doctor-in-jaipur"
              className="group block relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={skin} alt="Skin Doctor in Jaipur" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Skin Doctor in Jaipur</h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Advanced dermatology solutions for acne, pigmentation & glowing skin.
                </p>
              </div>
            </Link>

            {/* CARD 2 */}
            <Link
              to="/cosmeologist-in-jaipur"
              className="group block relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={cosmo} alt="Cosmetologist in Jaipur" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Cosmetologist in Jaipur</h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Expert cosmetic treatments for glowing skin & hair care.
                </p>
              </div>
            </Link>

            {/* card3 */}
            <Link
              to="/anti-aging-in-jaipur"
              className="group block relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={girl} alt="Cosmetologist in Jaipur" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Anti-Aging Treatment</h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Expert cosmetic treatments for glowing skin & hair care.
                </p>
              </div>
            </Link>
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
