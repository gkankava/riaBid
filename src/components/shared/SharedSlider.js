import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import cardImg from "../../assets/dummy/cardImage.jpg";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function SharedSlider({ auction, title, data }) {
  const dummy = [
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : null,
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : "$999.99",
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "10 Bids" : null,
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "7 Bids" : null,
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : null,
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : "$999.99",
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : "$999.99",
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : null,
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : null,
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : null,
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : "$999.99",
    },
    {
      img: cardImg,
      type: auction ? "auction" : "sale",
      name: "Holmustund",
      price: "$699.99",
      secondParam: auction ? "0 Bids" : "$999.99",
    },
  ];
  const sliderRef = useRef();
  const [activeItem, setActiveItem] = useState(0);
  const [prevItem, setPrevItem] = useState(0);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    beforeChange: (current, next) => setActiveItem(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 726,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 0,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = data.map((item) => {
    return (
      <Card
        key={item.id}
        index={item.id}
        type={item.on_auction}
        name={item.title}
        img={item.image}
        price={item.buy_it_now}
        secondParam={item.on_auction ? item.current_bid : undefined}
        end_time={item.end_time}
      />
    );
  });
  return (
    <div className="selectedFor container">
      <div className="head-wrapper">
        <h3>{title}</h3>
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
          <button className="btn-placebid">SHOW MORE</button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {items}
      </Slider>
    </div>
  );
}

export default SharedSlider;
