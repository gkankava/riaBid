import React from "react";
import logo from "../../assets/logo-text.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function footer() {
  return (
    <footer>
      <div className="container top">
        <div className="col col1">
          <img src={logo} alt="" />
          <p>
            High quality Azerbaijani furniture made from eco-friendly materials.
            Designed for modern, minimalist apartments
          </p>
          <div className="social-list">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className="col-wrapper">
          <div className="col col2">
            <h4>Shopping</h4>
            <ul>
              <li>Shopping</li>
              <li>Delivery</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col col3">
            <h4>Information</h4>
            <ul>
              <li>Gift Cards</li>
              <li>Find a store</li>
              <li>Newsletter</li>
              <li>Become a member</li>
              <li>site feedback</li>
            </ul>
          </div>
          <div className="col col3">
            <h4>Contact</h4>
            <ul>
              <li>Shopping</li>
              <li>Delivery</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container hr">
        <div className="hr-comp" />
      </div>
      <div className="bottom">
        <p>DESIGN BY NEMANLI - © 2020. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default footer;
