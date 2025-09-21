import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test-utils/test-utils";
import Hero from "./Hero";
import "@testing-library/jest-dom";

describe("Hero Component", () => {
  beforeEach(() => {
    renderWithRouter(<Hero />);
  });

  it("renders hero section with main content", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  // Add more specific tests based on your Hero component content
});
