// redux/reducers/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {},
  reducers: {
    setMessages(state, action) {
      const { userId, messages } = action.payload;
      state[userId] = messages;
    },
    addMessage(state, action) {
      const { userId, message } = action.payload;
      if (state[userId]) {
        state[userId].push(message);
      } else {
        state[userId] = [message];
      }
    },
  },
});

export const { setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
