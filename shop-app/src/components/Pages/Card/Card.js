import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import $ from "jquery";

import Img2 from "../../../assets/img/cards-2.webp"
import Img3 from "../../../assets/img/cards-3.webp"
import Img4 from "../../../assets/img/cards-4.webp"
import Img5 from "../../../assets/img/cards-5.webp"
import Img6 from "../../../assets/img/cards-6.webp"
import Img7 from "../../../assets/img/cards-7.webp"
import Img8 from "../../../assets/img/cards-8.webp"
import Img9 from "../../../assets/img/cards-9.webp"


const Card = () => {
    useEffect(() => {
        $.getScript("/js/scripts.min.js", () => {
          console.log("jQuery script loaded");
        });
        $.getScript("/js/common.js", () => {
          console.log("jQuery script loaded");
        });
      }, []);
  return (
    <section className="cards cards-second">
    <div className="catalog-top">
        <div className="wrapper">
            <h1 className="catalog-title">Новая колекция</h1>
            <ul className="catalog-tags">
                <li><Link to="#" className="active">#Детское</Link></li>
                <li><Link to="#">#Adidas</Link></li>
                <li><Link to="#">#Женское</Link></li>
                <li><Link to="#" className="active">#Мужское</Link></li>
            </ul>
        </div>
    </div>
    <div className="wrapper">
        <div className="cards-blocks">
            <div className="cards-block">
                <div className="cloth-main swiper-container">
                    <div className="swiper-wrapper">
                        <div className="cloth-main-slide swiper-slide">
                            <div className="cloth-wrapper">
                                <div className="cloth-picture"><img src={Img2} alt=""/></div>
                                <div className="cloth-info">
                                    <div className="cloth-all">
                                        <div className="cloth-top">
                                            <div className="cloth-subs">
                                                <span className="cloth-sub">#Женское</span>
                                                <span className="cloth-sub">#ZARA</span>
                                            </div>
                                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                                        </div>
                                        <div className="cloth-slider2 swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                        <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cloth-main-slide swiper-slide">
                            <div className="cloth-wrapper">
                                <div className="cloth-picture"><img src={Img5} alt=""/></div>
                                <div className="cloth-info">
                                    <div className="cloth-all">
                                        <div className="cloth-top">
                                            <div className="cloth-subs">
                                                <span className="cloth-sub">#Женское</span>
                                                <span className="cloth-sub">#ZARA</span>
                                            </div>
                                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                                        </div>
                                        <div className="cloth-slider2 swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                        <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img3} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cloth-actions">
                        <div className="slider-arrows">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <div className="cloth-num"><span>01</span><b>/</b>04</div>
                    </div>
                </div>
            </div>
            <div className="cards-block">
                <div className="cloth-main2 swiper-container">
                    <div className="swiper-wrapper">
                        <div className="cloth-main-slide swiper-slide">
                            <div className="cloth-wrapper">
                                <div className="cloth-picture"><img src={Img5} alt=""/></div>
                                <div className="cloth-info">
                                    <div className="cloth-all">
                                        <div className="cloth-top">
                                            <div className="cloth-subs">
                                                <span className="cloth-sub">мУЖСКОЕ</span>
                                                <span className="cloth-sub">NIKE</span>
                                            </div>
                                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                                        </div>
                                        <div className="cloth-slider2 swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                        <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cloth-main-slide swiper-slide">
                            <div className="cloth-wrapper">
                                <div className="cloth-picture"><img src={Img2} alt=""/></div>
                                <div className="cloth-info">
                                    <div className="cloth-all">
                                        <div className="cloth-top">
                                            <div className="cloth-subs">
                                                <span className="cloth-sub">#Женское</span>
                                                <span className="cloth-sub">#ZARA</span>
                                            </div>
                                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                                        </div>
                                        <div className="cloth-slider2 swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                        <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                        <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                        <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cloth-slide swiper-slide">
                                                    <div className="product">
                                                    <div className="product-img"><img src={Img4} alt=""/></div>
                                                        <div className="product-info">
                                                            <span className="product-name">Bimba Y Lola</span>
                                                            <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                            <div className="product-bottom">
                                                                <span className="product-price">3 654 грн</span>
                                                                <Link to="#" className="basket-btn">В корзину</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cloth-actions">
                        <div className="slider-arrows">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <div className="cloth-num"><span>01</span><b>/</b>04</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cards-bottom">
            <div className="cards-slider swiper-container">
                <div className="cloth-actions">
                    <div className="slider-arrows">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <div className="cloth-num"><span>01</span><b>/</b>04</div>
                </div>
                <div className="swiper-wrapper">
                    <div className="cards-slide swiper-slide">
                        <div className="cloth-top">
                            <div className="cloth-subs">
                                <span className="cloth-sub">#Женское</span>
                                <span className="cloth-sub">stone island</span>
                            </div>
                            <h2 className="cloth-title">МУЖСКАЯ КОЛЕКЦИЯ ОТ STONE ISLAND</h2>
                        </div>
                        <div className="cards-pic"><img src={Img6} alt=""/></div>
                        <div className="cards-products">
                            <div className="cloth-slider2 swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="cloth-slide swiper-slide">
                                        <div className="product">
                                            <div className="product-img"><img src={Img7} alt=""/></div>
                                            <div className="product-info">
                                                <span className="product-name">Bimba Y Lola</span>
                                                <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                <div className="product-bottom">
                                                    <span className="product-price">3 654 грн</span>
                                                    <Link to="#" className="basket-btn">В корзину</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="product">
                                            <div className="product-img"><img src={Img8} alt=""/></div>
                                            <div className="product-info">
                                                <span className="product-name">Bimba Y Lola</span>
                                                <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                <div className="product-bottom">
                                                    <span className="product-price">3 654 грн</span>
                                                    <Link to="#" className="basket-btn">В корзину</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="product">
                                            <div className="product-img"><img src={Img9} alt=""/></div>
                                            <div className="product-info">
                                                <span className="product-name">Bimba Y Lola</span>
                                                <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                <div className="product-bottom">
                                                    <span className="product-price">3 654 грн</span>
                                                    <Link to="#" className="basket-btn">В корзину</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="cards-slide swiper-slide">
                        <div className="cloth-top">
                            <div className="cloth-subs">
                                <span className="cloth-sub">#Женское</span>
                                <span className="cloth-sub">stone island</span>
                            </div>
                            <h2 className="cloth-title">МУЖСКАЯ КОЛЕКЦИЯ ОТ STONE ISLAND</h2>
                        </div>
                        <div className="cards-pic"><img src={Img6} alt=""/></div>
                        <div className="cards-products">
                            <div className="cloth-slider2 swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="cloth-slide swiper-slide">
                                        <div className="product">
                                            <div className="product-img"><img src={Img7} alt=""/></div>
                                            <div className="product-info">
                                                <span className="product-name">Bimba Y Lola</span>
                                                <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                <div className="product-bottom">
                                                    <span className="product-price">3 654 грн</span>
                                                    <Link to="#" className="basket-btn">В корзину</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cloth-slide swiper-slide">
                                        <div className="product">
                                            <div className="product-img"><img src={Img8} alt=""/></div>
                                            <div className="product-info">
                                                <span className="product-name">Bimba Y Lola</span>
                                                <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                <div className="product-bottom">
                                                    <span className="product-price">3 654 грн</span>
                                                    <Link to="#" className="basket-btn">В корзину</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="product">
                                            <div className="product-img"><img src={Img9} alt=""/></div>
                                            <div className="product-info">
                                                <span className="product-name">Bimba Y Lola</span>
                                                <span className="product-txt">Жіночий помаранчевий світшот Bimba Y Lola</span>
                                                <div className="product-bottom">
                                                    <span className="product-price">3 654 грн</span>
                                                    <Link to="#" className="basket-btn">В корзину</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Card
