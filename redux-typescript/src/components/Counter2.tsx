import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {ACTIONS} from '../reducers/counter';

export const Counter2: React.FC = () => {
  const count = useSelector((store: RootState) => store.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(ACTIONS.increment());
  };

  const decrement = () => {
    dispatch(ACTIONS.decrement());
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
