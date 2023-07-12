import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getTickets,
  patchTicket,
  postTicket,
  selectAllTickets,
} from "./features/tickets/ticketsSlice";

import "./App.scss";

import { BodyComponent, HeaderComponent, ModalComponent } from "./components";
import { TicketInterface } from "./interfaces";

function App() {
  const dispatch = useDispatch();
  // State variable where we store the tickets.
  const tickets = useSelector(selectAllTickets);

  const [showModal, setShowModal] = useState(false);

  const fetchTickets = () => {
    dispatch(getTickets());
  };

  const updateTicket = (ticketChanged: TicketInterface) => {
    dispatch(patchTicket(ticketChanged));
  };

  const createTicket = (newTicket: TicketInterface) => {
    dispatch(postTicket(newTicket));
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const changeModalStatus = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <HeaderComponent />
      <BodyComponent
        tickets={tickets}
        updateTicket={updateTicket}
        createTicket={createTicket}
        onClickCreateNew={changeModalStatus}
      />
      {showModal ? (
        <ModalComponent
          onClickButtonClose={changeModalStatus}
          createTicket={createTicket}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
