import Modal4Img from "../../../assets/img/modal-4.svg";
import Modal3Img from "../../../assets/img/modal-3.svg";
import Modal5Img from "../../../assets/img/modal-5.svg";
import Modal1 from "../../../assets/img/modal-1.webp";
import Modal10 from "../../../assets/img/modal-10.webp";
import Basket2 from "../../../assets/img/basket-ico-2.svg";
import React, { useEffect } from "react";
import $ from "jquery";
import {Link} from "react-router-dom"

const Modals = () => {
  useEffect(() => {
    $.getScript("/js/scripts.min.js", () => {
      console.log("jQuery script loaded");
    });
    $.getScript("/js/common.js", () => {
      console.log("jQuery script loaded");
    });
  }, []);
  return (
  <React.Fragment>
    <div className="sitemap">
		<div className="wrapper">
			<h2 className="sitemap-title">Все модалки</h2>
			<ul className="sitemap-list">
				<li>1.<Link data-fancybox data-src="#modal-authorization" to="javascript:;">Авторизация</Link></li>
				<li>2.<Link data-fancybox data-src="#modal-registration" to="javascript:;">Регистрация</Link></li>
				<li>3.<Link data-fancybox data-src="#modal-registration2" to="javascript:;">Регистрация 2</Link></li>
				<li>4.<Link data-fancybox data-src="#modal-registration3" to="javascript:;">Регистрация 3</Link></li>
				<li>5.<Link data-fancybox data-src="#modal-registration4" to="javascript:;">Регистрация 4</Link></li>
				<li>6.<Link data-fancybox data-src="#modal-card" to="javascript:;">СКИДКИ NIKE 40%</Link></li>
				<li>7.<Link data-fancybox data-src="#modal-education" to="javascript:;">Обучение</Link></li>
				<li>8.<Link data-fancybox data-src="#modal-certificate" to="javascript:;">Сертификатная карта</Link></li>
				<li>9.<Link data-fancybox data-src="#modal-basket" to="javascript:;">Корзина заполнение данных</Link></li>
				<li>10.<Link data-fancybox data-src="#modal-ticket" to="javascript:;">Тикет, создание</Link></li>
				<li>11.<Link data-fancybox data-src="#modal-add" to="javascript:;">Добавить в корзину</Link></li>
				<li>12.<Link data-fancybox data-src="#modal-track" to="javascript:;">Мои заказы (Отследить заказ)</Link></li>
				<li>13.<Link data-fancybox data-src="#modal-compilation" to="javascript:;">Подборка для вас</Link></li>
				<li>14.<Link data-fancybox data-src="#modal-product" to="javascript:;">Добавление товара 2</Link></li>
			</ul>
		</div>
	</div>
	
	<div style="display: none;" id="modal-authorization" className="modal">
		<h2 className="modal-title">Авторизация</h2>
		<form action="">
			<div className="input-block input-block-ico">
				<i className="hb-ico tel-ico"></i>
				<input type="text" name="text" placeholder="Ведите номер телефона"/>
			</div>
			<div className="input-block input-block-ico">
				<i className="hb-ico password-ico"></i>
				<input type="password" name="password" placeholder="Ведите пароль"/>
			</div>
			<div className="modal-forgot">
				<div className="checkbox">
					<input type="checkbox"/>
					<i className="checkbox-ico"></i>
					<p>Запомнить меня</p>
				</div>
				<Link to="#" className="modal-link">Забыли пароль?</Link>
			</div>
			<div className="modal-btns">
				<button className="primary-btn">Авторизоваться</button>
				<Link to="#" className="border-btn">Создать аккаунт</Link>
			</div>
		</form>
	</div>
	<div style="display: none;" id="modal-registration" className="modal">
		<h2 className="modal-title">Регистрация</h2>
		<form action="">
			<div className="input-block input-block-ico">
				<i className="hb-ico tel-ico"></i>
				<input type="text" name="text" placeholder="Ведите номер телефона"/>
			</div>
			<div className="modal-registration-bottom">
				<button className="primary-btn">Отправить код</button>
				<Link to="#" className="border-btn modal-close">Вернутся</Link>
			</div>
		</form>
	</div>
	<div style="display: none;" id="modal-registration2" className="modal">
		<h2 className="modal-title">Регистрация</h2>
		<form action="">
			<div className="input-block">
				<input type="text" name="text" placeholder="Ведите 6-ти значный код"/>
			</div>
			<div className="modal-registration-bottom">
				<button className="primary-btn">Подтвердить</button>
				<div className="modal-registration-time">Отправить код повторно через 1:25</div>
				<Link to="#" className="border-btn modal-close">Вернутся</Link>
			</div>
		</form>
	</div>
	<div style="display: none;" id="modal-registration3" className="modal">
		<h2 className="modal-title">Регистрация</h2>
		<form action="">
			<div className="input-block">
				<input type="text" name="text" placeholder="Имя"/>
			</div>
			<div className="input-block">
				<input type="text" name="text" placeholder="Фамилия"/>
			</div>
			<div className="input-block">
				<input type="password" name="password" placeholder="Пароль"/>
			</div>
			<div className="input-block">
				<input type="password" name="password" placeholder="Повторите пароль"/>
			</div>
			<div className="checkbox">
				<input type="checkbox"/>
				<i className="checkbox-ico"></i>
				<p>я ознакомился с правилами конфиденциальности сайта</p>
			</div>
			<div className="modal-buttons">
				<button className="primary-btn">Закончить регистрацию</button>
				<Link to="#" className="border-btn modal-close">Вернутся</Link>
			</div>
		</form>
	</div>
	<div style="display: none;" id="modal-registration4" className="modal">
		<h2 className="modal-title">Регистрация прошла успешно</h2>
		<div className="modal-registration-img">
			<img src={Modal4Img} alt=""/>
		</div>
	</div>
	<div style="display: none;" id="modal-card" className="modal modal-card">
		<div className="modal-card-img"><img src={Modal1} alt=""/></div>
		<div className="modal-card-content">
			<h2 className="modal-card-title">СКИДКИ NIKE 40%</h2>
			<p>Сейчас у компании nike можно получить огромные скидки в размере 40%</p>
			<div className="modal-card-buttons">
				<Link to="#" className="modal-link">Нет, спасибо</Link>
				<Link to="#" className="primary-btn">Посмотреть</Link>
			</div>
		</div>
	</div>
	<div style="display: none;" id="modal-education" className="modal modal-education">
		<div className="modal-education-step active">
			<div className="modal-education-info">
				<span className="modal-education-sub">ОБУЧЕНИЕ</span>
				<h2 className="modal-education-title">Хотите ли вы пройти обучение по покупке вещей на сайте?</h2>
				<div className="modal-education-buttons">
					<Link to="#" className="primary-btn modal-next">Пройти обучение</Link>
					<Link to="#" className="modal-link modal-close">Закрыть окно обучения</Link>
				</div>
			</div>
			<div className="modal-education-img"><img src={Modal3Img} alt=""/></div>
		</div>
		<div className="modal-education-step">
			<div className="modal-education-info">
				<span className="modal-education-sub">ОБУЧЕНИЕ</span>
				<span className="modal-education-st">1 шаг из 5</span>
				<h2 className="modal-education-title">Выберите бренд на нашем сервисе</h2>
				<div className="modal-education-buttons">
					<Link to="#" className="primary-btn modal-next">Продолжить</Link>
					<Link to="#" className="modal-link modal-close">Закрыть окно обучения</Link>
				</div>
			</div>
			<div className="modal-education-img"><img src={Modal5Img} alt=""/></div>
		</div>
		<div className="modal-education-step">
			<div className="modal-education-info">
				<span className="modal-education-sub">ОБУЧЕНИЕ</span>
				<span className="modal-education-st">2 шаг из 5</span>
				<h2 className="modal-education-title">Перейдите на сайт производителя</h2>
				<div className="modal-education-buttons">
					<Link to="#" className="primary-btn modal-next">Продолжить</Link>
					<Link to="#" className="modal-link modal-close">Закрыть окно обучения</Link>
				</div>
			</div>
			<div className="modal-education-img"><img src={Modal5Img} alt=""/></div>
		</div>
		<div className="modal-education-step">
			<div className="modal-education-info">
				<span className="modal-education-sub">ОБУЧЕНИЕ</span>
				<span className="modal-education-st">3 шаг из 5</span>
				<h2 className="modal-education-title">Выберите товар и скопируйте ссылку на товар</h2>
				<div className="modal-education-buttons">
					<Link to="#" className="primary-btn modal-next">Продолжить</Link>
					<Link to="#" className="modal-link modal-close">Закрыть окно обучения</Link>
				</div>
			</div>
			<div className="modal-education-img"><img src={Modal5Img} alt=""/></div>
		</div>
		<div className="modal-education-step">
			<div className="modal-education-info">
				<span className="modal-education-sub">ОБУЧЕНИЕ</span>
				<span className="modal-education-st">4 шаг из 5</span>
				<h2 className="modal-education-title">Вернитесь на наш сервис нажмите кнопку купить и вставьте ссылку</h2>
				<div className="modal-education-buttons">
					<Link to="#" className="primary-btn modal-next">Продолжить</Link>
					<Link to="#" className="modal-link modal-close">Закрыть окно обучения</Link>
				</div>
			</div>
			<div className="modal-education-img"><img src={Modal5Img} alt=""/></div>
		</div>
		<div className="modal-education-step">
			<div className="modal-education-info">
				<span className="modal-education-sub">ОБУЧЕНИЕ</span>
				<span className="modal-education-st">5 шаг из 5</span>
				<h2 className="modal-education-title">Оформите заказ.</h2>
				<div className="modal-education-buttons">
					<Link to="#" className="primary-btn modal-close">Закрыть окно обучения</Link>
				</div>
			</div>
			<div className="modal-education-img"><img src={Modal5Img} alt=""/></div>
		</div>
	</div>
	<div style="display: none;" id="modal-certificate" className="modal modal-certificate">
		<div className="allTabs">
			<ul className="tab-list">
				<li><Link to="#md-tab-1" className="active">Интернет карта</Link></li>
				<li><Link to="#md-tab-2">Пластиковая карта</Link></li>
			</ul>
			<div className="tab tab-active" id="md-tab-1">
				<form action="">
					<div className="input-block">
						<input type="text" name="text" placeholder="Введите имя"/>
					</div>
					<div className="input-block">
						<input type="text" name="text" placeholder="Введите адрес электронной почты"/>
					</div>
					<button className="primary-btn">Отправить</button>
				</form>
			</div>
			<div className="tab" id="md-tab-2">
				<form action="">
					<div className="input-block">
						<input type="text" name="text" placeholder="Введите имя"/>
					</div>
					<div className="input-block">
						<input type="text" name="text" placeholder="Введите адрес доставки"/>
					</div>
					<button className="primary-btn">Заказать</button>
				</form>
			</div>
		</div>
	</div>
	<div style="display: none;" id="modal-basket" className="modal modal-basket">
		<h2 className="modal-basket-title"><span>Использование</span> кэшбек или сертификат</h2>
		<div className="modal-basket-bl"><i className="hb-ico calculator-ico"></i><span>Сумма доставки включена в стоимость</span></div>
		<form action="">
			<div className="input-block">
				<input type="text" name="text" placeholder="Выбрать сертификат"/>
			</div>
			<div className="modal-basket-block"><span>Выбрать кэшбек</span><span>-5.00 руб</span></div>
			<button className="primary-btn">Закрыть</button>
		</form>
	</div>
	<div style="display: none;" id="modal-ticket" className="modal modal-ticket">
		<form action="">
			<h2 className="modal-ticket-title">Создание тикета</h2>
			<div className="input-block">
				<select name="text">
					<option value="">Выберите номер заказа</option>
					<option value="">Выберите номер заказа</option>
				</select>
			</div>
			<div className="input-block">
				<select name="text">
					<option value="">Выберите департмент</option>
					<option value="">Выберите департмент</option>
				</select>
			</div>
			<div className="modal-ticket-hr"></div>
			<div className="input-block">
				<input type="text" name="text" placeholder="Напишите тему тикета"/>
			</div>
			<div className="input-block">
				<textarea name="text" placeholder="Сообщение"></textarea>
			</div>
			<div className="modal-ticket-bottom">
				<div className="modal-ticket-file">
					<input type="file"/>
					<Link to="#" className="primary-btn">Прикрепить файл</Link>
					<span>123.png</span>
				</div>
				<button className="primary-btn">Отправить заявку</button>
			</div>
		</form>
	</div>
	<div style="display: none;" id="modal-add" className="modal modal-add">
		<h2 className="modal-ticket-title">Добавить в корзину</h2>
		<form action="">
			<div className="modal-search">
				<div className="input-block input-block-ico">
					<i className="hb-ico clip-ico"></i>
					<input type="text" name="text" placeholder="Введите ссылку"/>
				</div>
				<button className="primary-btn">Поиск</button>
			</div>
		</form>
	</div>
	<div style="display: none;" id="modal-track" className="modal modal-track">
		<span className="modal-track-title">Доставлена</span>
		<p>Ваша посылка успешно доставлена на отделение почты</p>
		<div className="modal-track-btn">
			<Link to="#" className="primary-btn modal-close">Закрыть</Link>
		</div>
	</div>
	<div style="display: none;" id="modal-compilation" className="modal modal-compilation">
		<span className="modal-track-title">Подборка</span>
		<p>Вы не настроили подброки, для того что бы настроить нажмите на кнпоку ниже</p>
		<div className="modal-card-buttons">
			<Link to="#" className="modal-link modal-close">Нет, спасибо</Link>
			<Link to="#" className="primary-btn">Настроить</Link>
		</div>
	</div>
	<div style="display: none;" id="modal-product" className="modal modal-product">
		<h2 className="modal-ticket-title">Добавить в корзину</h2>
		<form action="">
			<div className="modal-search">
				<div className="input-block input-block-ico">
					<i className="hb-ico clip-ico"></i>
					<input type="text" name="text" placeholder="Введите ссылку"/>
				</div>
				<button className="primary-btn">Поиск</button>
			</div>
			<div className="modal-product-bl">Убедитесь что на сайте производителя есть цвет и размер товара так же выберите правильную категории, в сулчае если выбрали не правильно, стоимость доставик будет указано неверно</div>
			<div className="modal-product-row">
				<div className="modal-product-img"><img src={Modal10} alt=""/></div>
				<div className="modal-product-info">
					<span className="modal-product-sub">Название товара</span>
					<span className="modal-product-tit">Женское платье Zara</span>
					<div className="modal-product-block">
						<span className="modal-product-label">Выберите цвет</span>
						<ul className="colors">
							<li>
								<div>
									<input type="radio" name="color"/>
									<i className="colors-ico colors-dark"><i></i></i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="color"/>
									<i className="colors-ico colors-gray"><i></i></i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="color"/>
									<i className="colors-ico colors-red"><i></i></i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="color"/>
									<i className="colors-ico colors-green"><i></i></i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="color" checked/>
									<i className="colors-ico colors-blue"><i></i></i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="color"/>
									<i className="colors-ico colors-brown"><i></i></i>
								</div>
							</li>
						</ul>
					</div>
					<div className="modal-product-block">
						<span className="modal-product-label">Выберите размер</span>
						<ul className="sizes">
							<li>
								<div>
									<input type="radio" name="size"/>
									<i>S</i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="size"/>
									<i>M</i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="size"/>
									<i>L</i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="size"/>
									<i>X</i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="size" checked/>
									<i>XL</i>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" name="size"/>
									<i>XL</i>
								</div>
							</li>
						</ul>
					</div>
					<div className="modal-product-prices">
						<b><span>Цена:</span>500 лиры</b>
						<b>1500 руб</b>
					</div>
					<Link to="#" className="primary-btn"><span>В корзину</span><img src={Basket2} alt=""/></Link>
				</div>
			</div>
		</form>
	</div>
  </React.Fragment>
  );
};

export default Modals;
