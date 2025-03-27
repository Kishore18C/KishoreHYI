import {combineReducers, configureStore} from '@reduxjs/toolkit';

import userReducer from '../features/users/slice/UserSlice';
import appReducer from '../features/appLoader/slice/AppLoaderSlice';

const combinedReducers = combineReducers({
  userDetails: userReducer,
  appLoader: appReducer,
});
export const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
