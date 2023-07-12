import { render, screen } from "@testing-library/react";

import { ToogleSwitchComponent } from "./toggle-switch-component";

describe("Toggle Switch Component", () => {
  const MockToggleSwitchComponentProps = {
    status: "open",
    onChangeToggleSwitch: () => {},
  };

  it("Toggle Switch is render", () => {
    render(
      <ToogleSwitchComponent
        status="open"
        onChangeToggleSwitch={
          MockToggleSwitchComponentProps.onChangeToggleSwitch
        }
      />
    );
    const toggleSwitch = screen.getByTestId("sts-toggle-switch");
    expect(toggleSwitch).toBeTruthy();
  });

  it("Toggle Switch is open", () => {
    render(
      <ToogleSwitchComponent
        status="open"
        onChangeToggleSwitch={
          MockToggleSwitchComponentProps.onChangeToggleSwitch
        }
      />
    );
    expect(screen.getByRole("checkbox", { checked: true })).toBeEnabled();
  });

  it("Toggle Switch is closed", () => {
    render(
      <ToogleSwitchComponent
        status="closed"
        onChangeToggleSwitch={
          MockToggleSwitchComponentProps.onChangeToggleSwitch
        }
      />
    );
    expect(screen.getByRole("checkbox", { checked: false })).toBeEnabled();
  });
});
