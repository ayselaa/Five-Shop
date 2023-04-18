import React, { useEffect } from "react";
import $ from "jquery";
import {Link} from "react-router-dom"

const SiteMap = () => {
    useEffect(() => {
        $.getScript("/js/scripts.min.js", () => {
          console.log("jQuery script loaded");
        });
        $.getScript("/js/common.js", () => {
          console.log("jQuery script loaded");
        });
      }, []);
  return (
    <div className="sitemap">
    <div className="wrapper">
        <h2 className="sitemap-title">Основные страницы</h2>
        <ul className="sitemap-list">
            <li>1.<Link to="http://hubartwork.github.io/five-shop2/" target="_blank">Главная</Link></li>
            <li>2.<Link to="http://hubartwork.github.io/five-shop2/faq.html" target="_blank">FAQ</Link></li>
            <li>3.<Link to="http://hubartwork.github.io/five-shop2/payment.html" target="_blank">Оплата и доставка</Link></li>
            <li>4.<Link to="http://hubartwork.github.io/five-shop2/basket.html" target="_blank">Корзина заполнение данных</Link></li>
            <li>5.<Link to="http://hubartwork.github.io/five-shop2/certificate.html" target="_blank">Сертификатная карта</Link></li>
            <li>6.<Link to="http://hubartwork.github.io/five-shop2/catalog.html" target="_blank">Расспродажи</Link></li>
            <li>7.<Link to="http://hubartwork.github.io/five-shop2/product.html" target="_blank">Подборка для вас</Link></li>
            <li>8.<Link to="http://hubartwork.github.io/five-shop2/modals.html" target="_blank">Модалки</Link></li>
        </ul>
        <h2 className="sitemap-title">Личный кабинет</h2>
        <ul className="sitemap-list">
				<li>1.<Link to="http://hubartwork.github.io/five-shop2/cabinet.html" target="_blank">Мои заказы</Link></li>
				<li>2.<Link to="http://hubartwork.github.io/five-shop2/cabinet-2.html" target="_blank">Кєшбек</Link></li>
				<li>3.<Link to="http://hubartwork.github.io/five-shop2/cabinet-3.html" target="_blank">Тикет</Link></li>
				<li>4.<Link to="http://hubartwork.github.io/five-shop2/cabinet-4.html" target="_blank">Тикет, список</Link></li>
				<li>5.<Link to="http://hubartwork.github.io/five-shop2/cabinet-5.html" target="_blank">Тикет, общение</Link></li>
				<li>6.<Link to="http://hubartwork.github.io/five-shop2/cabinet-6.html" target="_blank">Уведомление</Link></li>
				<li>7.<Link to="http://hubartwork.github.io/five-shop2/cabinet-7.html" target="_blank">Сертификат</Link></li>
				<li>8.<Link to="http://hubartwork.github.io/five-shop2/cabinet-8.html" target="_blank">Подборка для вас</Link></li>
			</ul>
    </div>
</div>
  )
}

export default SiteMap
