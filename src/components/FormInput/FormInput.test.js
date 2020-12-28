import React from "react";
import { render } from "@testing-library/react";
import FormInput from "./FormInput";

describe("FormInput tests", () => {
  it("should render", () => {
    expect(render(<FormInput />)).toBeTruthy();
  });
});
