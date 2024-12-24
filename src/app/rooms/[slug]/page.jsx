import React from "react";
import Header from "@/layouts/Header";
import Info from "./Info";
import Offers from "@/components/offersandpolicyandforms/Offers";
import EnquireForms from "@/components/offersandpolicyandforms/EnquireForms";
import Landing from "./Landing";
import Footer from "@/layouts/Footer";
import image1 from "../../../../public/images/room-inner/image1.jpg";
import image2 from "../../../../public/images/room-inner/image2.jpg";
import image3 from "../../../../public/images/room-inner/image3.jpg";
import image4 from "../../../../public/images/room-inner/image4.jpg";
import image5 from "../../../../public/images/room-inner/image5.jpg";

import "./room-inner.css";
function page() {
  const CarouselImages = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];
  return (
    <>
      <Header />
      <Landing CarouselImages={CarouselImages} />
      <Info />
      <Offers />
      <EnquireForms />
      <Footer />
    </>
  );
}

export default page;
