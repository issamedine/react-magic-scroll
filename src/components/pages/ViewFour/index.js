import React from "react";
import "./view-four.scss";

const ViewFour = ({ animation }) => {
  return (
    <div className="container-view">
      <div
        className={` 
          description-view-germany
        `}
      >
        <div>
          <span
            className={`
          ${animation === "up" && "animate-up-description-germany"} 
          ${animation === "down" && "animate-down-description-germany"} 
        `}
          >
            Berlin has it all: history, art, shopping, food, and some of the
            brightest talent in the baking community, with interesting artisan
            bakers carving their own niche in this growing market. We discover
            the city's best bread and ventures to Freiberg to uncover the rich
            history of rye.
          </span>
        </div>
      </div>
      <div
        className={` 
          title-view-germany
        `}
      >
        <div>
          <span
            className={`
          ${animation === "up" && "animate-up-title-germany"} 
          ${animation === "down" && "animate-down-title-germany"} 
        `}
          >
            GERMANY
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewFour;
