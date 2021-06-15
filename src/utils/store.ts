import { configureStore } from '@reduxjs/toolkit';
import listReducer from './List';
import filtersReducer from './Filters';

export const store = configureStore({
  reducer: {
    list: listReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
