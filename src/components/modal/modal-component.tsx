import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

import { ButtonComponent } from "../../components";
import { TicketInterface } from "../../interfaces";
import { DATE_FORMAT } from "../../constants";

type Props = {
  onClickButtonClose: () => void;
  createTicket: (newTicket: TicketInterface) => void;
};

export const ModalComponent: React.FC<Props> = ({
  onClickButtonClose,
  createTicket,
}) => {
  const [client, setClient] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState("closed");
  const [deadline, setDeadline] = useState(dayjs().format(DATE_FORMAT));
  const [saveButtonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (client && client.length > 0
    && issue && issue.length > 0
    && status && status.length > 0
    && deadline && deadline.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true);
    }
  }, [client, issue, status, deadline]);

  const onClickButtonSave = () => {
    const newTicket: TicketInterface = {
      client,
      issue,
      status: status === "open" ? "open" : "closed",
      deadline: new Date(deadline),
    };
    createTicket(newTicket);
  }

  return (
    <div className="sts-modal">
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
