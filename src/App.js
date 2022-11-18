import React, { useState } from "react";
import "./App.css";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import Shop from "./Component/Shop";
import OurStory from "./Component/OurStory";
// import WhyMisscupcake from "./Component/WhyMisscupcake";
import CheckOut from "./Component/CheckOut";
import CheckOutConfirmed from "./Component/CheckOutConfirmed";
// import Card from "./Component/Card";

function App() {
  const [loading] = useState();

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 200000);
  // }, []);

  window.onload = function () {
    function foo() {
      // alert("test");
      document.querySelector("body").classList.add("body");
    }
    setInterval(foo, -12 /* 7995*/);
  };

  const override = css`
    // margin: 65% 0 0 -26%;
    width: 200px;
    height: 4px;
    background-color: #adadad;
    border-radius: 12px;
    border: 0.5px solid #a2a2a2;
  `;

  let apple = process.env.PUBLIC_URL + "/image/apple-logo.png";


  return (
    <div className="App">
      {loading ? (
        <div className="bgload">
          <div className="gbload__block">
            <div className="apple_block">
              <img className="appleLogo" src={apple} alt="" />
            </div>
            <div className="loading__block">
              <BarLoader
                color={"#585858"}
                loading={loading}
                css={override}
                size={170}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="cap">
           <Routes>
             <Route path='/' element={<Shop/>}/> 
             <Route path='/Our-Story' element={<OurStory/>}/> 
             {/* <Route path='/Why-Miss-cupcake' element={<WhyMisscupcake/>}/>  */}
             <Route path='/CheckOut' element={<CheckOut/>}/> 
             <Route path='/CheckOutConfirmed' element={<CheckOutConfirmed/>}/> 
             {/* <Route path='/Cardsome' element={<Card/>}/>  */}
           </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
