import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";
import UserCardListStyled from "./UserCardListStyled";

const UserCardList = (): JSX.Element => {
  const users = useAppSelector(({ users }) => users.list);
  const { loadRelations, loadAllUsersApi } = useApi();

  return (
    <UserCardListStyled>
      <div className="list-filter">
        <Button text="Show all" action={loadAllUsersApi} />
        <Button text="Show friends" action={() => loadRelations("friends")} />
        <Button text="Show enemies" action={() => loadRelations("enemies")} />
      </div>
      <section>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </section>
    </UserCardListStyled>
  );
};

export default UserCardList;
