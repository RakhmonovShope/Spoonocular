import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";
import recipeReducers from "./recipesReducer";
import Auth from "./auth";
import cartReducer from "./cartReducer";

export default combineReducers({
  auth: Auth,
  cart: cartReducer,
  form: formReducers,
  recipes: recipeReducers,
});
