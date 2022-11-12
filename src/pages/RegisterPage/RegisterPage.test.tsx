import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Given a register page", () => {
  describe("When it's rendered", () => {
    test("Then it should show the logo with text 'hi space' and the register form with label 'username' and button 'Sign up'", () => {
      const expectedLogoText = "HI SPACE";
      const expectedUsernameLabel = "Username";
      const expectedSignUpButtonText = "Sign up";

      renderWithProviders(<RegisterPage />);

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
