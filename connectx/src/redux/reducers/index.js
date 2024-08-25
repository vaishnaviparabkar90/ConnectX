// redux/reducers/index.js
import { combineReducers } from 'redux';
import chatReducer from './chatReducer'; // Import the chatReducer
import userReducer from './userReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer, // Add chatReducer to the combined reducers
  // other reducers...
});

export default rootReducer;
