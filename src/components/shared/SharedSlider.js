import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import cardImg from "../../assets/dummy/cardImage.jpg";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

function SharedSlider({ auction, title, data, slidesToShow, special }) {
  const sliderRef = useRef();
  const [activeItem, setActiveItem] = useState(0);
  const [prevItem, setPrevItem] = useState(0);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 4,
    initialSlide: 0,

    beforeChange: (current, next) => setActiveItem(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow - 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 726,
        settings: {
          slidesToShow: slidesToShow > 3 ? slidesToShow - 2 : slidesToShow - 1,
          slidesToScroll: 2,
          // initialSlide: 0,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: slidesToShow > 3 ? slidesToShow - 3 : slidesToShow - 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = data.map((item) => {
    return (
      <Card
        is_geo={item.is_geo}
        price_usd={item.price_usd}
        key={item.id}
        index={item.id}
        type={item.on_auction}
        name={item.title}
        img={item.image}
        sold={item.is_sold}
        price={item.buy_it_now}
        display_name={item.display_name}
        secondParam={item.on_auction ? item.current_bid : undefined}
        end_time={item.end_time}
      />
    );
  });
  return (
    <div className="selectedFor container">
      <div className="head-wrapper">
        <Link to={special ? "/pride" : "/store"}>
          {" "}
          <h3>{title}</h3>
        </Link>
        <div className="action-wrapper">
          <div className="arrow-wrapper">
            <div
              className={
                activeItem === 0 ? "left-arrow arrow-disabled" : "left-arrow"
              }
              onClick={() => sliderRef.current.slickPrev()}
            >
              <BsArrowLeftShort />
            </div>
            <div
              className="right-arrow"
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            >
              <BsArrowRightShort />
            </div>
          </div>
          <Link to={special ? "/pride" : "/store"}>
            <button className="btn-placebid">
              <Link to={special ? "/pride" : "/store"}>SHOW MORE</Link>
            </button>
          </Link>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {items}
      </Slider>
    </div>
  );
}

export default SharedSlider;
