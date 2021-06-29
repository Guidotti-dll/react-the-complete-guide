import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case "INCREASE":
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "TOGGLE":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };

//     default:
//       return state;
//   }
// };
