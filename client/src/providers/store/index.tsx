import { configureStore } from '@reduxjs/toolkit';
import { modalsReducer } from 'features/GlobalModals';
import { Provider } from 'react-redux';
import { baseApi } from 'services/api';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    modals: modalsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    )
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const ReduxStore = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => <Provider store={store}>{children}</Provider>;

export { ReduxStore as default, store };
