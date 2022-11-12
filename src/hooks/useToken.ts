import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import { JwtPayloadCustom } from "../types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../redux/features/usersSlice";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user: JwtPayloadCustom = decodeToken(token);

      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  return { getToken };
};

export default useToken;
