import {
  EDIT_PATH_BACKWARD,
  EDIT_PATH_FORWARD,
  SET_PATH,
} from "./progress.constant";

export const setPath = (data) => {
  return {
    type: SET_PATH,
    payload: data,
  };
};
export const editPathForward = (data) => {
  return {
    type: EDIT_PATH_FORWARD,
    payload: data,
  };
};
export const editPathBackWard = (data) => {
  return {
    type: EDIT_PATH_BACKWARD,
    payload: data,
  };
};
