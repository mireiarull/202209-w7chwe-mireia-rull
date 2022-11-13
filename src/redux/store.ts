import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { usersReducer } from "./features/usersSlice";
import { uiReducer } from "./features/uiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
