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
import { getArtists } from "../services/artistsService";
import { addArtwork } from "../services/dashboardService";

import Loading from "./loading";
import { toast } from "react-toastify";

function AddArtwork(props) {
  const [artist_id, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [product_type, setProductType] = useState("");
  const [buy_it_now, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const addMutation = useMutation(addArtwork, {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("artist_id", artist_id);
    formData.append("product_type", product_type);
    formData.append("buy_it_now", buy_it_now);
    formData.append("description", description);
    formData.append("year", year);
    formData.append("image1", selectedFile[0]);
    formData.append("image2", selectedFile[1]);
    formData.append("image3", selectedFile[2]);
    formData.append("image4", selectedFile[3]);

    addMutation.mutate(formData);
  };

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
          <form
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
            className="contact-form dashboard"
          >
            <select
              onChange={(e) => setArtist(e.target.value)}
              name="cars"
              id="cars"
            >
              <option value="0">Choose Artist</option>
              {data.data.map((item) => (
                <option value={item.id}>{item.display_name}</option>
              ))}
            </select>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Title"
            ></input>
            <input
              value={buy_it_now}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              name="buy_it_now"
              placeholder="Price"
            ></input>
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="text"
              name="year"
              placeholder="Year"
            ></input>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              type="text"
              name="description"
              placeholder="Description"
            ></textarea>
            <select
              onChange={(e) => setProductType(e.target.value)}
              name="product_type"
              id="product_type"
            >
              <option value="1">Private Collection</option>
              <option value="2">Gallery</option>
            </select>
            <input
              onChange={(e) => setSelectedFile(e.target.files)}
              type="file"
              name="images[]"
              multiple
              rows="10"
            ></input>
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
