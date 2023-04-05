import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { filter } from './root-reducer';

const rootReducer = combineReducers({
  filter,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
