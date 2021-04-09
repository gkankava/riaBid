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

function HistoryDashboard(props) {
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
          <div className="artworks-container">
            <div className="artworks-grid">
              <div className="artwork-item flex title">
                <div className="flex">
                  <img src={cardImg}></img>
                  <div className="flex column">
                    <p className="name">Rita Khachaturiani</p>
                    <p className="country">Georgia</p>
                  </div>
                </div>
                <p>500₾</p>
                <p> </p>
                <p> </p>
                <p>Successfull</p>
              </div>
              <div className="artwork-item flex title">
                <div className="flex">
                  <img src={cardImg}></img>
                  <div className="flex column">
                    <p className="name">Rita Khachaturiani</p>
                    <p className="country">Georgia</p>
                  </div>
                </div>
                <p>500₾</p>
                <p> </p>
                <p> </p>
                <p>Successfull</p>
              </div>
              <div className="artwork-item flex title">
                <div className="flex">
                  <img src={cardImg}></img>
                  <div className="flex column">
                    <p className="name">Rita Khachaturiani</p>
                    <p className="country">Georgia</p>
                  </div>
                </div>
                <p>500₾</p>
                <p> </p>
                <p> </p>
                <p>Successfull</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryDashboard;
