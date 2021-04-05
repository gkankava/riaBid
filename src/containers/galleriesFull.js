import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import cardImg from "../assets/dummy/gallery-dummy.png";
import cardImg2 from "../assets/dummy/gallery-dummy2.png";

import { Link } from "react-router-dom";
import { getGallery } from "../services/galleriesService";
import { useQuery } from "react-query";
import Loading from "./loading";

function GalleriesFull(props) {
  const [filter, setFilter] = React.useState(false);
  const { isLoading, error, data } = useQuery(
    "gallery",
    () => getGallery(props.match.params.index),
    {}
  );

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
  const { gallery_title, location, legal_image, id } = data.data;
  return (
    <section id="shop" className="container galleries">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/galleries">Galleries</Link>
        </li>
        <li>
          <Link to={"/auctions/" + id}>{gallery_title}</Link>
        </li>
      </ul>
      <div className="full-gallery">
        <div className="text">
          <h1>{gallery_title}</h1>
          <p>{location}</p>
        </div>
        <div className="pictures">
          <img className="bot" src={legal_image}></img>
          <img className="top" src={cardImg2}></img>
        </div>
      </div>
    </section>
  );
}

export default GalleriesFull;