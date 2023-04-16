import React from 'react'
import {Link} from "react-router-dom"
import Image from "../../../../../assets/img/img-7.webp"

const Universal = () => {
  return (
    <section className="universal">
    <div className="wrapper">
        <div className="section-block section-block-dark">
            <span className="section-tit">Унивирсальные скидки</span>
            <Link to="#" className="section-btn">Показать все</Link>
        </div>
        <div className="universal-slider swiper-container">
            <div className="swiper-wrapper">
                <div className="universal-slide swiper-slide">
                    <div className="product">
                        <div className="product-img"><img src={Image} alt=""/></div>
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
                <div className="universal-slide swiper-slide">
                    <div className="product">
                    <div className="product-img"><img src={Image} alt=""/></div>
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
                <div className="universal-slide swiper-slide">
                    <div className="product">
                    <div className="product-img"><img src={Image} alt=""/></div>
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
                <div className="universal-slide swiper-slide">
                    <div className="product">
                    <div className="product-img"><img src={Image} alt=""/></div>
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
                <div className="universal-slide swiper-slide">
                    <div className="product">
                    <div className="product-img"><img src={Image} alt=""/></div>
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
                <div className="universal-slide swiper-slide">
                    <div className="product">
                    <div className="product-img"><img src={Image} alt=""/></div>
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
</section>
  )
}

export default Universal
