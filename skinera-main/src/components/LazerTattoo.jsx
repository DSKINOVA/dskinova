import React, { useState } from "react";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import AppointmentModal from "./AppointmentModal";
import girl1 from '../../public/Images/Services/hair-regrowth-laser.jpg'

const LazerTattoo = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  
  // seo data

  const setMetaTitle =
    "Laser-Tattoo Removal Treatment in Jaipur | Dskinova Skin Specialists";
  const setoMetaDescription =
    "Dskinova offers the best Laser-Tattoo Removal Treatment in Jaipur. Book now!";
  const seoFocusKeyword = "Laser-Tattoo Removal Treatment in Jaipur";
  const seoSlug = "laser-tattoo-removal-in-jaipur";
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
              Laser Tattoo Removal in Jaipur – Safe & Effective Treatment with
              Dskinova
            </h1>

            {/* Golden underline */}
            <div className="w-24 h-1 bg-[#BE7F58] mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Tattoos are a beautiful means of expression, and at times you do
              not wish them to reflect your style or story any more. It could be
              a long-lived design, a tarnished tattoo, or a case of regrets,
              which can be solved with the help of laser tattoo removal in
              Jaipur, which is a safe, contemporary, and effective method. We
              are Dskinova who deal in professional laser tattoo removal in
              Jaipur and are able to assist clients in achieving clear and
              smooth skin with minimum pain.
            </p>
          </div>

          {/* Section Block */}
          <div className="space-y-20">
            {/* Who is a Cosmetologist */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                What is Laser Tattoo Removal?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Laser tattoo removal in Jaipur is an arduous treatment which is
                non-invasive and involves the usage of high laser light to
                fragment tattoo ink particles below the skin. The body is
                capable of getting rid of these tiny pieces of ink as time goes
                by thus fading away the tattoo. Laser tattoo removal is also
                accurate as compared to other techniques such as dermabrasion or
                chemical treatment and skin around the tattoo is not harmed
                which minimizes chances of scarring in Jaipur.
              </p>
            </div>

            {/* Why Visit a Professional */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                How Does the Procedure Work?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                In Dskinova, we have the technology of Q-switched and PicoSure
                lasers which are used to target the pigments of tattoos. Laser
                pulses are directed into the skin during treatment so as to
                dispersed the ink into small particles. Many of these sessions
                are determined by the size, color and depth of tattoos and where
                the tattoo is placed. Multi colored tattoos and especially the
                green and blue inks may take more sessions before they are
                completely removed. The majority of patients only have mild
                discomfort, it is normally termed as snapping or tingling. The
                sessions are normally brief, of 15-45 minutes, depending on the
                size and the complexity of the tattoo.
              </p>
            </div>

            {/* Popular Services */}
            <div>
              <h2 className="text-center text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-10">
                Benefits of Laser Tattoo Removal
              </h2>

              <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-10 items-start">
                {/* List */}
                <div className="flex-1 text-lg text-gray-600 space-y-4">
                  <p>
                    The decision to undergo laser tattoo removal in Jaipur at
                    Dskinova is associated with a number of benefits:
                  </p>

                  <ul className="space-y-4 list-disc list-inside">
                    <li>
                      <strong>Safe and non-invasive:</strong> No cutting or
                      surgery is required.
                    </li>
                    <li>
                      <strong> Effective on multiple colors:</strong> Modern
                      lasers can handle a variety of pigments.
                    </li>
                    <li>
                      <strong> Minimal scarring:</strong> Professional treatment
                      ensures smooth, healthy skin.
                    </li>
                    <li>
                      <strong>Gradual fading:</strong> BTattoos lighten
                      naturally over time for a better aesthetic result.
                    </li>
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={girl1}
                    alt="Cosmetology expert in Jaipur"
                    className="w-full md:w-[460px] h-[350px] object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* How to Choose */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Cost and Choosing the Right Clinic
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
                The prices of laser tattoo removal in Jaipur are dependent on
                the size, color and number of laser tattoo removal sessions.
                Small tattoos can begin at ₹2,000–3,000 per session, and bigger
                tattoos or multicolor ones can be more expensive. A certified
                clinic such as Dskinova would guarantee a safe and effective
                laser tattoo removal in Jaipur with lasting effects. With
                qualified dermatologists and advanced technology, we offer the
                best services in getting rid of your tattoos so that your tattoo
                removal experience can be safe and comfortable.
              </p>
            </div>

            {/* Benefits */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Pre- and Post-Treatment Care
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Before and after-session proper care is the key to optimal
                outcomes. Prior to treatment, do not tan or sunburn, and adhere
                to skin preparation directions. Keep the area clean, moist, and
                protected from sunlight after the session. Complications may
                arise from scratching or picking the treated skin.
              </p>
            </div>

            {/* Conclusion */}
            <div className="text-center">
              <h4 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Conclusion
              </h4>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                In case you are willing to get rid of an unwanted tattoo, laser
                tattoo removal in Jaipur, Dskinova is the best and safest
                choice. Dskinova is the place where you can get a clear and
                tattoo-free skin with the help of the most advanced equipment of
                lasers, qualified experts, and individual approach. Get a step
                closer to smooth and clean skin and make an appointment at
                Dskinova to get your laser tattoos removed in Jaipur.
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

export default LazerTattoo;
