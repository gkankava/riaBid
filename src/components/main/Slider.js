import React from "react";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slide from "./Slide";

import bg from "../../assets/bg/bg1.png";
import bg2 from "../../assets/bg/bg2.jpg";
import bg3 from "../../assets/bg/bg3.jpg";
function SliderComp({ activeSlide, setActiveSlide, heroSliderRef }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <Slider {...settings} ref={heroSliderRef}>
      <Slide
        img={bg}
        alt="test"
        author="A.W."
        text="IN THE FUTURE, EVERYONE WILL BE WORLD FAMOUS FOR 15 MINUTES."
        btn={{
          action: () => window.location.href("/store"),
          text: "Browse art",
        }}
      />

      <Slide
        img={bg2}
        alt="test"
        author="A.W."
        text="IN THE FUTURE, EVERYONE WILL BE WORLD FAMOUS FOR 15 MINUTES."
        btn={{
          action: () => window.location.href("/store"),
          text: "Browse art",
        }}
      />
      <Slide
        img={bg3}
        alt="test"
        author="A.W."
        text="IN THE FUTURE, EVERYONE WILL BE WORLD FAMOUS FOR 15 MINUTES."
        btn={{
          action: () => window.location.href("/store"),
          text: "Browse art",
        }}
      />
    </Slider>
  );
}

export default SliderComp;
