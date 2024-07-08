import { memo } from "react";
import profileImg from "../../assets/images/profile.svg";
import heroImg from "../../assets/images/hero-img.png";
import playIcon from "../../assets/icons/play-icon.svg";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img className="hero-left-img" src={heroImg} alt="" />
        <p className="hero-left-text">日 <br /> 本 <br /> 食</p>
      </div>
      <div className="hero-right">
        <div className="hero-right-top">
          <h1 className="hero-right-top-title">
            Feel the taste of Japanese foods
          </h1>
          <p className="hero-right-top-text">
            Feel the taste of most populars Japanese foods from anywhere and
            anytime.
          </p>
          <div className="hero-right-top-btns">
            <button className="now">Order Now</button>
            <button className="how">
              <img src={playIcon} alt="" /> How to Order
            </button>
          </div>
        </div>
        <div className="hero-right-bottom">
          <div className="hero-right-bottom-cart">
            <h2>24K+</h2>
            <p>Happy Customer</p>
          </div>
          <p className="hero-line"></p>
          <div className="profile">
            <img src={profileImg} alt="" />
            <p>
              “This is the best Japanese food <br /> delivery service that ever
              exist”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
