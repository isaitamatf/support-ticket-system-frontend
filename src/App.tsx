import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";

import {
  getTickets,
  patchTicket,
  postTicket,
  deleteTicket,
  selectAllTickets,
} from "./features/tickets/ticketsSlice";

import "./App.scss";
 import "react-toastify/dist/ReactToastify.css";

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
    toast.success(`Ticket updated: ${ticketChanged.client}`);
  };

  const createTicket = (newTicket: TicketInterface) => {
    dispatch(postTicket(newTicket));
    toast.success(`New ticket created: ${newTicket.client}`);
  };

  const removeTicket = (id?: string) => {
    dispatch(deleteTicket(id));
    toast.success(`Ticket deleted`);
  }

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
        removeTicket={removeTicket}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        pauseOnHover
        hideProgressBar
        newestOnTop
        draggable={false}
        transition={Slide}
      />
    </>
  );
}

export default App;
