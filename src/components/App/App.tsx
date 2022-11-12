import { Route, Routes } from "react-router";
import RegisterPage from "../../pages/RegisterPage";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
