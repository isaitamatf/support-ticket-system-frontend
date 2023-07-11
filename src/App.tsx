import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getTickets,
  patchTicket,
  postTicket,
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

  const createTicket = (newTicket: TicketInterface) => {
    dispatch(postTicket(newTicket));
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <HeaderComponent />
      <BodyComponent tickets={tickets} updateTicket={updateTicket} createTicket={createTicket} />
    </>
  );
}

export default App;
