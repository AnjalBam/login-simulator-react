import * as action_types from "./action-types";

export const authenticateUser = (userName) => {
  return {
    type: action_types.AUTHENTICATE,
    payload: userName,
  };
};

export const un_authenticateUser = () => {
  return {
    type: action_types.UN_AUTHENTICATE,
  };
};
