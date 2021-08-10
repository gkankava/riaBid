import React, { useState } from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
import { useQuery } from "react-query";
import { getArtists } from "../services/artistsService";
import { Link } from "react-router-dom";
import Loading from "./loading";
import queryString from "query-string";
import { MetaTags } from "react-meta-tags";

function Artists(props) {
  const [filter, setFilter] = useState(false);
  const [letter, setLetter] = useState("");
  const { isLoading, error, data } = useQuery("artists", getArtists);

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  let formatted_data = data.data.reduce((r, e) => {
    // get first letter of name of current element

    let group = e.display_name[0];
    // if there is no property in accumulator with this letter create it
    if (!r[group]) r[group] = { group, children: [e] };
    // if there is push current element to children array for that letter
    else r[group].children.push(e);
    // return accumulator
    return r;
  }, {});

  const filtered = Object.keys(formatted_data)
    .filter((key) => key == letter || letter == "")
    .reduce((obj, key) => {
      obj[key] = formatted_data[key];
      return obj;
    }, {});

  return (
    <section id="shop" className="container">
      <MetaTags>
        <title>ARTISTS: Browse Artists | Contemporary Georgian artists</title>
        <meta
          name="description"
          content="Explore artists on riabid. Browse Modern and Contemporary Georgian artist pages that include artworks for sale, art auction results."
        />
        <meta
          name="keywords"
          content="Georgian painters,Georgia contemporary art, designer,  decorative art,Discover Contemporary Artists, Georgia's Contemporary Artists, artists from Tbilisi,contemporary artists from Georgia,Georgian artist works,"
        />
      </MetaTags>
      <div className="contact-container">
        <div className="bread" style={{ gridArea: "beard" }}>
          {/* home / shop */}
        </div>
        <div className="letters flex">
          {letter == "" ? (
            <button className="letter active">ALL</button>
          ) : (
            <button onClick={() => setLetter("")} className="letter">
              ALL
            </button>
          )}
          {Object.keys(formatted_data).map((key) =>
            letter == key ? (
              <button className="letter active">{key}</button>
            ) : (
              <button
                key={key}
                onClick={() => setLetter(key)}
                className="letter"
              >
                {key}
              </button>
            )
          )}
        </div>
        <div className="artist-container">
          {Object.keys(filtered).map((key) => (
            <div key={key}>
              <p key={key} className="letter">
                {key}
              </p>
              {formatted_data[key].children.map((item) =>
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
                  <Link
                    key={item.id}
                    to={"/artists/" + item.id}
                    className="artist"
                  >
                    {item.display_name}
                    <br></br>
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
