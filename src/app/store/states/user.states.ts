import { IUser } from 'src/app/modules/user/interfaces/user';

export interface IUserState {
  users: IUser[];
}

export const userInitialState: IUserState = {
  users: [],
};
