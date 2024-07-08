import { memo } from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-1">
        <div className="about-1-cart-1">
          <img src="" alt="" />
          <h5>ツ ナ</h5>
        </div>
        <div className="about-1-cart-1">
          <img src="" alt="" />
          <h5>エ ビ</h5>
        </div>
      </div>
      <div className="about-2">
        <h5 className="about-2-title">About Us / 私たちに関しては</h5>
        <h1 className="about-2-text">
          Our mission is to bring true Japanese flavours to you.
        </h1>
        <p className="about-2-info">
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </section>
  );
};

export default memo(About);
