import { IPostState } from './post.states';
import { IUserState } from './user.states';

export interface IAppState {
  user: IUserState;
  post: IPostState;
}
