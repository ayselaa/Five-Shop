import Main1 from "../../../../../assets/img/main-1.svg"
import Main1Webp from "../../../../../assets/img/img-1.webp"
import Main1Webp5 from "../../../../../assets/img/img-5.webp"
import"../../../../../assets/libs/swiper/swiper-bundle.min.css"
import React,{useEffect} from "react";
import $ from "jquery"

const Main = () => {
	useEffect(() => {
		$.getScript('/js/scripts.min.js', () => {
		  console.log('jQuery script loaded');
		});
		$.getScript('/js/common.js', () => {
		  console.log('jQuery script loaded');
		});
	  }, []);
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
									<a className="main-block" href="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</a>
									<div className="buttons">
										<a href="#main-sl-1" className="main-btn primary-btn">Перейти к товару</a>
										<a href="#main-sl-2" className="main-btn border-btn">Женские</a>
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
									<a className="main-block" href="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</a>
									<div className="buttons">
										<a href="#main-sl-1" className="main-btn primary-btn">Перейти к товару</a>
										<a href="#main-sl-2" className="main-btn border-btn">Женские</a>
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
									<a className="main-block" href="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</a>
									<div className="buttons">
										<a href="#main-sl-1" className="main-btn primary-btn">Перейти к товару</a>
										<a href="#main-sl-2" className="main-btn border-btn">Женские</a>
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
									<a className="main-block" href="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</a>
									<div className="buttons">
										<a href="#main-sl-1" className="main-btn primary-btn">Перейти к товару</a>
										<a href="#main-sl-2" className="main-btn border-btn">Женские</a>
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
									<a className="main-block" href="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</a>
									<div className="buttons">
										<a href="#main-sl-1" className="main-btn primary-btn">Перейти к товару</a>
										<a href="#main-sl-2" className="main-btn border-btn">Женские</a>
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
									<a className="main-block" href="#modal-discount">
										<span>СКИДКА</span>
										<b>40%</b>
									</a>
									<div className="buttons">
										<a href="#main-sl-1" className="main-btn primary-btn">Перейти к товару</a>
										<a href="#main-sl-2" className="main-btn border-btn">Женские</a>
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
