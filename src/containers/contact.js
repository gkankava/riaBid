import React, { useState } from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import { useMutation } from "react-query";
import { contact } from "../services/dashboardService";
import { toast } from "react-toastify";
import { MetaTags } from "react-meta-tags";
import otherJSON from "../components/shared/otherJSON";

function Contact(props) {
  const [filter, setFilter] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const contactMutation = useMutation(contact, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast.dark("You successfully sent information", {
        progress: undefined,
        hideProgressBar: true,
      });
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
      setTitle("");
      setEmail("");
      setDescription("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    contactMutation.mutate({ name: title, email, description });
  };

  return (
    <section id="shop" className="container">
      <otherJSON></otherJSON>
      <MetaTags>
        <title>Ria Bid | Contact Us</title>
        <meta name="description" content="Do you have any questions?!" />
        <meta
          name="keywords"
          content="contemporary, art, georgian, georgian arts, design, contemporary, modern,fine art,auctions,artists,georgian artists,online auctions,prints,artworks,buy art,photographs,buy art,artwork for sale,decorative art,Artwork made by the contemporary artists in the GeorgiansGeorgia contemporary art,art from georgia,Georgia's Contemporary Artists,contemporary artists from Georgia,Georgian artist works prices,where i cen see georgian artists?,"
        />
      </MetaTags>
      <div className="contact-container">
        <div className="bread" style={{ gridArea: "beard" }}>
          {/* home / shop */}
        </div>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Name"
          ></input>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-Mail"
          ></input>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Description"
          ></textarea>
          <input
            style={{ cursor: "pointer" }}
            type="submit"
            value="Send Message"
          ></input>
        </form>
      </div>
    </section>
  );
}

export default Contact;
