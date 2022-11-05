import { ADD_GUARANTEER, GET_DATA } from "./safteData.constans";
import { initialValue } from "./safteData.initial";

export function safteDataReducer(state = initialValue, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, user: action.payload };
    case ADD_GUARANTEER:
      return {
        ...state,
        user: {
          ...state.user,
          safte: {
            ...state.user.safte,
            guaranteers: [...state.user.safte.guaranteers, action.payload],
          },
        },
      };
    default:
      break;
  }
  return state;
}
