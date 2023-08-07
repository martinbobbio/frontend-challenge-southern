// React
import { Reducer } from 'react';
// States
import { Action, GlobalState } from './GlobalState';

export const globalReducer: Reducer<GlobalState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
