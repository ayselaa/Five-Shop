import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../../../assets/img/img-3.webp";

const Products = () => {
  return (
    <section className="products">
      <div className="wrapper">
        <div className="section-top">
          <span className="section-sub">ПОПУЛЯРНЫЕ</span>
          <h2 className="section-title">ТОП 4 ПОПУЛЯРНЫХ ТОВАРОВ</h2>
        </div>
        <div className="products-slider swiper-container">
          <div className="swiper-wrapper">
            <div className="products-slide swiper-slide">
              <div className="product">
                <div className="product-img">
                  <img src={Image1} alt="" />
                </div>
                <div className="product-info">
                  <span className="product-name">Bimba Y Lola</span>
                  <span className="product-txt">
                    Жіночий помаранчевий світшот Bimba Y Lola
                  </span>
                  <div className="product-bottom">
                    <span className="product-price">3 654 грн</span>
                    <Link to="#" className="basket-btn">
                      В корзину
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-slide swiper-slide">
              <div className="product">
                <div className="product-img">
                  <img src={Image1} alt="" />
                </div>{" "}
                <div className="product-info">
                  <span className="product-name">Bimba Y Lola</span>
                  <span className="product-txt">
                    Жіночий помаранчевий світшот Bimba Y Lola
                  </span>
                  <div className="product-bottom">
                    <span className="product-price">3 654 грн</span>
                    <Link to="#" className="basket-btn">
                      В корзину
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-slide swiper-slide">
              <div className="product">
                <div className="product-img">
                  <img src={Image1} alt="" />
                </div>{" "}
                <div className="product-info">
                  <span className="product-name">Bimba Y Lola</span>
                  <span className="product-txt">
                    Жіночий помаранчевий світшот Bimba Y Lola
                  </span>
                  <div className="product-bottom">
                    <span className="product-price">3 654 грн</span>
                    <Link to="#" className="basket-btn">
                      В корзину
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-slide swiper-slide">
              <div className="product">
                <div className="product-img">
                  <img src={Image1} alt="" />
                </div>{" "}
                <div className="product-info">
                  <span className="product-name">Bimba Y Lola</span>
                  <span className="product-txt">
                    Жіночий помаранчевий світшот Bimba Y Lola
                  </span>
                  <div className="product-bottom">
                    <span className="product-price">3 654 грн</span>
                    <Link to="#" className="basket-btn">
                      В корзину
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
