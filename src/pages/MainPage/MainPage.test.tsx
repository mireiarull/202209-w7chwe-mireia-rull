import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockUiState from "../../mocks/mockUiState";
import mockUsersState from "../../mocks/mockUsersState";
import mockUserStateLogged from "../../mocks/mockUserStateLogged";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import MainPage from "./MainPage";

describe("Given a main page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text with the number of profiles shown", () => {
      const expectedLogoText = "Showing 2 profiles";

      renderWithProviders(<MainPage />, {
        preloadedState: {
          users: mockUsersState,
          user: mockUserStateLogged,
          ui: mockUiState,
        },
      });

      const renderedText = screen.queryByText(expectedLogoText);

      expect(renderedText).toBeInTheDocument();
    });
  });

  // describe("When the user clicks on the button to filter for friends", () => {
  //   test("Then it should show a text 'Showing 1 profiles'", async () => {
  //     const expectedText = "Showing 1 profiles";

  //     renderWithProviders(<MainPage />, {
  //       preloadedState: {
  //         users: mockUsersState,
  //         user: mockUserStateLogged,
  //         ui: mockUiState,
  //       },
  //     });

  //     const renderedButton = screen.queryByRole("button", {
  //       name: "Show friends",
  //     });
  //     await userEvent.click(renderedButton!);

  //     const renderedText = screen.queryByText(expectedText);

  //     expect(renderedText).toBeInTheDocument();
  //   });
  // });
});
