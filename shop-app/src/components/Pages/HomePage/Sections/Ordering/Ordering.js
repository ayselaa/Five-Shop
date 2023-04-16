import React,{useEffect} from "react";
/* Ordering Images Start */
import OrderingSvg1 from "../../../../../assets/img/ordering-1.svg";
import OrderingSvg2 from "../../../../../assets/img/ordering-2.svg";
import OrderingSvg3 from "../../../../../assets/img/ordering-3.svg";
import OrderingSvg4 from "../../../../../assets/img/ordering-4.svg";
import OrderingSvg5 from "../../../../../assets/img/ordering-5.svg";
/* Ordering Images End */

/* Ordering UI Start */
import OrderingCol from "./UI/OrderingCol";
import Wrapper from "./UI/Wrapper";
import OrderingSection from "./UI/OrderingSection";
import OrderingContent from "./UI/OrderingContent";
import OrderingRow from "./UI/OrderingRow";
import OrderingSub from "./UI/OrderingSub";
import OrderingTitle from "./UI/OrderingTitle";
/* Ordering UI End */

/* Ordering Elements Start */
import OrderingTop from "./Elements/OrderingTop";
import OrderingImage from "./UI/OrderingImage";
/* Ordering Elements End */

import $ from "jquery"

const Ordering = (props) => {

  useEffect(() => {
  }, []);

  return (
    <OrderingSection>
      <OrderingTop />
      <OrderingContent>
        <Wrapper>
          <OrderingRow>
            <OrderingCol>
              <OrderingSub>Шаг первый</OrderingSub>
              <OrderingImage>
                <img src={OrderingSvg1} alt="" />
              </OrderingImage>
               <OrderingTitle>Выберите бренд на нашем сервисе</OrderingTitle>
            </OrderingCol>

            <OrderingCol>
              <OrderingSub>Шаг второй</OrderingSub>
              <OrderingImage>
                <img src={OrderingSvg2} alt="" />
              </OrderingImage>
              <OrderingTitle>Перейдите на сайт производителя</OrderingTitle>
            </OrderingCol>

            <OrderingCol>
              <OrderingSub>Шаг третий</OrderingSub>
              <OrderingImage>
                <img src={OrderingSvg3} alt="" />
              </OrderingImage>
              <OrderingTitle>
                Выберите товар и скопируйте ссылку на товар
              </OrderingTitle>
            </OrderingCol>

            <OrderingCol>
              <OrderingSub>Шаг четвертый</OrderingSub>
              <OrderingImage>
                <img src={OrderingSvg4} alt="" />
              </OrderingImage>
              <OrderingTitle>
                Вернитесь на наш сервис нажмите кнопку купить и вставьте ссылку
              </OrderingTitle>
            </OrderingCol>

            <OrderingCol>
              <OrderingSub>Шаг пятый</OrderingSub>
              <OrderingImage>
                <img src={OrderingSvg5} alt="" />
              </OrderingImage>
              <OrderingTitle>Оформите заказ.</OrderingTitle>
            </OrderingCol>
          </OrderingRow>
        </Wrapper>
      </OrderingContent>
      <script src="../../../../../assets/js/scripts.js"></script>
      <script src="../../../../../assets/js/common.js"></script>
    </OrderingSection>
  );
};

export default Ordering;
