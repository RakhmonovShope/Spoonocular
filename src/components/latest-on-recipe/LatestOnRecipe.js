import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./LatestOnRecipe.scss";

const LatestOnRecipe = () => {
  const [emailForInfo, setEmailForInfo] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setEmailForInfo(data.email);
  };

  const remindInfo = () => {
    if (!emailForInfo.length) {
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            placeholder="Email address"
          />
          {errors.name && (
            <span style={{ color: "black" }}>Pease fill this field</span>
          )}
          <button>send</button>
        </form>
      );
    } else {
      return <p className="mailing-list-msg">Thanks for subscribing!</p>;
    }
  };

  return (
    <div className="latest-info-wrapper">
      <div>
        <i className="far fa-envelope"></i>
      </div>
      <div>
        <h3>Latest on the Recipe</h3>
        {remindInfo()}
      </div>
    </div>
  );
};

export default LatestOnRecipe;
