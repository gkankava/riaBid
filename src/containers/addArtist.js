import React, { useState } from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/bid.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import artistsIcon from "../assets/icons/artists.png";
import artworksIcon from "../assets/icons/artworks.png";
import accountIcon from "../assets/icons/account.png";
import favoritesIcon from "../assets/icons/favorites.png";
import historyIcon from "../assets/icons/history.png";
import plus from "../assets/icons/plus.png";
import { useMutation, useQuery } from "react-query";
import { addArtist } from "../services/dashboardService";
import Loading from "./loading";
import { toast } from "react-toastify";

function AddArtist(props) {
  const [display_name, setDisplayName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [filter, setFilter] = useState(false);
  const addMutation = useMutation(addArtist, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast("You successfully added artist");
      setSelectedFile(null);
      setDisplayName("");
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("display_name", display_name);
    formData.append("avatar", selectedFile);
    addMutation.mutate(formData);
  };

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
          <h2 style={{ marginBottom: "1vw" }}>Add Artist</h2>
          <form onSubmit={handleSubmit} className="contact-form dashboard">
            <input
              type="text"
              value={display_name}
              onChange={(e) => setDisplayName(e.target.value)}
              name="display_name"
              placeholder="Display Name"
            ></input>
            <input
              onChange={(e) => setSelectedFile(e.target.files[0])}
              type="file"
            ></input>
            <input
              style={{ cursor: "pointer" }}
              type="submit"
              value="Add Artist"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddArtist;
