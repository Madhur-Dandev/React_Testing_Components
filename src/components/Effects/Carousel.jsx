import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselComp = () => {
  return (
    <Carousel>
      <div>
        <img src="/images/slider1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/images/slider2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/images/slider3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComp;
