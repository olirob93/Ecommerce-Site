import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Homepage tests", () => {
  it("should render", () => {
    expect(render(<Homepage />)).toBeTruthy();
  });
});
