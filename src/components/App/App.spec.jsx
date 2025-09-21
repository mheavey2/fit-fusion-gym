import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test-utils/test-utils";
import App from "./App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it("renders the main navigation elements", () => {
    expect(screen.getByText("FitFusion Studios")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays contact information", () => {
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Opening Hours")).toBeInTheDocument();
  });
});
