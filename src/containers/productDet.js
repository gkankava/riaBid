import React from "react";
import small from "../assets/product/small-img.png";
import main from "../assets/product/main.png";
import clock from "../assets/product/clock.png";
import SharedSlider from "../components/shared/SharedSlider";
import { getAuction } from "../services/auctionsService";
import { QueryClient, useQuery } from "react-query";
import { getArtwork } from "../services/artworksService";
import Loading from "react-loading";
const queryClient = new QueryClient();

export default function ProductDet(props) {
  const { isLoading, error, data } = useQuery(
    "product",
    () => getArtwork(props.match.params.index),
    {}
  );

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
  const { just_for_you, artwork } = data.data;
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
            <h1>{artwork.title}</h1>
            <p className="id">Product ID: {artwork.id}</p>
            <p className="current">Current bid</p>
            <div className="price-cont flex">
              <p>{artwork.current_bid}$</p>
              <p className="bids">{artwork.bidders_count} Bids</p>
            </div>
            <div className="bid flex">
              <input type="text" />
              <button>PLACE BID</button>
            </div>
            <div className="buyitnow flex">
              <p className="price flex">${artwork.buy_it_now}</p>
              <button>BUY IT NOW</button>
            </div>
            <h2>Details and product description</h2>
            <p className="desc">{artwork.description}</p>
            <div className="flex clock space-between align-center">
              <div className="flex align-center">
                <img src={clock} alt="Clock" />
                <p className="yellow">Time Left</p>
              </div>
              <p className="red">{artwork.end_time}</p>
            </div>
          </div>
        </div>
      </div>
      <SharedSlider data={just_for_you} title="SELECTED JUST FOR YOU" />
    </section>
  );
}
