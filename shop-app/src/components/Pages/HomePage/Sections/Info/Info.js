import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../../../assets/img/bg-1.webp"

const Info = () => {
  return (
    <section className="info"style={{ backgroundImage: `url(${Image})` }}>
      <div className="wrapper">
        <div className="info-block">
          <div className="info-descr">
            <span className="info-sub">Акции</span>
            <h2 className="info-title">Розпродаж Bimba Y Lola до -60%</h2>
            <Link to="#" className="primary-btn">
              Cмотреть все товары
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
