import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createCart } from "../../actions/index";
import IngredientsList from "./Ingredients-List";
import IngredientsFlex from "./Ingredients-Flex";
import InstructionSteps from "./Instruction-Steps";
import "./RecipeFullInfo.scss";

const FullRecipeInfo = ({ location }) => {
  const { recipe } = location.state;
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(createCart(recipe));
  };

  const renderCheckbox = (event) => {
    if (event.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const renderNumber = (event) => {
    if (1 <= event.target.value && event.target.value <= 99) {
      setCount(event.target.value);
    } else {
      setCount(1);
    }
  };

  const showIngredients = () => {
    if (checked) {
      return (
        <div className="mb-3">
          <IngredientsList recipe={recipe} count={count} />
        </div>
      );
    } else {
      return (
        <div>
          <div className="ingridients-flex">
            <IngredientsFlex recipe={recipe} count={count} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className=" text-center full-info-header">{recipe.title}</h1>
        <div className="selected-img">
          <img src={recipe.image} alt="rasm" />
        </div>
        <div className="img-icons">
          <div>
            <span>
              <i className="fas fa-dollar-sign"></i>
            </span>
            <p>$ {recipe.pricePerServing} per sevings</p>
          </div>
          <div>
            <span>
              <i className="far fa-heart"></i>
            </span>
            <p>{recipe.aggregateLikes} likes</p>
          </div>
          <div>
            <span>
              <i className="far fa-clock"></i>
            </span>
            <p>Ready in {recipe.readyInMinutes} minutes</p>
          </div>
          <div>
            <span>
              <i className="fas fa-tachometer-alt "></i>
            </span>
            <p>Spoonacular Score: {recipe.spoonacularScore}%</p>
          </div>
        </div>
        <div className="article">
          <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        </div>
        <h1 className="full-info-ingredients">Ingredients</h1>
        <div className="serving-control-panel">
          <div>
            Grid:
            <label className="switch">
              <input type="checkbox" onChange={renderCheckbox} />
              <span className="slider round"></span>
            </label>
            :List
          </div>
          <div>
            <label htmlFor="quantity">Servings:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="99"
              onChange={renderNumber}
              className="quantity-checker"
            />
          </div>
        </div>
        {showIngredients()}
        <h1 className="full-info-instructions">Intructions</h1>
        <InstructionSteps recipe={recipe} />
        <div className="d-flex justify-content-end">
          <a className="add-to-cart-button" onClick={() => addToCart()}>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default FullRecipeInfo;
