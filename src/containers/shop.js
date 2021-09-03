import React, { useEffect, useState } from "react";

import { getArtworks, getArtworksNew } from "../services/artworksService";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./loading";
import sold from "../assets/sold.png";
import RangeSlider from "../components/shared/RangeSlider";
import ScrollToTopOnMount from "../components/shared/ScrollToTop";
import Pagination from "./Pagination";
import MetaTags from "react-meta-tags";

function Shop(props) {
  const categories = [
    "Painting",
    "Sculpture",
    "Photography",
    "Print",
    "Drawing, Collage or other Work on Paper",
    "Mixed Media",
    "Performance Art",
    "Installation",
    "Video/Film/Animation",
    "Architecture",
    "Fashion Design and Wearable Art",
    "Jewelry",
    "Design/Decorative Art",
    "Textile Arts",
    "Other",
  ];
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const { isLoading, error, data } = useQuery("artworks", getArtworks);
  const [filterType, setFilterType] = useState("");
  const [categoryType, setCategoryType] = useState([]);
  const [filterPrice, setFilterPrice] = React.useState([0, 1000000]);
  const [filterYear, setFilterYear] = useState([0, 9999]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const removeItemOnce = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };
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

  let filteredData = data.data
    .filter(
      (item) =>
        item.buy_it_now >= filterPrice[0] && item.buy_it_now <= filterPrice[1]
    )
    .filter((item) => item.year >= filterYear[0] && item.year <= filterYear[1])
    .filter((item) => item.product_type == filterType || filterType == "")
    .filter(
      (item) =>
        categoryType.includes(item.category_id?.toString()) ||
        categoryType.length === 0
    )
    .slice(indexOfFirstPost, indexOfLastPost);
  const sortFilteredData = () => {
    console.log(filteredData);
    filteredData = data.data.sort((a, b) => b.id - a.id);
    console.log(filteredData);
  };

  const newArr1 = filteredData.filter(function (value, index, Arr) {
    return index % 3 == 0;
  });

  const newArr2 = filteredData.filter(function (value, index, Arr) {
    return index % 3 == 1;
  });

  const newArr3 = filteredData.filter(function (value, index, Arr) {
    return index % 3 == 2;
  });

  return (
    <section id="shop" className="container auctions shop">
      <MetaTags>
        <title>ARTWORKS: Ria Bid | Store</title>
        <meta
          name="description"
          content="Find the work of the desired artist on Riabid."
        />
        <meta
          name="keywords"
          content="artworks, buy art, designer, sell art, art price, fine art auctions,Artwork made by the contemporary artists in the Georgians,artists Georgian,Georgia's 10 Contemporary Artists,Georgian artist works prices,i wants see georgian contemporary artists,georgian contemporary artists,"
        />
      </MetaTags>
      <div className="flex space-between">
        {" "}
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Artworks ({data.data.length})</Link>
          </li>
        </ul>
        <div>
          <div class="dropdown">
            <Link to="/new">New In</Link>
          </div>
        </div>
      </div>
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
            <h2>Category</h2>

            {categories.map((item, i) => (
              <label class="container-checkbox">
                {item}
                <input
                  onChange={(e) => {
                    e.target.checked
                      ? setCategoryType([...categoryType, e.target.value])
                      : setCategoryType(
                          removeItemOnce(categoryType, e.target.value)
                        );
                  }}
                  value={i + 1}
                  type="checkbox"
                />
                <span class="checkmark"></span>
              </label>
            ))}
          </div>
          <div
            className="cont"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2>Price</h2>
            <div style={{ width: "90%", alignSelf: "center" }}>
              <RangeSlider
                value={filterPrice}
                setValue={setFilterPrice}
                min={min}
                max={max}
              ></RangeSlider>
            </div>
          </div>
          <div
            className="cont"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2>Years</h2>
            <div style={{ width: "90%", alignSelf: "center" }}>
              <RangeSlider
                value={filterYear}
                setValue={setFilterYear}
                min={0}
                max={2100}
              ></RangeSlider>
            </div>
          </div>
        </div>
        <div className="new-shop">
          <div className="flex column space-between">
            {newArr1.map((item) => (
              <div key={item.id} className="product flex column">
                <Link to={"/store/" + item.id} style={{ position: "relative" }}>
                  {item.is_sold ? (
                    <div className="sold">
                      <img alt="Sold image" src={sold}></img>
                    </div>
                  ) : null}
                  <div className="img">
                    <img
                      alt={item.title}
                      src={item.image.replace(
                        "https://api.riabid.ge/storage/artworks/",
                        "https://api.riabid.ge/storage/artworks/thumbnail_"
                      )}
                    ></img>
                  </div>
                </Link>
                <Link to={"/store/" + item.id} style={{ position: "relative" }}>
                  <p className="title">
                    <i>{item.title}</i>
                  </p>
                </Link>
                <Link to={"/artists/" + item.artist_id} className="title2">
                  {item.display_name}
                </Link>
                {item.request_price ? (
                  <div className="flex space-between">
                    <div className="flex">
                      <p className="price">Contact for Price</p>
                    </div>
                    <p className="time gray"></p>
                  </div>
                ) : item.current_bid ? (
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
                      <p className="price">
                        {item.is_geo
                          ? `₾${item.buy_it_now}`
                          : `$${item.price_usd}`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex column space-between">
            {newArr2.map((item) => (
              <div key={item.id} className="product flex column">
                <Link to={"/store/" + item.id} style={{ position: "relative" }}>
                  {item.is_sold ? (
                    <div className="sold">
                      <img src={sold}></img>
                    </div>
                  ) : null}
                  <div className="img">
                    <img
                      src={item.image.replace(
                        "https://api.riabid.ge/storage/artworks/",
                        "https://api.riabid.ge/storage/artworks/thumbnail_"
                      )}
                    ></img>
                  </div>
                </Link>
                <Link to={"/store/" + item.id} style={{ position: "relative" }}>
                  <p className="title">
                    <i>{item.title}</i>
                  </p>
                </Link>
                <Link to={"/artists/" + item.artist_id} className="title2">
                  {item.display_name}
                </Link>
                {item.request_price ? (
                  <div className="flex space-between">
                    <div className="flex">
                      <p className="price">Contact for Price</p>
                    </div>
                    <p className="time gray"></p>
                  </div>
                ) : item.current_bid ? (
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
                      <p className="price">
                        {item.is_geo
                          ? `₾${item.buy_it_now}`
                          : `$${item.price_usd}`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex column space-between">
            {newArr3.map((item) => (
              <div key={item.id} className="product flex column">
                <Link to={"/store/" + item.id} style={{ position: "relative" }}>
                  {item.is_sold ? (
                    <div className="sold">
                      <img src={sold}></img>
                    </div>
                  ) : null}
                  <div className="img">
                    <img
                      src={item.image.replace(
                        "https://api.riabid.ge/storage/artworks/",
                        "https://api.riabid.ge/storage/artworks/thumbnail_"
                      )}
                    ></img>
                  </div>
                </Link>
                <Link to={"/store/" + item.id} style={{ position: "relative" }}>
                  <p className="title">
                    <i>{item.title}</i>
                  </p>
                </Link>
                <Link to={"/artists/" + item.artist_id} className="title2">
                  {item.display_name}
                </Link>
                {item.request_price ? (
                  <div className="flex space-between">
                    <div className="flex">
                      <p className="price">Contact for Price</p>
                    </div>
                    <p className="time gray"></p>
                  </div>
                ) : item.current_bid ? (
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
                      <p className="price">
                        {item.is_geo
                          ? `₾${item.buy_it_now}`
                          : `$${item.price_usd}`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div></div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={
            data.data
              .filter(
                (item) =>
                  item.buy_it_now >= filterPrice[0] &&
                  item.buy_it_now <= filterPrice[1]
              )
              .filter(
                (item) =>
                  item.year >= filterYear[0] && item.year <= filterYear[1]
              )
              .filter(
                (item) => item.product_type == filterType || filterType == ""
              )
              .filter(
                (item) =>
                  categoryType.includes(item.category_id?.toString()) ||
                  categoryType.length === 0
              ).length
          }
          currentPage={currentPage}
          paginate={paginate}
        ></Pagination>
      </div>
    </section>
  );
}

export default Shop;
