import React from "react";
import { Link } from "react-router-dom";

import "./Address.scss";

const Location = () => {
  return (
    <div className="location-wrapper" id="dinewithus">
      <div className="info-wrapper">
        <h4>
          skver mirobod - weekdays: 9:00 am to 1:00 am | weekends : 1:00 am
          closing
        </h4>
        <h4>
          oybek metro - weekdays 11:00 am to 12:00 am | weekends 12:00 am
          closing
        </h4>
        <h4>wee wait you .</h4>
        <Link to="/location" className="icon-wrapper">
          <p>See All Our Locations</p>
          <i className="fas fa-map-marker-alt"></i>
        </Link>
      </div>
    </div>
  );
};

export default Location;
