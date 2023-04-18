import React,{useEffect} from "react";
/* Ordering Images Start */
import Image1 from "../../../../../assets/img/ordering-1.svg"
import Image2 from "../../../../../assets/img/ordering-2.svg"
import Image3 from "../../../../../assets/img/ordering-3.svg"
import Image4 from "../../../../../assets/img/ordering-4.svg"
import Image5 from "../../../../../assets/img/ordering-5.svg"
/* Ordering Images End */
import $ from "jquery"

const Ordering = (props) => {
  useEffect(() => {
    $.getScript('/js/scripts.min.js', () => {
      console.log('jQuery script loaded');
    });
    $.getScript('/js/common.js', () => {
      console.log('jQuery script loaded');
    });
  }, []);
  return (
  	<section className="ordering">
		<div className="ordering-top"><span>Как пользоватся сайтом?</span><b>Закрыть</b></div>
		<div className="ordering-content">
			<div className="wrapper">
				<div className="ordering-row">
					<div className="ordering-col">
						<span className="ordering-sub">Шаг первый</span>
						<div className="ordering-img"><img src={Image1} alt=""/></div>
						<span className="ordering-tit">Выберите бренд на нашем сервисе</span>
					</div>
					<div className="ordering-col">
						<span className="ordering-sub">Шаг второй</span>
						<div className="ordering-img"><img src={Image2} alt=""/></div>
						<span className="ordering-tit">Перейдите на сайт производителя</span>
					</div>
					<div className="ordering-col">
						<span className="ordering-sub">Шаг третий</span>
						<div className="ordering-img"><img src={Image3} alt=""/></div>
						<span className="ordering-tit">Выберите товар и скопируйте ссылку на товар</span>
					</div>
					<div className="ordering-col">
						<span className="ordering-sub">Шаг четвертый</span>
						<div className="ordering-img"><img src={Image4} alt=""/></div>
						<span className="ordering-tit">Вернитесь на наш сервис нажмите кнопку купить и вставьте ссылку</span>
					</div>
					<div className="ordering-col">
						<span className="ordering-sub">Шаг пятый</span>
						<div className="ordering-img"><img src={Image5} alt=""/></div>
						<span className="ordering-tit">Оформите заказ.</span>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Ordering;
