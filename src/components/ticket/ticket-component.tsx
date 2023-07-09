import React from "react";
import dayjs from "dayjs";

import { TicketInterface } from "../../interfaces";
import { ToogleSwitchComponent, StatusComponent } from "..";

type Props = {
  index: number,
  ticket: TicketInterface
}

export const TicketComponent: React.FC<Props> = ({ticket, index}) => {
  const { 
    name,
    message,
    deadline,
    status
  } = ticket;

  const checkStatusColor = () => {
    let statusColor: "green" | "yellow" | "red" = "red";
    if (status && dayjs() < dayjs(deadline)) {
      statusColor = "yellow"
    } else if (status && dayjs() > dayjs(deadline)) {
      statusColor = "green"
    }
    return statusColor;
  }

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
          <ToogleSwitchComponent status={status} />
          <StatusComponent status={checkStatusColor()} />
        </div>
      </div>
      <div className="sts-ticket-container">
        <textarea value={message} placeholder="Message" />
      </div>
    </div>
  ) : <></>
} 