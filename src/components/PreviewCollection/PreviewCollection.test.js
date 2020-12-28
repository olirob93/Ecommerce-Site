import React from "react";
import { render } from "@testing-library/react";
import PreviewCollection from "./PreviewCollection";

describe("PreviewCollection tests", () => {
  it("should render", () => {
    expect(render(<PreviewCollection />)).toBeTruthy();
  });
});
