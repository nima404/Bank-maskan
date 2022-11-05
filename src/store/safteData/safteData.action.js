import { ADD_GUARANTEER, GET_DATA } from "./safteData.constans";

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
export const addGuaranteer = (data) => {
  return {
    type: ADD_GUARANTEER,
    payload: data,
  };
};
