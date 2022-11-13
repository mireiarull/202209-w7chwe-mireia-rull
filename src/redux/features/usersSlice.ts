import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../types";
import { UsersState } from "./types";

const usersInitialState: UsersState = {
  list: [],
  profile: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loadAllUsers: (
      currentUsersState,
      action: PayloadAction<UserStructure[]>
    ): UsersState => ({
      ...currentUsersState,
      list: [...action.payload],
    }),
    loadOneUser: (
      currentUsersState,
      action: PayloadAction<UserStructure>
    ): UsersState => ({
      ...currentUsersState,
      profile: action.payload,
    }),
    updateOneUser: (
      currentUsersState,
      action: PayloadAction<UserStructure>
    ): UsersState => ({
      ...currentUsersState,
      list: currentUsersState.list.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload,
          };
        } else {
          return user;
        }
      }),
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  loadAllUsers: loadAllUsersActionCreator,
  loadOneUser: loadOneUserActionCreator,
  updateOneUser: updateOneUserActionCreator,
} = usersSlice.actions;
