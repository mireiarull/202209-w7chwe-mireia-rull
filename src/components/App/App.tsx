import { Route, Routes } from "react-router";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import AppStyled from "./AppStyled";
import MainPage from "../../pages/MainPage/MainPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import EditPage from "../../pages/EditPage/EditPage";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/update/:id" element={<EditPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
