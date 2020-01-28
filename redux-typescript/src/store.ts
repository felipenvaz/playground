import {
  configureStore,
  combineReducers,
  Reducer,
  CombinedState,
  AnyAction,
} from '@reduxjs/toolkit';
import {counterSlice} from './slicers/counter';
import {counter} from './reducers/counter';

const reducer = combineReducers({
  counterSlicer: counterSlice.reducer,
  counter,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = typeof reducer extends Reducer<
  CombinedState<infer S>,
  AnyAction
>
  ? S
  : never;
