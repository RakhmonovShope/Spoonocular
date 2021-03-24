import React from "react";

import "./Success-Alert.scss";

const SuccessAlert = ({ state, tittle }) => {
  return (
    <div className={`alert-box ${state ? "successVis" : "success"}`}>
      <i className="fas fa-check-circle mr-2"></i>
      {tittle}
    </div>
  );
};
export default SuccessAlert;
