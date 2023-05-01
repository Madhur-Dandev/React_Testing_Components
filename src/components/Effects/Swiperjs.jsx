import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import "./styles.css";
// register Swiper custom elements
function Swiperjs() {
  const swiperContainer = useRef();

  useEffect(() => {
    swiperContainer.current.addEventListener("slidechange", (event) => {
      //   console.log(event);
      console.log();
    });
  }, []);

  register();
  return (
    <swiper-container
      ref={swiperContainer}
      loop="true"
      navigation="true"
      pagination="true"
      autoplay-delay="2000"
      allow-touch-move="false"
    >
      <swiper-slide>
        <img src="/images/slider1.jpg" loading="lazy" />
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider2.jpg" loading="lazy" />
      </swiper-slide>
      <swiper-slide>
        <img src="/images/slider3.jpg" loading="lazy" />
      </swiper-slide>
    </swiper-container>
  );
}

export default Swiperjs;
