import React, { useState } from "react";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import AppointmentModal from "./AppointmentModal";
import girl2 from "../../public/Images/Doctor-img/Skin Specialist in Jaipur.jpg";

const LazerHair = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // seo data

  const setMetaTitle =
    "Laser Hair Removal in Jaipur – Safe & Professional Treatment";

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

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stylish Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-domine font-semibold text-[#BE7F58] leading-tight tracking-tight mb-4">
              Experience Smooth, Hair-Free Skin Like Never Before
            </h1>

            {/* Golden underline */}
            <div className="w-24 h-1 bg-[#BE7F58] mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Weary of forever shaving or waxing or threading? It is time to
              change to a more complex and long-lasting solution. Laser hair
              removal treatment at Dskinova, Jaipur, is a safe and painless and
              long term method of removing unwanted hair. Dskinova will bring up
              the glowing skin without the inconvenience of visiting the salon
              frequently with the help of high-quality laser technology and
              professional dermatological services.
            </p>
          </div>

          {/* Section Block */}
          <div className="space-y-20">
            {/* Who is a Cosmetologist */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                What Is Laser Hair Removal?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Laser hair removal is a procedure which is scientifically proven
                to be targeted at the hair follicles and with the use of focused
                energy of light. This light kills the root of unwanted hair
                hence growth is slowed in the long run. Dskinova’s laser hair
                removal treatment in Jaipur is the new method when compared to
                the conventional techniques, which leaves long lasting effects
                and produces soft and flawless skin with little discomfort at
                Dskinova Jaipur. It can be applied on the face, arms, legs,
                back, bikini region, and underarms as it is appropriate on all
                types of skin.
              </p>
            </div>

            {/* Why Visit a Professional */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Why Choose Laser Hair Removal in Jaipur?
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                With the new technology in skincare and the use of qualified
                professionals, Jaipur is rapidly turning out to be a place where
                permanent hair removal surgeries are undertaken. Dskinova is one
                of the leading laser hair removal treatment in Jaipur with its
                combination of innovation, safety and the price. All the
                treatments are carried out under the care of the experts using
                the laser machines approved by the FDA which are comfortable and
                precise. Have you a need to have smooth legs or a back that is
                free of hair, Dskinova will give you confidence in the long term
                beauty.
              </p>
            </div>

            {/* Treadment */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                How the Treatment Works
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                It starts with the personalized consulting in which they test
                your skin and hair type. The professional staff in Dskinova
                Jaipur then tailors the lasers to be suitable to your comfort
                and efficiency. The laser is also applied during the session to
                hair roots only and does not cause damage to the surrounding
                skin. Depending on the thickness of your hair and its growth
                pattern, you might require several sessions in order to achieve
                maximum results. Cooling is done after the treatment so that
                there is no irritation and you are left with soft and
                rejuvenated skin.
              </p>
            </div>

            {/* Benefits */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Benefits of Laser Hair Removal Treatment In Jaipur
              </h2>

              <ul className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed list-disc text-left space-y-3 pl-6">
                <li>
                  <strong>Permanent Hair Reduction:</strong> Experience
                  long-lasting smooth skin with minimal touch-ups.
                </li>
                <li>
                  <strong>No Skin Damage:</strong> Lasers do not cause cuts,
                  rashes, or irritation like waxing or threading.
                </li>
                <li>
                  <strong>Fast and Non-Painful:</strong> Sessions are short,
                  safe, and almost painless.
                </li>
                <li>
                  <strong>Soft & Clear Skin:</strong> Helps reduce ingrown hair
                  and improves overall skin texture.
                </li>
                <li>
                  <strong>Time & Cost Effective:</strong> Saves money and
                  eliminates the need for monthly salon visits.
                </li>
              </ul>
            </div>

            {/* Why Choose Deskinova */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Why Choose Dskinova – The Best Laser Clinic in Jaipur
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Dskinova is considered to be among the top skincare and modern
                technology laser hair removal centers in Jaipur. Their certified
                dermatologists operate on the finest devices to provide safe,
                hygienic and result-oriented treatments. The clinic concentrates
                on individual treatment, which means every client receives an
                individual plan concerning his/her skin complexion and hair
                type. In Dskinova, comfort, safety and results can be seen come
                together to create an unparalleled experience.
              </p>
            </div>

            {/* Pre and Post */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Pre and Post-Treatment Car
              </h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                The tips to care about to maximize your laser hair removal
                treatment in Jaipur are: Preamble: Waxing, threading, bleaching:
                do not do it within two weeks before Treatment. Post-Treatment:
                Wear sunscreen, take care not to take hot showers and make sure
                that your skin is hydrated. These few tips will keep giving
                long-lasting effects and keep your post treatment glow.
              </p>
            </div>

            {/* Cost of Laser Hair */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Cost of Laser Hair Removal in Jaipur
              </h2>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                The prices of laser hair removal treatment in Jaipur are varying
                based on the location of the hair removal, the number of
                sessions needed, and your hair growing cycle. Dskinova has got
                good packages that cater to both men and women at a low cost.
                Their affordable packages are such that everyone can have a
                hassle-free, smooth, hair-free skin without emptying their
                pockets.
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
                    src={girl2}
                    alt="Cosmetology expert in Jaipur"
                    className="w-full md:w-[460px] h-[350px] object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* How to Choose */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-4">
                Conclusion – Reveal Your Confidence with Dskinova
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
                Extra hair should not be a reason to feel bad and not be a
                beauty. Through the laser hair removal treatment in Jaipur at
                Dskinova, you get the chance to have a silky-smooth skin, long
                lasting results and a new feeling of self. Finding the right
                balance between science and beauty with Dskinova, your preferred
                choice in permanent hair removal in Jaipur. Book your
                consultation today and let Dskinova redefine your beauty, one
                smooth session at a time.
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

export default LazerHair;
