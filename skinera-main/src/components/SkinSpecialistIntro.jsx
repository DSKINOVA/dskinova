import React from "react";
import { Link } from "react-router-dom";
import skin from "../../public/Images/cosmatic/Skin Specialist in Jaipur.jpg";

export default function SkinSpecialistIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
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

        <div>
          <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
            Who is a Cosmetologist
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

        <div className="mt-2">
          <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
            Why Visit a Professional Cosmetologist?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Home made beauty tricks can be very alluring, however, there is no
            match to professional attention. A cosmetologist in Jaipur is able
            to treat and resolve certain issues of the skin or hair, and provide
            tailored care, as well as instructing on the long-term well-being.
            Anti-aging facials, hair strengthening therapies, professional
            cosmetology can make sure of safety, hygiene and visible results.
            Expert care is not only a way of improving your appearance but also
            the way to improve your confidence and well-being.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
            Popular Services Offered by Cosmetologists in Jaipur
          </h2>


          <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6 md:gap-10 items-start">
            {/* LEFT — UL LIST */}
            <div className="flex-1">
              <ul className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
                <li>
                  <strong>Hair Treatments:</strong> Hair coloring, keratin
                  treatment, hair spa, and scalp treatments.
                </li>
                <li>
                  <strong>Skin Care:</strong> Skin care, anti-aging,
                  rejuvenation, and acne care.
                </li>
                <li>
                  <strong>Makeup Services:</strong> Wedding make-up, party
                  make-up, and professional make-up.
                </li>
                <li>
                  <strong>Other Services:</strong> Manicure, Pedicure, Waxing,
                  Threading, and beauty therapy.
                </li>
              </ul>
            </div>

          
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={skin}
                alt="Popular cosmetology services"
                className="w-full md:w-[460px] h-[340px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
            Benefits of Regular Cosmetic Treatments
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Frequent visits to a cosmetologist can enhance the skin texture,
            hair conditions, and the appearance. Professional treatments are
            used to minimise frizz, acne and ageing effects and make the wearer
            more confident. Also, a relaxing ambiance of a properly furnished
            salon can decrease stress levels and encourages mental health.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
            Why Jaipur is a Great Place for Cosmetology Services
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Jaipur is quickly emerging as an attraction site among beauty and
            wellness users. The city has the availability of highly professional
            people, modern salons, and quality beauty products. The
            cosmetologists of Jaipur offer different services to skin and hair
            types with a combination of traditional and modern methods. That is
            why it is easy and satisfying to find a reliable{" "}
            <Link to="/news" className="text-[#BE7F58]">
              cosmetologist in Jaipur.
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-2xl text-center sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
            Conclusion
          </h4>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            An experienced cosmetologist in Jaipur will change your beauty
            regime and make you attain a healthy skin and hair. Youspend money
            on your appearance, confidence, and well-being by making the correct
            choice of an expert. Whether it is skincare, hair salons, or
            cosmetics, Jaipur boasts of some of the best cosmetologists who can
            make you look and feel good. Wait no longer--book an appointment and
            see how much better professional care can make you feel.
          </p>
        </div>
      </div>
    </section>
  );
}
