import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.states';
import { IUserState } from '../states/user.states';

const getUserState = (state: IAppState) => (state.user);

export const getUsersList = createSelector(
  getUserState,
  (state) => (state.users),
);

export const getCurrentUser = createSelector(
  getUserState,
  (state: IUserState, userId: number) => (
    state.users.find((user) => (user?.id === userId))
  ),
);
