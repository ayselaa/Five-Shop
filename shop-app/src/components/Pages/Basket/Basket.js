import Img10 from "../../../assets/img/img-10.webp";
import React, { useEffect } from "react";
import $ from "jquery";

const Basket = () => {
  useEffect(() => {
    $.getScript("/js/scripts.min.js", () => {
      console.log("jQuery script loaded");
    });
    $.getScript("/js/common.js", () => {
      console.log("jQuery script loaded");
    });
  }, []);
  return (
    <section className="basket">
      <div className="basket-top">
        <div className="wrapper">
          <h1 className="basket-title">Корзина</h1>
          <span className="basket-button">В корзине 12 товаров</span>
        </div>
      </div>
      <div className="basket-all">
        <div className="wrapper">
          <div className="basket-content">
            <div className="basket-card">
              <i className="hb-ico rev-ico"></i>
              <div className="basket-card-img">
                <img src={Img10} alt="" />
              </div>
              <div className="basket-card-info">
                <span className="basket-card-sub">Tommy Hilfiger</span>
                <span className="basket-card-title">
                  Жіночий бордовий пуховик MONOGRAM BADGE DOWN MAXI
                </span>
                <div className="basket-card-block">
                  <ul>
                    <li>
                      <span>Размер:</span>XL
                    </li>
                    <li>
                      <span>Цвет:</span>Черный
                    </li>
                    <li>
                      <span>Количество:</span> 1 шт.
                    </li>
                  </ul>
                </div>
                <span className="basket-card-label">Стоимость товара</span>
                <span className="basket-card-price">1500 руб</span>
              </div>
            </div>
            <div className="basket-card">
              <i className="hb-ico rev-ico"></i>
              <div className="basket-card-img">
                <img src={Img10} alt="" />
              </div>
              <div className="basket-card-info">
                <span className="basket-card-sub">Tommy Hilfiger</span>
                <span className="basket-card-title">
                  Жіночий бордовий пуховик MONOGRAM BADGE DOWN MAXI
                </span>
                <div className="basket-card-block">
                  <ul>
                    <li>
                      <span>Размер:</span>XL
                    </li>
                    <li>
                      <span>Цвет:</span>Черный
                    </li>
                    <li>
                      <span>Количество:</span> 1 шт.
                    </li>
                  </ul>
                </div>
                <span className="basket-card-label">Стоимость товара</span>
                <span className="basket-card-price">1500 руб</span>
              </div>
            </div>
          </div>
          <div className="basket-sidebar">
            <div className="basket-message">
              Убедитесь что вы выбрали все данные достоверно
            </div>
            <div className="basket-sidebar-wrap">
              <span className="basket-sidebar-tit">Ваш заказ</span>
              <div className="basket-sidebar-head">
                <div className="basket-sidebar-radio">
                  <input type="radio" name="basket" />
                  <div className="basket-sidebar-radio-wrap">
                    <span>Использовать данные #1</span>
                    <i className="basket-sidebar-radio-ico"></i>
                  </div>
                </div>
              </div>
              <div className="basket-sidebar-items">
                <div className="basket-sidebar-item input-block">
                  <select name="text">
                    <option value="">Выберите службу внутренней почты</option>
                    <option value="">Выберите службу внутренней почты</option>
                  </select>
                </div>
                <div className="basket-sidebar-item input-block">
                  <select name="text">
                    <option value="">Выберите город</option>
                    <option value="">Выберите город</option>
                  </select>
                </div>
                <div className="basket-sidebar-item input-block">
                  <select name="text">
                    <option value="">Выберите отделение</option>
                    <option value="">Выберите отделение</option>
                  </select>
                </div>
                <div className="basket-sidebar-item input-block">
                  <input type="text" name="text" placeholder="Имя фамилия" />
                </div>
                <div className="basket-sidebar-item input-block">
                  <input
                    type="text"
                    name="text"
                    placeholder="Введите номер телефона (+380)"
                  />
                </div>
              </div>
            </div>
            <div className="basket-sidebar-wrap">
              <span className="basket-sidebar-subtit">Итог</span>
              <div className="basket-sidebar-bl">
                Использовать кэшбек или сертификат
              </div>
              <div className="basket-sidebar-total">
                <span>Итоговая цена</span>
                <b>
                  1200<i>.00 руб</i>
                </b>
              </div>
              <a href="#" className="primary-btn">
                Перейти к оплате
              </a>
              <ul className="basket-sidebar-list">
                <li>
                  <div>
                    <input type="radio" name="payment" />
                    <span>Криптовалютой</span>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="radio" name="payment" checked />
                    <span>Банковской картой</span>
                  </div>
                </li>
              </ul>
              <div className="checkbox">
                <input type="checkbox" name="checked" />
                <i className="checkbox-ico"></i>
                <p>
                  Подтверждая заказ, я принимаю условия пользовательского
                  соглашения
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
