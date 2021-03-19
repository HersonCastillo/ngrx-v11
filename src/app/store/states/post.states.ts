import { IPost } from 'src/app/modules/post/interfaces/post';

export interface IPostState {
  posts: IPost[];
  loading: boolean;
}

export const postInitialState: IPostState = {
  posts: [],
  loading: false,
};
