import { START_GAME, INITIATE_GAME, SEND, SET_STATE } from "./actions";
const initialState = {
  initialNumber: 56,
  currentNumber: 56,
  currentPlayer:{},
  history: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      if (action.state && action.state.board) {
        return Object.assign(state, action.state.board);
      } else {
        return state;
      }
    case START_GAME:
      return state;
    case INITIATE_GAME:
      return state;
//    case SEND:
//      return state;
    default:
      return state;
  }
};

export default reducer;
