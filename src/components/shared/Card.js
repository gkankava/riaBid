import React from "react";
import { Link } from "react-router-dom";

function Card({ type, img, name, price, secondParam, timeRemaining, index }) {
  return (
    <div className="card">
      <Link to={`/store/${index}`}>
        <img src={img} alt="" />
        <h4 className="name">{name}</h4>
        <div className="content-wrapper">
          <div className="first-wrapper">
            <span className="price">{price}</span>
            {type !== "auction" && secondParam ? (
              <span className="sale">{secondParam}</span>
            ) : type === "auction" ? (
              <span className="bidCount">{secondParam}</span>
            ) : null}
          </div>
          {type === "auction" && <span className="time">6day 9h</span>}
        </div>
      </Link>
    </div>
  );
}

export default Card;
