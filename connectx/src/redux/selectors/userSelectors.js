// redux/selectors/userSelectors.js

// src/redux/selectors/userSelectors.js
// src/redux/selectors/userSelectors.js
export const getAllUsers = (state) => state.users.users || [];  // Provide a fallback to avoid undefined issues


export const getCurrentUser = (state) => state.currentUser;
export const getError = (state) => state.error;
export const getLoadingStatus = (state) => state.loading;
