import React from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/cart-dummy.png";

export default function Cart() {
  return (
    <section id="shop" className="container auctions">
      <ul class="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <div className="grid-container-cart">
        <div className="item flex space-between">
          <div className="flex">
            <img src={cardImg}></img>
            <div className="flex column">
              <h3>Birmingham Museums Trust</h3>
              <p>Product ID: 261311</p>
            </div>
          </div>
          <p className="price">89.99$</p>
        </div>
        <div className="item flex space-between">
          <div className="flex">
            <img src={cardImg}></img>
            <div className="flex column">
              <h3>Birmingham Museums Trust</h3>
              <p>Product ID: 261311</p>
            </div>
          </div>
          <p className="price">89.99$</p>
        </div>
        <div className="item flex space-between">
          <div className="flex">
            <img src={cardImg}></img>
            <div className="flex column">
              <h3>Birmingham Museums Trust</h3>
              <p>Product ID: 261311</p>
            </div>
          </div>
          <p className="price">89.99$</p>
        </div>
        <div className="item flex space-between">
          <div className="flex">
            <img src={cardImg}></img>
            <div className="flex column">
              <h3>Birmingham Museums Trust</h3>
              <p>Product ID: 261311</p>
            </div>
          </div>
          <p className="price">89.99$</p>
        </div>
        <div className="full flex column">
          <h3>Full Amount: 229.99$</h3>
          <Link to="/paynow">Pay Now</Link>
        </div>
      </div>
    </section>
  );
}
