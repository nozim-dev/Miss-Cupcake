import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import { NavLink } from "react-router-dom";

function Main() {
  //  Counter is a state initialized to 0
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [counter8, setCounter8] = useState(0);
  const [counter9, setCounter9] = useState(0);
  const [counter10, setCounter10] = useState(0);
  const [counter11, setCounter11] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter1(counter1 + 1);
  };
  const handleClick2 = () => {
    // Counter state is incremented
    setCounter2(counter2 + 1);
  };
  const handleClick3 = () => {
    // Counter state is incremented
    setCounter3(counter3 + 1);
  };
  const handleClick4 = () => {
    // Counter state is incremented
    setCounter4(counter4 + 1);
  };
  const handleClick5 = () => {
    // Counter state is incremented
    setCounter5(counter5 + 1);
  };
  const handleClick6 = () => {
    // Counter state is incremented
    setCounter6(counter6 + 1);
  };
  const handleClick7 = () => {
    // Counter state is incremented
    setCounter7(counter7 + 1);
  };
  const handleClick8 = () => {
    // Counter state is incremented
    setCounter8(counter8 + 1);
  };
  const handleClick9 = () => {
    // Counter state is incremented
    setCounter9(counter9 + 1);
  };
  const handleClick10 = () => {
    // Counter state is incremented
    setCounter10(counter10 + 1);
  };
  const handleClick11 = () => {
    // Counter state is incremented
    setCounter11(counter11 + 1);
  };
  // Function is called everytime decrement button is clicked
  const handleClick_1 = () => {
    // Counter state is decremented
    setCounter1(counter1 - 1);
  };
  const handleClick_2 = () => {
    // Counter state is decremented
    setCounter2(counter2 - 1);
  };
  const handleClick_3 = () => {
    // Counter state is decremented
    setCounter3(counter3 - 1);
  };
  const handleClick_4 = () => {
    // Counter state is decremented
    setCounter4(counter4 - 1);
  };
  const handleClick_5 = () => {
    // Counter state is decremented
    setCounter5(counter5 - 1);
  };
  const handleClick_6 = () => {
    // Counter state is decremented
    setCounter6(counter6 - 1);
  };
  const handleClick_7 = () => {
    // Counter state is decremented
    setCounter7(counter7 - 1);
  };
  const handleClick_8 = () => {
    // Counter state is decremented
    setCounter8(counter8 - 1);
  };
  const handleClick_9 = () => {
    // Counter state is decremented
    setCounter9(counter9 - 1);
  };
  const handleClick_10 = () => {
    // Counter state is decremented
    setCounter10(counter10 - 1);
  };
  const handleClick_11 = () => {
    // Counter state is decremented
    setCounter11(counter11 - 1);
  };

  //reset counter

  //   //reset counter
  //   const reset = () =>{
  //     setCounter(0)
  //   }

  if (counter1 < 0) {
    setCounter1(0);
  }
  if (counter2 < 0) {
    setCounter2(0);
  }
  if (counter3 < 0) {
    setCounter3(0);
  }
  if (counter4 < 0) {
    setCounter4(0);
  }
  if (counter5 < 0) {
    setCounter5(0);
  }
  if (counter6 < 0) {
    setCounter6(0);
  }
  if (counter7 < 0) {
    setCounter7(0);
  }
  if (counter8 < 0) {
    setCounter8(0);
  }
  if (counter9 < 0) {
    setCounter9(0);
  }
  if (counter10 < 0) {
    setCounter10(0);
  }
  if (counter11 < 0) {
    setCounter11(0);
  }

  let allcounter =
    counter1 +
    counter2 +
    counter3 +
    counter4 +
    counter5 +
    counter6 +
    counter7 +
    counter8 +
    counter9 +
    counter10 +
    counter11;

  //   The new version of function

  const counte = () => {
    <Navbar counter={allcounter} />;
    const node = document.querySelector(".navbar__korzinkaCounter");
    node.innerHTML = allcounter;
    setCounter1(0);
    setCounter2(0);
    setCounter3(0);
    setCounter4(0);
    setCounter5(0);
    setCounter6(0);
    setCounter7(0);
    setCounter8(0);
    setCounter9(0);
    setCounter10(0);
    setCounter11(0);
  };

  const main_product = document.querySelectorAll(".Main__product");
  const counter_btn_main = (e) => {
    for (let index = 0; index <= main_product.length; index++) {
      console.log(main_product[index]);
    }
  };

  const twoAll = () => {
    counter_btn_main();
    counte();
  };

  let cupcake_1 = process.env.PUBLIC_URL + "/image/cupcake_1.png";
  let cupcake_2 = process.env.PUBLIC_URL + "/image/cupcake_2.png";
  let cupcake_3 = process.env.PUBLIC_URL + "/image/cupcake_3.png";
  let cupcake_4 = process.env.PUBLIC_URL + "/image/image_4.png";
  let cupcake_5 = process.env.PUBLIC_URL + "/image/image_5.png";
  let cupcake_6 = process.env.PUBLIC_URL + "/image/image_6.png";
  let cupcake_7 = process.env.PUBLIC_URL + "/image/image_7.png";
  let cupcake_8 = process.env.PUBLIC_URL + "/image/image_8.png";
  let cupcake_9 = process.env.PUBLIC_URL + "/image/image_9.png";
  let cupcake_10 = process.env.PUBLIC_URL + "/image/image_10.png";
  let cupcake_11 = process.env.PUBLIC_URL + "/image/image_11.png";
  let img3 = process.env.PUBLIC_URL + "/image/footerimg1.png";

  return (
    <div className="Main">
      <div className="Main__texts">
        <div id="shopnow"></div>
        <div className="Main__text">Make your day a little sweeter</div>
      </div>
      <div className="Main__products">
        <div className="row">
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_1} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_1}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter1}</h1>
                  <button onClick={handleClick1} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_2} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_2}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter2}</h1>
                  <button onClick={handleClick2} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_3} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_3}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter3}</h1>
                  <button onClick={handleClick3} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_4} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_4}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter4}</h1>
                  <button onClick={handleClick4} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_5} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_5}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter5}</h1>
                  <button onClick={handleClick5} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_6} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_6}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter6}</h1>
                  <button onClick={handleClick6} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_7} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_7}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter7}</h1>
                  <button onClick={handleClick7} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_8} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_8}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter8}</h1>
                  <button onClick={handleClick8} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_9} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_9}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter9}</h1>
                  <button onClick={handleClick9} className="count counter-plus">
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_10} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_10}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter10}</h1>
                  <button
                    onClick={handleClick10}
                    className="count counter-plus"
                  >
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Main__product col-xl-4">
            <img className="Main__image" src={cupcake_11} alt="" />
            <div className="Main__CupcakeInfo">
              <div className="Main__CupcakeTitle">Carrot</div>
              <div className="Main__CupcakeSubTitle">
                Walnut-studded carrot cake with cinnamon cream cheese frosting
              </div>
              <div className="Main__boxCart">
                <div className="Main__Counter">
                  <button
                    onClick={handleClick_11}
                    className="count counter-minus"
                  >
                    -
                  </button>
                  <h1 className="counter-display">{counter11}</h1>
                  <button
                    onClick={handleClick11}
                    className="count counter-plus"
                  >
                    +
                  </button>
                </div>
                <div className="Main__Cart">
                  <button className="counter_btn_main" onClick={twoAll}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Main__footer">
        <div className="Main__footerText">
          <div className="Main__footerTitle">once upon a time.. </div>
          <div className="Main__footerSubtitle">
            The art of baking runs deep in our family. Growing up on our family
            we learned from the best. Our mom was an amazing baker. She not only
            taught us how to bake, she passed along her values of quality,
            honesty and integrity.
          </div>
          <NavLink
            to="/Our-Story"
            className="HeadSection__btn Main__footerButton"
          >
            Our story
          </NavLink>
        </div>
        <div className="img_footer_main">
          <img className="Main__footerImg" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
