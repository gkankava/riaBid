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
import { editAddress } from "../services/dashboardService";
import { useMutation } from "react-query";
import Loading from "./loading";
import { toast } from "react-toastify";

function AddArtwork(props) {
  const addMutation = useMutation(editAddress, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast("You successfully added artist");
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
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
          <h2 style={{ marginBottom: "1vw" }}>Address</h2>
          <form className="contact-form dashboard">
            <input type="text" name="full_name" placeholder="Full Name"></input>
            <input
              type="text"
              name="address_one"
              placeholder="Address Line 1"
            ></input>
            <input
              type="text"
              name="address_two"
              placeholder="Address Line 2"
            ></input>
            <input type="text" name="country" placeholder="Country"></input>
            <input type="text" name="city" placeholder="City"></input>
            <input type="text" name="zip" placeholder="Zip/Postal Code"></input>
            <input type="text" name="phone" placeholder="Phone Number"></input>

            <input
              style={{ cursor: "pointer" }}
              type="submit"
              value="Save Address"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddArtwork;
