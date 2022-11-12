import { useCallback } from "react";
import { loadAllUsersActionCreator } from "../redux/features/usersSlice";
import { useAppDispatch } from "../redux/hooks";

const url = process.env.REACT_APP_API_SOCIAL!;

const useApi = () => {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  const loadAllUsersApi = useCallback(async () => {
    const response = await fetch(`${url}/users/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const usersResultApi = await response.json();
    dispatch(loadAllUsersActionCreator(usersResultApi.users));
  }, [dispatch, token]);

  return {
    loadAllUsersApi,
  };
};

export default useApi;
