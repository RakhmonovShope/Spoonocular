import React, { Fragment } from "react";

import Carousel from "../carousel";
import HeaderImage from "./header-image";
import AdditionalInfo from "./additional-info";

const MainPage = () => {
  return (
    <Fragment>
      <HeaderImage />
      <Carousel />
      <AdditionalInfo />
    </Fragment>
  );
};

export default MainPage;
