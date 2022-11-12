import { useState } from "react";
import { UserCredentials } from "../../types";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import useUser from "../../hooks/useUser";
import { RegisterFormStyled } from "../Register/RegisterFormStyled";
import { useAppSelector } from "../../redux/hooks";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const loggedUser = useAppSelector(({ user }) => user.isLogged);

  const intialFormData = {
    username: "",
    password: "",
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

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };

    loginUser(formDataToSubmit);

    if (loggedUser) {
      navigate("/main");
    }
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
        <Button text="Log in" action={() => {}}></Button>
      </RegisterFormStyled>
    </>
  );
};

export default LoginForm;
