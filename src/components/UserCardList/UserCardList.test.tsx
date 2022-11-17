import { screen } from "@testing-library/react";
import mockUiState from "../../mocks/mockUiState";
import mockUsersState from "../../mocks/mockUsersState";
import mockUserStateLogged from "../../mocks/mockUserStateLogged";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import UserCardList from "./UserCardList";

describe("Given a UserCardList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of users cards", () => {
      renderWithProviders(<UserCardList />, {
        preloadedState: {
          users: mockUsersState,
          user: mockUserStateLogged,
          ui: mockUiState,
        },
      });
      const renderedProfiles = screen.queryAllByRole("listitem");

      expect(renderedProfiles).toHaveLength(2);
    });
  });
});
