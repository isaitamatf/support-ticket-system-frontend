import React from "react";
import dayjs from "dayjs";

import { TicketInterface } from "../../interfaces";
import { ToogleSwitch } from "../../components";

type Props = {
  index: number,
  ticket: TicketInterface
}

export const Ticket: React.FC<Props> = ({ticket, index}) => {
  const { 
    name,
    message,
    deadline,
    status
   } = ticket;
  return ticket ? (
    <div className="sts-ticket">
      <div className="sts-ticket-header">
        <div className="sts-ticket-header-element">
          <span>{index + 1}. {name}</span>
        </div>
        <div className="sts-ticket-header-element">
          <span>{dayjs(deadline).format("DD/MM/YYYY")}</span>
        </div>
        <div className="sts-ticket-header-element">
          <ToogleSwitch status={status} />
        </div>
      </div>
      <div className="sts-ticket-container">
        <textarea value={message} placeholder="Message" />
      </div>
    </div>
  ) : <></>
} 