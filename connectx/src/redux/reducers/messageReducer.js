const initialState = {};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            const { sender, receiver, content } = action.payload;
            const chatId = [sender, receiver].sort().join('_');
            return {
                ...state,
                [chatId]: [...(state[chatId] || []), { sender, content }],
            };
        default:
            return state;
    }
};

export default messageReducer;
