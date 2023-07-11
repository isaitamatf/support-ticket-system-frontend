import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchTickets,
  selectAllTickets,
} from "./features/tickets/ticketsSlice";

import "./App.scss";

import { BodyComponent, HeaderComponent } from "./components";

function App() {
  const dispatch = useDispatch();
  // State variable where we store the tickets.
  const tickets = useSelector(selectAllTickets);

  const getTickets = () => {
    dispatch(fetchTickets());
  }

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <HeaderComponent />
      <BodyComponent tickets={tickets} />
    </>
  );
}

export default App;
