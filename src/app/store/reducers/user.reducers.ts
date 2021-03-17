import { createReducer, on } from '@ngrx/store';
import { addUser, deleteUser, editUser } from '../actions/user.actions';
import { userInitialState } from '../states/user.states';

export const userReducers = createReducer(
  userInitialState,
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter((user) => (user?.id !== id)),
  })),
  on(editUser, (state, { id, user }) => ({
    ...state,
    users: [
      ...state.users.filter((user) => (user?.id !== id)),
      user,
    ],
  })),
);