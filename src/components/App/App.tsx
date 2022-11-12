import { Route, Routes } from "react-router";
import RegisterPage from "../../pages/RegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
