import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";

import history from "../../history";
import { createCart } from "../../actions";
import SuccessAlert from "../success-alert";

const Cards = ({ recipes }) => {
  const { authentication } = useStore().getState().auth;
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  function handleClickShowAlert(recipe) {
    checkUser(recipe);
    setState(true);

    setTimeout(() => {
      setState(false);
    }, 4000);
  }

  function checkUser(recipe) {
    if (authentication) {
      dispatch(createCart(recipe));
    } else {
      history.push("/signin");
    }
  }

  function getRecipes() {
    if (recipes.length > 0) {
      return recipes.map((recipe, index) => {
        return (
          <div key={index} className="card text-center">
            <Link
              to={{
                pathname: `/recipe/${recipe.id}`,
                state: { recipe },
              }}
            >
              <img src={recipe.image} alt={recipe.title} />
            </Link>
            <h5>{recipe.title}</h5>

            <div className="breaf-info-food">
              <span>
                <i className="far fa-clock"></i>
                {recipe.readyInMinutes} min
              </span>
              <span>
                <i className="fas fa-utensils"></i>
                {recipe.servings} people
              </span>
              <span>
                <i className="fas fa-carrot"></i>
                {recipe.missedIngredientCount} ingredients
              </span>
            </div>
            <span className="badge badge-info my-2 py-2 price mx-auto">
              ${recipe.pricePerServing}
            </span>

            <div className="button-flex">
              <a
                onClick={() => handleClickShowAlert(recipe)}
                className="cart-button"
              >
                <i className="fas fa-shopping-cart mr-1" />
              </a>
              <Link
                to={{
                  pathname: `/recipe/${recipe.id}`,
                  state: { recipe },
                }}
              >
                View
                <span id="view-icon" className="fa fa-angle-right"></span>
              </Link>
            </div>
          </div>
        );
      });
    } else
      return (
        <div className="display-4">
          <i className="fa fa-spinner fa-spin "></i>{" "}
        </div>
      );
  }

  return (
    <Fragment>
      {getRecipes()}
      <SuccessAlert state={state} tittle="Successfully added to card !!!" />
    </Fragment>
  );
};
export default Cards;
