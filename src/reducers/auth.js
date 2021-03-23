import { AUTH_ERROR, AUTH_USER } from "../actions/types";
const INITIAL_STATE = {
  authentication: "",
  errorMessage: "",
  name: null,
};
const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authentication: action.payload.token,
        name: action.payload.name,
      };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default Auth;
