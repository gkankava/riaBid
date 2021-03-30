import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";

export default function Sell(props) {
  const [filter, setFilter] = React.useState(false);

  return (
    <section id="shop" className="container">
      <div className="bread" style={{ gridArea: "beard" }}>
        {/* home / shop */}
      </div>
      <h1>Buying on Ria Bid</h1>
      <div className="grid-container-text">
        <div class="first">
          <li>
            Ria Bid Auctions helps you sell Georgian art locally and
            internationally (paintings, prints, photographs, different media)
          </li>
          <li>
            Auction season Ria Bid Auctions is 24/7. To become an approved
            seller, register an account and submit a sellers application. Our
            team of specialists will review your application, and respond to
            every application received.
          </li>
          <li>
            Our experienced specialists advise you on auction estimates, reserve
            prices, and photographing your artwork, in order to help your
            artwork sell.
          </li>
          <li>
            Collectors from around the world visit Ria Bid, ensuring that you
            will reach a global audience of potential buyers.
          </li>
          <li>
            Auction lots are available for 7 to 14 days , quantity of online
            auctions is not limited
          </li>
        </div>
      </div>
    </section>
  );
}
