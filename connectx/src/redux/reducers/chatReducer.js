// redux/reducers/chatReducer.js
import { SET_MESSAGES, ADD_MESSAGE } from '../actions/chatActions';

const initialState = {};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        [action.payload.userId]: action.payload.messages,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        [action.payload.userId]: [
          ...(state[action.payload.userId] || []),
          action.payload.message,
        ],
      };
    default:
      return state;
  }
};

export default chatReducer;
