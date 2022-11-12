import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import LoginForm from "./Login";

describe("Given a login form component", () => {
  const usernameInputLabel = "Username";
  const passwordInputLabel = "Password";
  const buttonText = "Log in";

  describe("When it's rendered", () => {
    test("Then it should show an input for username, password and a button with the text 'Log in'", () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: usernameInputLabel,
      });
      const passwordInput = screen.getByLabelText(passwordInputLabel);
      const button = screen.queryByRole("button", { name: buttonText });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user types username 'admin', password 'admin'", () => {
    test("Then the typed values should show on the screen", async () => {
      const userInput = {
        username: "admin",
        password: "admin",
      };

      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: usernameInputLabel,
      });
      const passwordInput = screen.getByLabelText(passwordInputLabel);

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);

      expect(usernameInput).toHaveDisplayValue(userInput.username);
      expect(passwordInput).toHaveDisplayValue(userInput.password);
    });
  });
});
