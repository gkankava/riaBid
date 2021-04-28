import React from "react";
import { QueryClient } from "react-query";
import { Link } from "react-router-dom";

function Card({
  type,
  img,
  name,
  price,
  secondParam,
  end_time,
  index,
  display_name,
}) {
  return (
    <div className="product flex column">
      <a href={"/store/" + index}>
        <div className="img">
          <img src={img}></img>
        </div>

        <p className="title">
          <i>{name}</i>
        </p>
        <p className="titles">{display_name}</p>
      </a>
      <div className="flex space-between">
        <div className="flex">
          <p className="price">₾{price}</p>
        </div>
        <p className="time gray"></p>
      </div>
    </div>
  );
}

export default Card;
