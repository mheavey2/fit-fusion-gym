import Navbar from "./Navbar";
import { fireEvent } from "@testing-library/react";

describe("Navbar Component", () => {
  beforeEach(() => {
    renderWithRouter(<Navbar />);
  });

  it("renders logo link", () => {
    const logo = screen.getByText("FitFusion Studios");
    expect(logo).toBeInTheDocument();
    expect(logo.tagName.toLowerCase()).toBe("a");
    expect(logo).toHaveAttribute("href", "/");
  });
  it("renders navigation links", () => {
    const links = ["Home", "About Us", "The Team", "Classes", "Membership"];
    links.forEach((link) => {
      const navLink = screen.getByText(link);
      expect(navLink).toBeInTheDocument();
      expect(navLink.tagName.toLowerCase()).toBe("a");
    });
  });

  it("applies active class to current route", () => {
    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveClass("active");
  });

  it("renders with correct accessibility attributes", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Main Navigation");
  });
});
