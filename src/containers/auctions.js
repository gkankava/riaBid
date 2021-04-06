import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import cardImg from "../assets/dummy/cardImage.jpg";
import { Link } from "react-router-dom";
import { QueryClient, useQuery } from "react-query";
import { getAuctions } from "../services/auctionsService";
import Loading from "./loading";
const queryClient = new QueryClient();

function Auctions(props) {
  const [filter, setFilter] = React.useState(false);
  const { isLoading, error, data } = useQuery("auctions", getAuctions);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section id="shop" className="container auctions">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Auctions</Link>
        </li>
      </ul>
      <div className="grid-container-auctions">
        {data.data.map((item) => (
          <div key={item.id} className="product flex column">
            <Link to={"/store/" + item.id}>
              <div className="img">
                <img src={item.image}></img>
              </div>

              <p className="title">{item.title}</p>
              <p className="title">{item.display_name}</p>
            </Link>
            <div className="flex space-between">
              <div className="flex">
                <p className="price">${item.current_bid}</p>
                <p className="price gray">${item.buy_it_now}</p>
              </div>
            </div>
            <p className="time gray">End time: {item.end_time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Auctions;
