import { createSelector } from 'reselect';

const selectUserId = state => state.user.userId;

export const getMemoizedUserId = createSelector(
  [selectUserId],
  (userId) => userId
);
