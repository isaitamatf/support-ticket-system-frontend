import React from "react";
import dayjs from "dayjs";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TicketInterface } from "../../interfaces";
import { ToogleSwitchComponent, StatusComponent } from "..";

type Props = {
  ticket: TicketInterface;
  index: number;
  updateTicket: (ticketChanged: TicketInterface) => void;
  removeTicket: (id?: string) => void;
};

export const TicketComponent: React.FC<Props> = ({
  ticket,
  index,
  updateTicket,
  removeTicket
}) => {
  const { _id, client, issue, status, deadline } = ticket;

  const checkStatusColor = () => {
    let statusColor: "green" | "yellow" | "red" = "red";
    if (status === "open" && dayjs() < dayjs(deadline)) {
      statusColor = "yellow";
    } else if (status === "open" && dayjs() > dayjs(deadline)) {
      statusColor = "green";
    }
    return statusColor;
  };

  const onChangeToggleSwitch = () => {
    const ticketChanged: TicketInterface = {
      ...ticket,
      status: status === "open" ? "closed" : "open",
    };
    updateTicket(ticketChanged);
  };

  const onClickRemoveTicket = () => {
    removeTicket(_id);
  }

  return ticket ? (
    <div className="sts-ticket">
      <div className="sts-ticket-header">
        <div className="sts-ticket-header-element">
          <span>
            {index + 1}. {client}
          </span>
        </div>
        <div className="sts-ticket-header-element">
          <span>{dayjs(deadline).format("DD/MM/YYYY")}</span>
        </div>
        <div className="sts-ticket-header-element">
          <FontAwesomeIcon icon={faClose} onClick={onClickRemoveTicket} />
          <ToogleSwitchComponent
            status={status}
            onChangeToggleSwitch={onChangeToggleSwitch}
          />
          <StatusComponent status={checkStatusColor()} />
        </div>
      </div>
      <div className="sts-ticket-container">
        <textarea value={issue} placeholder="Message" disabled />
      </div>
    </div>
  ) : (
    <></>
  );
};
