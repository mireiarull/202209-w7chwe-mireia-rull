import { useState } from "react";
import { UserRegisterCredentials } from "../../types";
import Button from "../Button/Button";
import useUser from "../../hooks/useUser";
import { RegisterFormStyled } from "./RegisterFormStyled";
import { useNavigate } from "react-router";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();
  const navigate = useNavigate();

  const intialFormData = {
    username: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterCredentials = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    registerUser(formDataToSubmit);
    navigate("/main");
  };

  return (
    <>
      <RegisterFormStyled onSubmit={handleSubmit}>
        <div className="form__item">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="userName"
            id="username"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <Button text="Sign up" action={() => {}}></Button>
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
