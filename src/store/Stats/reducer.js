import { SET_STATE, UPDATE_SCORE } from "./actions";

const initialState = {
  players: {},
  keys: [],
  bet: 1
};
const reducer = (state = initialState, action) => {
  console.log("---------> ", action);

  switch (action.type) {
    case SET_STATE:
      if (action.state && action.state.stats) {
        return {
          ...state,
          bet: action.state.board.currentNumber,
          players: action.state.stats.players,
          keys: action.state.stats.keys,
          ready: action.state.stats.ready
        };
      } else {
        return state;
      }
    case UPDATE_SCORE:
      return state;
    default:
      return state;
  }
};

export default reducer;
