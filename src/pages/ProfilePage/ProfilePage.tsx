import { useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import UserCard from "../../components/UserCard/UserCard";
import useApi from "../../hooks/useApi";
import useToken from "../../hooks/useToken";
import { useAppSelector } from "../../redux/hooks";
import ProfilePageStyled from "./ProfilePageStyled";

const ProfilePage = () => {
  const { getToken } = useToken();
  const { loadUserByIdApi } = useApi();
  const users = useAppSelector(({ users }) => users.list);

  const { id } = useParams<"id">();

  useEffect(() => {
    getToken();
    loadUserByIdApi(id!);
  }, [getToken, id, loadUserByIdApi]);

  return (
    <ProfilePageStyled className="container">
      <Header />
      <UserCard user={users[0]} />
    </ProfilePageStyled>
  );
};

export default ProfilePage;
