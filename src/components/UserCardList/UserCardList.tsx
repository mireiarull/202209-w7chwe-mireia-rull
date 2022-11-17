import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import UserCard from "../UserCard/UserCard";
import UserCardListStyled from "./UserCardListStyled";

const UserCardList = (): JSX.Element => {
  const users = useAppSelector(({ users }) => users.list);
  const { loadRelations, loadAllUsersApi } = useApi();
  const modal = useAppSelector(({ ui }) => ui.modal);

  return (
    <UserCardListStyled>
      {modal && <Modal />}
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
