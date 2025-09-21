import Team from "./Team";

describe("Team Component", () => {
  beforeEach(() => {
    renderWithRouter(<Team />);
  });
  it("renders team section", () => {
    expect(
      screen.getByRole("region", { name: /The Team/i })
    ).toBeInTheDocument();
  });

  it("displays team member cards", () => {
    const teamCards = screen.getAllByTestId("team-card");
    expect(teamCards.length).toBeGreaterThan(0);
  });
});
