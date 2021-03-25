import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchRecipes } from "../../actions";
import CardCarousel from "./CardCarousel";
import AtomSpinner from "../atom-spinner";
import "./Carousel.scss";

const CarouselSlider = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const breakPoints = [
    { width: 200, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
  ];

  if (!recipes.length) {
    return <AtomSpinner style={{ margin: "40px 0" }} />;
  }
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2500}>
        <CardCarousel
          title={recipes[0].title}
          image={recipes[0].image}
          recipe={recipes[0]}
        />
        <CardCarousel
          title={recipes[1].title}
          image={recipes[1].image}
          recipe={recipes[1]}
        />
        <CardCarousel
          title={recipes[2].title}
          image={recipes[2].image}
          recipe={recipes[2]}
        />
        <CardCarousel
          title={recipes[3].title}
          image={recipes[3].image}
          recipe={recipes[3]}
        />
        <CardCarousel
          title={recipes[4].title}
          image={recipes[4].image}
          recipe={recipes[4]}
        />
        <CardCarousel
          title={recipes[5].title}
          image={recipes[5].image}
          recipe={recipes[5]}
        />
        <CardCarousel
          title={recipes[6].title}
          image={recipes[6].image}
          recipe={recipes[6]}
        />
        <CardCarousel
          title={recipes[7].title}
          image={recipes[7].image}
          recipe={recipes[7]}
        />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
