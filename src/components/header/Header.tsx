import { memo } from "react";
import logo from "../../assets/icons/logo.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-navbar">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <ul className="header-lists">
          <li> <a href="">MENU</a> </li>
          <li> <a href="">FOODS</a> </li>
          <li> <a href="">SERVICES</a> </li>
          <li> <a href="">ABOUT US</a> </li>
          <li> <a href=""> <img src={searchIcon} alt="" /> </a> </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
