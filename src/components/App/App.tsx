import { Route, Routes } from "react-router";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import AppStyled from "./AppStyled";
import MainPage from "../../pages/MainPage/MainPage";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
