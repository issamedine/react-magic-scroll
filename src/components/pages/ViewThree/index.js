import React from "react";
import "./view-three.scss";

const ViewThree = ({ animation }) => {
  return (
    <div className="container-view">
      <div
        className={`
       description-view-malta
     `}
      >
        <div>
          <span
            className={`
       ${animation === "up" && "animate-up-description-malta "} 
       ${animation === "down" && "animate-down-description-malta"} 
     `}
          >
            With one of the world's longest recorded histories with bread, Malta
            has a rich history engrained in bread. We meet with the bakers using
            traditional techniques and practices 120 years in the making.
          </span>
        </div>
      </div>
      <div
        className={`
          title-view-malta
        `}
      >
        <div>
          <span
            className={`
          ${animation === "up" && "animate-up-title-malta"} 
          ${animation === "down" && "animate-down-title-malta"} 
        `}
          >
            MALTA
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewThree;
