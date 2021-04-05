import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import cardImg from "../assets/dummy/cardImage.jpg";
import { Link } from "react-router-dom";
import { QueryClient, useQuery } from "react-query";
import { getAuctions } from "../services/auctionsService";
import { getArtworks } from "../services/artistsService";
import Loading from "./loading";
const queryClient = new QueryClient();

function ArtistsFull(props) {
  const [filter, setFilter] = React.useState(false);
  const { isLoading, error, data } = useQuery(
    "artist",
    () => getArtworks(props.match.params.index),
    {}
  );

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section id="shop" className="container auctions">
      <ul class="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Artist</Link>
        </li>
      </ul>
      <div className="grid-container-auctions">
        {data.data.length ? (
          data.data.map((item) => (
            <div className="product flex column">
              <Link to={"/store/" + item.id}>
                <div className="img">
                  <img src={cardImg}></img>
                </div>

                <p className="title">T-Shirt Summer Vibes</p>
              </Link>
              <div className="flex space-between">
                <div className="flex">
                  <p class="price">$89.99</p>
                  <p class="price gray">$119.99</p>
                </div>
                <p class="time gray">6d 9h</p>
              </div>
            </div>
          ))
        ) : (
          <h2>There are no artworks for current artist</h2>
        )}
      </div>
    </section>
  );
}

export default ArtistsFull;
