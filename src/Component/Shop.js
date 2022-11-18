import React from "react";
import Footer from "./Footer";
import HeadSection from "./HeadSection";
import Main from "./Main";
import Navbar from "./Navbar";

const Shop = () => {
  let Desktop = process.env.PUBLIC_URL + "/image/bg-1@2x_desktop.png";
  let Tablet = process.env.PUBLIC_URL + "/image/bg@2x_tablet_1438.png";
  let Mobile = process.env.PUBLIC_URL + "/image/bg-2@2x__mobile.png";
  return (
    <div className="Apps">
      <Navbar />
      <img className="bg__image" src={Desktop} alt="" />
      <img className="bg__image2" src={Tablet} alt="" />
      <img className="bg__image3" src={Mobile} alt="" />
      <HeadSection />
      <Main />
      <Footer />
    </div>
  );
};

export default Shop;
