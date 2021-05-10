import React from "react";
import Hero from "../components/main/Hero";
import Banners from "../components/main/Banners";
import SharedSlider from "../components/shared/SharedSlider";
import Subscribe from "../components/shared/Subscribe";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getDashboard } from "../services/dashboardService";
import Loading from "./loading";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const queryClient = new QueryClient();

function Main() {
  const { isLoading, error, data } = useQuery("dashboard", getDashboard);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  const { selected_just_for_you, auctions, trending } = data.data;

  return (
    <section id="main">
      <Hero />

      {selected_just_for_you.length ? (
        <SharedSlider data={selected_just_for_you} title="RECOMMENDED" />
      ) : null}
      {auctions.length ? (
        <SharedSlider data={auctions} title="AUCTIONS" auction />
      ) : null}

      {/* <Subscribe /> */}
      {/* <div style={{ height: "500px" }}></div> */}
      <div className="selectedFor container">
        <div className="head-wrapper">
          <h3>TRENDING</h3>
        </div>
        <div className=" masonry-grid">
          {trending.map((item) => (
            <div>
              <Link to={"/store/" + item.id}>
                <img src={item.image}></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
