import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/modules/user/interfaces/user';

export const addUser = createAction(
  '[User] Add a new User',
  props<{ user: IUser }>(),
);

export const deleteUser = createAction(
  '[User] Delete an already existing User',
  props<{ id: number }>(),
);

export const editUser = createAction(
  '[User] Edit an already existing User',
  props<{ id: number, user: IUser }>()
);

export const toggleLoadingUser = createAction(
  '[User] Toggle Loading User',
);
