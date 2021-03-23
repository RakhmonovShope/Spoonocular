import React from "react";

import restaurant from "../../../assets/img/about-6 (1).png";
import "./AdditionalInfo.js.scss";

const DineWithUs = () => {
  return (
    <React.Fragment>
      <div className="pizzarasm">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  ml-auto wholesome">
              <h4>WHOLESOME</h4>
              <h1>WHOLESOME AND AWESOME</h1>
              <p>
                Thanks to our health-conscious recipes, Spoonocular is the
                perfect fuel for Tashkent’s non- stop lifestyle. Choose your
                organic toppings from one of Spoonocular’s in-house
                specialities, or customize with your favourites to create a new
                go-to. The result? A fresh and wholesome Spoonocular, just the
                way you like it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container restaurant-image">
        <div className="row my-5 align-items-center additional-info-restaurant">
          <div
            className="col-lg-6 wholesome text-dark"
            style={{ marginTop: "20px" }}
          >
            <h4>design</h4> <h1>DINE WITH US OR WE'LL DELIVER TO YOU!</h1>
            <p>
              Light, bright and full of good vibes, Spoonocular’s Oybek Metro
              location houses the central kitchen for our speedy deliveries,
              ensuring your Spoonocular is piping hot when it arrives at your
              door. Inside, we offer a cozy and chilled space where you can
              enjoy your lunch break or pose for happy snaps in front of our
              custom-painted brick wall – don’t forget to tag us. Our intimate
              dining area is designed to reflect Pinza’s globalized roots, with
              sunshine yellow and Italian turquoise detailing.
            </p>
          </div>
          <div className="col-lg-6 ">
            <img src={restaurant} alt="restaurant" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DineWithUs;
