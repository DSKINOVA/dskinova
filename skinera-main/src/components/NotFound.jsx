import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import bgFlower from '../../public/Images/Our-Service/bg-Flower-png-Use-It-InLargeWidth.png';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdeee2]">
      <Header />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden py-20 px-4">
        {/* Decorative flowers */}
        <img 
          src={bgFlower} 
          className="hidden md:block absolute left-0 top-0 h-full opacity-60 object-contain object-left pointer-events-none" 
          alt="" 
        />
        <img 
          src={bgFlower} 
          className="hidden md:block absolute right-0 top-0 h-full opacity-60 object-contain object-right pointer-events-none -scale-x-100" 
          alt="" 
        />
        
        <div className="text-center relative z-10 bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl max-w-2xl w-full border border-white/50">
          <h1 className="text-8xl md:text-9xl font-domine text-[#b37556] mb-4 font-bold drop-shadow-sm">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-domine text-[#8c5a41] mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-700 mb-10 text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white transition-all duration-300 transform bg-[#c98963] rounded-full hover:bg-[#b37556] hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c98963]"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
