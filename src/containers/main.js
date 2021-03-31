import React from "react";
import Hero from "../components/main/Hero";
import Banners from "../components/main/Banners";
import SharedSlider from "../components/shared/SharedSlider";
import Subscribe from "../components/shared/Subscribe";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getDashboard } from "../services/dashboardService";

const queryClient = new QueryClient();

function Main() {
  const { isLoading, error, data } = useQuery("dashboard", getDashboard);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section id="main">
      <Hero />
      <Banners />
      <SharedSlider title="SELECTED JUST FOR YOU" />
      <SharedSlider title="AUCTION" auction />
      {/* <Subscribe /> */}
      {/* <div style={{ height: "500px" }}></div> */}
    </section>
  );
}

export default Main;
