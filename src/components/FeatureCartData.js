import React from "react";
import uuid from "react-uuid";
import './FeatureCartData.css'
const FeatureCartData = (props) => {
  const carts = [
    {
      id: uuid(),
      icon: "fas fa-sync",
      h1: "Marketing Consulting",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,",
    },
    {
      id: uuid(),
      icon: "fas fa-store",
      h1: "Market Analiyst",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,",
    },
    {
      id: uuid(),
      icon: "fas fa-shopping-cart",
      h1: "Easy Purchase",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,",
    },
    {
      id: uuid(),
      icon: "fas fa-check",
      h1: "Check it",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,",
    },
    {
      id: uuid(),
      icon: "fas fa-smile",
      h1: "Easy Purchase",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,",
    },
    {
      id: uuid(),
      icon: "fas fa-plug",
      h1: "Plug in",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,Lorem ipsum dolor sit amet consectetur adipisicing,",
    },
  ];
  return carts.map((cart) => (
    <div
      key={cart.id}
      className="col-lg-4 col-md-6 col-sm-12 col-12 mt-5 feature-cart-col"
    >
      <div>
        <div className="feature-card-icon">
          <span>
            <i className={cart.icon}></i>
          </span>
        </div>
        <div className="feature-card-text">
          <h1>{cart.h1}</h1>
          <p>
            {cart.p}
          </p>
          <a>Learn More</a>
        </div>
      </div>
    </div>
  ));
};
export default FeatureCartData;
