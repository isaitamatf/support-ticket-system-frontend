import { render, screen } from "@testing-library/react";

import { ListComponent } from "./list-component";
import { MOCK_STORE } from "../../constants";
import { TicketInterface } from "../../interfaces";

describe("List Component", () => {
  const MockListComponentProps = {
    tickets: MOCK_STORE,
    updateTicket: (ticketChanged: TicketInterface) => {},
    removeTicket: (id?: string) => {},
  };

  it("List is render", () => {
    render(
      <ListComponent
        tickets={MockListComponentProps.tickets}
        updateTicket={MockListComponentProps.updateTicket}
        removeTicket={MockListComponentProps.removeTicket}
      />
    );
    const list = screen.getByTestId("sts-list");
    expect(list).toBeTruthy();
  });
});
