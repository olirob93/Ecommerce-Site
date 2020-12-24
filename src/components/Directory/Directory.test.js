import React from "react";
import { render } from "@testing-library/react";
import directory from "./directory";

describe("directory tests", () => {
  it("should render", () => {
    expect(render(<directory />)).toBeTruthy();
  });
});
