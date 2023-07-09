import React from "react";

import { TicketInterface } from "../../interfaces";
import { Ticket } from "../../components";

type Props = {
  tickets: TicketInterface[]
}

export const List: React.FC<Props> = ({tickets})  => {

  const showTickets = () => {
    return tickets.map((ticket: TicketInterface, index: number) => {
      return ticket ? (
        <Ticket index={index} ticket={ticket} key={index} />
      ) : <></>
    })
  }

  return tickets && tickets.length > 0 ? (
    <div className="sts-list">
      {showTickets()}
    </div>
  ) : <></>
} 