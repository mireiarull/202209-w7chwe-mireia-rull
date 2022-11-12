import { Route, Routes } from "react-router";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
