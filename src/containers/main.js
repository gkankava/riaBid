import React from "react";
import Hero from "../components/main/Hero";
import Banners from "../components/main/Banners";
import SharedSlider from "../components/shared/SharedSlider";
import Subscribe from "../components/shared/Subscribe";

function main() {
  return (
    <section id="main">
      <Hero />
      <Banners />
      <SharedSlider title="SELECTED JUST FOR YOU" />
      <SharedSlider title="AUCTION" auction />
      {/* <Subscribe /> */}
      {/* <div style={{ height: "500px" }}></div> */}
    </section>
  );
}

export default main;
