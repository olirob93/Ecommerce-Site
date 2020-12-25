import React from "react";
import { render } from "@testing-library/react";
import Shop from "./Shop";

describe("shop tests", () => {
  it("should render", () => {
    expect(render(<Shop />)).toBeTruthy();
  });
});
