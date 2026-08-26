import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header.jsx";
import HeroTwo from "./HeroTwo.jsx";
import DoctorBio from "./DoctorBio.jsx";
import AdvancedCare from "./AdvancedCare.jsx";
import HowWeWork from "./HowWeWork.jsx";
import ExpertSkincare from "./ExpertSkincare.jsx";
import Footer from "./Footer.jsx";
import AppointmentModal from "./AppointmentModal.jsx";

export default function AboutUsPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);
  const handleAppointmentSubmit = (payload) => {
    // TODO: Wire to backend or service (email, API). For now, just log.
    console.log("Appointment request:", payload);
  };

  return (
    <div className="min-h-screen bg-[#e0a075]">
      <Helmet>
        <title>About Us | DSkinova — Skin Specialist in Jaipur</title>
        <meta name="description" content="Meet Dr. DSkinova's expert team of skin specialists and cosmetologists in Jaipur. Learn about our mission, advanced skincare treatments, and how we work." />
        <link rel="canonical" href="https://www.dskinova.com/about" />
        <meta property="og:title" content="About Us | DSkinova — Skin Specialist in Jaipur" />
        <meta property="og:description" content="Meet Dr. DSkinova's expert team of skin specialists and cosmetologists in Jaipur. Learn about our mission, advanced skincare treatments, and how we work." />
        <meta property="og:url" content="https://www.dskinova.com/about" />
      </Helmet>
      <Header onBookAppointment={openAppointment} />
      <HeroTwo />
      <DoctorBio />
      <AdvancedCare />
      <HowWeWork />
      <ExpertSkincare />
      <Footer />
      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={handleAppointmentSubmit}
      />
    </div>
  );
}
