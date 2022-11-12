import { useAppSelector } from "../../redux/hooks";
import UserCard from "../UserCard/UserCard";
import UserCardListStyled from "./UserCardListStyled";

const UserCardList = (): JSX.Element => {
  const robots = useAppSelector(({ users }) => users.list);

  return (
    <UserCardListStyled>
      {robots.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </UserCardListStyled>
  );
};

export default UserCardList;
