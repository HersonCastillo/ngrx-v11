import { IUser } from 'src/app/modules/user/interfaces/user';

export interface IUserState {
  users: IUser[];
  loading: boolean;
}

export const userInitialState: IUserState = {
  users: [],
  loading: false,
};
