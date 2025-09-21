import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { renderWithRouter } from "../../test-utils/test-utils";
import About from "./About";

describe("About Component", () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });

  it("renders the ethos heading", () => {
    expect(
      screen.getByRole("heading", { name: /our ethos/i })
    ).toBeInTheDocument();
  });

  it("renders the ethos statement", () => {
    const ethosContainer = screen.getByRole("banner", {
      selector: (content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          element.className.includes("data-test-class") &&
          content.includes("Strength")
        );
      },
    });
    expect(ethosContainer).toBeInTheDocument();
  });

  it("renders the main content", () => {
    const mainContent = screen.getByText(/at the core of fitfusion studios/i);
    expect(mainContent).toBeInTheDocument();
  });

  it("contains key value propositions", () => {
    const keywords = [
      "integrity",
      "purposeful movement",
      "continuous achievement",
    ];
    keywords.forEach((keyword) => {
      expect(screen.getByText(new RegExp(keyword, "i"))).toBeInTheDocument();
    });
  });
});
