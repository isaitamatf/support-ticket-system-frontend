import React from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";

import { ListComponent, ButtonComponent } from "../../components";
import { TicketInterface } from "../../interfaces";
import {
  RANDOM_CLIENTS,
  RANDOM_DEADLINES,
  RANDOM_ISSUES,
  RANDOM_STATUS,
} from "../../constants";

type BodyComponentProps = {
  tickets: TicketInterface[];
  updateTicket: (ticketChanged: TicketInterface) => void;
  createTicket: (newTicket: TicketInterface) => void;
  removeTicket: (id?: string) => void;
  onClickCreateNew: () => void;
};

/**
 * @description Body component
 * @param {TicketInterface[]} tickets
 * @param {Function} updateTicket
 * @param {Function} createTicket
 * @param {Function} removeTicket
 * @param {Function} onClickCreateNew
 * @returns {JSX}
 */
export const BodyComponent: React.FC<BodyComponentProps> = ({
  tickets,
  updateTicket,
  createTicket,
  removeTicket,
  onClickCreateNew,
}) => {
  /**
   * @description Function that give to us a random number
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  /**
   * @description Function that generate the new ticket object to create it
   */
  const onClickCreateRandomly = () => {
    const newStatus = RANDOM_STATUS[getRandomNumber(0, 2)];
    const newTicket: TicketInterface = {
      client: RANDOM_CLIENTS[getRandomNumber(0, 5)],
      issue: RANDOM_ISSUES[getRandomNumber(0, 5)],
      status: newStatus === "open" ? "open" : "closed",
      deadline: new Date(RANDOM_DEADLINES[getRandomNumber(0, 5)]),
    };
    createTicket(newTicket);
  };
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
      <ListComponent
        tickets={tickets}
        updateTicket={updateTicket}
        removeTicket={removeTicket}
      />
      <div className="sts-row">
        <ButtonComponent
          text="Create Randomly"
          onClick={debounce(onClickCreateRandomly, 500)}
          showIcon
        />
        <ButtonComponent
          text="Create New"
          onClick={onClickCreateNew}
          showIcon
        />
      </div>
    </div>
  );
};
