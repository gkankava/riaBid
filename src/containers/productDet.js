import React, { useState } from "react";
import small from "../assets/product/small-img.png";
import main from "../assets/product/main.png";
import clock from "../assets/product/clock.png";
import favoritesIcon from "../assets/favorites.svg";
import sold from "../assets/sold.png";
import SharedSlider from "../components/shared/SharedSlider";
import { getAuction } from "../services/auctionsService";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";
import { getArtwork } from "../services/artworksService";
import Loading from "./loading";
import { addBag, addFavorites } from "../services/bagService";
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
      toast.error("You need to login");
    },
    onSuccess: (data, variables, context) => {
      toast.dark("Artwork added to bag", {
        progress: undefined,
        hideProgressBar: true,
      });
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

  const favoritesMutation = useMutation(addFavorites, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error("You need to login");
    },
    onSuccess: (data, variables, context) => {
      toast.dark("Artwork added to favorites", {
        progress: undefined,
        hideProgressBar: true,
      });
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
      toast.error("You need to login");
    },
    onSuccess: (data, variables, context) => {
      toast.dark("Successfully bid", {
        progress: undefined,
        hideProgressBar: true,
      });
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
  const images = JSON.parse(artwork.images);
  return (
    <section className="product-details">
      <div className="container product-page" style={{ position: "relative" }}>
        <button
          className="favoritesIcon"
          onClick={() => favoritesMutation.mutate(artwork.id)}
        >
          <img src={favoritesIcon}></img>
        </button>
        <div className="product-full flex">
          <div className="flex list">
            {images[1] ? <img src={images[1].url} alt="Small" /> : null}
            {images[2] ? <img src={images[2].url} alt="Small" /> : null}
            {images[3] ? <img src={images[3].url} alt="Small" /> : null}
          </div>
          <a className="main-pic" data-fancybox="gallery" href={artwork.image}>
            <img className="main-pic" src={artwork.image} />
          </a>

          <div className="flex column text">
            <h1>{artwork.title}</h1>
            <p className="artist-name">{artwork.display_name}</p>
            <p className="id">Product ID: {artwork.id}</p>
            {artwork.on_auction ? (
              <div>
                <p className="current">Current bid</p>
                <div className="price-cont flex">
                  <p>{artwork.current_bid}₾</p>
                  <p className="bids">{artwork.bidders_count} Bids</p>
                </div>
                <div className="bid flex">
                  <input
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    type="text"
                  />
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      bidMutation.mutate({ id: artwork.id, bidAmount })
                    }
                  >
                    PLACE BID
                  </button>
                </div>
              </div>
            ) : null}
            {artwork.is_sold ? (
              <div className="soldDetailed">
                <img src={sold}></img>
              </div>
            ) : (
              <div className="buyitnow flex">
                <p className="price flex">
                  {artwork.is_geo
                    ? `₾${artwork.buy_it_now}`
                    : `$${artwork.price_usd}`}
                </p>

                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => addMutation.mutate(artwork.id)}
                >
                  Add to cart
                </button>
              </div>
            )}
            <h2>Details and product description</h2>
            <p className="desc">{artwork.medium}</p>
            {artwork.depth ? (
              <p className="desc">
                {artwork.height}x{artwork.width}x{artwork.depth} cm
              </p>
            ) : (
              <p className="desc">
                {artwork.height}x{artwork.width} cm
              </p>
            )}

            <p
              className="desc"
              dangerouslySetInnerHTML={{ __html: artwork.description }}
            >
              {}
            </p>
            {artwork.on_auction ? (
              <div className="flex clock space-between align-center">
                <div className="flex align-center">
                  <img src={clock} alt="Clock" />
                  <p className="yellow">End time:</p>
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
