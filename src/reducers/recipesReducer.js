import { FETCH_RECIPES, FETCH_RECIPE } from '../actions/types';

const recipeReducers = (state = [], action) => {
  switch( action.type ){
    case FETCH_RECIPES:
      return [...action.payload];
    default:
      return state;  
  }  
}

export default recipeReducers;