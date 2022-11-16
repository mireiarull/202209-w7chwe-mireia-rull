import { UsersState } from "../redux/features/types";
import { mockUsersList } from "./mockUsersList";

const mockUsersState: UsersState = {
  list: mockUsersList,
  profile: null,
};

export default mockUsersState;
