import React from "react";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slide from "./Slide";

import bg from "../../assets/bg/bg1.jpg";
import bg2 from "../../assets/bg/bg2.jpg";

function SliderComp({ activeSlide, setActiveSlide, heroSliderRef }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
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
        author="A.W."
        text="In the future, everyone will be world famous for 15 minutes."
        btn={{
          action: () => window.location.href("/store"),
          text: "Browse art",
        }}
      />
      <Slide
        img={bg2}
        author="A.W."
        text="In the future, everyone will be world-famous for 15 minutes."
        btn={{ action: () => console.log("click"), text: "Browse art" }}
      />
      <Slide
        img={bg}
        author="A.W."
        text="In the future, everyone will be world-famous for 15 minutes."
        btn={{ action: () => console.log("click"), text: "Browse art" }}
      />
    </Slider>
  );
}

export default SliderComp;
