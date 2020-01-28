import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {counterSlice} from '../slicers/counter';

export const Counter: React.FC = () => {
  const count = useSelector((store: RootState) => store.counterSlicer);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterSlice.actions.increment());
  };

  const decrement = () => {
    dispatch(counterSlice.actions.decrement());
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
