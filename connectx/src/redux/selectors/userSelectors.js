// redux/selectors/userSelectors.js

export const getAllUsers = (state) => state.users;
export const getCurrentUser = (state) => state.currentUser;
export const getError = (state) => state.error;
export const getLoadingStatus = (state) => state.loading;
