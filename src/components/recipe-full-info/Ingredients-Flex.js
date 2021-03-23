import React, { Fragment } from "react";

const IngredientsFlex = ({ count, recipe }) => {
  const renderFlex = () => {
    return recipe.missedIngredients.map((ingredient, index, arr) => {
      return (
        <div key={index}>
          <h6>
            {ingredient.amount * count} {ingredient.unit}
          </h6>
          <img src={ingredient.image} alt="rasm" />
          <p>{ingredient.name}</p>
        </div>
      );
    });
  };

  return <Fragment>{renderFlex()}</Fragment>;
};

export default IngredientsFlex;
