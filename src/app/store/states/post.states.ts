import { IPost } from 'src/app/modules/post/interfaces/post';

export interface IPostState {
  posts: IPost[];
  loading: boolean;
  errorMessage: string | null,
  errorStatusCode: number,
}

export const postInitialState: IPostState = {
  posts: [],
  loading: false,
  errorMessage: null,
  errorStatusCode: 0,
};
