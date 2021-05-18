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
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addIBAN,
  deleteAddress,
  getAddress,
  getArtworks,
  requestAuction,
} from "../services/dashboardService";
import Loading from "./loading";
import { toast } from "react-toastify";

function AccountDashboard(props) {
  const [filter, setFilter] = useState(false);
  const queryClient = useQueryClient();
  const [IBAN, setIBAN] = useState("");
  const addIBANMutation = useMutation(addIBAN, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast(data.data.success);
      window.location.href = "/dashboard/account";
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

  const deleteMutation = useMutation(deleteAddress, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast(data.data);
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries("addresses");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      angarishis_nomeri: IBAN,
    };
    addIBANMutation.mutate(data);
  };
  const { isLoading, error, data } = useQuery("addresses", getAddress);

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
              <Link to="/dashboard/addaddress" className="add">
                <img src={plus}></img>Add Address
              </Link>
            </div>
            <div className="flex column  contact-container dashboard">
              <form onSubmit={handleSubmit} className="contact-form dashboard">
                <input
                  value={IBAN || data.data.iban}
                  onChange={(e) => setIBAN(e.target.value)}
                  type="text"
                  name="full_name"
                  placeholder={"IBAN number"}
                ></input>

                <input
                  style={{ cursor: "pointer" }}
                  type="submit"
                  value="SAVE IBAN"
                ></input>
              </form>
            </div>
            <div className="artworks-grid">
              {data.data.addresses.length
                ? data.data.addresses.map((item) => (
                    <div className="artwork-item flex title">
                      <div className="flex">
                        <p>{item.full_name}</p>
                      </div>
                      <p>{item.address_1}</p>
                      <p>{item.address_2}</p>
                      <p>{item.mobile}</p>
                      <p>
                        <button
                          onClick={() => deleteMutation.mutate(item.id)}
                          className="main-button"
                        >
                          Delete
                        </button>
                      </p>
                    </div>
                  ))
                : "You haven't got any addresses"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountDashboard;
