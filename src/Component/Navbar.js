import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar(props) {
  let korzinka = process.env.PUBLIC_URL + "/image/korzinka.svg";
  let iconLogo = process.env.PUBLIC_URL + "/image/iconLogo.svg";
  let x = process.env.PUBLIC_URL + "/image/xsvg.svg";
  let korzinka1 = process.env.PUBLIC_URL + "/image/korzinka1.png";
  let korzinka2 = process.env.PUBLIC_URL + "/image/korzinka2.png";
  let korzinka3 = process.env.PUBLIC_URL + "/image/korzinka3.png";
  let korzinka4 = process.env.PUBLIC_URL + "/image/korzinka4.png";
  let hr = process.env.PUBLIC_URL + "/image/hr1.svg";

  let sum = 0;

  const [state, setState] = useState("");
  const [korzx, korzxStete] = useState("");

  const toggleAccordion = () => {
    setState(state === "" ? "block" : "");
  };
  const toggleAccordionx = () => {
    korzxStete(korzx === "" ? "block" : "");
  };


  return (
    <div className="navbar">
      <img
        onClick={toggleAccordion}
        src={iconLogo}
        alt=""
        className="navbar__iconLogo"
      />
      <div style={{ display: state }} className="navbar__mobile_menu">
        <NavLink to="/" onClick={toggleAccordion} className="navbar__text">
          Shop
        </NavLink>
        <NavLink
          to="/Our-Story"
          onClick={toggleAccordion}
          className="navbar__text"
        >
          Our story
        </NavLink>
        {/* <NavLink
          to="/Why-Miss-cupcake"
          onClick={toggleAccordion}
          className="navbar__text"
        >
          Why Miss cupcake
        </NavLink> */}
      </div>

      <div className="navbar__menu">
        <NavLink
          to="/"
          className="navbar__text navbar__text-bold navbar__textLeft"
        >
          Shop
        </NavLink>
        <NavLink to="/Our-Story" className="navbar__text navbar__textCenter">
          Our story
        </NavLink>
        {/* <NavLink
          to="/Why-Miss-cupcake"
          className="navbar__text navbar__textRight"
        >
          Why Miss cupcake
        </NavLink> */}
      </div>
      <div onClick={toggleAccordionx} className="navbar__icon">
        <img className="navbar__korzinka" src={korzinka} alt="" />
        <div className="navbar__korzinkaCounter">{sum}</div>
      </div>
      <div style={{ display: korzx }} className="navbar__korzinkaBlock">
        <img
          onClick={toggleAccordionx}
          className="navbar__korzx"
          src={x}
          alt=""
        />
        <div className="navbar__KorzinkaPageTitle">My Bag</div>
        <img src={hr} className="navbar__hr1" alt="" />
        <ul className="navbar__ul">
          <li>
            <img className="navbar__korzinkaImg1" src={korzinka1} alt="" />
            <div className="navbar__korzinkaTitle1">Carrot x 1</div>
            <div className="navbar__price1">$3.49</div>
          </li>
          <li>
            <img className="navbar__korzinkaImg2" src={korzinka2} alt="" />
            <div className="navbar__korzinkaTitle2">Red Velvet x 3</div>
            <div className="navbar__price2">$10.47</div>
          </li>
          <li>
            <img className="navbar__korzinkaImg3" src={korzinka3} alt="" />
            <div className="navbar__korzinkaTitle3">Mint Chip x 2</div>
            <div className="navbar__price3">$6.98</div>
          </li>
          <li>
            <img className="navbar__korzinkaImg4" src={korzinka4} alt="" />
            <div className="navbar__korzinkaTitle4">Pink strawberry x 2</div>
            <div className="navbar__price4">$6.98</div>
          </li>
        </ul>
        <img src={hr} className="navbar__hr2" alt="" />
        <div className="navbar__totalpay">Total to pay</div>
        <div className="navbar__Price">$27.92</div>
        <NavLink to="/CheckOut" className="navbar__CheckOutbtn">
          CHECK OUT
        </NavLink>
        <button className="navbar__viewCart">VIEW CART</button>
      </div>
    </div>
  );
}

export default Navbar;
