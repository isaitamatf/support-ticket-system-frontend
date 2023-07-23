import { render, screen } from "@testing-library/react";

import { ModalComponent } from "./modal-component";
import { TicketInterface } from "../../interfaces";

describe("Modal Component", () => {
  const MockModalComponentProps = {
    onClickButtonClose: () => {},
    createTicket: (newTicket: TicketInterface) => {},
  };

  it("Modal is render", () => {
    render(
      <ModalComponent
        onClickButtonClose={MockModalComponentProps.onClickButtonClose}
        createTicket={MockModalComponentProps.createTicket}
      />
    );
    const modal = screen.getByTestId("sts-modal");
    expect(modal).toBeTruthy();
  });
});
