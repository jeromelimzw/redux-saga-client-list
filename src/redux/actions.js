import * as ACTIONS from "./constants";

export const editDetails = payload => ({
  type: ACTIONS.EDIT_DETAILS,
  payload
});

export const addNew = payload => ({
  type: ACTIONS.ADD_NEW,
  payload
});

export const addRandom = () => ({
  type: ACTIONS.ADD_RANDOM
});

export const removeClient = payload => ({
  type: ACTIONS.REMOVE_CLIENT,
  payload
});
