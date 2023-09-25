import ContentSection from "components/ContentSection";
import HeroSection from "components/HeroSection";
import HomeNavbar from "components/HomeNavbar";
import React from "react";
import PricingSection from "./PricingSection";
import Footer from "components/Footer";

const Home = () => {
  return (
    <div>
      <HomeNavbar></HomeNavbar>
      <HeroSection></HeroSection>
      <ContentSection></ContentSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;