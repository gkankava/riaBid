import React from "react";
import Card from "../shared/Card";
import cardImg from "../../assets/dummy/cardImage.jpg";
function CardGrid({ auction }) {
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

  let items = dummy.map((i, k) => {
    return (
      <Card
        key={k}
        index={k}
        type={i.type}
        name={i.name}
        img={i.img}
        price={i.price}
        secondParam={i.secondParam || undefined}
      />
    );
  });
  return <div className="grid-container">{items}</div>;
}

export default CardGrid;
