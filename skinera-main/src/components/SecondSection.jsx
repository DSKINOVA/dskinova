import React from "react";

// Assuming 'droplet' is the image you want to keep in the left column
import droplet from "../../public/Images/second-section/droplet.jpg";

import surface from "../../public/Images/second-section/both-hand-on-surface.jpg"; 
import girl from "../../public/Images/second-section/girl.jpg"; 
import leaf from "../../public/Images/second-section/both-hand-on-leaf.jpg"; 
import lemon from "../../public/Images/second-section/lemon-and-oil.jpg";

export default function SecondSection({ onBookAppointment }) {
  // Color codes matching the image:
  const BG_COLOR = 'bg-[#f7ebe0]'; // Light Muted Beige
  const TEXT_COLOR = 'text-[#8a5d43]'; // Muted Brown
  const BUTTON_COLOR = 'bg-[#b37556]'; // Button Brown

  return (
    // 1. Changed section background color to match the image
    <section className={`relative ${BG_COLOR} overflow-hidden`}>
      
      {/* Glow accents for background (kept from original) */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        {/* KEPT: Grid layout with 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* KEPT: Left Column with Image */}
          <figure className="w-full">
            <img
              src={surface}
              alt="Serum dropper in hand"
              className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
            />
          </figure>

          {/* CHANGED: Right Column Content with New Text and Colors */}
          <div className="text-center lg:text-left space-y-6">
            
            {/* Title 1: GLOW WITH CONFIDENCE (Larger, Bolder) */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight leading-none ${TEXT_COLOR}`}>
              GLOW WITH 
              <br />
              CONFIDENCE
            </h1>

            {/* Title 2: Your Skin Deserves the Best! (Italic) */}
            <h2 className={`text-2xl sm:text-3xl font-serif italic font-normal ${TEXT_COLOR}`}>
              Your Skin Deserves the Best!
            </h2>

            {/* Description Text */}
            <p className={`text-base sm:text-lg leading-relaxed font-light pt-2 ${TEXT_COLOR} max-w-xl mx-auto lg:mx-0`}>
              Personalized treatments for radiant skin & healthy hair, crafted just for you.
            </p>

            {/* Button: BOOK YOUR FREE SKIN ANALYSIS TODAY! */}
            <button
              type="button"
              onClick={onBookAppointment}
              className={`mt-4 ${BUTTON_COLOR} text-white px-8 py-3 rounded-md shadow-lg 
                         hover:bg-[#a66a4f] focus:outline-none focus:ring-2 focus:ring-${BUTTON_COLOR}/50 
                         font-semibold text-base sm:text-lg tracking-wider uppercase 
                         transition-all duration-300`}
            >
              BOOK YOUR FREE SKIN ANALYSIS TODAY!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}