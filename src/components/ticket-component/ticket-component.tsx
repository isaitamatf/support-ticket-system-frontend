import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
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

/**
 * @description Ticket component
 * @param {TicketInterface} ticket
 * @param {number} index
 * @param {Function} updateTicket
 * @param {Function} removeTicket
 * @returns {JSX}
 */
const TicketComponent: React.FC<Props> = ({
  ticket,
  index,
  updateTicket,
  removeTicket,
}) => {
  const { _id, client, issue, status, deadline } = ticket;
  /**
   * @description Function that check which is the correct status
   * @returns {string}
   */
  const checkStatusColor = () => {
    let statusColor: "green" | "yellow" | "red" = "green";
    if (status === "open" && dayjs() < dayjs(deadline)) {
      statusColor = "yellow";
    } else if (status === "open" && dayjs() > dayjs(deadline)) {
      statusColor = "red";
    }
    return statusColor;
  };
  /**
   * @description Function that change the status of the ticket
   */
  const onChangeToggleSwitch = () => {
    const ticketChanged: TicketInterface = {
      ...ticket,
      status: status === "open" ? "closed" : "open",
    };
    updateTicket(ticketChanged);
  };
  /**
   * @description Function that remove the ticket with the id
   */
  const onClickRemoveTicket = () => removeTicket(_id);

  return ticket ? (
    <div className="sts-ticket" data-testid="sts-ticket">
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

TicketComponent.propTypes = {
  //ticket: PropTypes.object,
  index: PropTypes.number.isRequired,
  updateTicket: PropTypes.func.isRequired,
  removeTicket: PropTypes.func.isRequired,
};

TicketComponent.defaultProps = {
  index: 0,
  updateTicket: (ticketChanged: TicketInterface) => {},
  removeTicket: (id?: string) => {},
};

export { TicketComponent };
