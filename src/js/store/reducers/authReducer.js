import * as action_types from "../actions/action-types";

const initialState = {
  isAuthenticated: false,
  userName: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
        userName: action.payload,
      };
    case action_types.UN_AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false,
        userName: "",
      };
    default:
      return state;
  }
};

export default authReducer;
