import React, { useState } from "react";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import AppointmentModal from "./AppointmentModal";

const AntiAging = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // seo data

  const setMetaTitle =
    "Anti-Aging Treatment in Jaipur | Dskinova Skin Specialists";
  const setoMetaDescription =
    "Dskinova offers the best Anti-Aging Treatment in Jaipur. Book now!";
  const seoFocusKeyword = "Anti-Aging Treatment in Jaipur";
  const seoSlug = "anti-aging-treatment-in-jaipur";
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{setMetaTitle}</title>
        <meta name="description" content={setoMetaDescription} />
        <meta name="keywords" content={seoFocusKeyword} />
        <link rel="canonical" href={`https://www.dskinova.com/${seoSlug}`} />

        {/* Open Graph (Facebook / WhatsApp) */}
        <meta property="og:title" content={setMetaTitle} />
        <meta property="og:description" content={setoMetaDescription} />
        <meta property="og:image" content={skin} />
        <meta
          property="og:url"
          content={`https://www.dskinova.com/${seoSlug}`}
        />

        {/* Twitter */}
        <meta name="twitter:title" content={setMetaTitle} />
        <meta name="twitter:description" content={setoMetaDescription} />
        <meta name="twitter:image" content={skin} />
      </Helmet>

      {/* header contant start */}

      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

      {/* page section */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stylish Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-domine font-semibold text-[#BE7F58] leading-tight tracking-tight mb-4">
              Anti-Aging Treatment in Jaipur – Bring Back Your Youthful Glow
            </h1>

            {/* Golden underline */}
            <div className="w-24 h-1 bg-[#BE7F58] mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Your skin is supposed to be given the best treatment in order to
              remain radiant and youthful. In the modern day, where people live
              fast, are polluted and where stress is the order of the day, aging
              such as wrinkles, dryness, and lines can be seen at a young age.
              It is there that professional anti-aging treatment in Jaipur
              comes, to make you feel just like you were many years ago, firm
              and glowing, and confident with the help of professional skincare
              solutions.
            </p>
          </div>

          {/* Section Block */}
          <div className="space-y-20">
            {/* Who is a Cosmetologist */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Why Choose Anti-Aging Treatment in Jaipur?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                The city of Jaipur has emerged as a destination of individuals
                who want to experience natural and long-term skin rejuvenation.
                The best dermatologists and beauty clinics in the city are safe
                and science-supported procedures to slow down aging and enhance
                youthful beauty on the skin. Anti-aging treatment in Jaipur is a
                guarantee of professional treatment, advanced technology, and a
                personalized effect which will improve your beauty without a
                filter.
              </p>
            </div>

            {/* Why Visit a Professional */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                How Aging Affects the Skin
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                The skin gets old and lacks collagen and elasticity thus causes
                wrinkles, pigmentation and even sagging. This is accelerated by
                sun exposure, pollution and dehydration. Luckily, there exist
                advanced anti-aging treatment in Jaipur which are aimed to deal
                with these issues with the help of non-surgical and safe
                methods.
              </p>
            </div>

            {/* Popular Services */}
            <div>
              <h2 className="text-center text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-10">
                Top Anti-Aging Treatments Available in Jaipur
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
                      <strong>Botox & Fillers:</strong> Reduce wrinkles and fine
                      lines instantly.
                    </li>
                    <li>
                      <strong> Laser Rejuvenation:</strong> Removes age spots
                      and improves skin tone.
                    </li>
                    <li>
                      <strong> Chemical Peels:</strong> Exfoliate and brighten
                      dull, tired skin.
                    </li>
                    <li>
                      <strong>Microneedling & PRP Therapy:</strong> Boost
                      collagen naturally.
                    </li>
                    <li>
                      <strong>RF Skin Tightening:</strong> Firms sagging skin
                      and improves elasticity.
                    </li>
                    <li>
                      <strong>HydraFacial:</strong> Deeply hydrates and
                      refreshes your skin.
                    </li>
                  </ul>

                  <p>
                    ll the anti-aging therapies in Jaipur are designed according
                    to the skin type, age and particular issues so that the
                    visible effects are best achieved.
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
                Why Jaipur Is the Hub for Anti-Aging Solutions
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
                It is the best city in terms of anti aging treatment with
                advanced skincare technology and reasonable prices. Jaipur is
                the ideal location where one can get international quality
                skincare services due to the presence of qualified
                dermatologists, fancy hair and beauty salons, and renowned
                youthful skin clinics
              </p>
            </div>

            {/* Benefits */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Post-Treatment Care Tips
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Once you have had an anti-ageing treatment in Jaipur, then you
                should take care with your skin, put on sunscreen everyday,
                hydrate yourself, have a balanced diet and do not expose
                yourself to direct sunlight. Consistent maintenance appointments
                will assist in extending your performance and have your skin
                glowing years on.
              </p>
            </div>

            {/* Conclusion */}
            <div className="text-center">
              <h4 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Conclusion: Discover the Secret to Ageless Beauty
              </h4>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                These are your skin, your confidence and your care. Professional
                anti-aging treatment in Jaipur is a way of reversing time and
                get warmer, younger skins. Today, visit a reputable skincare
                clinic in Jaipur in order to be subjected to the finest science
                and expertise coupled with beauty, to acquire the sort of glow
                that never leaves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer />

      {/* appointment modal */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </div>
  );
};

export default AntiAging;
