import { useAppSelector } from "../../redux/hooks";
import UserCard from "../UserCard/PatatasCard";
import UserCardListStyled from "./UserCardListStyled";

const UserCardList = (): JSX.Element => {
  const users = useAppSelector(({ users }) => users.list);

  return (
    <UserCardListStyled>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </UserCardListStyled>
  );
};

export default UserCardList;
