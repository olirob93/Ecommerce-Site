import React from "react";
import { render } from "@testing-library/react";
import CheckoutItem from "./CheckoutItem";

describe("CheckoutItem tests", () => {
  it("should render", () => {
    expect(render(<CheckoutItem />)).toBeTruthy();
  });
});
