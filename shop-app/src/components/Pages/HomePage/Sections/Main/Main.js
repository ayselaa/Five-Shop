import React from "react";

/* Import Slide Images Start */
import MainImgWeb1 from "./UI/MainImgWeb1";
import MainImgWeb5 from "./UI/MainImgWeb5";
/* Import Slide Images End */

/* Import UI Start */
import Wrapper from "./UI/Wrapper";
import MainSection from "./UI/MainSection";
import MainSlideAndSwipperSlide from "./UI/MainSlideAndSwipperSlide";
import MainRow from "./UI/MainRow";
import MainInfo from "./UI/MainInfo";
import MainLogo from "./UI/MainLogo";
import MainLogoImg from "./UI/MainLogoImg";
/* Import UI End */

/*Import Elements Start */
import MainActions from "./Elements/MainActions";
import SwipperWrapper from "./UI/SwipperWrapper";
import Buttons from "./Elements/Buttons";
import MainBlock from "./Elements/MainBlock";
import MainLogoText from "./Elements/MainLogoText";
import MainTitle from "./Elements/MainTitle";
/*Import Elements End */

const Main = () => {
  return (
    <MainSection>
      <Wrapper>
        <div id="main-sl-1" className="main-sl main-sl-1 active">
          <div className="main-slider swiper-container" id="swiper1">
            <SwipperWrapper>
                
              <MainSlideAndSwipperSlide>
                <MainRow>
                  <MainInfo>
                    <MainLogo>
                      <MainLogoImg />
                      <MainLogoText />
                    </MainLogo>
                    <MainTitle />
                    <MainBlock />
                    <Buttons />
                  </MainInfo>
                  <MainImgWeb1 />
                </MainRow>
              </MainSlideAndSwipperSlide>

              <MainSlideAndSwipperSlide>
                <MainRow>
                  <MainInfo>
                    <MainLogo>
                      <MainLogoImg />
                      <MainLogoText />
                    </MainLogo>
                    <MainTitle />
                    <MainBlock />
                    <Buttons />
                  </MainInfo>
                  <MainImgWeb1 />
                </MainRow>
              </MainSlideAndSwipperSlide>

              <MainSlideAndSwipperSlide>
                <MainRow>
                  <MainInfo>
                    <MainLogo>
                      <MainLogoImg />
                      <MainLogoText />
                    </MainLogo>
                    <MainTitle />
                    <MainBlock />
                    <Buttons />
                  </MainInfo>
                  <MainImgWeb1 />
                </MainRow>
              </MainSlideAndSwipperSlide>
            </SwipperWrapper>
            <MainActions />
          </div>
        </div>
        <div id="main-sl-2" className="main-sl main-sl-2">
          <div className="main-slider swiper-container" id="swiper2">
            <SwipperWrapper>

              <MainSlideAndSwipperSlide>
                <MainRow>
                  <MainInfo>
                    <MainLogo>
                      <MainLogoImg />
                      <MainLogoText />
                    </MainLogo>
                    <MainTitle />
                    <MainBlock />
                    <Buttons />
                  </MainInfo>
                  <MainImgWeb5 />
                </MainRow>
              </MainSlideAndSwipperSlide>

              <MainSlideAndSwipperSlide>
                <MainRow>
                  <MainInfo>
                    <MainLogo>
                      <MainLogoImg />
                      <MainLogoText />
                    </MainLogo>
                    <MainTitle />
                    <MainBlock />
                    <Buttons />
                  </MainInfo>
                  <MainImgWeb5 />
                </MainRow>
              </MainSlideAndSwipperSlide>

              <MainSlideAndSwipperSlide>
                <MainRow>
                  <MainInfo>
                    <MainLogo>
                      <MainLogoImg />
                      <MainLogoText />
                    </MainLogo>
                    <MainTitle />
                    <MainBlock />
                    <Buttons />
                  </MainInfo>
                  <MainImgWeb5 />
                </MainRow>
              </MainSlideAndSwipperSlide>

            </SwipperWrapper>
            <MainActions />
          </div>
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default Main;
