import React from "react";

import { List } from "../../components";
import { TicketInterface } from "../../interfaces";

const DUMMY_TICKETS: TicketInterface[] = [
  {
    name: "Condor",
    deadline: "Test deadline",
    status: "green",
    timestamp: new Date()
  },
  {
    name: "Miat",
    message: "Test message",
    deadline: "Test deadline",
    status: "yellow",
    timestamp: new Date()
  },
  {
    name: "Sas",
    deadline: "Test deadline",
    status: "red",
    timestamp: new Date()
  }
];

export function Body() {
  return (
    <div className="sts-body">
      <List tickets={DUMMY_TICKETS} />
    </div>
  )
} 