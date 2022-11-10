import { progressReducer } from "./progress/progress.reducer";
import { safteDataReducer } from "./safteData/safteData.reducer";

const { combineReducers } = require("redux");

export const reducers = combineReducers({
  safteData: safteDataReducer,
  progress: progressReducer,
});
