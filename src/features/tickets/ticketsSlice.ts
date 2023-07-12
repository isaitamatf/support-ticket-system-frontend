import { createSlice } from "@reduxjs/toolkit";

import { getTickets, patchTicket, postTicket, deleteTicket } from "./ticketsThunks";
import { TicketInterface } from "../../interfaces";

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
      })
      .addCase(patchTicket.fulfilled, (state: any, action) => {
        const ticketsUpdated = state.tickets.map((ticket: any) => {
          if (ticket._id === action.payload._id) {
            ticket = action.payload;
          }
          return ticket;
        })
        state.tickets = ticketsUpdated;
      })
      .addCase(postTicket.fulfilled, (state, action) => {
        state.tickets = state.tickets.concat(action.payload);
      })
      .addCase(deleteTicket.fulfilled, (state: any, action) => {
        state.tickets = state.tickets.filter((ticket: any) => ticket._id !== action.payload._id)
      });
  },
});

/**
 * @description Function that set the tickets data from the store to the state
 * @param reducer
 * @returns {TicketInterface[]}
 */
export const selectAllTickets = (reducer: any): TicketInterface[] =>
  reducer.ticketsReducer &&
    reducer.ticketsReducer.tickets &&
    reducer.ticketsReducer.tickets.length > 0
    ? reducer.ticketsReducer.tickets
    : [];

export default ticketsSlice.reducer;
