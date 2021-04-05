import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/cart-dummy.png";
import { getBag } from "../services/bagService";
import Loading from "./loading";

export default function Cart() {
  const { isLoading, error, data } = useQuery("bag", getBag);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
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
        {data.data.map((item) => (
          <div className="item flex space-between">
            <div className="flex">
              <img src={item.image}></img>
              <div className="flex column">
                <h3>{item.title}</h3>
                <p>Product ID: {item.artwork_id}</p>
              </div>
            </div>
            <p className="price">
              {item.on_auction ? item.current_bid : item.buy_it_now}$
            </p>
          </div>
        ))}

        <div className="full flex column">
          <h3>Full Amount: 229.99$</h3>
          <Link to="/paynow">Pay Now</Link>
        </div>
      </div>
    </section>
  );
}
