import React from "react";
import img1 from "../../assets/banners/img1.png";
import img2 from "../../assets/banners/img2.png";

function Banners() {
  return (
    <div className="banners-wrapper container">
      <div className="banner-item-wrapper orange">
        <img src={img1} alt="" />
        <div className="banner-item-content-wrapper">
          <p>New collection available now</p>
          <button className="btn-placebid">VIEW ALL</button>
        </div>
      </div>
      <div className="banner-item-wrapper blue">
        <img src={img2} alt="" />
        <div className="banner-item-content-wrapper">
          <p>New collection available now</p>
          <button className="btn-placebid">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
}

export default Banners;
