import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import { signin } from "../../../actions/index";
import "./SignIn.scss";

class SignIn extends Component {
  onSubmit = (e) => {
    this.props.signin(e);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="back-fon">
        <div className="form-wrapper">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit(this.onSubmit)} className="form">
            <label htmlFor="email">Email:</label>
            <Field
              name="email"
              component="input"
              type="email"
              autoComplete="off"
            />
            <label htmlFor="password">Password:</label>
            <Field
              name="password"
              component="input"
              type="password"
              autoComplete="off"
            />
            <div>{this.props.errorMessage}</div>
            <button>Log In</button>
          </form>
          <div className="footer-form">
            <p>If you have no account please</p>
            <Link to="/signup" className="signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  reduxForm({ form: "Signin" }),
  connect(mapStateToProps, { signin })
)(SignIn);
