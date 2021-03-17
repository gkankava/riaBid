import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import cardImg from "../assets/dummy/cardImage.jpg";
import { Link } from "react-router-dom";

function Auctions(props) {
  const [filter, setFilter] = React.useState(false);

  return (
    <section id="shop" className="container auctions">
      <ul class="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Auctions</Link>
        </li>
      </ul>
      <div className="grid-container-auctions">
        <div className="product flex column">
          <Link to="/store/0">
            <div className="img">
              <img src={cardImg}></img>
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

        <div className="product flex column">
          <Link to="/store/0">
            <div className="img">
              <img src={cardImg}></img>
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
        <div className="product flex column">
          <Link to="/store/0">
            <div className="img">
              <img src={cardImg}></img>
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
        <div className="product flex column">
          <Link to="/store/0">
            <div className="img">
              <img src={cardImg}></img>
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
        <div className="product flex column">
          <Link to="/store/0">
            <div className="img">
              <img src={cardImg}></img>
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
        <div className="product flex column">
          <Link to="/store/0">
            <div className="img">
              <img src={cardImg}></img>
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
      </div>
    </section>
  );
}

export default Auctions;
