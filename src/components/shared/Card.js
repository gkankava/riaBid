import React from "react";
import { Link } from "react-router-dom";

function Card({ type, img, name, price, secondParam, end_time, index }) {
  return (
    <div className="product flex column">
      <Link to={"/store/" + index}>
        <div className="img">
          <img src={img}></img>
        </div>

        <p className="title">T-Shirt Summer Vibes</p>
      </Link>
      <div className="flex space-between">
        <div className="flex">
          <p class="price">$89.99</p>
          <p class="price gray">$119.99</p>
        </div>
        <p class="time gray">6d 9h</p>
      </div>
    </div>
  );
}

export default Card;
