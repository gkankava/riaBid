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
import { getHistory } from "../services/dashboardService";
import { useQuery } from "react-query";
import Loading from "./loading";

function HistoryDashboard(props) {
  const [filter, setFilter] = React.useState(false);
  const { isLoading, error, data } = useQuery("historyDashboard", getHistory);

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
        <div className="flex column bids">
          <h2>Order History</h2>

          {data.data.length ? (
            data.data.map((item) => (
              <div className="artworks-container">
                <div className="artworks-grid">
                  <div className="artwork-item flex title">
                    <div className="flex">
                      <img src={item.image}></img>
                      <div className="flex column">
                        <p className="name">{item.title}</p>
                        <p className="country">{item.year}</p>
                      </div>
                    </div>
                    <p>{item.subtotal}₾</p>
                    <p> </p>
                    <p> </p>
                    <p>Successfull</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>You have got no past orders</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default HistoryDashboard;
