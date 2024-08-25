// redux/actions/chatActions.js
export const SET_MESSAGES = 'SET_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const setMessages = (userId, messages) => ({
  type: SET_MESSAGES,
  payload: { userId, messages },
});

export const addMessage = (userId, message) => ({
  type: ADD_MESSAGE,
  payload: { userId, message },
});
