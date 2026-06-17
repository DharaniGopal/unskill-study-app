import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducer/counterSlice";

export const store = configureStore({
  reducer: {
    count: CounterReducer,
  },
});
