import React from 'react'
import {Link} from "react-router-dom"
import BgImage from "../../../../../assets/img/img-2.webp"

const Stock = () => {
  return (
    <section className="stock">
    <div className="wrapper">
        <div className="stock-row">
            <div className="stock-img"><div className="stock-img-wrap" style={{ backgroundImage: `url(${BgImage})` }}></div></div>
            <div className="stock-block">
                <div className="stock-block-wrap">
                    <div className="info-descr">
                        <span className="info-sub">Акции</span>
                        <h2 className="info-title">Розпродаж Bimba Y Lola до -60%</h2>
                        <Link to="#" className="primary-btn">Cмотреть все товары</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Stock
