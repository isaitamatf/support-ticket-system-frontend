import { render, screen } from "@testing-library/react";

import { ButtonComponent } from "./button-component";

describe("Button Component", () => {
  const MockButtonComponentProps = {
    text: "Test text",
    onClick: () => {},
    showIcon: false,
    disabled: false,
  };

  it("Button is render", () => {
    render(
      <ButtonComponent
        text={MockButtonComponentProps.text}
        onClick={MockButtonComponentProps.onClick}
        showIcon={MockButtonComponentProps.showIcon}
        disabled={MockButtonComponentProps.disabled}
      />
    );
    expect(screen.getByTestId("sts-button")).toBeTruthy();
  });

  it("Button with icon", () => {
    render(
      <ButtonComponent
        text={MockButtonComponentProps.text}
        onClick={MockButtonComponentProps.onClick}
        showIcon={!MockButtonComponentProps.showIcon}
        disabled={MockButtonComponentProps.disabled}
      />
    );
    expect(screen.getByTestId("sts-button")).toBeTruthy();
    expect(screen.getByTestId("sts-button-icon")).toBeTruthy();
  });

  it("Button disabled", () => {
    render(
      <ButtonComponent
        text={MockButtonComponentProps.text}
        onClick={MockButtonComponentProps.onClick}
        showIcon={MockButtonComponentProps.showIcon}
        disabled={!MockButtonComponentProps.disabled}
      />
    );
    expect(screen.getByTestId("sts-button")).toBeTruthy();
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
