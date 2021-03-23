import React, { Fragment } from "react";

const InstructionSteps = ({ recipe }) => {
  const renderSteps = () => {
    if (recipe.analyzedInstructions.length !== 0) {
      return recipe.analyzedInstructions[0].steps.map((e, index) => {
        return (
          <div className="instruction-steps" key={index}>
            <h5>{e.number}</h5>
            <p>{e.step}</p>
          </div>
        );
      });
    } else {
      return <div>This recipe has no Instructions</div>;
    }
  };

  return <Fragment>{renderSteps()}</Fragment>;
};

export default InstructionSteps;
