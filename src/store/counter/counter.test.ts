import { configureStore } from '@reduxjs/toolkit';
import counterReducer, {increment, decrement, manageStepValue} from './counter'
const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

describe('Counter reducer', () => {
    it('increment redux action', () => {
        store.dispatch(increment())
        expect(store.getState()).toEqual({ counter: {
            counter: 2,
            step: 1
        } });
    })

    it('decrement redux action', () => {
        store.dispatch(decrement())
        expect(store.getState()).toEqual({ counter: {
            counter: 1,
            step: 1
        } });
    })

    it('manage the counter step value redux action', () => {
        store.dispatch(manageStepValue({step: 3}))
        expect(store.getState()).toEqual({ counter: {
            counter: 1,
            step: 3
        } });
    })
})