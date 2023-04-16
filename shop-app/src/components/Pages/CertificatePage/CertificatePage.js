import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from "../../../assets/img/card-1.webp"
import Image2 from "../../../assets/img/card-2.webp"
import Image3 from "../../../assets/img/card-3.webp"
import Image4 from "../../../assets/img/card-4.webp"
import BG3 from "../../../assets/img/bg-3.webp"

const CertificatePage = () => {
  return (
    <section className="certificate">
    <div className="certificate-top" style={{ backgroundImage: `url(${BG3})` }}>
        <div className="wrapper">
            <h1 className="certificate-title">Сетрификатная карта</h1>
            <p>Отличный способ осчастливить своих близких, открыв дверь в мир стильного шопинга! Разве не идеальный подарок для модников и модниц?</p>
            <Link to="#" className="primary-btn">Заказать</Link>
        </div>
    </div>
    <div className="certificate-middle">
        <div className="wrapper">
            <div className="certificate-middle-wrap">
                <h2 className="certificate-subtitle">Преимущества сертификата</h2>
                <ul>
                    <li><span><i>1</i>В электронном виде его легко купить и вручить</span></li>
                    <li><span><i>2</i>Активен в течение 1 года после покупки</span></li>
                    <li><span><i>3</i>Действительный во всей сети магазинов-партнеров MD Fashion</span></li>
                </ul>
                <div className="certificate-img"><img src="img/img-8.webp" alt=""/></div>
            </div>
        </div>
    </div>
    <div className="certificate-bottom">
        <div className="wrapper">
            <div className="certificate-main">
                <span className="certificate-sub">Как оформить заказ?</span>
                <div className="certificate-items">
                    <div className="certificate-item">
                        <span className="certificate-item-sub">01</span>
                        <span className="certificate-item-tit">Оформить заказ</span>
                        <span className="certificate-item-txt">На сертификат на сайте.</span>
                    </div>
                    <div className="certificate-item">
                        <span className="certificate-item-sub">01</span>
                        <span className="certificate-item-tit">Оформить заказ</span>
                        <span className="certificate-item-txt">На сертификат на сайте.</span>
                    </div>
                    <div className="certificate-item">
                        <span className="certificate-item-sub">01</span>
                        <span className="certificate-item-tit">Оформить заказ</span>
                        <span className="certificate-item-txt">На сертификат на сайте.</span>
                    </div>
                </div>
            </div>
            <div className="certificate-row">
                <div className="certificate-col">
                    <div className="certificate-card">
                        <div className="certificate-card-img"><img src={Image1} alt=""/></div>
                        <div className="certificate-card-info">
                            <div className="certificate-card-head">
                                <span className="certificate-card-tit">Подарочная карта</span>
                                <span className="certificate-card-name">STANDART</span>
                            </div>
                            <div className="certificate-card-row">
                                <span className="certificate-card-label">Стоимость</span>
                                <span className="certificate-card-price">500 руб</span>
                                <Link to="#" className="primary-btn">Купить</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="certificate-col">
                    <div className="certificate-card">
                        <div className="certificate-card-img"><img src={Image2} alt=""/></div>
                        <div className="certificate-card-info">
                            <div className="certificate-card-head">
                                <span className="certificate-card-tit">Подарочная карта</span>
                                <span className="certificate-card-name">STANDART</span>
                            </div>
                            <div className="certificate-card-row">
                                <span className="certificate-card-label">Стоимость</span>
                                <span className="certificate-card-price">500 руб</span>
                                <Link to="#" className="primary-btn">Купить</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="certificate-col">
                    <div className="certificate-card">
                        <div className="certificate-card-img"><img src={Image3} alt=""/></div>
                        <div className="certificate-card-info">
                            <div className="certificate-card-head">
                                <span className="certificate-card-tit">Подарочная карта</span>
                                <span className="certificate-card-name">STANDART</span>
                            </div>
                            <div className="certificate-card-row">
                                <span className="certificate-card-label">Стоимость</span>
                                <span className="certificate-card-price">500 руб</span>
                                <Link to="#" className="primary-btn">Купить</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="certificate-col">
                    <div className="certificate-card certificate-card-main">
                        <div className="certificate-card-img"><img src={Image4} alt=""/></div>
                        <div className="certificate-card-info">
                            <div className="certificate-card-head">
                                <span className="certificate-card-tit">Подарочная карта</span>
                                <span className="certificate-card-name">STANDART</span>
                            </div>
                            <div className="certificate-card-row">
                                <span className="certificate-card-label">Стоимость</span>
                                <span className="certificate-card-price">500 руб</span>
                                <Link to="#" className="primary-btn">Купить</Link>
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

export default CertificatePage
