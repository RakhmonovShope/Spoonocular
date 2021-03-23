import React from "react";
import { useForm } from "react-hook-form";

import "./Contact.scss";
import contactImg from "../../assets/img/contactPizza.png";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <div>
      <section className="contact-image-wrapper">
        <header className="curl-banner">
          <div className="contact-headeing">
            <h1>Leave your feedback</h1>
          </div>
        </header>
      </section>

      <section className="contact-container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <img src={contactImg} alt="contactpizza" />
            </div>
            <div className="col-md-6 col-lg-6">
              <h1>Contact us</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="firstname"
                  ref={register({ required: true })}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastname"
                  ref={register({ required: true })}
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  name="email"
                  ref={register({ required: true })}
                  placeholder="Email"
                />
                <input
                  type="number"
                  name="contactNumber"
                  ref={register({ required: true })}
                  placeholder="Contact Number"
                />
                <input
                  type="text"
                  name="areaInterest"
                  ref={register({ required: true })}
                  placeholder="Area of interest"
                />
                <textarea
                  type="text"
                  name="message"
                  rows="3"
                  ref={register({ required: true })}
                  placeholder="Message"
                />
                <button>Submit now!</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
