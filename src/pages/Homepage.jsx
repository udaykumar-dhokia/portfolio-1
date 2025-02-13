import React from "react";
import { DockDemo } from "../components/platform/dock";
import Hero from "../components/platform/hero";
// import Header from "../components/platform/header";
import { TextRevealDemo } from "../components/platform/revealText";
import FooterSection from "../components/platform/footer";
import Header from "../components/platform/header.jsx";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import InfiniteCarousel from "../components/platform/InfiniteCarousel.jsx";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Recent from "../components/platform/recent.jsx";
import Contact from "../components/platform/contact.jsx";

const Homepage = () => {
  return (
    <div className="h-screen w-full z-50">
      <Header />
      {/*<ScrollProgress className="top-[65px]"/>*/}
      <Hero />
      <InfiniteCarousel />
      {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white">
        <VelocityScroll>Velocity Scroll</VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div> */}
      <Recent />
      <TextRevealDemo />
      <Contact />
      <FooterSection />
    </div>
  );
};

export default Homepage;
