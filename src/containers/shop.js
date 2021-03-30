import React, { useState } from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import { getArtworks } from "../services/artworksService";
import { useQuery } from "react-query";

function Shop(props) {
  const [filter, setFilter] = useState(false);

  return (
    <section id="shop" className="container">
      <div className="bread" style={{ gridArea: "beard" }}>
        {/* home / shop */}
      </div>
      <div className="filter-btn" onClick={() => setFilter(!filter)}>
        <GoSettings /> <span>filter</span>
      </div>
      <div
        className="filter-grid-wrap"
        style={{ display: "flex", marginTop: "30px" }}
      >
        <Filter status={filter} setStatus={setFilter} />
        <div className="top-grid-wrap">
          <div
            className="statusbar"
            style={{ gridArea: "top", height: "30px", marginBottom: "30px" }}
          >
            <div className="wrapper" style={{ display: "flex" }}>
              <div className="inner-wrap">
                <h4>Show Product:</h4>
                <button className="btn-placebid" style={{}}>
                  30
                </button>
              </div>
              <div className="inner-wrap">
                <h4>Sort:</h4>
                <button className="btn-placebid">popular</button>
              </div>
            </div>
          </div>
          <CardGrid />
        </div>
      </div>
    </section>
  );
}

export default Shop;
