import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import { signup } from "../../../actions/index";
import "../signin/SignIn.scss";

class SignUp extends Component {
  onSubmit = (formValues) => {
    this.props.signup(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="back-fon">
        <div className="form-wrapper">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(this.onSubmit)} className="form">
            <label htmlFor="name">First Name:</label>
            <Field
              name="firstname"
              component="input"
              type="text"
              autoComplete="off"
            />
            <label htmlFor="fmily">Last Name:</label>
            <Field
              name="lastname"
              component="input"
              type="text"
              autoComplete="off"
            />
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
            {this.props.errorMessage}
            <button>Register</button>
          </form>
          <div className="footer-form">
            <p>If you have an account please</p>
            <Link to="/signin" className="signup">
              Log In
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
  reduxForm({ form: "Signup" }),
  connect(mapStateToProps, { signup })
)(SignUp);
