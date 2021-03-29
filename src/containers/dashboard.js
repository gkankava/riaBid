import React from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/bid.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import artistsIcon from "../assets/icons/artists.png";
import artworksIcon from "../assets/icons/artworks.png";
import accountIcon from "../assets/icons/account.png";
import favoritesIcon from "../assets/icons/favorites.png";
import historyIcon from "../assets/icons/history.png";

function Dashboard(props) {
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
          <h2>MY BIDS</h2>
          <div className="bid-card">
            <div className="flex space-between">
              <div className="flex">
                <img src={cardImg}></img>
                <div classname="flex column">
                  <p className="name">RITA KHACHATURIANI</p>
                  <p className="country">Georgia</p>
                </div>
              </div>
              <button className="main-button">Full View</button>
            </div>
          </div>
          <div className="bid-card">
            <div className="flex space-between">
              <div className="flex">
                <img src={cardImg}></img>
                <div classname="flex column">
                  <p className="name">RITA KHACHATURIANI</p>
                  <p className="country">Georgia</p>
                </div>
              </div>
              <button className="main-button">Full View</button>
            </div>
          </div>
          <div className="bid-card">
            <div className="flex space-between">
              <div className="flex">
                <img src={cardImg}></img>
                <div classname="flex column">
                  <p className="name">RITA KHACHATURIANI</p>
                  <p className="country">Georgia</p>
                </div>
              </div>
              <button className="main-button">Full View</button>
            </div>
          </div>
          <div className="bid-card">
            <div className="flex space-between">
              <div className="flex">
                <img src={cardImg}></img>
                <div classname="flex column">
                  <p className="name">RITA KHACHATURIANI</p>
                  <p className="country">Georgia</p>
                </div>
              </div>
              <button className="main-button">Full View</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
