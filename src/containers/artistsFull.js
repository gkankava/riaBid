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
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Artist</Link>
        </li>
        <li>{data?.data[0]?.display_name}</li>
      </ul>
      <div className="grid-container-auctions">
        {data.data.length ? (
          data.data.map((item) => (
            <div className="product flex column">
              <Link to={"/store/" + item.id}>
                <div className="img">
                  <img src={item.image}></img>
                </div>

                <p className="title">{item.title}</p>
              </Link>
              {item.on_auction ? (
                <div className="flex space-between">
                  <div className="flex">
                    <p className="price">₾{item.current_bid}</p>
                    <p className="price gray">₾{item.buy_it_now}</p>
                  </div>
                  <p className="time gray">6d 9h</p>
                </div>
              ) : (
                <div className="flex space-between">
                  <div className="flex">
                    <p className="price">₾{item.buy_it_now}</p>
                  </div>
                </div>
              )}
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
