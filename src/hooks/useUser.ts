import { UserRegisterCredentials } from "../types";

const useUser = () => {
  const url = process.env.REACT_APP_API_SOCIAL!;

  const registerUser = async (userData: UserRegisterCredentials) => {
    await fetch(`${url}/users/register`, {
      method: "POST",
      body: JSON.stringify({
        username: userData.userName,
        password: userData.password,
        email: userData.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return { registerUser };
};

export default useUser;
