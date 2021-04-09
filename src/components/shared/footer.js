import React from "react";
import logo from "../../assets/logo-text.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer>
      <div className="container top">
        <div className="col col1">
          <img src={logo} alt="" />
          <p>
            The Ria Keburia Foundation, founded in 2018 by the Georgian patron
            of the arts Ria Keburia, aims to support development of contemporary
            art scene in Georgia and South Caucasus.
          </p>
          <div className="social-list">
            <FaInstagram />
          </div>
        </div>
        <div className="col-wrapper">
          <div className="col col2">
            <h4>About RiaBid</h4>
            <ul>
              <li>
                <Link to="/text">About Us</Link>
              </li>
              <li>
                <Link to="/buy">Buying on Ria Bid</Link>
              </li>

              <li>
                <Link to="/sell">Selling on Ria Bid</Link>
              </li>
              <li>
                <Link to="/delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/contact">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="col col3">
            <h4>Partnerships</h4>
            <ul>
              <li>
                <Link to="/galleries">Galleries</Link>
              </li>
              <li>
                <Link to="/auctions">Auctions</Link>
              </li>
              <li>
                <Link to="/store">Artworks</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container hr">
        <div className="hr-comp" />
      </div>
      <div className="bottom">
        <p>DESIGN BY MAGSMAN - © 2020. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default footer;
