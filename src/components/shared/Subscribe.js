import React from "react";
import bgSub from "../../assets/bg/bg-sub.jpg";

function Subscribe() {
  return (
    <div className="container subscribe">
      <div className="wrapper">
        <p>
          Subscribe to our newsletter and receive exclusive offers every week
        </p>
        <div className="input-wrapper">
          <input
            style={{ padding: "1vw" }}
            type="text"
            placeholder="Your Email Address"
          />
          <button className="btn-placebid">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
