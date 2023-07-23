import { render, screen } from "@testing-library/react";

import { BodyComponent } from "./body-component";
import { MOCK_STORE } from "../../constants";
import { TicketInterface } from "../../interfaces";

describe("Body Component", () => {
  const MockBodyComponentProps = {
    tickets: MOCK_STORE,
    updateTicket: (ticketChanged: TicketInterface) => {},
    createTicket: (newTicket: TicketInterface) => {},
    removeTicket: (id?: string) => {},
    onClickCreateNew: () => {},
  };

  it("Body is render", () => {
    render(
      <BodyComponent
        tickets={MockBodyComponentProps.tickets}
        updateTicket={MockBodyComponentProps.updateTicket}
        createTicket={MockBodyComponentProps.createTicket}
        removeTicket={MockBodyComponentProps.removeTicket}
        onClickCreateNew={MockBodyComponentProps.onClickCreateNew}
      />
    );
    expect(screen.getByTestId("sts-body")).toBeTruthy();
  });
});
