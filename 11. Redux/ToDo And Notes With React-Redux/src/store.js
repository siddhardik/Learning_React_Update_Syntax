const redux = require("redux");

// import counter reducer function here
const { timerReducer } = require("./redux/reducers/timerReducer");

// combine the reducer functions here

// add the root reducer function to store here
export const store = redux.createStore(timerReducer);
