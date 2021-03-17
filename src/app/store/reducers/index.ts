import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.states';
import { userReducers } from './user.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
  user: userReducers,
};
