import { useEffect } from "react";
import UserCardList from "../../components/UserCardList/UserCardList";
import useApi from "../../hooks/useApi";
import useToken from "../../hooks/useToken";
import MainPageStyled from "./MainPageStyled";

const MainPage = () => {
  const { getToken } = useToken();
  const { loadAllUsersApi } = useApi();

  useEffect(() => {
    getToken();
    loadAllUsersApi();
  });

  return (
    <MainPageStyled className="container">
      <h1 className="logo">HI SPACE</h1>
      <UserCardList />
    </MainPageStyled>
  );
};

export default MainPage;
