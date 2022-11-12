import LoginForm from "../../components/Login/Login";
import { RegisterPageStyled } from "../RegisterPage/RegisterPageStyled";

const LoginPage = () => {
  return (
    <RegisterPageStyled>
      <main className="container">
        <h1 className="logo">HI SPACE</h1>
        <LoginForm />
      </main>
    </RegisterPageStyled>
  );
};

export default LoginPage;
