import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../constants";
import { TicketInterface } from "../../interfaces";

/**
 * @description Function that makes the API call
 * @returns {Array}
 */
export const getTickets: any = createAsyncThunk("tickets/getTickets", async () => {
  try {
    const response = await axios.get(`${API_URL}/tickets`);
    return response.data;
  } catch (error) {
    console.error('Error getTickets -> ', error);
  }
});

export const patchTicket: any = createAsyncThunk("tickets/patchTicket", async (ticketChanged: TicketInterface) => {
  try {
    const { _id } = ticketChanged;
    const response = await axios.patch(`${API_URL}/tickets/${_id}`, ticketChanged);
    return response.data;
  } catch (error) {
    console.error('Error patchTicket -> ', error);
  }
});

export const postTicket: any = createAsyncThunk("tickets/postTicket", async (newTicket: TicketInterface) => {
  try {
    const response = await axios.post(`${API_URL}/tickets`, newTicket);
    return response.data;
  } catch (error) {
    console.error('Error postTicket -> ', error);
  }
});

export const deleteTicket: any = createAsyncThunk("tickets/deleteTicket", async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/tickets/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteTicket -> ', error);
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
      })
      .addCase(postTicket.fulfilled, (state, action) => {
        state.tickets = state.tickets.concat(action.payload);
      })
      .addCase(deleteTicket.fulfilled, (state: any, action) => {
        state.tickets = state.tickets.filter((ticket: any) => ticket._id !== action.payload._id)
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
