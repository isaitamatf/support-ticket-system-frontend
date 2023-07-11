import React from "react";

import { TicketInterface } from "../../interfaces";
import { TicketComponent } from "..";

type Props = {
  tickets: TicketInterface[];
  updateTicket: (ticketChanged: TicketInterface) => void;
};

export const ListComponent: React.FC<Props> = ({tickets, updateTicket})  => {
  const showTickets = () => {
    return tickets.map((ticket: TicketInterface, index: number) => {
      const { _id } = ticket;
      return ticket ? (
        <TicketComponent ticket={ticket} index={index} key={_id} updateTicket={updateTicket} />
      ) : <></>
    })
  }
  return tickets && tickets.length > 0 ? (
    <div className="sts-list">
      {showTickets()}
    </div>
  ) : <></>
} 