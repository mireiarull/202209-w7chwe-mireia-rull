import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Relation, UserStructure } from "../../types";
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
    addRelationship: (
      currentUsersState,
      action: PayloadAction<Relation>
    ): UsersState => {
      return {
        ...currentUsersState,
        profile: {
          ...currentUsersState.profile!,
          relation: action.payload.relation,
        },
      };
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  loadAllUsers: loadAllUsersActionCreator,
  loadOneUser: loadOneUserActionCreator,
  updateOneUser: updateOneUserActionCreator,
  addRelationship: addRelationshipActionCreator,
} = usersSlice.actions;
