import React from "react";
import PropTypes from "prop-types";

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
const ListComponent: React.FC<Props> = ({
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
            data-testid="sts-ticket-component"
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
  return (
    <div className="sts-list" data-testid="sts-list">
      {showTickets()}
    </div>
  );
};

ListComponent.propTypes = {
  tickets: PropTypes.array.isRequired,
  updateTicket: PropTypes.func.isRequired,
  removeTicket: PropTypes.func.isRequired,
};

ListComponent.defaultProps = {
  tickets: [],
  updateTicket: (ticketChanged: TicketInterface) => {},
  removeTicket: (id?: string) => {},
};

export { ListComponent };
