/* eslint-disable react/style-prop-object */
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import * as LottiePlayer from "@lottiefiles/lottie-player";

// {/* <lottie-player
//         autoplay
//         loop
//         speed="1.5"
//         mode="normal"
//         src="https://assets4.lottiefiles.com/packages/lf20_rjgikbck.json"
//         style={{width: "320px"}}
//       ></lottie-player> */}

const WhyMisscupcake = () => {
  let bg_desktop = process.env.PUBLIC_URL + "/image/WhymissDesktop.png";
  let bg_Tablet = process.env.PUBLIC_URL + "/image/WhymissTablet.png";
  let bg_Mobile = process.env.PUBLIC_URL + "/image/WhymissMobile.png";

  let Whymisscupcake1 = process.env.PUBLIC_URL + "/image/Whymisscupcake1.png";
  let Whymisscupcake2 = process.env.PUBLIC_URL + "/image/Whymisscupcake2.png";
  let Whymisscupcake3 = process.env.PUBLIC_URL + "/image/Whymisscupcake3.png";
  let WhymisscupcakeBottom =
    process.env.PUBLIC_URL + "/image/WhymisscupcakeBottom.png";
  let WhymisscupcakeTop =
    process.env.PUBLIC_URL + "/image/WhymisscupcakeTop.png";
  let WhymisscupcakeCenter =
    process.env.PUBLIC_URL + "/image/WhymisscupcakeCenter.png";
  let WhymisscupcakeLeft =
    process.env.PUBLIC_URL + "/image/WhymisscupcakeLeft.png";
  let WhymisscupcakeRight =
    process.env.PUBLIC_URL + "/image/WhymisscupcakeRight.png";
  let WhymisscupcakeBottom2 =
    process.env.PUBLIC_URL + "/image/WhymisscupcakeBottom2.png";
  let WhymisscupcakeCircle =
    process.env.PUBLIC_URL + "/image/WhymisscupcakeCircle.png";

  let Whymisscupcake4 = process.env.PUBLIC_URL + "/image/Whymisscupcake4.png";
  let Whymisscupcake5 = process.env.PUBLIC_URL + "/image/Whymisscupcake5.png";

  return (
    <div className="WhyMisscupcake">
      <Navbar />
      <div className="WhyMisscupcake__imageBox">
        <img className="WhyMisscupcake__imageDesktop" src={bg_desktop} alt="" />
        <img className="WhyMisscupcake__imageTablet" src={bg_Tablet} alt="" />
        <img className="WhyMisscupcake__imageMobile" src={bg_Mobile} alt="" />
      </div>
      <div className="WhyMisscupcake__blockOne">
        <div className="WhyMisscupcake__OneTitle">The Simple, Sweet Life</div>
        <div className="WhyMisscupcake__OneSubtitle">
          Our cupcakes are always made with the finest ingredients, creating a
          spark that makes your taste buds dance. You’ll want to indulge in each
          and every decadent flavor.
        </div>
        <NavLink to="/" className="WhyMisscupcake__Onebtn">
          SHOP NOW
        </NavLink>
      </div>
      <img
        src={WhymisscupcakeCircle}
        className="WhyMisscupcake__WhymisscupcakeCircle"
        alt=""
      />
      <img
        src={WhymisscupcakeTop}
        className="WhyMisscupcake__WhymisscupcakeTop"
        alt=""
      />
      <img
        src={WhymisscupcakeCenter}
        className="WhyMisscupcake__WhymisscupcakeCenter"
        alt=""
      />
      <img
        src={WhymisscupcakeBottom}
        className="WhyMisscupcake__WhymisscupcakeBottom"
        alt=""
      />
      <img
        src={WhymisscupcakeLeft}
        className="WhyMisscupcake__WhymisscupcakeLeft"
        alt=""
      />
      <div className="WhyMisscupcake__SubtitleLeft">
        Each and every item produced by Cupcake Boutique is lovingly handmade,
        with great pride taken in the preparation, baking and delivery.
      </div>
      <img
        src={WhymisscupcakeRight}
        className="WhyMisscupcake__WhymisscupcakeRight"
        alt=""
      />
      <div className="WhyMisscupcake__SubtitleRight">
        From the iconic swirl and modern dot to the specially sourced
        ingredients, our cupcakes are the definition of quality.
      </div>
      <img
        src={WhymisscupcakeBottom2}
        className="WhyMisscupcake__WhymisscupcakeBottom2"
        alt=""
      />
      <div className="WhyMisscupcake__SubtitleBottom2">
        The recipes are inspired by both authentic local ingredients, as well as
        international favourites.
      </div>
      <img
        src={Whymisscupcake1}
        className="WhyMisscupcake__Whymisscupcake1"
        alt=""
      />
      <div className="WhyMisscupcake__Whymisscupcake2Box">
        <img
          src={Whymisscupcake2}
          className="WhyMisscupcake__Whymisscupcake2"
          alt=""
        />
        <img
          src={Whymisscupcake3}
          className="WhyMisscupcake__Whymisscupcake3"
          alt=""
        />
      </div>
      <div className="WhyMisscupcake__blockTwo">
        <div className="WhyMisscupcake__TwoTitle">Roasted with happiness</div>
        <div className="WhyMisscupcake__TwoSubtitle">
          Each and every item produced by Cupcake Boutique is lovingly handmade,
          with great pride taken in the preparation, baking and delivery
        </div>
        <NavLink to="/" className="WhyMisscupcake__Twobtn">
          SHOP NOW
        </NavLink>
        <img className="WhyMisscupcake__Twoimg4" src={Whymisscupcake4} alt="" />
        <img className="WhyMisscupcake__Twoimg5" src={Whymisscupcake5} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default WhyMisscupcake;
