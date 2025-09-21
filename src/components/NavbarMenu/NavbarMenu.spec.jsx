import { fireEvent } from "@testing-library/react";
import NavbarMenu from "./NavbarMenu";

describe("NavbarMenu Component", () => {
  beforeEach(() => {
    renderWithRouter(<NavbarMenu />);
  });

  it("renders menu button with correct initial state", () => {
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(screen.getByAltText("Open menu icon")).toBeInTheDocument();
  });

  it("toggles menu visibility when clicked", () => {
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });
  it("displays close menu icon when menu is open", () => {
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(menuButton);

    expect(screen.getByAltText("close menu icon")).toBeInTheDocument();
  });

  it("contains all navigation links", () => {
    const links = ["Home", "About Us", "The Team", "Classes", "Membership"];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
