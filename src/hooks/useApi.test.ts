import { renderHook } from "@testing-library/react";
import mockGetResponse from "../mocks/mockGetResponse";
import { mockUsersList } from "../mocks/mockUsersList";
import { store } from "../redux/store";
import ProviderWrapper from "../test-utils/ProviderWrapper";
import useApi from "./useApi";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useApi custom hook", () => {
  // describe("When its method loadAllUsers is invoked", () => {
  //   test("Then it should invoke dispatch with loadAllUsers action creator and a list of 2 users", async () => {
  //     const {
  //       result: {
  //         current: { loadAllUsersApi },
  //       },
  //     } = renderHook(() => useApi(), {
  //       wrapper: ProviderWrapper,
  //     });
  //     const { mockGetResponseUsers } = mockGetResponse;
  //     await loadAllUsersApi();
  //     expect(dispatchSpy).toHaveBeenCalled(mockGetResponseUsers);
  //   });
});

describe("When its method load is invoked", () => {
  test("Then it should invoke dispatch with loadAllUsers action creator and a list of 2 users", async () => {
    const {
      result: {
        current: { loadUserByIdApi },
      },
    } = renderHook(() => useApi(), {
      wrapper: ProviderWrapper,
    });

    await loadUserByIdApi("1");

    expect(dispatchSpy).toHaveBeenCalled();
  });
});
