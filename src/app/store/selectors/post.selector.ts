import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.states';

const getPostState = (state: IAppState) => (state.post);

export const getPosts = createSelector(
  getPostState,
  (state) => (state.posts),
);

export const getLoadingPost = createSelector(
  getPostState,
  (state) => (state.loading),
);
