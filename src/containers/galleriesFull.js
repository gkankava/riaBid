import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import cardImg from "../assets/dummy/gallery-dummy.png";
import cardImg2 from "../assets/dummy/gallery-dummy2.png";

import { Link } from "react-router-dom";

function GalleriesFull(props) {
  const [filter, setFilter] = React.useState(false);

  return (
    <section id="shop" className="container galleries">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Gallery</Link>
        </li>
      </ul>
      <div className="full-gallery">
        <div className="text">
          <h1>David Zwirner</h1>
          <p>New York</p>
          <p>Luc Tuymans: Monkey Business</p>
          <p>David Zwirner at FIAC Online Viewing Rooms 2021</p>
          <p>Mar 2nd – 7th</p>
        </div>
        <div className="pictures">
          <img className="bot" src={cardImg}></img>
          <img className="top" src={cardImg2}></img>
        </div>
      </div>
    </section>
  );
}

export default GalleriesFull;
