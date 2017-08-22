export const SET_STATE = "SET_STATE";
export const SET_CONNECTION_STATE = "SET_CONNECTION_STATE";
export const INITIAL_STATE = {};

export const loadState = state => ({
  type: LOAD_STATE,
  state
});

export function setState(state) {
  return {
    type: "SET_STATE",
    state
  };
}

export function identifyUser(name) {
  console.log('hanaaaa', name);
  return {
    type: "IDENTIFY_USER",
    name
  };
}

export function setConnectionState(state, connected, id) {
  return {
    type: "SET_CONNECTION_STATE",
    state,
    id,
    connected
  };
}
