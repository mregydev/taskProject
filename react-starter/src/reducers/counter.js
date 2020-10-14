import { INCREMENT_NUM, DECREMENT_NUM, RESET,SET_COUNTER } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
  case INCREMENT_NUM: 
    return state + 1;
  case DECREMENT_NUM:
    return state - 1;
  case SET_COUNTER:
    state=action.payload;
    return state;
  case RESET:
    return state = action.payload;
  }

  return state;
}