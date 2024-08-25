export const getMessages = (state, chatId) => {
    return state.messages[chatId] || [];
};
