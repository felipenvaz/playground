import {createAction, createReducer} from '@reduxjs/toolkit';
const increment = createAction('INCREMENT2');
const decrement = createAction('DECREMENT2');

export const ACTIONS = {
  increment,
  decrement,
};

export const counter = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1,
});
