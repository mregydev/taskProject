import { INCREMENT_NUM, DECREMENT_NUM, RESET,SET_COUNTER } from "../constants/ActionTypes";

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
}


export function resetNum() {
  return {
    type: RESET,
    payload:0
  };
}

export function setCounter(payload){
return {
  type:SET_COUNTER,
  payload
}
}
