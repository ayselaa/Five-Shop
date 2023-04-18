import React from "react";
import Main1 from "../../../../../assets/img/main-1.svg"
import Main1Webp from "../../../../../assets/img/img-1.webp"
import Main1Webp5 from "../../../../../assets/img/img-5.webp"
import { Link } from "react-router-dom";
// style={{ backgroundImage: `url(${ImageWebp1})` }}
const Main = () => {
  return (
    <section className="main">
		<div className="wrapper">
			<div id="main-sl-1" className="main-sl main-sl-1 active">
				<div className="main-slider swiper-container" id="swiper1">
					<div className="swiper-wrapper">
						<div className="main-slide swiper-slide">
							<div className="main-row">
								<div className="main-info">
									<div className="main-logo">
										<div className="main-logo-img"><img src={Main1} alt=""/></div>
										<span className="main-logo-txt">NIKE</span>
									</div>
									<h2 className="main-title">NIKE TEACH</h2>
									<Link className="main-block" to="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</Link>
									<div className="buttons">
										<Link to="#main-sl-1" className="main-btn primary-btn">Перейти к товару</Link>
										<Link to="#main-sl-2" className="main-btn border-btn">Женские</Link>
									</div>
								</div>
								<div className="main-img" style={{ backgroundImage: `url(${Main1Webp})` }}></div>
							</div>
						</div>
						<div className="main-slide swiper-slide">
							<div className="main-row">
								<div className="main-info">
									<div className="main-logo">
										<div className="main-logo-img"><img src={Main1} alt=""/></div>
										<span className="main-logo-txt">NIKE</span>
									</div>
									<h2 className="main-title">NIKE TEACH</h2>
									<Link className="main-block" to="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</Link>
									<div className="buttons">
										<Link to="#main-sl-1" className="main-btn primary-btn">Перейти к товару</Link>
										<Link tp="#main-sl-2" className="main-btn border-btn">Женские</Link>
									</div>
								</div>
								<div className="main-img" style={{ backgroundImage: `url(${Main1Webp})` }}></div>
							</div>
						</div>
						<div className="main-slide swiper-slide">
							<div className="main-row">
								<div className="main-info">
									<div className="main-logo">
										<div className="main-logo-img"><img src={Main1} alt=""/></div>
										<span className="main-logo-txt">NIKE</span>
									</div>
									<h2 className="main-title">NIKE TEACH</h2>
									<Link className="main-block" to="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</Link>
									<div className="buttons">
										<Link to="#main-sl-1" className="main-btn primary-btn">Перейти к товару</Link>
										<Link to="#main-sl-2" className="main-btn border-btn">Женские</Link>
									</div>
								</div>
								<div className="main-img" style={{ backgroundImage: `url(${Main1Webp})` }}></div>
							</div>
						</div>
					</div>
					<div className="main-actions">
						<div className="main-num" id="main-num"><span>1</span> <b>/</b> 3</div>
						<div className="main-bar run-animation"><i></i></div>
						<div className="slider-arrows">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</div>
			<div id="main-sl-2" className="main-sl main-sl-2">
				<div className="main-slider swiper-container" id="swiper2">
					<div className="swiper-wrapper">
						<div className="main-slide swiper-slide">
							<div className="main-row">
								<div className="main-info">
									<div className="main-logo">
										<div className="main-logo-img"><img src={Main1} alt=""/></div>
										<span className="main-logo-txt">NIKE</span>
									</div>
									<h2 className="main-title">NIKE TEACH</h2>
									<Link className="main-block" to="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</Link>
									<div className="buttons">
										<Link to="#main-sl-1" className="main-btn primary-btn">Перейти к товару</Link>
										<Link to="#main-sl-2" className="main-btn border-btn">Женские</Link>
									</div>
								</div>
								<div className="main-img" style={{ backgroundImage: `url(${Main1Webp5})` }}></div>
							</div>
						</div>
						<div className="main-slide swiper-slide">
							<div className="main-row">
								<div className="main-info">
									<div className="main-logo">
										<div className="main-logo-img"><img src={Main1} alt=""/></div>
										<span className="main-logo-txt">NIKE</span>
									</div>
									<h2 className="main-title">NIKE TEACH</h2>
									<Link className="main-block" to="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</Link>
									<div className="buttons">
										<Link to="#main-sl-1" className="main-btn primary-btn">Перейти к товару</Link>
										<Link to="#main-sl-2" className="main-btn border-btn">Женские</Link>
									</div>
								</div>
								<div className="main-img" style={{ backgroundImage: `url(${Main1Webp5})` }}></div>
							</div>
						</div>
						<div className="main-slide swiper-slide">
							<div className="main-row">
								<div className="main-info">
									<div className="main-logo">
										<div className="main-logo-img"><img src={Main1} alt=""/></div>
										<span className="main-logo-txt">NIKE</span>
									</div>
									<h2 className="main-title">NIKE TEACH</h2>
									<Link className="main-block" to="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</Link>
									<div className="buttons">
										<Link to="#main-sl-1" className="main-btn primary-btn">Перейти к товару</Link>
										<Link to="#main-sl-2" className="main-btn border-btn">Женские</Link>
									</div>
								</div>
								<div className="main-img" style={{ backgroundImage: `url(${Main1Webp5})` }}></div>
							</div>
						</div>
					</div>
					<div className="main-actions">
						<div className="main-num" id="main-num2"><span>1</span> <b>/</b> 3</div>
						<div className="main-bar run-animation"><i></i></div>
						<div className="slider-arrows">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Main;
