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
    ) => ({
      ...currentUsersState,
      list: [...action.payload],
    }),
    loadOneUser: (currentUsersState, action: PayloadAction<UserStructure>) => ({
      ...currentUsersState,
      profile: action.payload,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  loadAllUsers: loadAllUsersActionCreator,
  loadOneUser: loadOneUserActionCreator,
} = usersSlice.actions;
