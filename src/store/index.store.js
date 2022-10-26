const { createStore } = require("redux");
const { reducers } = require("./reduceers.data");

export const store = createStore(reducers)