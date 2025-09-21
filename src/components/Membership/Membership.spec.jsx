import Membership from "./Membership";

describe("Membership Component", () => {
  beforeEach(() => {
    renderWithRouter(<Membership />);
  });

  it("renders intro offer", () => {
    expect(
      screen.getByRole("article", { name: /Introductory Membership Offer/i })
    ).toBeInTheDocument();
  });
  it("renders intro offer perks", () => {
    expect(
      screen.getByRole("list", {
        name: /Introductory Membership Offer Perks/i,
      })
    ).toBeInTheDocument();
  });
  it("renders membership section", () => {
    expect(
      screen.getByRole("group", { name: /Membership Tiers/i })
    ).toBeInTheDocument();
  });

  it("displays all membership plans", () => {
    const membershipCards = screen.getAllByTestId("membership-plan");
    expect(membershipCards).toHaveLength(3); // Assuming 3 membership plans

    const expectedPlans = ["Tier 1", "Tier 2", "Tier 3"];
    expectedPlans.forEach((plan) => {
      expect(screen.getByText(plan)).toBeInTheDocument();
    });
  });
  it("shows correct pricing information", () => {
    const priceElements = screen.getAllByTestId("price");
    priceElements.forEach((price) => {
      expect(price).toHaveTextContent(/€\d+/); // Price format €XX
    });
  });
  it("displays membership benefits", () => {
    const benefitsList = screen.getAllByRole("list");
    expect(benefitsList.length).toBeGreaterThan(0);

    const benefits = screen.getAllByRole("listitem");
    expect(benefits.length).toBeGreaterThan(0);
  });
});
