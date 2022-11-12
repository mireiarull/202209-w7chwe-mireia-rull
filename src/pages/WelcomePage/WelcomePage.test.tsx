import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";

describe("Given a welcome page", () => {
  describe("When it's rendered", () => {
    test("Then it should show the logo with text 'hi space' and two buttons with text 'log in' and 'register'", () => {
      const expectedLogoText = "HI SPACE";
      const expectedLoginButtonText = "Log in";
      const expectedRegisterButtonText = "Register";

      render(
        <BrowserRouter>
          <WelcomePage />
        </BrowserRouter>
      );

      const logo = screen.queryByRole("heading", {
        name: expectedLogoText,
      });
      const loginButton = screen.queryByRole("button", {
        name: expectedLoginButtonText,
      });
      const registerButton = screen.queryByRole("button", {
        name: expectedRegisterButtonText,
      });

      expect(logo).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
      expect(registerButton).toBeInTheDocument();
    });
  });
});
