import React from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/bid.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import artistsIcon from "../assets/icons/artists.png";
import artworksIcon from "../assets/icons/artworks.png";
import accountIcon from "../assets/icons/account.png";
import favoritesIcon from "../assets/icons/favorites.png";
import historyIcon from "../assets/icons/history.png";
import { useQuery, useQueryClient } from "react-query";
import { getBidHistory } from "../services/dashboardService";
import Loading from "./loading";

function Dashboard(props) {
  const [filter, setFilter] = React.useState(false);
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("bidshistory", getBidHistory);

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
          <h2>MY BIDS</h2>
          {data.data.map((item) => (
            <div className="bid-card">
              <div className="flex space-between">
                <div className="flex">
                  <img src={item.image}></img>
                  <div classname="flex column">
                    <p className="name">{item.title}</p>
                    <p className="country">Current Bid: {item.current_bid} ₾</p>
                  </div>
                </div>
                <Link
                  style={{ alignSelf: "center" }}
                  to={"/store/" + item.artwork_id}
                  className="main-button"
                >
                  Full View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
