import * as action_types from "../actions/action-types";

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
      };
    case action_types.UN_AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
