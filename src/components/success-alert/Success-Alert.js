import React from "react";

import "./Success-Alert.scss";

const SuccessAlert = ({ state, tittle }) => {
  return (
    <div className={state ? "alert-box successVis" : "alert-box success"}>
      {tittle}
    </div>
  );
};
export default SuccessAlert;
