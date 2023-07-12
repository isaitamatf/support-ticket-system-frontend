import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { selectAllTickets } from "./features/tickets/ticketsSlice";
import {
  getTickets,
  patchTicket,
  postTicket,
  deleteTicket,
} from "./features/tickets/ticketsThunks";
import { BodyComponent, HeaderComponent, ModalComponent } from "./components";
import { TicketInterface } from "./interfaces";

/**
 * @description App component
 * @returns {JSX}
 */
function App() {
  const dispatch = useDispatch();
  // State variable where we store the tickets
  const tickets = useSelector(selectAllTickets);
  // State variable that renders or hides the modal
  const [showModal, setShowModal] = useState(false);
  // Load the tickets with the first render
  useEffect(() => fetchTickets(), []);
  /**
   * @description API call to get all tickets
   */
  const fetchTickets = () => {
    dispatch(getTickets());
  };
  /**
   * @description API call to put the ticket
   * @param {TicketInterface} ticketChanged Ticket with changed properties
   */
  const updateTicket = (ticketChanged: TicketInterface) => {
    dispatch(patchTicket(ticketChanged));
    toast.success(`Ticket updated: ${ticketChanged.client}`);
  };
  /**
   * @description API call to post the ticket
   * @param {TicketInterface} newTicket New ticket object
   */
  const createTicket = (newTicket: TicketInterface) => {
    dispatch(postTicket(newTicket));
    toast.success(`New ticket created: ${newTicket.client}`);
  };
  /**
   * @description API call to delete the ticket
   * @param {string} id Identifier of the ticket to be deleted
   */
  const removeTicket = (id?: string) => {
    dispatch(deleteTicket(id));
    toast.success(`Ticket deleted`);
  };
  /**
   * @description Function that changes the status of the modal
   */
  const changeModalStatus = () => setShowModal(!showModal);

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
