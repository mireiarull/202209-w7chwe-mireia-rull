import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { usersReducer } from "./features/usersSlice";
import { uiReducer } from "./features/uiSlice";

// export const rootReducer = combineReducers({
//   user: userReducer,
// });

// const setUpStore = (preloadedState?: PreloadedState<RootState>) => {
//   return configureStore({
//     reducer: {
//       rootReducer,
//     },
//     preloadedState,
//   });
// };
//  PARA PODER INICIALIZAR A LA STORE CON O SIN PRELOADED STATE

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    ui: uiReducer,
  },
});

//al quitar el store se tiene que refactorizar lo siguiente para seguir teninedo el App dispatch y appstore

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type RootState = ReturnType<typeof store.rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
