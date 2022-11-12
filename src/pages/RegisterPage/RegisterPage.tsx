import RegisterForm from "../../components/Register/Register";
import { RegisterPageStyled } from "./RegisterPageStyled";

const RegisterPage = () => {
  return (
    <RegisterPageStyled>
      <main className="container">
        <h1 className="logo">HI SPACE</h1>
        <RegisterForm />
      </main>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
