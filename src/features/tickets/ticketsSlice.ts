import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../constants";
import { TicketInterface } from "../../interfaces";

/**
 * @description Function that makes the API call
 * @returns {Array}
 */
export const getTickets: any = createAsyncThunk("tickets/getTickets", async () => {
  const response = await axios.get(`${API_URL}/tickets`);
  return response.data;
});

export const patchTicket: any = createAsyncThunk("tickets/patchTicket", async (ticketChanged: TicketInterface) => {
  const { _id } = ticketChanged;
  try {
    const response = await axios.patch(`${API_URL}/tickets/${_id}`, ticketChanged);
    return response.data;
  } catch (error) {
    console.error('Error patchTicket -> ', error);
  }
});

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
      });
  },
});

export const selectAllTickets = (reducer: any) =>
  reducer.ticketsReducer &&
    reducer.ticketsReducer.tickets &&
    reducer.ticketsReducer.tickets.length > 0
    ? reducer.ticketsReducer.tickets
    : [];

export default ticketsSlice.reducer;
