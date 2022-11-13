import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'HI SPACE' and two navigation links", async () => {
      const headingText = "HI SPACE";
      const navigationHome = "HOME";
      const navigationProfile = "MY PROFILE";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const renderedHeading = screen.queryByRole("heading", {
        name: headingText,
      });
      const renderedHomeLink = screen.queryByRole("link", {
        name: navigationHome,
      });
      const renderedProfileLink = screen.queryByRole("link", {
        name: navigationProfile,
      });

      expect(renderedHeading).toBeInTheDocument();
      expect(renderedHomeLink).toBeInTheDocument();
      expect(renderedProfileLink).toBeInTheDocument();
    });
  });
});
