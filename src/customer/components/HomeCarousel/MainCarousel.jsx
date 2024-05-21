import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      src={item.image}
      alt={item.title}
      className="cursor-pointer"
      role="presentation"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
