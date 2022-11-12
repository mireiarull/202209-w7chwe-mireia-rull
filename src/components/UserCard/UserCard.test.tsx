import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import { UserStructure } from "../../types";
import UserCard from "./UserCard";

describe("Given a UserCard component", () => {
  describe("When it's rendered with the received user with name 'Mireia'", () => {
    test("Then it should show a heading with name 'Mireia' and an image", () => {
      const user: UserStructure = {
        name: "Mireia",
        id: "",
        job: "",
        username: "",
      };
      const expectedAltText = "Mireia";

      renderWithProviders(<UserCard user={user} />);

      const renderedHeading = screen.queryByRole("heading", {
        name: user.name,
      });

      const renderedImage = screen.queryByAltText(expectedAltText);

      expect(renderedHeading).toBeInTheDocument();
      expect(renderedImage).toBeInTheDocument();
    });
  });
});
