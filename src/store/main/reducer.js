import { SET_STATE } from "./actions";

const reducer = (state = [], action) => {
  //console.log("recieved", action);
  switch (action.type) {
    case "IDENTIFY_USER":
      console.log('in IDENTIFY_USER', action);
      return state;
    default:
      return state;
  }
};

export default reducer;
