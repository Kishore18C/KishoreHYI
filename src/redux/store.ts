import {combineReducers, configureStore} from '@reduxjs/toolkit';

import userReducer from '../features/users/slice/UserSlice';

const combinedReducers = combineReducers({
  userDetails: userReducer,
});
export const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
