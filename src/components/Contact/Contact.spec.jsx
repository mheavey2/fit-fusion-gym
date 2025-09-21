import Contact from "./Contact";

describe("Contact Component ", () => {
  beforeEach(() => {
    renderWithRouter(<Contact />);
  });

  it("renders contact information section", () => {
    expect(
      screen.getByRole("heading", { name: /location/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /phone/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /opening hours/i })
    ).toBeInTheDocument();
  });

  it("displays correct contact details", () => {
    expect(screen.getByText(/unit 1/i)).toBeInTheDocument();
    expect(screen.getByText(/business park/i)).toBeInTheDocument();
    expect(screen.getByText(/limerick/i)).toBeInTheDocument();
    expect(screen.getByText(/061-1234567/i)).toBeInTheDocument();
  });

  it("shows correct opening hours", () => {
    expect(screen.getByText(/mon-sat: 06:00-22:00/i)).toBeInTheDocument();
    expect(screen.getByText(/sun: 08:00-20:00/i)).toBeInTheDocument();
  });

  it("renders with proper layout structure", () => {
    expect(screen.getByTestId("contact-outer")).toHaveClass("contactContainer");
    expect(screen.getByTestId("info-container")).toHaveClass("infoContainer");
    expect(screen.getByTestId("hours-container")).toHaveClass("hoursContainer");
    expect(screen.getByTestId("phone-container")).toHaveClass("phoneContainer");
  });
});
