import { useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import UserDetails from "../../components/UserDetails/UserDetails";
import useApi from "../../hooks/useApi";
import useToken from "../../hooks/useToken";
import { useAppSelector } from "../../redux/hooks";
import ProfilePageStyled from "./ProfilePageStyled";

const ProfilePage = () => {
  const { getToken } = useToken();
  const { loadUserByIdApi } = useApi();
  const userProfile = useAppSelector(({ users }) => users.profile);

  const { id } = useParams<"id">();

  useEffect(() => {
    getToken();
    loadUserByIdApi(id!);
  }, [getToken, id, loadUserByIdApi]);

  return (
    <ProfilePageStyled className="container">
      <Header />
      {userProfile && <UserDetails user={userProfile} />}
    </ProfilePageStyled>
  );
};

export default ProfilePage;
