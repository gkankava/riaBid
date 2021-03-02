import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Slide({ img, text, btn }) {
  return (
    <div className="slide" style={{ backgroundImage: `url(${img})` }}>
      {/* <img src={img} alt="slide" /> */}
      <div className="container">
        <p>{text}</p>
        {btn && (
          <div className="wrapper  " onClick={() => btn.action()}>
            <div className="circle">
              <BsArrowRightShort style={{ fontSize: "25px" }} />
            </div>
            <span>{btn.text}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slide;
