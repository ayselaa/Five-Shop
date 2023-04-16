import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/logo.svg"

const Header = () => {
  return (
    <header className="header">
		<div className="header-top">
			<div className="wrapper">
				<Link to="tel:+994552026942" className="header-phone">+994 55 202 69 42</Link>
				<Link to="#" className="header-support">Поддержка</Link>
			</div>
		</div>
		<div className="header-bottom">
			<div className="wrapper">
				<div className="header-logo"><Link to="#"><img src={Logo} alt=""/></Link></div>
				<div className="header-row">
					<div className="header-main">
						<ul className="header-menu">
							<li><Link to="/" className="active">Главная</Link></li>
							<li><Link to={"/catalog"}>Новая колекция</Link></li>
							<li><Link to="#">Распродажи</Link></li>
							<li><Link to="#">Подборка для вас</Link></li>
							<li><Link to="#">Купить сертификат</Link></li>
							<li><Link to="#">Как заказать товар</Link></li>
						</ul>
						<div className="header-mob">
							<div><Link to="tel:+994552026942" className="header-phone">+994 55 202 69 42</Link></div>
							<div><Link to="#" className="header-support">Поддержка</Link></div>
						</div>
					</div>
					<div className="header-actions">
						<Link to="#" className="account-btn"><span>Личный аккаунт</span></Link>
						<Link to="#" className="basket-btn"><span>Корзина</span></Link>
						<div className="header-basket">
							<div className="header-basket-main">
								<div className="header-basket-top">
									<div className="header-basket-tit">
										<img src="img/basket-ico.svg" alt=""/>
										<span>Корзина</span>
									</div>
									<span className="header-basket-num">2 шт.</span>
								</div>
							</div>
							<div className="header-basket-content">
								<div className="header-basket-card">
									<i className="hb-ico rev-ico"></i>
									<div className="header-basket-img"><img src="img/img-9.webp" alt=""/></div>
									<div className="header-basket-info">
										<span className="header-basket-name"><Link to="#">TOMMY HILFIGER</Link></span>
										<span className="header-basket-txt"><Link to="#">Жіночий бордовий пуховик MONOGRAM BADGE DOWN MAXI</Link></span>
										<div className="header-basket-size">
											<span>Размер: XS</span>
											<span>Цвет: Черный</span>
										</div>
										<div className="header-basket-price">
											<span>Стоимость</span>
											<b>15000 руб</b>
										</div>
									</div>
								</div>
								<div className="header-basket-card">
									<i className="hb-ico rev-ico"></i>
									<div className="header-basket-img"><img src="img/img-9.webp" alt=""/></div>
									<div className="header-basket-info">
										<span className="header-basket-name"><Link to="#">TOMMY HILFIGER</Link></span>
										<span className="header-basket-txt"><Link to="#">Жіночий бордовий пуховик MONOGRAM BADGE DOWN MAXI</Link></span>
										<div className="header-basket-size">
											<span>Размер: XS</span>
											<span>Цвет: Черный</span>
										</div>
										<div className="header-basket-price">
											<span>Стоимость</span>
											<b>15000 руб</b>
										</div>
									</div>
								</div>
							</div>
							<div className="header-basket-bottom">
								<div className="header-basket-total">
									<span>Стоимость покупки</span>
									<b>45000 руб</b>
								</div>
								<Link to="#" className="primary-btn">Перейти в корзину</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="header-bar"><span></span></div>
			</div>
		</div>
  	</header>
  )
}

export default Header
