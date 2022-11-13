import { openModalActionCreator } from "../redux/features/uiSlice";
import { loginUserActionCreator } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { UserCredentials, UserRegisterCredentials } from "../types";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();

  const url = process.env.REACT_APP_API_SOCIAL!;

  const registerUser = async (userData: UserRegisterCredentials) => {
    try {
      await fetch(`${url}/users/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch {
      dispatch(openModalActionCreator("Something went wrong!"));
    }
  };

  const loginUser = async (userData: UserCredentials) => {
    try {
      const responseData = await fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const { token } = await responseData.json();

      const userLogged = decodeToken(token);

      dispatch(
        loginUserActionCreator({
          ...userLogged,
          username: userData.username,
          token: token,
        })
      );
      localStorage.setItem("token", token);
      return userLogged;
    } catch {
      dispatch(openModalActionCreator("Something went wrong!"));
    }
  };
  return { registerUser, loginUser };
};

export default useUser;
