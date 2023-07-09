import React from "react";

import { TicketInterface } from "../../interfaces";
import { TicketComponent } from "..";

type Props = {
  tickets: TicketInterface[]
}

export const ListComponent: React.FC<Props> = ({tickets})  => {

  const showTickets = () => {
    return tickets.map((ticket: TicketInterface, index: number) => {
      return ticket ? (
        <TicketComponent index={index} ticket={ticket} key={index} />
      ) : <></>
    })
  }

  return tickets && tickets.length > 0 ? (
    <div className="sts-list">
      {showTickets()}
    </div>
  ) : <></>
} 