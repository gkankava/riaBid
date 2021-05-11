import React, { useState } from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import { useMutation } from "react-query";
import { contact } from "../services/dashboardService";
import { toast } from "react-toastify";

function Approve(props) {
  const [title, setTitle] = useState("");

  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section id="shop" className="container">
      <div className="contact-container">
        <div className="bread" style={{ gridArea: "beard" }}>
          {/* home / shop */}
        </div>
        <h1 style={{ textAlign: "center", color: "red" }}>
          Confirmation email sent. Please confirm your email address.
        </h1>
      </div>
    </section>
  );
}

export default Approve;
