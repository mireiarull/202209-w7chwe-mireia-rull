import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import useToken from "../../hooks/useToken";

const MainPage = () => {
  const { getToken } = useToken();
  const { loadAllUsers } = useApi();

  useEffect(() => {
    loadAllUsers();
    getToken();
  });

  return (
    <main className="container">
      <h1 className="logo">HI SPACE</h1>
    </main>
  );
};

export default MainPage;
