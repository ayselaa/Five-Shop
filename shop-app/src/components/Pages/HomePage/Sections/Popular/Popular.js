import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../../../../../assets/img/img-4.webp"


const Popular = () => {
  return (
	<section className="popular">
		<div className="wrapper">
			<div className="section-top">
				<span className="section-sub">ПОПУЛЯРНЫЕ</span>
				<h2 className="section-title">ТОП 4 ПОПУЛЯРНЫХ ТОВАРОВ</h2>
			</div>
			<div className="popular-slider swiper-container">
				<div className="swiper-wrapper">
					<div className="popular-slide swiper-slide">
						<div className="popular-wrap">
							<img src={Image} alt=""/>
							<div className="popular-block">
								<Link to="#" className="popular-link">Кофты</Link>
							</div>
						</div>
					</div>
					<div className="popular-slide swiper-slide">
						<div className="popular-wrap">
							<img src={Image} alt=""/>
							<div className="popular-block">
								<Link to="#" className="popular-link">Кофты</Link>
							</div>
						</div>
					</div>
					<div className="popular-slide swiper-slide">
						<div className="popular-wrap">
							<img src={Image} alt=""/>
							<div className="popular-block">
								<Link to="#" className="popular-link">Кофты</Link>
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

export default Popular
