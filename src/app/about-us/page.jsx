import React from "react";
import Header from "@/layouts/Header";
import HeroSection from "./HeroSection";
import Accommodations from "./Accommodations";
import Offers from "@/components/offersandpolicyandforms/Offers";
import EnquireForms from "@/components/offersandpolicyandforms/EnquireForms";
import Footer from "@/layouts/Footer";
import "./about-us.css";
import image1 from "../../..//public/images/about-us/image1.jpeg";
import image2 from "../../..//public/images/about-us/image2.jpeg";
import image3 from "../../..//public/images/about-us/image3.jpeg";
import image4 from "../../..//public/images/about-us/image4.jpeg";

function page() {
  const CarouselImages = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
  ];
  return (
    <>
      <Header />
      <HeroSection CarouselImages={CarouselImages} />
      <Accommodations />
      <Offers />
      <EnquireForms />
      <Footer />
    </>
  );
}

export default page;
