import React from "react";
import dayjs from "dayjs";

import { TicketInterface } from "../../interfaces";
import { ToogleSwitchComponent, StatusComponent } from "..";

type Props = {
  ticket: TicketInterface,
  index: number
}

export const TicketComponent: React.FC<Props> = ({ticket, index}) => {
  const { 
    client,
    issue,
    status,
    deadline
  } = ticket;

  const checkStatusColor = () => {
    let statusColor: "green" | "yellow" | "red" = "red";
    if (status === "open" && dayjs() < dayjs(deadline)) {
      statusColor = "yellow"
    } else if (status === "open" && dayjs() > dayjs(deadline)) {
      statusColor = "green"
    }
    return statusColor;
  }

  return ticket ? (
    <div className="sts-ticket">
      <div className="sts-ticket-header">
        <div className="sts-ticket-header-element">
          <span>{index + 1}. {client}</span>
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
        <textarea value={issue} placeholder="Message" />
      </div>
    </div>
  ) : <></>
} 