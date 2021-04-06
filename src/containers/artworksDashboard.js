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
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getArtworks, requestAuction } from "../services/dashboardService";
import Loading from "./loading";
import { toast } from "react-toastify";

function ArtworksDashboard(props) {
  const [filter, setFilter] = React.useState(false);
  const queryClient = useQueryClient();

  const requestMutation = useMutation(requestAuction, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast("You successfully requested auction");
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

  const { isLoading, error, data } = useQuery("artworksDashboard", getArtworks);

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
          <div className="artworks-container">
            <div className="flex space-between">
              <Link to="/dashboard/addartwork" className="add">
                <img src={plus}></img>Add Artwork
              </Link>

              <Link to="/dashboard/addartist" className="add">
                <img src={plus}></img>Add Artist
              </Link>
            </div>
            <div className="artworks-grid">
              {data.data.length
                ? data.data.map((item) => (
                    <div className="artwork-item flex title">
                      <div className="flex">
                        <img src={item.image}></img>
                        <div className="flex column">
                          <p className="name">{item.title}</p>
                          <p className="country">{item.location}</p>
                        </div>
                      </div>
                      <p>{item.buy_it_now}$</p>
                      <p>For Sale</p>
                      <p>Exact Price</p>
                      <button
                        onClick={() => requestMutation.mutate(item.id)}
                        className="main-button"
                      >
                        Request Auction
                      </button>
                    </div>
                  ))
                : "You haven't got any artworks"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtworksDashboard;
