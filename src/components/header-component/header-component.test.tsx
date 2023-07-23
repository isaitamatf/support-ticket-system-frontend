import { render, screen } from "@testing-library/react";

import { HeaderComponent } from "./header-component";

describe("Header Component", () => {
  it("Header is render", () => {
    render(<HeaderComponent />);
    expect(screen.getByTestId("sts-header")).toBeTruthy();
  });
});
