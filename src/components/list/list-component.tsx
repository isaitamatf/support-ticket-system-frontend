import React from "react";

import { TicketInterface } from "../../interfaces";
import { TicketComponent } from "..";

type Props = {
  tickets: TicketInterface[];
  updateTicket: (ticketChanged: TicketInterface) => void;
  removeTicket: (id?: string) => void;
};

/**
 * @description list Component
 * @param {TicketInterface[]} tickets
 * @param {Function} updateTicket
 * @param {Function} removeTicket
 * @returns {JSX}
 */
export const ListComponent: React.FC<Props> = ({
  tickets,
  updateTicket,
  removeTicket,
}) => {
  /**
   * @description Function that render all the tickets when exists
   * @returns {JSX}
   */
  const showTickets = () => {
    return tickets && tickets.length > 0 ? (
      tickets.map((ticket: TicketInterface, index: number) => {
        const { _id } = ticket;
        return ticket ? (
          <TicketComponent
            ticket={ticket}
            index={index}
            key={_id}
            updateTicket={updateTicket}
            removeTicket={removeTicket}
          />
        ) : (
          <></>
        );
      })
    ) : (
      <></>
    );
  };
  return <div className="sts-list">{showTickets()}</div>;
};
