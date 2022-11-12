import { useEffect } from "react";
import useToken from "../../hooks/useToken";

const MainPage = () => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  });

  return (
    <main className="container">
      <h1 className="logo">HI SPACE</h1>
    </main>
  );
};

export default MainPage;
