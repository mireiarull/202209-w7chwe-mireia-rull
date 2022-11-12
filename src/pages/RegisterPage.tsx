import RegisterForm from "../components/Register/Register";
import { RegisterPageStyled } from "./RegisterPageStyled";

const RegisterPage = () => {
  return (
    <RegisterPageStyled>
      <main className="container">
        <RegisterForm />
      </main>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
