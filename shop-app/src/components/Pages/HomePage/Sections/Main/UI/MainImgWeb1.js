import React from "react";
import ImageWebp1 from "../../../../../../assets/img/img-1.webp";

const MainImg = (props) => {
  return (
    <div className="main-img" style={{ backgroundImage: `url(${ImageWebp1})` }}>
      {props.children}
    </div>
  );
};

export default MainImg;
