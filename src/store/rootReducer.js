import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slice/userReducer';
import sidebarReducer from './slice/sidebarSlice';

const rootReducer = combineReducers({
  user: userReducer,
  sidebar: sidebarReducer,
  // Add other reducers if necessary
});

export default rootReducer;