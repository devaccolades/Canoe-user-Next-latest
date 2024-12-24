import React from "react";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import HeroSection from "./HeroSection";
import Menu from "./Menu";

import "./restaurant.css";

function page() {
  return (
    <>
      <Header />
      <HeroSection />
      <Menu />
      <Footer />
    </>
  );
}

export default page;
