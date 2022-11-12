import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import RegisterForm from "./RegisterForm";

describe("Given a register form component", () => {
  const usernameInputLabel = "Username";
  const passwordInputLabel = "Password";
  const emailInputLabel = "E-mail";
  const buttonText = "Sign up";

  describe("When it's rendered", () => {
    test("Then it should show an input for username, password and email, and a button with the text 'Sign up'", () => {
      render(<RegisterForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: usernameInputLabel,
      });
      const passwordInput = screen.getByLabelText(passwordInputLabel);
      const emailInput = screen.queryByRole("textbox", {
        name: emailInputLabel,
      });
      const button = screen.queryByRole("button", { name: buttonText });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user types username 'admin', password 'admin' and emain 'admin@gmail.com'", () => {
    test("Then the typed values should show on the screen", async () => {
      const userInput = {
        username: "admin",
        password: "admin",
        email: "admin@gmail.com",
      };

      render(<RegisterForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: usernameInputLabel,
      });
      const passwordInput = screen.getByLabelText(passwordInputLabel);
      const emailInput = screen.queryByRole("textbox", {
        name: emailInputLabel,
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);
      await userEvent.type(emailInput!, userInput.email);

      expect(usernameInput).toHaveDisplayValue(userInput.username);
      expect(passwordInput).toHaveDisplayValue(userInput.password);
      expect(emailInput).toHaveDisplayValue(userInput.email);
    });
  });
});
