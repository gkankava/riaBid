import React from "react";
import { QueryClient } from "react-query";
import { Link } from "react-router-dom";
import soldImg from "../../assets/sold.png";
function Card({
  type,
  img,
  name,
  price,
  secondParam,
  end_time,
  index,
  display_name,
  sold,
}) {
  return (
    <div className="product flex column">
      {sold ? (
        <div className="sold">
          <img alt="test" src={soldImg}></img>
        </div>
      ) : null}
      <a href={"/store/" + index}>
        <div className="img">
          <img alt="test" src={img}></img>
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
