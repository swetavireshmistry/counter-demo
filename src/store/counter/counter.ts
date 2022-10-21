import { createSlice } from "@reduxjs/toolkit";
import {CounterState} from './types'

const initialState: CounterState = { counter: 1, step: 1 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return {...state, counter: (state.counter + state.step)};
    },
    decrement: (state) => {
      return { ...state,  counter: (state.counter - state.step)};
    },
    manageStepValue: (state, action) => {
        return {...state, step: action.payload.step};
    }
  },
});

export const {
    increment,
    decrement,
    manageStepValue
} = counterSlice.actions;

export default counterSlice.reducer;
