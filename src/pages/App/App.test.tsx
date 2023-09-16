// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import App from "./App";

// Tests
describe("Renders main page correctly", async () => {
 
  it("renders headline", () => {
    render(<App />);

    screen.debug();

    // check if App components renders headline
  });
});
