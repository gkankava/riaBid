import React, { useState } from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import { useQuery } from "react-query";
import { getArtists } from "../services/artistsService";
import { Link } from "react-router-dom";
import Loading from "./loading";
import queryString from "query-string";

function Search(props) {
  const [filter, setFilter] = useState(false);
  const [letter, setLetter] = useState("");
  const { isLoading, error, data } = useQuery("artists", getArtists);
  let params = queryString.parse(props.location.search);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
  const filtered = data.data.filter((item) =>
    item.display_name.toLowerCase().includes(params.search)
  );
  console.log(filtered);
  return (
    <section id="shop" className="container">
      <div className="contact-container">
        <div className="artist-container">
          {filtered.map((item) =>
            item.has_artwork ? (
              <Link
                style={{ color: "#d43e3e" }}
                key={item.id}
                to={"/artists/" + item.id}
                className="artist"
              >
                {item.display_name}
                <br></br>
              </Link>
            ) : (
              <Link key={item.id} to={"/artists/" + item.id} className="artist">
                {item.display_name}
                <br></br>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
