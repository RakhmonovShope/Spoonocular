import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import UserCart from "./User-Cart";
import RequireAuth from "../require-auth";
import PaymentCard from "./payment-card";
import "./User-Cart-Container.scss";

class UserCartContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container user-cart-content-wrapper">
          <h1 className="text-center ">
            <b>{this.props.name}</b> here your cart
          </h1>
          <div className="main-cart-class">
            <UserCart />
            <PaymentCard total={this.props.location.state} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { name: state.auth.name };
};

export default compose(
  RequireAuth,
  connect(mapStateToProps)
)(UserCartContainer);
