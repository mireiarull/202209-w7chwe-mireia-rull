import { loginUserActionCreator } from "../redux/features/usersSlice";
import { useAppDispatch } from "../redux/hooks";
import { UserCredentials, UserRegisterCredentials } from "../types";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();

  const url = process.env.REACT_APP_API_SOCIAL!;

  const registerUser = async (userData: UserRegisterCredentials) => {
    await fetch(`${url}/users/register`, {
      method: "POST",
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
        email: userData.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
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
    } catch {}
  };
  return { registerUser, loginUser };
};

export default useUser;
