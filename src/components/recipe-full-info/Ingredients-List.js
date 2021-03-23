import React, { Fragment } from "react";

const IngredientsList = ({ recipe, count }) => {
  const renderList = () => {
    return recipe.missedIngredients.map((listIngredients, index, arr) => {
      return (
        <div className="ingridients-list" key={index}>
          <img
            src={listIngredients.image}
            className="img-for-list"
            alt="2222"
            width="100"
            height="100"
          />
          <h6 className="norma">
            {listIngredients.amount * count} {listIngredients.unit}
          </h6>
          <p>{listIngredients.name}</p>
        </div>
      );
    });
  };

  return <Fragment>{renderList()}</Fragment>;
};

export default IngredientsList;
