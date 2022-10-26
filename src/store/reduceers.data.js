import { safteDataReducer } from "./safteData/safteData.reducer";

const { combineReducers } = require("redux");

export const reducers = combineReducers({
    safteData: safteDataReducer
})