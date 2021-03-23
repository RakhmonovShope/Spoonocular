import React from "react";
import Carousel from "react-elastic-carousel";

import CardCarousel from "./CardCarousel";
import "./Carousel.scss";

const CarouselSlider = () => {
  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
  ];

  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <CardCarousel number="1" />
        <CardCarousel number="2" />
        <CardCarousel number="3" />
        <CardCarousel number="4" />
        <CardCarousel number="5" />
        <CardCarousel number="6" />
        <CardCarousel number="7" />
        <CardCarousel number="8" />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
