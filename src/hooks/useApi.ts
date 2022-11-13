import { useCallback } from "react";
import {
  loadAllUsersActionCreator,
  loadOneUserActionCreator,
} from "../redux/features/usersSlice";
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

  const loadUserByIdApi = useCallback(
    async (id: string) => {
      const response = await fetch(`${url}/users/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userResultApi = await response.json();
      dispatch(loadOneUserActionCreator(userResultApi.user));
    },
    [dispatch, token]
  );

  return {
    loadAllUsersApi,
    loadUserByIdApi,
  };
};

export default useApi;
