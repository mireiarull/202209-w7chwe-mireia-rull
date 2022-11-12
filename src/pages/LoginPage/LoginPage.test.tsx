import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a login page", () => {
  describe("When it's rendered", () => {
    test("Then it should show the logo with text 'hi space' and the register form with label 'username' and button 'Log in'", () => {
      const expectedLogoText = "HI SPACE";
      const expectedUsernameLabel = "Username";
      const expectedSignUpButtonText = "Log in";

      renderWithProviders(<LoginPage />);

      const logo = screen.queryByRole("heading", {
        name: expectedLogoText,
      });
      const usernameLabel = screen.queryByRole("textbox", {
        name: expectedUsernameLabel,
      });
      const registerButton = screen.queryByRole("button", {
        name: expectedSignUpButtonText,
      });

      expect(logo).toBeInTheDocument();
      expect(usernameLabel).toBeInTheDocument();
      expect(registerButton).toBeInTheDocument();
    });
  });
});
