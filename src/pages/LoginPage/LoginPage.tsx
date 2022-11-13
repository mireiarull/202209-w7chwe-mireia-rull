import LoginForm from "../../components/Login/Login";
import Modal from "../../components/Modal/Modal";
import { useAppSelector } from "../../redux/hooks";

import { RegisterPageStyled } from "../RegisterPage/RegisterPageStyled";

const LoginPage = () => {
  const modal = useAppSelector(({ ui }) => ui.modal);

  return (
    <RegisterPageStyled>
      <main className="container">
        {modal && <Modal />}
        <h1 className="logo">HI SPACE</h1>
        <LoginForm />
      </main>
    </RegisterPageStyled>
  );
};

export default LoginPage;
