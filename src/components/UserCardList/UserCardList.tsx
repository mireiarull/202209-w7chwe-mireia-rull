import { useAppSelector } from "../../redux/hooks";
import UserCard from "../UserCard/UserCard";

const UserCardList = (): JSX.Element => {
  const robots = useAppSelector(({ users }) => users.list);

  return (
    <div>
      {robots.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </div>
  );
};

export default UserCardList;
