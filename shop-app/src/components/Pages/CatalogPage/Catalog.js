import React from 'react'
import { Link } from 'react-router-dom'
import CardBgWebp1 from "../../../assets/img/cards-bg-1.webp"
import CardBgWebp2 from "../../../assets/img/cards-bg-2.webp"
import CardBgWebp3 from "../../../assets/img/cards-bg-3.webp"
import CardBgWebp10 from "../../../assets/img/cards-10.webp"
import Img3 from "../../../assets/img/img-3.webp"
import Img6 from "../../../assets/img/img-6.webp" 
import GGImg6 from "../../../assets/img/gg.webp"  

const Catalog = () => {
  return (
    <section className="catalog">
    <div className="catalog-top">
        <div className="wrapper">
            <h1 className="catalog-title">Подборка для вас</h1>
            <ul className="catalog-tags">
                <li><Link to="#" className="active">#Детское</Link></li>
                <li><Link to="#" className="active">#Adidas</Link></li>
                <li><Link to="#" className="active">#Женское</Link></li>
                <li><Link to="#" className="active">#Мужское</Link></li>
            </ul>
        </div>
    </div>
    <div className="catalog-main">
        <div className="catalog-slider swiper-container">
            <div className="cloth-actions cloth-actions-white">
                <div className="slider-arrows">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="cloth-num"><span>01</span><b>/</b>04</div>
            </div>
            <div className="swiper-wrapper">
                <div className="catalog-slide swiper-slide">
                    <div className="catalog-bg" style={{ backgroundImage: `url(${CardBgWebp1})` }}></div>
                    <div className="wrapper">
                        <div className="cloth-top">
                            <div className="cloth-subs">
                                <span className="cloth-sub">#Женское</span>
                                <span className="cloth-sub">#ZARA</span>
                            </div>
                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                        </div>
                        <div className="products-slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                <div className="catalog-slide swiper-slide">
                    <div className="catalog-bg" style={{ backgroundImage: `url(${CardBgWebp1})` }}></div>
                    <div className="wrapper">
                        <div className="cloth-top">
                            <div className="cloth-subs">
                                <span className="cloth-sub">#Женское</span>
                                <span className="cloth-sub">#ZARA</span>
                            </div>
                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                        </div>
                        <div className="products-slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
    <div className="catalog-middle">
        <div className="catalog-slider2 swiper-container">
            <div className="cloth-actions cloth-actions-white">
                <div className="slider-arrows">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="cloth-num"><span>01</span><b>/</b>04</div>
            </div>
            <div className="swiper-wrapper">
                <div className="catalog-slide swiper-slide">
                    <div className="catalog-bg" style={{ backgroundImage: `url(${CardBgWebp2})` }}></div>
                    <div className="wrapper">
                        <div className="cloth-top">
                            <div className="cloth-subs">
                                <span className="cloth-sub">#Женское</span>
                                <span className="cloth-sub">#ZARA</span>
                            </div>
                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                        </div>
                        <div className="products-slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                <div className="catalog-slide swiper-slide">
                    <div className="catalog-bg" style={{ backgroundImage: `url(${CardBgWebp2})` }}></div>
                    <div className="wrapper">
                        <div className="cloth-top">
                            <div className="cloth-subs">
                                <span className="cloth-sub">#Женское</span>
                                <span className="cloth-sub">#ZARA</span>
                            </div>
                            <h2 className="cloth-title">Женский лук от ZARA</h2>
                        </div>
                        <div className="products-slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
                                <div className="products-slide swiper-slide">
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
    <div className="catalog-bottom">
        <div className="wrapper">
            <div className="catalog-slider3 swiper-container">
                <div className="swiper-wrapper">
                    <div className="catalog-slide swiper-slide">
                        <div className="cloth-actions">
                            <div className="slider-arrows">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                            <div className="cloth-num"><span>01</span><b>/</b>04</div>
                        </div>
                        <div className="catalog-all">
                            <div className="catalog-img"><img src={CardBgWebp10} alt=""/></div>
                            <div className="catalog-info">
                                <div className="cloth-top">
                                    <div className="cloth-subs">
                                        <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                    </div>
                                    <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                </div>
                                <div className="catalog-row">
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                            <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-slide swiper-slide">
                        <div className="cloth-actions">
                            <div className="slider-arrows">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                            <div className="cloth-num"><span>01</span><b>/</b>04</div>
                        </div>
                        <div className="catalog-all">
                            <div className="catalog-img"><img src={CardBgWebp10} alt=""/></div>
                            <div className="catalog-info">
                                <div className="cloth-top">
                                    <div className="cloth-subs">
                                        <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                    </div>
                                    <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                </div>
                                <div className="catalog-row">
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-col">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="catalog-blocks">
        <div className="wrapper">
            <div className="catalog-block catalog-block-1">
                <div className="catalog-slider4 swiper-container">
                    <div className="cloth-actions">
                        <div className="slider-arrows">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <div className="cloth-num"><span>01</span><b>/</b>04</div>
                    </div>
                    <div className="swiper-wrapper">
                        <div className="catalog-slide swiper-slide">
                            <div className="cloth-top">
                                <div className="cloth-subs">
                                    <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                </div>
                                <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                            </div>
                            <div className="cloth-slider3 swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                            <div className="catalog-block-bg" style={{ backgroundImage: `url(${CardBgWebp3})` }}></div>
                        </div>
                        <div className="catalog-slide swiper-slide">
                            <div className="cloth-top">
                                <div className="cloth-subs">
                                    <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                </div>
                                <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                            </div>
                            <div className="cloth-slider3 swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                            <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cloth-slide swiper-slide">
                                        <div className="cloth-wrap">
                                        <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                            <span className="cloth-tit">Replay</span>
                                            <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                            <div className="cloth-price">
                                                1 590 грн
                                                <span>1 590 грн</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                            <div className="catalog-block-bg" style={{ backgroundImage: `url(${CardBgWebp1})` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="catalog-items">
        <div className="wrapper">
            <div className="catalog-item">
                <div className="catalog-slider5 swiper-container">
                    <div className="cloth-actions">
                        <div className="slider-arrows">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <div className="cloth-num"><span>01</span><b>/</b>02</div>
                    </div>
                    <div className="swiper-wrapper">
                        <div className="catalog-slide swiper-slide">
                            <div className="catalog-item-row">
                                <div className="catalog-item-img">
                                    <img src={GGImg6} alt=""/>
                                </div>
                                <div className="catalog-item-info">
                                    <div className="cloth-top">
                                        <div className="cloth-subs">
                                            <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                        </div>
                                        <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                    </div>
                                    <div className="cloth-slider4 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                    <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-scrollbar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-slide swiper-slide">
                            <div className="catalog-item-row">
                                <div className="catalog-item-img">
                                    <img src={GGImg6} alt=""/>
                                </div>
                                <div className="catalog-item-info">
                                    <div className="cloth-top">
                                        <div className="cloth-subs">
                                            <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                        </div>
                                        <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                    </div>
                                    <div className="cloth-slider4 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
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
            <div className="catalog-item">
                <div className="catalog-slider6 swiper-container">
                    <div className="cloth-actions">
                        <div className="slider-arrows">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <div className="cloth-num"><span>01</span><b>/</b>02</div>
                    </div>
                    <div className="swiper-wrapper">
                        <div className="catalog-slide swiper-slide">
                            <div className="catalog-item-row">
                                <div className="catalog-item-img">
                                    <img src={GGImg6} alt=""/>
                                </div>
                                <div className="catalog-item-info">
                                    <div className="cloth-top">
                                        <div className="cloth-subs">
                                            <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                        </div>
                                        <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                    </div>
                                    <div className="cloth-slider4 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-scrollbar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-slide swiper-slide">
                            <div className="catalog-item-row">
                                <div className="catalog-item-img">
                                    <img src={GGImg6} alt=""/>
                                </div>
                                <div className="catalog-item-info">
                                    <div className="cloth-top">
                                        <div className="cloth-subs">
                                            <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                        </div>
                                        <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                    </div>
                                    <div className="cloth-slider4 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
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
            <div className="catalog-item">
                <div className="catalog-slider7 swiper-container">
                    <div className="cloth-actions">
                        <div className="slider-arrows">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <div className="cloth-num"><span>01</span><b>/</b>02</div>
                    </div>
                    <div className="swiper-wrapper">
                        <div className="catalog-slide swiper-slide">
                            <div className="catalog-item-row">
                                <div className="catalog-item-img">
                                    <img src={GGImg6} alt=""/>
                                </div>
                                <div className="catalog-item-info">
                                    <div className="cloth-top">
                                        <div className="cloth-subs">
                                            <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                        </div>
                                        <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                    </div>
                                    <div className="cloth-slider4 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-scrollbar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-slide swiper-slide">
                            <div className="catalog-item-row">
                                <div className="catalog-item-img">
                                    <img src={GGImg6} alt=""/>
                                </div>
                                <div className="catalog-item-info">
                                    <div className="cloth-top">
                                        <div className="cloth-subs">
                                            <span className="cloth-sub">ПОПУЛЯРНЫЕ</span>
                                        </div>
                                        <h2 className="cloth-title">Лук на кожен день й не тільки!</h2>
                                    </div>
                                    <div className="cloth-slider4 swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cloth-wrap">
                                                <div className="cloth-img"><Link to="#"><img src={Img6} alt=""/></Link></div>
                                                    <span className="cloth-tit">Replay</span>
                                                    <span className="cloth-name"><Link to="#">Темно-синя кепка Tommy Hilfiger x Miffy</Link></span>
                                                    <div className="cloth-price">
                                                        1 590 грн
                                                        <span>1 590 грн</span>
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
        </div>
    </div>
</section>
  )
}

export default Catalog
