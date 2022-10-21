import { configureStore, Dispatch, Action, Middleware, AnyAction } from "@reduxjs/toolkit";

import counterReducer, {decrement, increment} from './counter/counter'
import { StoreType } from "types/global";

const timer:  Middleware<{}, unknown, Dispatch<AnyAction>> = ({ dispatch, getState }) => {

  const intervalTimer = setInterval(() => {
      dispatch(increment())
    }, 1000);

    return (next: Dispatch) => (action: Action) => {
      const {counter: {counter}} = getState() as StoreType

      if(counter >= 9) {
        clearInterval(intervalTimer)
      };
      if(counter < 1) {
        setInterval(() => {
          dispatch(decrement())
        }, 1000)
      }
      next(action);
    };
  };

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [timer],
});




export default store;
