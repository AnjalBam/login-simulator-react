import * as action_types from "./action-types";

export const authenticateUser = () => {
  return {
    type: action_types.AUTHENTICATE,
  };
};

export const un_authenticateUser = () => {
  return {
    type: action_types.UN_AUTHENTICATE,
  };
};
