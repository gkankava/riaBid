import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Slide({ img, text, btn, author, action }) {
  return (
    <div className="slide" style={{ backgroundImage: `url(${img})` }}>
      {/* <img src={img} alt="slide" /> */}
      <div className="container">
        <p>
          {text} <span style={{ fontSize: "15px" }}>{author}</span>
        </p>

        {btn && (
          <div className="wrapper  " onClick={() => console.log("Test")}>
            <div className="circle">
              <BsArrowRightShort style={{ fontSize: "25px" }} />
            </div>
            <span onClick={() => btn.action()}>{btn.text}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slide;
