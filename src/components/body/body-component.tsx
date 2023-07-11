import React from "react";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ListComponent, ButtonComponent } from "..";
import { TicketInterface } from "../../interfaces";

type BodyComponentProps = {
  tickets: TicketInterface[];
  updateTicket: (ticketChanged: TicketInterface) => void;
};

export const BodyComponent: React.FC<BodyComponentProps> = ({tickets, updateTicket}) => {
  return (
    <div className="sts-body">
      <div className="sts-row">
        <div className="sts-calendar">
          <FontAwesomeIcon icon={faCalendar} color="#0B3B60" />
        </div>
        <div className="sts-span">
          <span>Timeline</span>
        </div>
      </div>
      <ListComponent tickets={tickets} updateTicket={updateTicket} />
      <div className="sts-row">
        <ButtonComponent text="Create Randomly" />
        <ButtonComponent text="Create New" />
      </div>
    </div>
  );
}; 