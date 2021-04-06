import React from "react";
import Hero from "../components/main/Hero";
import Banners from "../components/main/Banners";
import SharedSlider from "../components/shared/SharedSlider";
import Subscribe from "../components/shared/Subscribe";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getDashboard } from "../services/dashboardService";
import Loading from "./loading";

const queryClient = new QueryClient();

function Main() {
  const { isLoading, error, data } = useQuery("dashboard", getDashboard);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  const { selected_just_for_you, auctions } = data.data;
  return (
    <section id="main">
      <Hero />
      <Banners />
      {selected_just_for_you.length ? (
        <SharedSlider
          data={selected_just_for_you}
          title="SELECTED JUST FOR YOU"
        />
      ) : null}
      {auctions.length ? (
        <SharedSlider data={auctions} title="AUCTION" auction />
      ) : null}

      {/* <Subscribe /> */}
      {/* <div style={{ height: "500px" }}></div> */}
    </section>
  );
}

export default Main;
