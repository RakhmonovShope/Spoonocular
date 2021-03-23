import React from "react";
import { Link } from "react-router-dom";

const LocationCards = () => {
  return (
    <div className="container">
      <div className="location-card-wrapper">
        <div className="location-card">
          <h3>Yunusobod 15-11</h3>
          <h4>Shop Number 5 | Tashkent, Uzbekistan</h4>
          <small>Weekdays: 11:00 AM TO 1:30 AM</small>
          <small>Weekends: 2:30 am closing</small>
          <div className="order-or-location">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/41%C2%B022'39.6%22N+69%C2%B017'51.9%22E/@41.377678,69.2955703,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d41.377678!4d69.297759"
            >
              <span className="fas fa-map-marker-alt"></span>direction
            </a>
            <Link to="/menu">order now</Link>
          </div>
        </div>
        <div className="location-card">
          <h3>Skver Mirobod</h3>
          <h4>right after 'aloqa bank</h4>
          <small>Weekdays: 11:00 AM TO 1:30 AM</small>
          <small>Weekends: 2:30 am closing</small>
          <div className="order-or-location">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/41%C2%B018'42.6%22N+69%C2%B016'48.4%22E/@41.3118271,69.2779245,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d41.3118202!4d69.2801068"
            >
              <span className="fas fa-map-marker-alt"></span>direction
            </a>
            <Link to="/menu">order now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCards;
