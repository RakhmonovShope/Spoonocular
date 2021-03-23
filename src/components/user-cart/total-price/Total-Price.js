import React from "react";
import { Link } from "react-router-dom";
import "./Total-Price.scss";

const TotalPrice = (props) => {
  return (
    <div className="total-wrapper">
      <h1>Total Price</h1>
      <p>
        <span>$</span> {props.total}
      </p>
      <div className="checkout">
        <Link
          to={{
            pathname: "/usercart",
            state: props.total,
          }}
        >
          Save
        </Link>
      </div>
    </div>
  );
};

export default TotalPrice;
