import { useEffect } from "react";
import UserCardList from "../../components/UserCardList/UserCardList";
import useApi from "../../hooks/useApi";
import useToken from "../../hooks/useToken";
import { useAppSelector } from "../../redux/hooks";
import MainPageStyled from "./MainPageStyled";

const MainPage = () => {
  const { getToken } = useToken();
  const { loadAllUsersApi } = useApi();
  const users = useAppSelector(({ users }) => users.list);

  useEffect(() => {
    getToken();
    loadAllUsersApi();
  });

  return (
    <MainPageStyled className="container">
      <h1 className="logo">HI SPACE</h1>
      <span>Showing {users.length} profiles</span>
      <UserCardList />
    </MainPageStyled>
  );
};

export default MainPage;
