import React, { useState } from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/dummy/bid.png";
import dashboardIcon from "../assets/icons/dashboard.svg";
import artistsIcon from "../assets/icons/artists.svg";
import artworksIcon from "../assets/icons/artworks.svg";
import accountIcon from "../assets/icons/account.svg";
import favoritesIcon from "../assets/icons/favorites.svg";
import historyIcon from "../assets/icons/history.svg";
import plus from "../assets/icons/plus.svg";
import { useMutation, useQuery } from "react-query";
import { getArtists } from "../services/artistsService";
import { addArtwork } from "../services/dashboardService";

import Loading from "./loading";
import { toast } from "react-toastify";

function AddArtworkPride(props) {
  const [artist_id, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [product_type, setProductType] = useState("1");
  const [buy_it_now, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [units, setUnits] = useState("2");
  const [medium, setMedium] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const categories = [
    "Painting",
    "Sculpture",
    "Photography",
    "Print",
    "Drawing, Collage or other Work on Paper",
    "Mixed Media",
    "Performance Art",
    "Installation",
    "Video/Film/Animation",
    "Architecture",
    "Fashion Design and Wearable Art",
    "Jewelry",
    "Design/Decorative Art",
    "Textile Arts",
    "Other",
  ];
  const addMutation = useMutation(addArtwork, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast.dark("You successfully added artwork", {
        progress: undefined,
        hideProgressBar: true,
      });
      window.location.href = "/store";
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
    formData.append("buy_it_now", buy_it_now * 1.15);
    formData.append("description", description);
    formData.append("is_pride", 1);
    formData.append("year", year);
    formData.append("category_id", category);
    formData.append("depth", depth);
    formData.append("height", height);
    formData.append("medium", medium);
    formData.append("units", units);
    formData.append("width", width);
    formData.append("image1", selectedFile[0]);
    formData.append("image2", selectedFile[1]);
    formData.append("image3", selectedFile[2]);
    formData.append("image4", selectedFile[3]);

    addMutation.mutate(formData);
  };

  const { isLoading, error, data } = useQuery("artists", getArtists, {
    refetchOnWindowFocus: false,
  });

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

            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category"
            >
              <option value="0">Choose Category</option>
              {categories.map((item, index) => (
                <option value={index + 1}>{item}</option>
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
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              type="text"
              name="medium"
              placeholder="Medium"
            ></input>
            <div className="flex space-between smaller">
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                type="text"
                name="medium"
                placeholder="Height"
              ></input>
              <input
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                type="text"
                name="medium"
                placeholder="Width"
              ></input>{" "}
              <input
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                type="text"
                name="medium"
                placeholder="Depth"
              ></input>
              <select
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                type="text"
                name="medium"
                placeholder="Units"
                disabled
              >
                <option selected value="2">
                  CM
                </option>
              </select>{" "}
            </div>
            <div style={{ position: "relative" }}>
              {" "}
              <input
                value={buy_it_now}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                name="buy_it_now"
                placeholder="Price GEL"
              ></input>
              <p style={{ position: "absolute", right: 0 }}>
                Final Price: {buy_it_now * 1.15} GEL
              </p>
              <p>+ Riabid commission 15%</p>
            </div>
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
              style={{ cursor: "pointer", fontWeight: 500 }}
              className="gay"
              type="submit"
              value="Add Artwork"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddArtworkPride;
