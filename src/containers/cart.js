import React from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/cart-dummy.png";
import { getBag } from "../services/bagService";
import { createOrder, removeItem } from "../services/dashboardService";
import Loading from "./loading";
import { toast } from "react-toastify";

export default function Cart() {
  const orderMutation = useMutation(createOrder, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast("You successfully created order");
      window.location.href =
        "https://api.riabid.ge/payorder/" + data.data.order_id;
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

  const removeMutation = useMutation(removeItem, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast("You successfully removed item");
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
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
        {data.data.bag.length
          ? data.data.bag.map((item) => (
              <div key={item.id} className="item flex space-between">
                <div className="flex">
                  <img src={item.image}></img>
                  <div className="flex column">
                    <h3>{item.title}</h3>
                    <p>Product ID: {item.artwork_id}</p>
                  </div>
                </div>
                <div className="flex column space-between">
                  <p className="price">
                    {item.on_auction ? item.current_bid : item.buy_it_now}₾
                  </p>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => removeMutation.mutate(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          : "Your cart is empty"}

        <div className="full flex column">
          <h3>Full Amount: {data.data.total}₾</h3>
          <button onClick={() => orderMutation.mutate()}>Pay Now</button>
        </div>
      </div>
    </section>
  );
}
