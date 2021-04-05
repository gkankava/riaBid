import React, { useState } from "react";
import small from "../assets/product/small-img.png";
import main from "../assets/product/main.png";
import clock from "../assets/product/clock.png";
import SharedSlider from "../components/shared/SharedSlider";
import { getAuction } from "../services/auctionsService";

import { getArtwork } from "../services/artworksService";
import Loading from "./loading";
import { addBag } from "../services/bagService";
import { toast } from "react-toastify";
import { bidArtwork } from "../services/bidService";
import { QueryClient, useMutation, useQuery } from "react-query";

export default function ProductDet(props) {
  const queryClient = new QueryClient();
  const [bidAmount, setBidAmount] = useState();

  const addMutation = useMutation(addBag, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      console.log(error);
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast("Artwork added to bag");
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

  const bidMutation = useMutation(bidArtwork, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      console.log(error);
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast("Successfully bid");
      window.location.reload();
    },
    onSettled: (data, error, variables, context) => {},
  });

  const { isFetching, isLoading, error, data } = useQuery("product", () =>
    getArtwork(props.match.params.index)
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
            {artwork.on_auction ? (
              <div>
                <p className="current">Current bid</p>
                <div className="price-cont flex">
                  <p>{artwork.current_bid}$</p>
                  <p className="bids">{artwork.bidders_count} Bids</p>
                </div>
                <div className="bid flex">
                  <input
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    type="text"
                  />
                  <button
                    onClick={() =>
                      bidMutation.mutate({ id: artwork.id, bidAmount })
                    }
                  >
                    PLACE BID
                  </button>
                </div>
              </div>
            ) : null}
            <div className="buyitnow flex">
              <p className="price flex">${artwork.buy_it_now}</p>
              <button onClick={() => addMutation.mutate(artwork.id)}>
                Add to cart
              </button>
            </div>
            <h2>Details and product description</h2>
            <p className="desc">{artwork.description}</p>
            {artwork.on_auction ? (
              <div className="flex clock space-between align-center">
                <div className="flex align-center">
                  <img src={clock} alt="Clock" />
                  <p className="yellow">Time Left</p>
                </div>
                <p className="red">{artwork.end_time}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <SharedSlider data={just_for_you} title="SELECTED JUST FOR YOU" />
    </section>
  );
}
