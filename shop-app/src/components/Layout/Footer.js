import React from "react";
import { Link } from "react-router-dom";
import VK from "../../assets/img/vk.svg";
import TG from "../../assets/img/tg.svg";
import DS from "../../assets/img/ds.svg";
import YT from "../../assets/img/yt.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-top">
            <h2 className="footer-title">
              <span>SHOP NAME</span> - Это уникальная площадка, которая не
              оставит вас равнодушным
            </h2>
            <Link to="#" className="footer-up">
              <span>НА ВЕРХ</span>
            </Link>
          </div>
          <div className="footer-middle">
            <div className="footer-row">
              <div className="footer-main">
                <div className="footer-col">
                  <span className="footer-sub">Навигация</span>
                  <ul>
                    <li>
                      <Link to="#">ТЕКСТ</Link>
                    </li>
                    <li>
                      <Link to="#">ТЕКСТ</Link>
                    </li>
                    <li>
                      <Link to="#">ТЕКСТ</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <span className="footer-sub">Другое</span>
                  <ul>
                    <li>
                      <Link to="#">ТЕКСТ</Link>
                    </li>
                    <li>
                      <Link to="#">ТЕКСТ</Link>
                    </li>
                    <li>
                      <Link to="#">ТЕКСТ</Link>
                    </li>
                    <li>
                      <Link to="#">ТЕКСТ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-social">
                <span className="footer-sub">Подпишись на нас</span>
                <ul>
                  <li>
                    <Link to="#">
                      <img src={VK} alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={TG} alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={DS} alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={YT} alt="img" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2022 SHOP NAME</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
