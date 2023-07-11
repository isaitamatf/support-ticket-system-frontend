import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getTickets,
  patchTicket,
  selectAllTickets,
} from "./features/tickets/ticketsSlice";

import "./App.scss";

import { BodyComponent, HeaderComponent } from "./components";
import { TicketInterface } from "./interfaces"

function App() {
  const dispatch = useDispatch();
  // State variable where we store the tickets.
  const tickets = useSelector(selectAllTickets);

  const fetchTickets = () => {
    dispatch(getTickets());
  }

  const updateTicket = (ticketChanged: TicketInterface) => {
    dispatch(patchTicket(ticketChanged));
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <HeaderComponent />
      <BodyComponent tickets={tickets} updateTicket={updateTicket} />
    </>
  );
}

export default App;
