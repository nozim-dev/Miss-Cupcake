import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../App.css";
// import { NavLink } from "react-router-dom";

const OurStory = () => {
  let bg_desktop = process.env.PUBLIC_URL + "/image/bg_OurStory_desktop.png";
  let bg_Tablet = process.env.PUBLIC_URL + "/image/bg_OurStory_Tablet.png";
  let bg_Mobile = process.env.PUBLIC_URL + "/image/bg_OurStory_Mobile.png";

  let OurStory__OneImage =
    process.env.PUBLIC_URL + "/image/OurStory__OneImage.png";
  let TwoBlockVideo = process.env.PUBLIC_URL + "/image/sweet-candy-land.mp4";
  let ThreeImage1 = process.env.PUBLIC_URL + "/image/OurStory__ThreeImage1.png";
  let ThreeImage2 = process.env.PUBLIC_URL + "/image/OurStory__ThreeImage2.png";
  let OurStory__Image3Tablet = process.env.PUBLIC_URL + "/image/OurStory__Image3Tablet.png";
  let OurStory__Image3Mobile = process.env.PUBLIC_URL + "/image/OurStory__Image3Mobile.png";
  let maps ='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6131044.44664104!2d64.5735819!3d41.381166!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1644684831311!5m2!1sen!2s'

  return (
    <div className="OurStory">
      <Navbar />
      <div className="Ourstory__imageBox">
        <img className="Ourstory__imageDesktop" src={bg_desktop} alt="" />
        <img className="Ourstory__imageTablet" src={bg_Tablet} alt="" />
        <img className="Ourstory__imageMobile" src={bg_Mobile} alt="" />
      </div>
      <div className="OurStory__blockOne">
        <div className="OurStory__OneTitle">once upon a time..</div>
        <div className="OurStory__OneSubtitle">
          The art of baking runs deep in our family. Growing up on our family we
          learned from the best. Our mom was an amazing baker. She not only
          taught us how to bake, she passed along her values of quality, honesty
          and integrity.
        </div>
        <div className="OurStory__OneImage">
          <img src={OurStory__OneImage} alt="" />
        </div>
      </div>
      <div className="OurStory__TwoTitle">Celebrating the little things</div>
      <div className="OurStory__TwoSubtitle">
        We believe in celebrating the little things, working hard, supporting
        one another and baking the best cupcakes we can. We work on creating a
        caring community through baking.
        <br />
        <br />
        We are committed to building a work environment where we can all learn,
        <br />
        grow and be our best selves.
      </div>
      <div className="OurStory__TwoVideoBlock">
        <video
          className="OurStory__TwoVideo"
          src={TwoBlockVideo}
          loop
          autoPlay="autoplay"
          playsInline
          muted
        ></video>
      </div>
      <div className="OurStory__blockthree">
        <div className="OurStory__ThreeTitle">The Simple, Sweet Life</div>
        <div className="OurStory__ThreeSubtitle">
          We are proud to offer cupcakes and cakes that are freshly baked within
          hours, if not minutes, for your enjoyment.
        </div>
        {/* <NavLink to="/Why-Miss-cupcake" className="OurStory__ThreeButton">
          Why Miss cupcake
        </NavLink> */}
        <img className="OurStory__ThreeImage1" src={ThreeImage1} alt="" />
        <img className="OurStory__ThreeImage2" src={ThreeImage2} alt="" />
        <img className="OurStory__Image3Tablet" src={OurStory__Image3Tablet} alt="" />
      </div>
      <img className="OurStory__Image3Mobile" src={OurStory__Image3Mobile} alt="" />
      <div className="OurStory__FourTitle">
        Come and visit the Miss Cupcake store
      </div>
      <div className="OurStory__MapBlock">
      <iframe className="OurStory__map" src={maps} frameBorder='0px' allowFullScreen aria-hidden='false' tabIndex={'0'} title="Maps" loading="lazy"></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
