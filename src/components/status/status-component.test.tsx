import { render, screen } from "@testing-library/react";

import { StatusComponent } from "./status-component";

describe("Status Component", () => {
  it("Status is render", () => {
    render(<StatusComponent status="green" />);
    const status = screen.getByTestId("sts-status");
    expect(status).toBeTruthy();
  });
});
