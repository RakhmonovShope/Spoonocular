import React from "react";
import { Link } from "react-router-dom";
import "./Total-Price.scss";

const TotalPrice = (props) => {
  return (
    <div className="total-wrapper">
      <h3>Total Price</h3>
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
