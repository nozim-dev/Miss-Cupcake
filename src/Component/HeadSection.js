import React from "react";
import { NavLink } from "react-router-dom";

const HeadSection = () => {
  let img1 = process.env.PUBLIC_URL + "/image/1img.png";
  let img2 = process.env.PUBLIC_URL + "/image/2img.png";
  let img3 = process.env.PUBLIC_URL + "/image/3img.png";
  let img4 = process.env.PUBLIC_URL + "/image/1img2.png";
  let img5 = process.env.PUBLIC_URL + "/image/2img2.png";
  let img6 = process.env.PUBLIC_URL + "/image/3img2.png";
  return (
    <div className="HeadSection">
      <div className="HeadSection__titleBox">
        <div className="HeadSection__title">Miss cupcake</div>
        <div className="HeadSection__text">
          We are proud to offer cupcakes and cakes that are freshly baked within
          hours, if not minutes, for your enjoyment.
        </div>
        <a href="#shopnow" className="HeadSection__btn btn1">
          SHOP NOW
        </a>
      </div>
      <div className="HeadSection__imageBox">
        <div className="HeadSection__image " alt="">
          <img className="img1" src={img1} alt="" />
        </div>
        <div className="HeadSection__image" alt="">
          <img className="img2" src={img2} alt="" />
        </div>
        <div className="HeadSection__image" alt="">
          <img className="img3" src={img3} alt="" />
        </div>
      </div>
      <div className="HeadSection__titleBox HeadSection__titleBox--block2">
        <div className="HeadSection__title HeadSection__title--block2">
          The Simple, Sweet Life
        </div>
        <div className="HeadSection__text HeadSection__text-block2">
          Our cupcakes are always made with the finest ingredients, creating a
          spark that makes your taste buds dance. You’ll want to indulge in each
          and every decadent flavor.
        </div>
        {/* <NavLink
          to="/Why-Miss-cupcake"
          className="HeadSection__btn HeadSection__btn--block2"
        >
          WHY MISS CUPCAKE
        </NavLink> */}
      </div>
      <div className="HeadSection__imageBox2">
        <div className="HeadSection__image_2 img4" alt="">
          <img src={img4} alt="" />
        </div>
        <div className="HeadSection__image_2 img5" alt="">
          <img src={img5} alt="" />
        </div>
        <div className="HeadSection__image_2 img6" alt="">
          <img src={img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
