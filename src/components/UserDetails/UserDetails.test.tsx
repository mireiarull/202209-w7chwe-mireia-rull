import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import { UserStructure } from "../../types";
import UserDetails from "./UserDetails";

describe("Given a UserDetails component", () => {
  describe("When it's rendered with the received user with name 'Mireia'", () => {
    test("Then it should show a heading with name 'Mireia', an image and two buttons", () => {
      const user: UserStructure = {
        name: "Mireia",
        id: "",
        job: "",
        username: "",
        email: "",
        password: "",
      };
      const expectedAltText = "Mireia";

      renderWithProviders(<UserDetails user={user} />);

      const renderedHeading = screen.queryByRole("heading", {
        name: user.name,
      });

      const renderedImage = screen.queryByAltText(expectedAltText);

      expect(renderedHeading).toBeInTheDocument();
      expect(renderedImage).toBeInTheDocument();
    });
  });
});
