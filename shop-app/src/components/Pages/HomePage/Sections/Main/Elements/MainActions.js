import React from "react";
import SliderArrows from "./SliderArrows";
import MainNum from "./MainNum";

const MainActions = () => {
  return (
    <div className="main-actions">
      <MainNum />
      <div className="main-bar run-animation">
        <i></i>
      </div>
      <SliderArrows />
    </div>
  );
};

export default MainActions;
