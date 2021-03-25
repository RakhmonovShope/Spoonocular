import React from "react";
import { Link } from "react-router-dom";

const CardCarousel = ({ title, image, recipe }) => {
  return (
    <Link
      to={{
        pathname: `/recipe/${recipe.id}`,
        state: { recipe },
      }}
    >
      <div className="carousel-card">
        <img src={image} alt={title} class="card__image" />
        <div class="card__overlay">
          <p className="card__overlay__text">{title}</p>
        </div>
      </div>
    </Link>
  );
};
export default CardCarousel;
