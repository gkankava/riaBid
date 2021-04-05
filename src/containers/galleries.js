import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import cardImg from "../assets/dummy/gallery.png";
import { Link } from "react-router-dom";

function Galleries(props) {
  const [filter, setFilter] = React.useState(false);

  return (
    <section id="shop" className="container galleries">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Galleries</Link>
        </li>
      </ul>
      <div className="grid-container-galleries">
        <div className="product flex column">
          <Link to="/galleries/1">
            <div className="img">
              <img src={cardImg}></img>
            </div>

            <p className="title">David Zwirner</p>
          </Link>
          <div className="flex space-between">
            <div className="flex">
              <p className="location">New York & 10 other location</p>
            </div>
            <Link to="/galleries/1">
              <button className="main-button">View Gallery</button>
            </Link>
          </div>
        </div>

        <div className="product flex column">
          <Link to="/galleries/1">
            <div className="img">
              <img src={cardImg}></img>
            </div>

            <p className="title">David Zwirner</p>
          </Link>
          <div className="flex space-between">
            <div className="flex">
              <p className="location">New York & 10 other location</p>
            </div>
            <Link to="/galleries/1">
              <button className="main-button">View Gallery</button>
            </Link>
          </div>
        </div>
        <div className="product flex column">
          <Link to="/galleries/1">
            <div className="img">
              <img src={cardImg}></img>
            </div>

            <p className="title">David Zwirner</p>
          </Link>
          <div className="flex space-between">
            <div className="flex">
              <p className="location">New York & 10 other location</p>
            </div>
            <Link to="/galleries/1">
              <button className="main-button">View Gallery</button>
            </Link>
          </div>
        </div>
        <div className="product flex column">
          <Link to="/galleries/1">
            <div className="img">
              <img src={cardImg}></img>
            </div>

            <p className="title">David Zwirner</p>
          </Link>
          <div className="flex space-between">
            <div className="flex">
              <p className="location">New York & 10 other location</p>
            </div>
            <Link to="/galleries/1">
              <button className="main-button">View Gallery</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galleries;
