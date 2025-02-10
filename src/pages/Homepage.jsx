import React from "react";
import { DockDemo } from "../components/platform/dock";
import Hero from "../components/platform/hero";
import Header from "../components/platform/header";
import { TextRevealDemo } from "../components/platform/revealText";
import FooterSection from "../components/platform/footer";

const Homepage = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <Hero />
      <TextRevealDemo />
      <FooterSection />
    </div>
  );
};

export default Homepage;
