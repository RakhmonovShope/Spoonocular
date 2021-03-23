import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";

import { showCart, signout } from "../../actions/index";

const SelectNav = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCart());
  }, []);

  const renderQuantity = () => {
    let count = 0;
    props.cart.map((food) => {
      if (props.authentication === food.authentication) {
        count++;
      }
    });
    return count;
  };

  const renderTime = () => {
    let time = new Date();
    if (1 <= time.getHours() && time.getHours() < 9) {
      return <span className="badge badge-danger">Closed</span>;
    }
    return <span className="badge badge-success">Open</span>;
  };

  if (props.authentication) {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            onClick={() => dispatch(signout())}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            Log Out
          </a>
        </li>
        <li className="nav-item" id="usercart">
          <Link to="/usercart" className="nav-link">
            <i className="fas fa-shopping-cart mr-1" />
            <sup className="badge badge-warning">{renderQuantity()}</sup>
          </Link>
        </li>
        <li>{renderTime()}</li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item" id="login">
          <Link to="/signin" className="nav-link">
            <i className="fa fa-fw fa-user"></i>
            Log In
          </Link>
        </li>
        <li>{renderTime()}</li>
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    authentication: state.auth.authentication,
    cart: Object.values(state.cart),
  };
};

export default connect(mapStateToProps)(SelectNav);
