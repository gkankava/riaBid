import React from "react";
import Filter from "../components/shop/Filter";
import CardGrid from "../components/shop/CardGrid";
import { GoSettings } from "react-icons/go";
const queryString = require("query-string");

function Forgot(props) {
  const parsed = queryString.parse(props.location.search);

  console.log(parsed.token);

  return (
    <section id="shop" className="container">
      <div className="bread" style={{ gridArea: "beard" }}>
        {/* home / shop */}
      </div>
      <h1>Reset Password</h1>
      <div className="flex column">
        <input
          type="password"
          className="main-input"
          placeholder="New Password"
        ></input>
        <input
          type="password"
          className="main-input"
          placeholder="Confirm Password"
        ></input>
        <input
          style={{ width: "100%" }}
          type="submit"
          className="btn-placebid"
          value="Change Password"
        ></input>
      </div>
    </section>
  );
}

export default Forgot;
