import { useEffect } from "react";
import UserCardList from "../../components/UserCardList/UserCardList";
import useApi from "../../hooks/useApi";
import useToken from "../../hooks/useToken";

const MainPage = () => {
  const { getToken } = useToken();
  const { loadAllUsersApi } = useApi();

  useEffect(() => {
    getToken();
    loadAllUsersApi();
  });

  return (
    <main className="container">
      <h1 className="logo">HI SPACE</h1>
      <UserCardList />
    </main>
  );
};

export default MainPage;
