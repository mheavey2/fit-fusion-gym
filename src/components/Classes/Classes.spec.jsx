import Classes from "./Classes";
import { fireEvent, act } from "@testing-library/react";

describe("Classes Component", () => {
  beforeEach(() => {
    renderWithRouter(<Classes />);
  });

  it("renders classes section", () => {
    expect(
      screen.getByRole("region", { name: /Class Schedule/i })
    ).toBeInTheDocument();
  });

  it("renders schedule filters", () => {
    const scheduleFilters = screen.getByRole("toolbar", {
      name: "Schedule Filters",
    });
    expect(scheduleFilters).toBeInTheDocument();
  });

  it("renders day navigation section", () => {
    const daySection = screen.getByRole("group", {
      name: "Day Navigation",
    });
    expect(daySection).toBeInTheDocument();
  });

  it("renders previous day button", () => {
    const prevButton = screen.getByRole("button", {
      name: "Previous Day",
    });
    expect(prevButton).toBeInTheDocument();
  });

  it("renders next day button", () => {
    const nextBtn = screen.getByRole("button", {
      name: "Next Day",
    });
    expect(nextBtn).toBeInTheDocument();
  });
  it("navigates to next day", () => {
    const initialDay = screen.getByRole("heading", { level: 2 }).textContent;
    const nextButton = screen.getByRole("button", { name: /next day/i });

    fireEvent.click(nextButton);

    const newDay = screen.getByRole("heading", { level: 2 }).textContent;
    expect(newDay).not.toBe(initialDay);
  });

  it("navigates to previous day", () => {
    const initialDay = screen.getByRole("heading", { level: 2 }).textContent;
    const prevButton = screen.getByRole("button", { name: /previous day/i });

    fireEvent.click(prevButton);

    const newDay = screen.getByRole("heading", { level: 2 }).textContent;
    expect(newDay).not.toBe(initialDay);
  });

  it("cycles through days correctly", () => {
    const initialDay = screen.getByRole("heading", { level: 2 }).textContent;
    const nextButton = screen.getByRole("button", { name: /next day/i });

    // Click next 7 times to cycle through all days
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton);
    }

    const finalDay = screen.getByRole("heading", { level: 2 }).textContent;
    expect(finalDay).toBe(initialDay);
  });

  it("closes dropdown when clicking outside", () => {
    // Open dropdown first
    const dropdown = screen.getByTestId("class-dropdown");
    fireEvent.click(dropdown);
    expect(dropdown).toHaveAttribute("aria-expanded", "true");

    // Click outside
    act(() => {
      fireEvent.mouseDown(document.body);
    });

    expect(dropdown).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles dropdown visibility", () => {
    const dropdown = screen.getByTestId("class-dropdown");

    // Initial state
    expect(dropdown).toHaveAttribute("aria-expanded", "false");

    // Open dropdown
    fireEvent.click(dropdown);
    expect(dropdown).toHaveAttribute("aria-expanded", "true");

    // Close dropdown
    fireEvent.click(dropdown);
    expect(dropdown).toHaveAttribute("aria-expanded", "false");
  });
  it("handles no classes selected", () => {
    // Open dropdown
    fireEvent.click(screen.getByTestId("class-dropdown"));

    // Select a class type
    fireEvent.click(screen.getByText("All Classes"));

    // Check if header text updated
    expect(screen.getByText("All Classes")).toBeInTheDocument();
    // Check if dropdown closed
    expect(screen.getByTestId("class-dropdown")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
  it("handles class type selection", () => {
    // Open dropdown
    fireEvent.click(screen.getByTestId("class-dropdown"));

    // Select a class type
    const PilatesOption = screen.getAllByTestId("class-dropdown-item")[0];
    fireEvent.click(PilatesOption);

    // Check if header text updated and dropdown closed
    const dropdown = screen.getByTestId("class-dropdown");
    expect(dropdown).toHaveTextContent("Pilates");
    expect(dropdown).toHaveAttribute("aria-expanded", "false");
  });

  it("renders class filters", () => {
    const classFilters = screen.getByRole("group", {
      name: "Class Type Filter",
    });
    expect(classFilters).toBeInTheDocument();
  });

  it("renders combobox with correct ARIA attributes", () => {
    const combobox = screen.getByRole("combobox");
    expect(combobox).toHaveAttribute("aria-expanded", "false");
    expect(combobox).toHaveAttribute("aria-haspopup", "listbox");
  });

  it("filters classes for selected day", () => {
    // Select a specific day
    const mondayClasses = screen.getAllByRole("listitem");
    expect(mondayClasses.length).toBeGreaterThan(0);
  });

  it("shows no classes message when no classes match filter", () => {
    // Select a class type that doesn't have classes on current day

    fireEvent.click(screen.getByRole("combobox"));
    const yogaOption = screen.getAllByTestId("class-dropdown-item")[4];
    fireEvent.click(yogaOption);

    expect(screen.getByText(/no yoga classes today/i)).toBeInTheDocument();
  });
});
