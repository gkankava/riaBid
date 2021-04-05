import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import cardImg from "../assets/dummy/gallery.png";
import { Link } from "react-router-dom";
import { getGalleries } from "../services/galleriesService";
import { useQuery } from "react-query";
import Loading from "./loading";

function Galleries(props) {
  const [filter, setFilter] = React.useState(false);
  const { isLoading, error, data } = useQuery("galleries", getGalleries);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

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
        {data.data.map((item) => (
          <div key={item.id} className="product flex column">
            <Link to={"/galleries/" + item.id}>
              <div className="img">
                <img src={item.legal_image}></img>
              </div>

              <p className="title">{item.gallery_title}</p>
            </Link>
            <div className="flex space-between">
              <div className="flex">
                <p className="location">{item.location}</p>
              </div>
              <Link to={"/galleries/" + item.id}>
                <button className="main-button">View Gallery</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galleries;
