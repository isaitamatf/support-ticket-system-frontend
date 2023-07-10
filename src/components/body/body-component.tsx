import React from "react";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ListComponent, ButtonComponent } from "..";
import { TicketInterface } from "../../interfaces";

const DUMMY_TICKETS: TicketInterface[] = [
  {
    name: "Condor",
    status: true,
    deadline: new Date()
  },
  {
    name: "Miat",
    message: "Test message",
    status: false,
    deadline: new Date()
  },
  {
    name: "Sas",
    status: true,
    deadline: new Date()
  }
];

export function BodyComponent() {
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
      <ListComponent tickets={DUMMY_TICKETS} />
      <div className="sts-row">
        <ButtonComponent text="Create Randomly"/>
        <ButtonComponent text="Create New"/>
      </div>
    </div>
  )
} 