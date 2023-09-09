const redux = require("redux");
import { configureStore } from "@reduxjs/toolkit";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");

// refactor to use configureStore
// const rootReducer = redux.combineReducers({
//   timer: timerReducer,
//   counter: counterReducer
// });
export const store = configureStore({
  reducer:{
    timerReducer ,
    counterReducer
  }
})
