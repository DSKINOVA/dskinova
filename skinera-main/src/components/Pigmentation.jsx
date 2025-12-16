import React, { useState } from "react";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import AppointmentModal from "./AppointmentModal";
import girl2 from "../../public/Images/Doctor-img/Skin Specialist in Jaipur.jpg";
import pigme from "../../public/Images/Pigmentation/pigmentation treatment doctor in Jaipur.png";

const Pigmentation = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // seo data

  const setMetaTitle =
    "Pigmentation Treatment Doctor in Jaipur | Dskinova Skin Clinic";

  const setoMetaDescription =
    "Laser hair removal in Jaipur at Dskinova – safe, effective, long-lasting, and dermatologist-supervised. Book your session today!";

  const seoFocusKeyword = "laser hair removal in jaipur";

  const seoSlug = "laser-hair-removal-treatment-in-jaipur";

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{setMetaTitle}</title>

        <meta name="description" content={setoMetaDescription} />
        <meta name="keywords" content={seoFocusKeyword} />

        <link rel="canonical" href={`https://www.dskinova.com/${seoSlug}`} />

        <meta property="og:title" content={setMetaTitle} />
        <meta property="og:description" content={setoMetaDescription} />
        <meta property="og:image" content={girl2} />
        <meta
          property="og:url"
          content={`https://www.dskinova.com/${seoSlug}`}
        />

        <meta name="twitter:title" content={setMetaTitle} />
        <meta name="twitter:description" content={setoMetaDescription} />
        <meta name="twitter:image" content={girl2} />
      </Helmet>

      {/* header contant start */}

      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

      {/* page section */}

      <section className="bg-white py-16 sm:py-20  lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stylish Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-domine font-semibold text-[#BE7F58] leading-tight tracking-tight mb-4">
              Pigmentation Treatment Doctor in Jaipur – Expert Care at Dskinova
            </h1>

            {/* Golden underline */}
            <div className="w-24 h-1 bg-[#BE7F58] mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Skin pigmentation is a common concern, especially in Jaipur, where
              strong sunlight and heat can worsen dark spots, melasma, and
              uneven skin tone. If you are looking for a trusted pigmentation
              treatment doctor in Jaipur, Dskinova offers advanced
              dermatological care focused on restoring clear, smooth, and
              radiant skin.
            </p>
          </div>

          {/* Section Block */}
          <div className="space-y-20 ">
            <div className="text-center  px-4 py-10">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Understanding Pigmentation and Its Causes
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                Pigmentation occurs when the skin produces excess melanin. This
                condition can develop due to several factors:
              </p>

              <ul className="max-w-xl mx-auto text-left list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Prolonged sun exposure</li>
                <li>Hormonal changes</li>
                <li>Acne marks</li>
                <li>Aging</li>
                <li>Genetic predisposition</li>
              </ul>

              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                A skilled pigmentation specialist can identify the type of
                pigmentation— melasma, sun spots, freckles, or post-inflammatory
                pigmentation—and recommend the most effective treatment plan.
              </p>
            </div>

            {/* Why Visit a Professional */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Why Consult a Pigmentation Expert?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Choosing an experienced pigmentation treatment doctor in Jaipur
                ensures accurate diagnosis and safe, effective treatment. The
                dermatology experts at Dskinova understand skin types affected
                by Rajasthan’s climate and use advanced technologies to treat
                pigmentation precisely. Their expertise prevents skin damage,
                reduces recurrence, and delivers visible, long-lasting results.
              </p>
            </div>

            {/* Treadment */}
            <div className="text-center px-4 py-10">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-8">
                Advanced Pigmentation Treatments at Dskinova
              </h2>

              {/* Laser & Clinical Treatments */}
              <div className="max-w-3xl mx-auto mb-8">
                <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">
                  Laser & Clinical Treatments
                </h3>
                <ol className="list-decimal list-inside text-left text-gray-700 space-y-3">
                  <li>
                    <span className="font-medium">
                      Laser Toning & Q-Switch Lasers
                    </span>{" "}
                    – Targets deep pigmentation and enhances overall skin
                    brightness.
                  </li>
                  <li>
                    <span className="font-medium">Chemical Peels</span> – Gently
                    exfoliate damaged skin layers and reduce dark spots.
                  </li>
                </ol>
              </div>

              {/* Skin Rejuvenation Therapies */}
              <div className="max-w-3xl mx-auto mb-8">
                <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">
                  Skin Rejuvenation Therapies
                </h3>
                <ol className="list-decimal list-inside text-left text-gray-700 space-y-3">
                  <li>
                    <span className="font-medium">
                      Medifacials for Pigmentation
                    </span>
                    – Hydrates, repairs, and improves skin clarity.
                  </li>
                  <li>
                    <span className="font-medium">Microdermabrasion</span> –
                    Smoothens skin texture and fades mild pigmentation.
                  </li>
                </ol>
              </div>

              {/* Medical-Grade Topicals */}
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">
                  Medical-Grade Topical Treatments
                </h3>
                <ol className="list-decimal list-inside text-left text-gray-700">
                  <li>
                    <span className="font-medium">
                      Customized Creams & Serums
                    </span>{" "}
                    – Designed for long-term skin improvement.
                  </li>
                </ol>
              </div>
            </div>

            {/* Benefits */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Personalized Skin Care Plans at Dskinova
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Each patient undergoes a detailed skin analysis using modern
                diagnostic tools. Based on skin type, lifestyle,sensitivity, and
                medical history, a personalized treatment plan ensures safe and
                effective results.
              </p>
            </div>

            {/* Why Choose Deskinova */}
            <div className="text-center px-4 py-10">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-6">
                How to Choose the Right Pigmentation Treatment Doctor in Jaipur
              </h2>

              <ol className="list-decimal list-inside max-w-xl mx-auto text-left text-gray-700 space-y-3 mb-6">
                <li>Doctor’s experience and qualifications</li>
                <li>Advanced technology and treatment options</li>
                <li>Patient reviews and testimonials</li>
              </ol>

              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                At <span className="font-medium text-gray-800">Dskinova</span>,
                patients receive transparent guidance, customized treatment
                plans, and expert care from certified dermatologists.
              </p>
            </div>

            {/*  Common Myths */}
            <div>
              <h2 className="text-center text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-10">
                Common Myths About Laser Hair Removal
              </h2>

              <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-10 items-start">
                {/* List */}
                <div className="flex-1 text-lg text-gray-600 space-y-4">
                  <p>
                    The decision to undergo laser hair removal in Jaipur at
                    Dskinova is associated with a number of benefits:
                  </p>

                  <ul className="space-y-4 list-disc list-inside">
                    <li>
                      Dskinova’s laser technology is nearly painless with
                      cooling sensations.
                    </li>
                    <li>
                      Many men in Jaipur choose laser treatment for chest, back,
                      and beard shaping.
                    </li>
                    <li>
                      At Dskinova, treatments are safe, dermatologically tested,
                      and non-invasive.
                    </li>
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={pigme}
                    alt="Cosmetology expert in Jaipur"
                    className="w-full md:w-[460px] h-[350px] object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* How to Choose */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Conclusion
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
                Uneven skin tone and dark patches can be effectively treated
                with the right professional care. Consulting a trusted
                pigmentation treatment doctor in Jaipur is the first step toward
                healthier, clearer skin. With advanced treatments and
                personalized dermatological care, Dskinova delivers safe,
                visible, and long-lasting results for all skin types.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Call to Action
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
                Book your consultation today with the leading pigmentation
                treatment doctor in Jaipur at Dskinova! Book Appointment Now
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

export default Pigmentation;
