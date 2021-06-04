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
import { useQuery, useQueryClient } from "react-query";
import Loading from "./loading";
import { getFavorites } from "../services/dashboardService";
import { getJwt } from "../services/authService";
import jwt_decode from "jwt-decode";
function FavoritesDashboard(props) {
  const [filter, setFilter] = React.useState(false);
  const queryClient = useQueryClient();
  var { user_id } = jwt_decode(getJwt());
  const { isLoading, error, data } = useQuery("favorites", getFavorites);

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
          {user_id == 80 ? (
            <Link to="/dashboard/allorders">
              <img src={historyIcon}></img>All Orders
            </Link>
          ) : null}
        </div>
        <div className="flex column bids">
          <section className=" auctions">
            <div className="grid-container-auctions">
              {data.data.map((item) => (
                <div key={item.id} className="product flex column">
                  <Link to={"/store/" + item.artwork_id}>
                    <div className="img">
                      <img src={item.image}></img>
                    </div>

                    <p className="title">
                      <i>{item.title}</i>
                    </p>
                    <p className="title2">{item.display_name}</p>
                  </Link>
                  <div className="flex space-between">
                    <div className="flex">
                      <p className="price">₾{item.buy_it_now}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default FavoritesDashboard;
