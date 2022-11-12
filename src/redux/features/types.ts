import { User } from "../../types";

export interface UserState extends User {
  isLogged: boolean;
}
