import React from "react";
import { render } from "@testing-library/react";
import CollectionItem from "./CollectionItem";

describe("CollectionItem tests", () => {
  it("should render", () => {
    expect(render(<CollectionItem />)).toBeTruthy();
  });
});
