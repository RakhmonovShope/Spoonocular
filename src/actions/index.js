import axios from "axios";
import {
  AUTH_ERROR,
  AUTH_USER,
  CREATE_CART,
  FETCH_RECIPES,
  READ_CART,
  DELETE_CART,
} from "./types";
import history from "../history";
import realApi from "../apis/realApi";
import cartDB from "../apis/cartDB";

//      <!--------------------  Sign In  ---------------------->

export const signin = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formValues
    );
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    history.push("/usercart");
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login cridentials" });
  }
};

//      <!--------------------  Sign Up  ---------------------->

export const signup = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formValues
    );
    history.push("/");
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);

    dispatch({ type: AUTH_USER, payload: response.data });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email is in use !" });
  }
};

//      <!--------------------  Sign Out  ---------------------->

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};

//      <!--------------------  FetchRecipes  ---------------------->

export const fetchRecipes = (term) => async (dispatch) => {
  const response = await realApi.get("/recipes/complexSearch", {
    params: { query: term },
  });
  dispatch({ type: FETCH_RECIPES, payload: response.data.results });
};

//      <!--------------------  CreateCart  ---------------------->

export const createCart = (data) => async (dispatch, getState) => {
  const { authentication } = getState().auth;
  let recipe = {
    image: data.image,
    title: data.title,
    pricePerServing: data.pricePerServing,
    servings: data.servings,
    missedIngredientCount: data.missedIngredientCount,
  };
  const response = await cartDB.post("/cart", { ...recipe, authentication });

  dispatch({ type: CREATE_CART, payload: response.data });
};

//      <!--------------------  ShowCart  ---------------------->

export const showCart = () => async (dispatch) => {
  const response = await cartDB.get("/cart");

  dispatch({ type: READ_CART, payload: response.data });
  return response;
};

//      <!--------------------  DeleteCart  ---------------------->

export const deleteCart = (id) => async (dispatch) => {
  const response = await cartDB.delete(`/cart/${id}`);

  dispatch({ type: DELETE_CART, payload: id });
  return response;
};
