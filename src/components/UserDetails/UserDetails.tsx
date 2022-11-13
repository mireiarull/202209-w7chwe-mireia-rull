import { Link } from "react-router-dom";
import { UserStructure } from "../../types";
import Button from "../Button/Button";
import UserDetailsStyled from "./UserDetailsStyled";

interface UserCardProps {
  user: UserStructure;
}

const UserDetails = ({
  user: { job, name, username, id },
}: UserCardProps): JSX.Element => {
  return (
    <UserDetailsStyled className="user">
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
      <div className="user__buttons">
        <Button text="Add to friend" classCss="user__buttons-friend" />
        <Button text="Add to enemy" classCss="user__buttons-enemy" />
      </div>
    </UserDetailsStyled>
  );
};

export default UserDetails;
