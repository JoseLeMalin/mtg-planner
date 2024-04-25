import { render, screen } from "@testing-library/react";
// import { StatsCard } from "src/components/decks/StatCard";
import { StatsCard } from "@/src/components/decks/StatCard";
import { describe, test } from "vitest";

// import  from "context"
describe("Homepage", () => {
  test("home component title", () => {
    render(<StatsCard title={"the tile"} stat={"the stat"} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Home" }),
    ).toBeDefined();
  });
});
