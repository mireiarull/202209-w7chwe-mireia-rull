import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import { UserState } from "./types";

const userInitialState: UserState = {
  id: "",
  username: "",
  email: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
