import { UserStructure } from "../../types";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface UserCardProps {
  users: UserStructure;
}

const userCard = ({
  users: { job, name, username, id },
}: UserCardProps): JSX.Element => {
  return (
    <div className="user">
      <div className="user__header">
        <h3 className="user__name">{name}</h3>
        <div className="user__buttons-wrapper">
          <Button
            text="Delete"
            classCss="button__icon button__icon--delete"
            action={() => {}}
          />
          <Link
            className="button button__icon button__icon--edit"
            to={`/details/${id}`}
          ></Link>
        </div>
      </div>
      <div className="user__inner">
        <img
          src={
            "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={name}
          width="150"
          height="150"
        />

        <ul className="user__features">
          <li className="user__info">{name}</li>
          <li className="user__info">{username}</li>
          <li className="user__info">{job}</li>
        </ul>
      </div>
    </div>
  );
};

export default userCard;
