import { EDIT_DETAILS } from "../constants";

const initialState = {
  firstName: "Mark",
  lastName: "Garrett",
  telNo: "234-344"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_DETAILS: {
      console.log("reducer:details");
      const { firstName, lastName, telNo } = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        telNo
      };
    }
    default:
      return state;
  }
}
