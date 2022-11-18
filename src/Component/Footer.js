import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Footer__box">
        <div className="Footer__menu">
          <NavLink to="/" className="Footer__logo">
            Miss cupcake
          </NavLink>
          <div className="Footer__navbar">
            <NavLink to="/" className="Footer_navText">
              Shop
            </NavLink>
            <NavLink to="/Our-Story" className="Footer_navText">
              Our story
            </NavLink>
            {/* <NavLink to="/Why-Miss-cupcake" className="Footer_navText whytext">
              Why Miss cupcake
            </NavLink> */}
          </div>
          <div className="Footer__inputBlock">
            <div className="Footer__title">Suger up your Inbox</div>
            <div className="Footer__input">
              <input
                className="input_form"
                placeholder="Email address"
                email="email"
              />
              <button className="button_form">SEND</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer__pages">
        <div className="Footer__page f1">
          <span className="Footer__c">© </span>MISS CUPCAKES 2022
        </div>
        <div className="Footer__page f2">Privacy policy</div>
        <div className="Footer__page f3">Cookies policy</div>
        <div className="Footer__page f4">Terms of use</div>
      </div>
    </div>
  );
};

export default Footer;
