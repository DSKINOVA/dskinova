import React from "react";
import { Link } from "react-router-dom";

export default function SkinSpecialistIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-domine font-medium text-[#BE7F58] mb-6 leading-tight">
            Skin Specialist in Jaipur – Expert Care for Radiant Skin at Dskinova
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            A well-placed self-image and an outer image are positive skin that is
            healthy and radiant. Nevertheless, due to hot weather, increasing
            pollution, and a hectic lifestyle of Jaipur, it may be difficult to
            ensure perfect skin. It is there that a professional skin specialist in
            Jaipur can come in. Our highly qualified dermatologists in Dskinova can
            apply a mix of refined technology and individualized care in order to
            ensure that you have naturally beautiful skin.
          </p>
        </div>

        {/* Why You Need Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-domine font-medium text-[#BE7F58] mb-6">
            Why You Need a Skin Specialist in Jaipur
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
            Your skin should be taken care of by professionals and not by the
            haphazard treatments at home. Skin specialist in Jaipur assists in
            identifying and managing several issues such as acne, pigmentation,
            dullness, hair fall, and premature aging. In the case of Dskinova, our
            dermatologists determine the cause of your issue and provide safe,
            effective, and personalized treatment tailored to your skin type.
            Consistency of the same not only cures the available conditions, but
            also averts imminent skin damages.
          </p>
          
           {/* Buttons Section */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/service/laser-skin-therapy"
            className="inline-block bg-[#c98963] hover:bg-[#be7f58] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-base sm:text-lg"
          >
            Skin
          </Link>
          <Link
            to="/service/hairfall"
            className="inline-block bg-[#c98963] hover:bg-[#be7f58] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-base sm:text-lg"
          >
            Hair
          </Link>
        </div>
        </div>

       
      </div>
    </section>
  );
}

