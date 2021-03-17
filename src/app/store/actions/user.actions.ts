import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/modules/user/interfaces/user';

export const addUser = createAction(
  '[Users] Add a new User',
  props<{ user: IUser }>(),
);

export const deleteUser = createAction(
  '[Users] Delete an already existing User',
  props<{ id: number }>(),
);

export const editUser = createAction(
  '[Users] Edit an already existing User',
  props<{ id: number, user: IUser }>()
);
