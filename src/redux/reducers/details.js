import { ADD_NEW, ADD_RANDOM, REMOVE_CLIENT } from "../constants";
let counter = 0;

const initialState = { list: [], random: {} };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW: {
      counter++;
      const newState = [...state.list, { ...action.payload, id: counter }];
      return { ...state.random, list: newState };
    }
    case ADD_RANDOM: {
      return state;
    }
    case REMOVE_CLIENT: {
      const newState = [...state.list.filter(a => a.id !== action.payload)];
      return { ...state.random, list: newState };
    }

    default:
      return state;
  }
}
