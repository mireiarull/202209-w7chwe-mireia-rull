import { Route, Routes } from "react-router";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import AppStyled from "./AppStyled";
import MainPage from "../../pages/MainPage/MainPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import EditPage from "../../pages/EditPage/EditPage";
import { useAppSelector } from "../../redux/hooks";
import useToken from "../../hooks/useToken";
import ExitRoute from "../ExitRoute/ExitRoute";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useEffect } from "react";

const App = () => {
  const { getToken } = useToken();
  const isLogged = useAppSelector((state) => state.user.isLogged);

  useEffect(() => {
    getToken();
  });

  return (
    <AppStyled>
      <Routes>
        <Route
          path="/"
          element={
            <ExitRoute isLogged={isLogged}>
              <WelcomePage />
            </ExitRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ExitRoute isLogged={isLogged}>
              <RegisterPage />
            </ExitRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ExitRoute isLogged={isLogged}>
              <LoginPage />
            </ExitRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update/:id"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <EditPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AppStyled>
  );
};

export default App;
