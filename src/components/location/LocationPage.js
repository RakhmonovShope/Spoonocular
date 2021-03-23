import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import LocationCards from "./LocationCards";
import "./scss/LocationPage.scss";

const AnyReactComponent = () => (
  <div className="display-4">
    <i className="fas fa-map-marker-alt"></i>
  </div>
);

class LocationPage extends Component {
  static defaultProps = {
    center: {
      lat: 41.377678,
      lng: 69.297759,
    },
    zoom: 11,
  };

  render() {
    return (
      <div>
        <div className="map-wrapper">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBfZLLSaVSoOKBEmB-Gd-iFZxtkBT8Jep8",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent lat={41.377678} lng={69.297759} />
            <AnyReactComponent
              lat={41.31182020183389}
              lng={69.28010680174779}
            />
          </GoogleMapReact>
        </div>
        <LocationCards />
      </div>
    );
  }
}

export default LocationPage;
