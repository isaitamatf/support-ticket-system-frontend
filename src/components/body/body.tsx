import React from "react";

import { List } from "../../components";
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

export function Body() {
  return (
    <div className="sts-body">
      <List tickets={DUMMY_TICKETS} />
    </div>
  )
} 