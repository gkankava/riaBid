import React from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/bid.png";
import dashboardIcon from "../assets/icons/dashboard.svg";
import artistsIcon from "../assets/icons/artists.svg";
import artworksIcon from "../assets/icons/artworks.svg";
import accountIcon from "../assets/icons/account.svg";
import favoritesIcon from "../assets/icons/favorites.svg";
import historyIcon from "../assets/icons/history.svg";
import plus from "../assets/icons/plus.svg";

function ArtistsDashboard(props) {
  const [filter, setFilter] = React.useState(false);

  return (
    <section id="shop" className="container">
      <div className="dashboard-container">
        <div className="flex column sidebar">
          <h3>Pages</h3>
          <Link to="/dashboard">
            <img src={dashboardIcon}></img>
            Dashboard
          </Link>
          <Link to="/dashboard/artists">
            <img src={artistsIcon}></img>Artists
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
        <div className="flex column bids">
          <div className="artists-container">
            <button className="add">
              {" "}
              <img src={plus}></img>Add Artist
            </button>
            <div className="artists-grid">
              <div className="artist-item flex">
                <div className="flex">
                  <img src={cardImg}></img>
                  <div className="flex column">
                    <p className="name">Rita Khachaturiani</p>
                    <p className="country">Georgia</p>
                  </div>
                </div>
                <button className="main-button">View Artist</button>
              </div>
              <div className="artist-item flex">
                <div className="flex">
                  <img src={cardImg}></img>
                  <div className="flex column">
                    <p className="name">Rita Khachaturiani</p>
                    <p className="country">Georgia</p>
                  </div>
                </div>
                <button className="main-button">View Artist</button>
              </div>
              <div className="artist-item flex">
                <div className="flex">
                  <img src={cardImg}></img>
                  <div className="flex column">
                    <p className="name">Rita Khachaturiani</p>
                    <p className="country">Georgia</p>
                  </div>
                </div>
                <button className="main-button">View Artist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistsDashboard;
