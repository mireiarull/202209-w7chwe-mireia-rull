import { User, UserStructure } from "../../types";

export interface UserState extends User {
  isLogged: boolean;
}

export interface UsersState {
  list: UserStructure[];
}

export interface UiState {
  modal: string;
}
