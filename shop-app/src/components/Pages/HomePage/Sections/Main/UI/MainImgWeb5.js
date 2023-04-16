import React from "react";
import ImageWebp5 from "../../../../../../assets/img/img-5.webp";

const MainImgWeb5 = (props) => {
  return (
    <div className="main-img" style={{ backgroundImage: `url(${ImageWebp5})` }}>
      {props.children}
    </div>
  );
};

export default MainImgWeb5;
