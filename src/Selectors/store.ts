import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { usersApi } from '../Services/usersApi'; 
import todoSlice from './todoSlice';
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath] : usersApi.reducer,
    todoSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
