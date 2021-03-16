import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";

function Contact(props) {
  const [filter, setFilter] = React.useState(false);

  return (
    <section id="shop" className="container">
      <div className="contact-container">
        <div className="bread" style={{ gridArea: "beard" }}>
          {/* home / shop */}
        </div>
        <h1>Contact Us</h1>
        <form className="contact-form">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="E-Mail"></input>
          <textarea rows="20" placeholder="Description"></textarea>
          <input type="submit" value="Send Message"></input>
        </form>
      </div>
    </section>
  );
}

export default Contact;
