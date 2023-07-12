import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";

import { TicketComponent } from "./ticket-component";
import { MOCK_STORE } from "../../constants";
import { TicketInterface } from "../../interfaces";

describe("Ticket Component", () => {
  const MockTicketComponentProps = {
    ticket: MOCK_STORE[0],
    index: 0,
    updateTicket: (ticketChanged: TicketInterface) => {},
    removeTicket: (id?: string) => {},
  };

  it("Ticket is render", () => {
    render(
      <TicketComponent
        ticket={MockTicketComponentProps.ticket}
        index={MockTicketComponentProps.index}
        updateTicket={MockTicketComponentProps.updateTicket}
        removeTicket={MockTicketComponentProps.removeTicket}
      />
    );
    const ticket = screen.getByTestId("sts-ticket");
    expect(ticket).toBeTruthy();
  });

  it("Ticket values are correct", () => {
    render(
      <TicketComponent
        ticket={MockTicketComponentProps.ticket}
        index={MockTicketComponentProps.index}
        updateTicket={MockTicketComponentProps.updateTicket}
        removeTicket={MockTicketComponentProps.removeTicket}
      />
    );
    expect(screen.getByText(MOCK_STORE[0].issue)).toBeTruthy();
    expect(
      screen.getByText(dayjs(MOCK_STORE[0].deadline).format("DD/MM/YYYY"))
    ).toBeTruthy();
  });
});
