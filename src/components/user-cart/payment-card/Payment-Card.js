import React from "react";
import { useForm } from "react-hook-form";

import rasm1 from "../../../assets/img/200px-Mastercard-logo.svg.png";
import rasm2 from "../../../assets/img/Citizens-Cards-Business.png";
import "./Payment-Card.scss";

const PaymentCard = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="payment-wrapper">
      <span>Total Sum: $ {props.total}</span>
      <h1>Card details</h1>
      <h6>Card type</h6>
      <div className="card-images">
        <img src={rasm2} alt="viza" />
        <img src={rasm1} alt="master-card" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-name-wrapper">
          <label htmlFor="cardname">Name of card</label>
          <input
            type="text"
            name="cardname"
            id="cardname"
            ref={register}
            placeholder="Enter name of your card"
          />
        </div>
        <div className="card-number">
          <label>Card number</label>
          <input
            placeholder="****"
            ref={register({ required: true, maxLength: 4 })}
            className="input-number"
            name="first4"
            type="number"
          />
          <input
            placeholder="****"
            ref={register({ required: true, maxLength: 4 })}
            className="input-number"
            name="second4"
            type="number"
          />
          <input
            placeholder="****"
            ref={register({ required: true, maxLength: 4 })}
            className="input-number"
            name="third4"
            type="number"
          />
          <input
            placeholder="****"
            ref={register({ required: true, maxLength: 4 })}
            className="input-number"
            name="fourth4"
            type="number"
          />
          {errors.first4 && (
            <span>
              This field required or you have entered more than 4 number
            </span>
          )}
        </div>
        <div className="expire-date">
          <label htmlFor="expdata">Experition Date</label>
          <input type="text" placeholder="mm" maxLength="2" />
          <input type="text" placeholder="yyyy" maxLength="4" />
          <input type="text" placeholder="XXX" maxLength="3" />
        </div>
        <button type="submit">Check Out</button>
      </form>
    </div>
  );
};

export default PaymentCard;
