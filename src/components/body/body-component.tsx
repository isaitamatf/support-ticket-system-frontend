import React from "react";

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
      <ListComponent tickets={DUMMY_TICKETS} />
      <div className="sts-row">
        <ButtonComponent text="Create Randomly"/>
        <ButtonComponent text="Create New"/>
      </div>
    </div>
  )
} 