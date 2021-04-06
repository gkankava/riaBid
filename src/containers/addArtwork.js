import React from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/bid.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import artistsIcon from "../assets/icons/artists.png";
import artworksIcon from "../assets/icons/artworks.png";
import accountIcon from "../assets/icons/account.png";
import favoritesIcon from "../assets/icons/favorites.png";
import historyIcon from "../assets/icons/history.png";
import plus from "../assets/icons/plus.png";
import { useQuery } from "react-query";
import { getArtists } from "../services/artistsService";
import Loading from "./loading";

function AddArtwork(props) {
  const [filter, setFilter] = React.useState(false);
  const { isLoading, error, data } = useQuery("artists", getArtists);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <section id="shop" className="container">
      <div className="dashboard-container">
        <div className="flex column sidebar">
          <h3>Pages</h3>
          <Link to="/dashboard">
            <img src={dashboardIcon}></img>
            Dashboard
          </Link>

          <Link to="/dashboard/artworks">
            <img src={artworksIcon}></img>Artworks
          </Link>
          <Link to="/dashboard/account">
            <img src={accountIcon}></img>Account
          </Link>
          <Link to="/dashboard/favorites">
            <img src={favoritesIcon}></img>Favorites
          </Link>
          <Link to="/dashboard/history">
            <img src={historyIcon}></img>Order History
          </Link>
        </div>
        <div className="flex column  contact-container dashboard">
          <h2 style={{ marginBottom: "1vw" }}>Add Artwork</h2>
          <form className="contact-form dashboard">
            <select name="cars" id="cars">
              {data.data.map((item) => (
                <option value={item.id}>{item.display_name}</option>
              ))}
            </select>

            <input type="text" name="title" placeholder="Title"></input>
            <input type="text" name="buy_it_now" placeholder="Price"></input>
            <input type="text" name="year" placeholder="Year"></input>
            <textarea
              rows="5"
              type="text"
              name="description"
              placeholder="Description"
            ></textarea>
            <select name="product_type" id="product_type">
              <option value="1">Private Collection</option>
              <option value="2">Gallery</option>
            </select>
            <input type="file" name="avatar" rows="10"></input>
            <input
              style={{ cursor: "pointer" }}
              type="submit"
              value="Add Artwork"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddArtwork;
