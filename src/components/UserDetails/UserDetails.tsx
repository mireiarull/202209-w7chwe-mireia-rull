import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";
import { Relation, UserStructure } from "../../types";
import Button from "../Button/Button";
import UserDetailsStyled from "./UserDetailsStyled";

interface UserCardProps {
  user: UserStructure;
}

const UserDetails = ({
  user: { job, name, id, interest, residence, relation },
}: UserCardProps): JSX.Element => {
  const loggedUserId = useAppSelector(({ user }) => user.id);

  const { addRelationship } = useApi();

  const handleClick = (relation: "friends" | "enemies") => {
    const newRelation: Relation = {
      user1: loggedUserId,
      user2: id,
      relation: relation,
    };
    addRelationship(newRelation);
  };

  return (
    <UserDetailsStyled className="user">
      {loggedUserId === id && (
        <Link to={`/update/${id}`}>
          <Button text="✏️" classCss="user__buttons-edit" />
        </Link>
      )}
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
      {relation === "friends" && (
        <span className="user__relationship">Friend</span>
      )}
      {relation === "enemies" && (
        <span className="user__relationship">Enemies</span>
      )}
      {!relation && <span className="user__relationship">Stranger</span>}
      <span>Job: {job}</span>
      <span>Location: {residence}</span>
      <span>Hobbies: {interest}</span>
      <div className="user__buttons">
        {loggedUserId !== id && (
          <Button
            text="Add to friend"
            classCss="user__buttons-friend"
            action={() => handleClick("friends")}
          />
        )}
        {loggedUserId !== id && (
          <Button
            text="Add to enemy"
            classCss="user__buttons-enemy"
            action={() => handleClick("enemies")}
          />
        )}
      </div>
    </UserDetailsStyled>
  );
};

export default UserDetails;
