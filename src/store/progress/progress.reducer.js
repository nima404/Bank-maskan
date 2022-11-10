import {
  EDIT_PATH_BACKWARD,
  EDIT_PATH_FORWARD,
  SET_PATH,
} from "./progress.constant";
import { initialValue } from "./progress.initial";

export function progressReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_PATH:
      return {
        ...state,
        path: action.payload,
      };
    case EDIT_PATH_FORWARD: {
      const finishedIndex = state.path.findIndex(
        (item) => item.title === action.payload.title
      );
      const newPath = [...state.path];
      newPath[finishedIndex].status = "finish";
      newPath[finishedIndex + 1].status = "process";
      return {
        ...state,
        path: newPath,
      };
    }
    case EDIT_PATH_BACKWARD: {
      const backIndex = state.path.findIndex(
        (item) => item.title === action.payload.title
      );
      const newPath = [...state.path];
      newPath[backIndex].status = "wait";
      newPath[backIndex - 1].status = "process";
      return {
        ...state,
        path: newPath,
      };
    }
    default:
      break;
  }
  return state;
}
