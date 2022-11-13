import { Route, Routes } from "react-router";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import AppStyled from "./AppStyled";
import MainPage from "../../pages/MainPage/MainPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
        {/* <Route path="/my-profile" element={<todo />} /> */}
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
