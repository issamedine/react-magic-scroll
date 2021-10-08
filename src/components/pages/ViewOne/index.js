import React from "react";
import "./view-one.scss";
const ViewOne = ({ animation }) => {
  return (
    <div className="container-view">
      <div
        className={`
       description-view-default
   `}
      >
        <div>
          <span
            className={`
       ${animation === "up" && "animate-description-default-up"} 
       ${animation === "down" && "animate-description-default-down"} 
   `}
          >
            This a story about one of life's key ingredients - bread. For
            thousands of years, in one form or another, it has been part of the
            daily lives of much of the world's population.
          </span>
        </div>
      </div>
      <div
        className={`
            title-view-one-default
        `}
      >
        <div>
          <span
            className={`
              ${animation === "up" && "animate-one-default-up"} 
              ${animation === "down" && "animate-one-default-down"} 
          `}
          >
            LIFE'S KEY
          </span>
        </div>
      </div>
      <div
        className={`
        title-view-default
    `}
      >
        <div>
          <span
            className={`
              ${animation === "up" && "animate-title-default-up"} 
              ${animation === "down" && "animate-title-default-down"} 
          `}
          >
            INGREDIENT
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewOne;
