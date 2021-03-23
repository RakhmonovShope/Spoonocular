import _ from "lodash";
import { CREATE_CART, DELETE_CART, READ_CART } from "../actions/types";

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CART:
      return { ...state, [action.payload.id]: action.payload };
    case READ_CART:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case DELETE_CART:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
