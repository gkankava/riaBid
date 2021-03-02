import React from "react";
import small from "../assets/product/small-img.png";
import main from "../assets/product/main.png";
import clock from "../assets/product/clock.png";
import SharedSlider from "../components/shared/SharedSlider";

function productDet() {
  return (
    <section className="product-details">
      <div className="container product-page">
        <div className="product-full flex">
          <div className="flex list">
            <img src={small} alt="Small" />
            <img src={small} alt="Small" />
            <img src={small} alt="Small" />
          </div>
          <img className="main-pic" src={main} alt="Main" />
          <div className="flex column text">
            <h1>Birmingham Museums Trust</h1>
            <p className="id">Product ID: 261311</p>
            <p className="current">Current bid</p>
            <div className="price-cont flex">
              <p>89.99$</p>
              <p className="bids">20 Bids</p>
            </div>
            <div className="bid flex">
              <input type="text" />
              <button>PLACE BID</button>
            </div>
            <div className="buyitnow flex">
              <p className="price flex">$199.99</p>
              <button>BUY IT NOW</button>
            </div>
            <h2>Details and product description</h2>
            <p className="desc">
              White Summer Vibes T-shirt in the uiKit line with a colorful
              print. Made of jersey cotton. T-shirt fits perfectly with jeans,
              pants or shorts.
            </p>
            <div className="flex clock space-between align-center">
              <div className="flex align-center">
                <img src={clock} alt="Clock" />
                <p className="yellow">Time Left</p>
              </div>
              <p className="red">6d 18h | Sunday, 11:04PM</p>
            </div>
          </div>
        </div>
      </div>
      <SharedSlider title="SELECTED JUST FOR YOU" />
    </section>
  );
}

export default productDet;
