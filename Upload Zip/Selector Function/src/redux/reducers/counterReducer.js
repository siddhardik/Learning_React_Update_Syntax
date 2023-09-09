// remove the counter action creators imports

const { createSlice } = require("@reduxjs/toolkit"); 

// import {
//   DECREMENT_COUNTER,
//   INCREMENT_COUNTER,
//   RESET_COUNTER
// } from "../actions/counterActions";


const INITIAL_STATE = { count: 0 };


// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// refactor to use the createSlice method
const counterSlice = createSlice({
  name:'counter',
  initialState:INITIAL_STATE,
  reducers:{
   
      // this is add action
      incrementCounter:(state, action)=>{
         ++state.count;
      },
      decrementCounter:(state, action)=>{
        --state.count;
      },
      resetCounter:(state, action)=>{
        state.count=0;
    }
  }
});

// export the counter reducer function and action creators here
export const counterReducer=counterSlice.reducer;
export const {incrementCounter,decrementCounter,resetCounter} = counterSlice.actions;
