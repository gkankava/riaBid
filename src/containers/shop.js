import React, { useState } from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { getArtworks } from "../services/artworksService";
import cardImg from "../assets/dummy/cardImage.jpg";
import { Link } from "react-router-dom";
import { QueryClient, useQuery } from "react-query";
import Loading from "./loading";

function Shop(props) {
  const [filter, setFilter] = useState(false);
  const { isLoading, error, data } = useQuery("artworks", getArtworks);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
  console.log(data.data);
  return (
    <section id="shop" className="container auctions shop">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Artworks</Link>
        </li>
      </ul>
      <div className="shop-grid">
        <div className="filter-container">
          <div>
            <h3>Product Type</h3>
          </div>
          <div>
            <h3>Price</h3>
          </div>
          <div>
            <h3>Years</h3>
          </div>
        </div>
        <div className="grid-container-auctions">
          {data.data.map((item) => (
            <div key={item.id} className="product flex column">
              <Link to={"/store/" + item.id}>
                <div className="img">
                  <img src={cardImg}></img>
                </div>

                <p className="title">T-Shirt Summer Vibes</p>
              </Link>
              <div className="flex space-between">
                <div className="flex">
                  <p className="price">$89.99</p>
                  <p className="price gray">$119.99</p>
                </div>
                <p className="time gray"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
