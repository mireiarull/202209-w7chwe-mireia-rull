import { Link } from "react-router-dom";
import { UserStructure } from "../../types";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: UserStructure;
}

const UserCard = ({
  user: { job, name, username, id },
}: UserCardProps): JSX.Element => {
  return (
    <UserCardStyled className="user">
      <img
        src={
          "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        }
        alt={name}
        height="150"
      />
      <Link to={`/profile/${id}`}>
        <h3 className="user__name">{name}</h3>
      </Link>
      <span className="user__relationship">Stranger</span>
      <span>{job}</span>
    </UserCardStyled>
  );
};

export default UserCard;
