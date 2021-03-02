import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import cardImg from "../../assets/dummy/cardImage.jpg";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function SharedSlider({ auction, title }) {
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

  const items = dummy.map((i, key) => {
    return (
      <Card
        key={key}
        index={key}
        type={i.type}
        name={i.name}
        img={i.img}
        price={i.price}
        secondParam={i.secondParam || undefined}
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
