import React from "react";
import "./view-two.scss";

const ViewTwo = ({ animation }) => {
  return (
    <div className="container-view animate__slideInDown">
      <div
        className={`
       description-view-greece
     `}
      >
        <div>
          <span
            className={`
       ${animation === "up" && "animate-up-description-greece"} 
       ${animation === "down" && "animate-down-description-greece"} 
     `}
          >
            Athens, one of the world's oldest cities has a long history of
            baking. Meet the bakers who share their stories of Greece's rich
            history with bread and the innovators building a sourdough culture
            in this ancient city.
          </span>
        </div>
      </div>
      <div
        className={`
          title-view-greece
        `}
      >
        <div>
          <span
            className={`
          ${animation === "up" && "animate-title-up-greece"} 
          ${animation === "down" && "animate-title-down-greece"} 
        `}
          >
            GREECE
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewTwo;
