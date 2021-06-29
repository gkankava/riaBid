import React from "react";
import logo from "../../assets/logo-text.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

function footer() {
  return (
    <footer class="container">
      <div className=" top">
        <div className="col col1">
          <img style={{ marginBottom: "14px" }} src={logo} alt="" />
          <p>
            Ria Bid is a fundraising online auction oriented towards buying and
            selling Georgian art .
          </p>
          <Subscribe></Subscribe>
          <div className="social-list">
            <a href="https://instagram.com/ria.bid?igshid=1zjuzuv6w5pf">
              <FaInstagram size="2em" />
            </a>
            <a href="https://twitter.com/bid_ria/">
              <FaTwitter size="2em" />
            </a>
            <a href="https://www.pinterest.com/ria_bid/">
              <FaPinterest size="2em" />
            </a>
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
                <Link to="/terms">Terms & Conditions</Link>
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
      <div className=" hr">
        <div className="hr-comp" />
      </div>
      <div className="bottom">
        <p>CREATED BY MAGSMAN - © 2020. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default footer;
