import React from 'react'
import {Link} from "react-router-dom"
import Img1 from "../../../../../assets/img/ico-1.svg"

const Advantages = () => {
  return (
<section className="advantages">
		<div className="advantages-top">
			<div className="wrapper">
				<h2 className="advantages-title">Наши приемущества</h2>
				<div className="advantages-row">
					<div className="advantages-col">
						<div className="advantages-wrap">
							<div className="advantages-ico"><img src={Img1} alt=""/></div>
							<div className="advantages-info">
								<span className="advantages-tit">повернення товарів</span>
								<span className="advantages-txt">Протягом 14 днів</span>
							</div>
						</div>
					</div>
					<div className="advantages-col">
						<div className="advantages-wrap">
						<div className="advantages-ico"><img src={Img1} alt=""/></div>
							<div className="advantages-info">
								<span className="advantages-tit">повернення товарів</span>
								<span className="advantages-txt">Протягом 14 днів</span>
							</div>
						</div>
					</div>
					<div className="advantages-col">
						<div className="advantages-wrap">
						<div className="advantages-ico"><img src={Img1} alt=""/></div>
							<div className="advantages-info">
								<span className="advantages-tit">повернення товарів</span>
								<span className="advantages-txt">Протягом 14 днів</span>
							</div>
						</div>
					</div>
					<div className="advantages-col">
						<div className="advantages-wrap">
						<div className="advantages-ico"><img src={Img1} alt=""/></div>
							<div className="advantages-info">
								<span className="advantages-tit">повернення товарів</span>
								<span className="advantages-txt">Протягом 14 днів</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="advantages-bottom">
			<div className="wrapper">
				<div className="advantages-block">
					<span className="advantages-block-title">Даруємо 500 бонусів новим учасникам програми</span>
					<span className="advantages-block-txt">Реєструйтесь у Клубній програмі та отримайте бонус на перше замовлення товарів.</span>
					<Link to="#" className="primary-btn">Отримати бонуси</Link>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Advantages
