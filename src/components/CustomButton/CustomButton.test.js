import React from "react";
import { render } from "@testing-library/react";
import CustomButton from "./CustomButton";

describe("CustomButton tests", () => {
  it("should render", () => {
    expect(render(<CustomButton />)).toBeTruthy();
  });
});
