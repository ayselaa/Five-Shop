import React from "react";
import { Link } from "react-router-dom";
import BgImage from "../../../../../assets/img/bg-2.webp";
import Image from "../../../../../assets/img/play.svg";

const Review = () => {
  return (
    <section className="review">
      <div className="wrapper">
        <div
          className="review-wrap"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="review-block">
            <span className="review-sub">видео-обзор</span>
            <h2 className="review-title">Tommy Hilfiger x Miffy</h2>
            <Link
              data-fancybox
              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
              className="play-btn link-youtube"
            >
              Смотреть
            </Link>
          </div>
          <Link
            data-fancybox
            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
            className="link-youtube review-btn"
          >
            <img src={Image} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Review;
