import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

import { ButtonComponent } from "..";
import { TicketInterface } from "../../interfaces";
import { DATE_FORMAT } from "../../constants";

type ModalComponentProps = {
  onClickButtonClose: () => void;
  createTicket: (newTicket: TicketInterface) => void;
};

/**
 * @description Modal component
 * @param {Function} onClickButtonClose
 * @param {Function} createTicket
 * @returns {JSX}
 */
const ModalComponent: React.FC<ModalComponentProps> = ({
  onClickButtonClose,
  createTicket,
}) => {
  // State variable for the client name
  const [client, setClient] = useState("");
  // State variable for the issue message
  const [issue, setIssue] = useState("");
  // State variable for the status
  const [status, setStatus] = useState("closed");
  // State variable for the deadline date
  const [deadline, setDeadline] = useState(dayjs().format(DATE_FORMAT));
  // State variable that disable or enable the save button
  const [saveButtonDisabled, setButtonDisabled] = useState(true);
  // If the form is complete then we will enable the save button
  useEffect(() => {
    if (
      client &&
      client.length > 0 &&
      issue &&
      issue.length > 0 &&
      status &&
      status.length > 0 &&
      deadline &&
      deadline.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [client, issue, status, deadline]);
  /**
   * @description Function that generate a new ticket object and create it
   */
  const onClickButtonSave = () => {
    const newTicket: TicketInterface = {
      client,
      issue,
      status: status === "open" ? "open" : "closed",
      deadline: new Date(deadline),
    };
    createTicket(newTicket);
  };
  return (
    <div className="sts-modal" data-testid="sts-modal">
      <div className="sts-modal-container">
        <div className="sts-modal-control">
          <FontAwesomeIcon
            className="sts-modal-control-close"
            icon={faClose}
            onClick={onClickButtonClose}
          />
        </div>
        <form className="sts-modal-form" name="new-ticket-form">
          <div>
            <span>Client name *</span>
            <input
              type="text"
              placeholder="Client name"
              required
              name="client"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>
          <div>
            <span>Issue message *</span>
            <textarea
              placeholder="Issue message"
              required
              name="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </div>
          <div>
            <span>Status</span>
            <input
              type="checkbox"
              placeholder="Status"
              name="status"
              checked={status === "open" ? true : false}
              onChange={(e) => setStatus(e.target.checked ? "open" : "closed")}
            />
          </div>
          <div>
            <span>Deadline *</span>
            <input
              type="date"
              placeholder="Deadline"
              required
              min={dayjs().format(DATE_FORMAT)}
              name="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div>
            <ButtonComponent
              text="Save"
              disabled={saveButtonDisabled}
              onClick={onClickButtonSave}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

ModalComponent.propTypes = {
  onClickButtonClose: PropTypes.func.isRequired,
  createTicket: PropTypes.func.isRequired,
};

ModalComponent.defaultProps = {
  onClickButtonClose: () => {},
  createTicket: (newTicket: TicketInterface) => {},
};

export { ModalComponent };
