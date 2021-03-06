import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";

function Text(props) {
  const [filter, setFilter] = React.useState(false);

  return (
    <section id="shop" className="container">
      <div className="bread" style={{ gridArea: "beard" }}>
        {/* home / shop */}
      </div>
      <h1>About Us</h1>
      <div className="grid-container-text">
        <div className="first">
          Ria Bid is a fundraising online auction oriented towards buying and
          selling Georgian art . Ria Bid features Georgia’s famous art salons,
          private collections, artist , sellers - all in one place. Served as a
          protection racket of NCLA RIA KEBURIA FOUNDATION , online platform
          collects funds for the following reasons : establishing newer wider
          residency programs; covering production costs of future artworks;
          development of the academic programs , workshops , exchange programs ;
          setting up COVID 19 grant for artist support in the time of ongoing
          pandemic. Our platform is suitable for art lovers, patrons,
          collectors, students, and educators to discover, learn about, and
          collect art inside and outside Georgia.
        </div>
      </div>
    </section>
  );
}

export default Text;
