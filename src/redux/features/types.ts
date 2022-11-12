import { User, UserStructure } from "../../types";

export interface UserState extends User {
  isLogged: boolean;
}

export interface UsersState {
  list: UserStructure[];
}
