import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import "../assets/styles/App.scss";
import Address from "./adress";
import Footer from "./footer";
import Navbar from "./navbar";
import LatestOnRecipe from "./latest-on-recipe";

const App = ({ children }) => {
  const location = useLocation();

  const sortComponents = () => {
    if (location.pathname !== "/signin" && location.pathname !== "/signup") {
      return (
        <div className="app-wrapper">
          <Navbar />
          {children}
          <LatestOnRecipe />
          <Address />
          <Footer />
        </div>
      );
    } else {
      return <div className="app-wrapper">{children}</div>;
    }
  };

  return <Fragment>{sortComponents()}</Fragment>;
};

export default App;
