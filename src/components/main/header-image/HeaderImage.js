import React from "react";
import { Link } from "react-router-dom";

import "./HeaderImage.scss";

class HeaderImage extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="overlay">
            <h1>
              it's Spoonocular
              <pre /> it's not spoon{" "}
            </h1>
            <Link to="/menu" className="see-more-button">
              Check out Menu
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderImage;
