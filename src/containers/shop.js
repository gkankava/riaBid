import React, { useState } from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { getArtworks } from "../services/artworksService";
import cardImg from "../assets/dummy/cardImage.jpg";
import { Link } from "react-router-dom";
import { QueryClient, useQuery } from "react-query";
import Loading from "./loading";
import RangeSlider from "../components/shared/RangeSlider";

function Shop(props) {
  const [filter, setFilter] = useState(false);
  const { isLoading, error, data } = useQuery("artworks", getArtworks);
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = React.useState([0, 1000000]);
  const [filterYear, setFilterYear] = useState([0, 9999]);
  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  var keys = Object.keys(data.data);
  var min = data.data[keys[0]].buy_it_now; // ignoring case of empty list for conciseness
  var max = data.data[keys[0]].buy_it_now;
  var i;

  for (i = 1; i < keys.length; i++) {
    var value = data.data[keys[i]]?.buy_it_now;
    if (value < min) min = value;
    if (value > max) max = value;
  }
  const years = [];
  for (i = 1; i < keys.length; i++) {
    years.push(data.data[keys[i]].year);
  }

  var minYear = data?.data[keys[0]]?.year; // ignoring case of empty list for conciseness
  var maxYear = data?.data[keys[0]]?.year;

  for (i = 1; i < keys.length; i++) {
    var value = data.data[keys[i]].year;
    if (value < minYear) minYear = value;
    if (value > maxYear) maxYear = value;
  }

  const filteredData = data.data
    .filter(
      (item) =>
        item.buy_it_now >= filterPrice[0] && item.buy_it_now <= filterPrice[1]
    )
    .filter((item) => item.year >= filterYear[0] && item.year <= filterYear[1])
    .filter((item) => item.product_type == filterType || filterType == "");

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
          <div className="cont">
            <h2>Product Type</h2>
            <label class="container-checkbox">
              Private Collection
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilterType(e.target.value)
                    : setFilterType("")
                }
                value="1"
                type="checkbox"
              />
              <span class="checkmark"></span>
            </label>
            <label class="container-checkbox">
              Gallery
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilterType(e.target.value)
                    : setFilterType("")
                }
                value="2"
                type="checkbox"
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="cont">
            <h2>Price</h2>
            <RangeSlider
              value={filterPrice}
              setValue={setFilterPrice}
              min={min}
              max={max}
            ></RangeSlider>
          </div>
          <div className="cont">
            <h2>Years</h2>
            <RangeSlider
              value={filterYear}
              setValue={setFilterYear}
              min={0}
              max={2100}
            ></RangeSlider>
          </div>
        </div>
        <div className="grid-container-auctions">
          {filteredData.map((item) => (
            <div key={item.id} className="product flex column">
              <Link to={"/store/" + item.id}>
                <div className="img">
                  <img src={item.image}></img>
                </div>

                <p className="title">{item.title}</p>
                <p className="title2">{item.display_name}</p>
              </Link>
              {item.current_bid ? (
                <div className="flex space-between">
                  <div className="flex">
                    <p className="price">₾{item.current_bid}</p>
                    <p className="price gray">₾{item.buy_it_now}</p>
                  </div>
                  <p className="time gray"></p>
                </div>
              ) : (
                <div className="flex space-between">
                  <div className="flex">
                    <p className="price">₾{item.buy_it_now}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
