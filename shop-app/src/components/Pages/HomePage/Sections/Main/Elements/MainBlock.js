import React from "react";
import { Link } from "react-router-dom";

const MainBlock = () => {
  return (
    <Link className="main-block" to="#modal-discount">
      <span>СКИДКА</span>
      <b>40%</b>
    </Link>
  );
};

export default MainBlock;
