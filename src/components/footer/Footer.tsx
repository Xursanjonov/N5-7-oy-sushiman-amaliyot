import { memo } from "react";
import footerLogo from "../../assets/icons/footer-logo.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import instagrammIcon from "../../assets/icons/instagram.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-navbar">
        <a href="">
          <img src={footerLogo} alt="" />
        </a>
        <ul className="footer-lists">
          <li>
            <a href="">MENU</a>
          </li>
          <li>
            <a href="">FOODS</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
        </ul>
        <div className="footer-icons">
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={instagrammIcon} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
