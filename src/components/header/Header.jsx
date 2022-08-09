import React from "react";
import "./header.css";
import CallToAction from "./CallToAction.jsx";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Howdy, I am</h5>
        <h1>Jerry Li</h1>
        <h4 className="text-light">Computer Science Student</h4>
        <h5 className="text-light">Texas A&M University '24</h5>
        <CallToAction />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Self Portrait" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
