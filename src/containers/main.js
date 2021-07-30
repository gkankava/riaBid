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

  const { selected_just_for_you, auctions, trending, pride } = data.data;

  return (
    <section id="main">
      <Hero />

      {selected_just_for_you.length ? (
        <SharedSlider
          slidesToShow={4}
          data={selected_just_for_you}
          title="RECOMMENDED"
        />
      ) : null}
      {auctions.length ? (
        <SharedSlider data={auctions} title="AUCTIONS" auction />
      ) : null}

      {/* <Subscribe /> */}
      {/* <div style={{ height: "500px" }}></div> */}
      {pride.length ? (
        <SharedSlider
          slidesToShow={2}
          data={pride}
          title="SPECIAL PROJECTS"
          special
        />
      ) : (
        <Link to="/dashboard/addartworkpride" className="lgbtq-img">
          <img src="https://voiceofoc.org/wp-content/uploads/2015/09/lgbtflag2.jpg"></img>
        </Link>
      )}
      <p className="container lgbtq">
        In the wake of the protest demonstrations againts LGBT rights, Ria
        Keburia Foundation took a step to to express enormous support to Tbilisi
        Pride (LGBT community) which has been cancelled after violent
        demonstrations.
      </p>
      <p className="container lgbtq">
        Ria Bid platform joined the forces via creative talents to create series
        of works dedicated to current social issue . Collected funds for the
        Queer artworks will be generously donated to Tbilisi Pride 🇬🇪🏳️‍🌈
      </p>
      <div className="selectedFor container">
        <div className="head-wrapper">
          <h3>TRENDING</h3>
        </div>
        <div className=" masonry-grid">
          {trending.slice(0, 8).map((item) => (
            <div>
              <Link to={"/store/" + item.id}>
                <img
                  alt="test"
                  src={item.image.replace(
                    "https://api.riabid.ge/storage/artworks/",
                    "https://api.riabid.ge/storage/artworks/thumbnail_"
                  )}
                ></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
