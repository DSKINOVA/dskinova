import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";
import ContactPage from "./components/contact.jsx";
import NewsTemplate from "./components/NewsTemplate.jsx";
import NewsArchive from "./components/NewsArchive.jsx";
import { AdminLogin, Dashboard } from "./adminroutes/index.js";
import GalleryPage from "./components/GalleryPage.jsx";
import ReviewsDemo from "./components/ReviewsDemo.jsx";
import Wellness from "./components/Wellness.jsx";
import SocialBar from "./components/SocialBar";
import TimedPopup from "./components/TimedPopup.jsx";
// import SkinDoctor from "./components/SkinDoctor.jsx";
// import Cosmatic from "./components/Cosmatic.jsx";
// import AntiAging from "./components/AntiAging.jsx";
// import LazerTattoo from './components/LazerTattoo.jsx'
// import LazerHair from './components/LazerHair.jsx'
// import Pigmentation from './components/Pigmentation.jsx'
// import SkinClinic from "./components/SkinClinic.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsArchive />} />
        <Route path="/newstemplate" element={<NewsTemplate />} />
        <Route path="/news/:slug" element={<NewsTemplate />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews-demo" element={<ReviewsDemo />} />
        <Route path="/wellness" element={<Wellness />} />
        {/* Migrated to dynamic database-backed services */}
        {/* <Route path="/skin-doctor-in-jaipur" element={<SkinDoctor />} /> */}
        {/* <Route path="/cosmeologist-in-jaipur" element={<Cosmatic />} /> */}
        {/* <Route path="/anti-aging-in-jaipur" element={<AntiAging />} /> */}
        {/* <Route path="/lazer-tattoo-removal-in-jaipur" element={<LazerTattoo />} /> */}
        {/* <Route path='/pigmentation-treatment-doctor-in-jaipur' element={<Pigmentation />} /> */}
        {/* <Route path='/skin-clinic-in-jaipur' element={<SkinClinic />} /> */}
        {/* Service pages - must be LAST so specific routes match first */}
        <Route path="/:id" element={<ServiceDetail />} />
        {/* 404 Page - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* 🆕 The popup will now appear across all routes (except admin routes, which is good practice!) */}
      <TimedPopup />

      <SocialBar />
    </Router>
  );
}
