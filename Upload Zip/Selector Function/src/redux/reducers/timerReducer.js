// remove the timer action creators imports
const { createSlice } = require("@reduxjs/toolkit"); 
// import {
//   INCREMENT_TIMER,
//   PAUSE_TIMER,
//   RESET_TIMER,
//   START_TIMER
// } from "../actions/timerActions";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// export const timerReducer = (state = INITIAL_STATE, action) => {
  //   switch (action.type) {
    //     case START_TIMER:
    //       return { ...state, isRunning: true };
    //     case PAUSE_TIMER:
    //       return { ...state, isRunning: false };
    
//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };


// refactor to use the createSlice method
const timerSlice = createSlice({
  name:'timer',
  initialState:INITIAL_STATE,
 
  reducers:{
      // this is add action
      startTimer:(state, action)=>{
       state.isRunning = true;
      },
      pauseTimer:(state, action)=>{
        state.isRunning = false;
      },
      resetTimer:(state, action)=>{
        state.elapsedTime=0;
        state.isRunning = false;
    }
    ,
    
      increamentTimer:(state, action)=>{
        ++state.elapsedTime;

      }
    
  }
});

// export the timer reducer function and action creators here
// export the counter reducer function and action creators here
export const timerReducer=timerSlice.reducer;
export const {startTimer,pauseTimer,resetTimer,increamentTimer} = timerSlice.actions;