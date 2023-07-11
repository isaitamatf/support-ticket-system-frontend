import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../constants";

/**
 * @description Function that makes the API call
 * @returns {Array}
 */
export const fetchTickets: any = createAsyncThunk("tickets/fetchTickets", async () => {
  const response = await axios.get(`${API_URL}/tickets`);
  return response.data;
});

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTickets.pending, (state, action) => {
        // LOADING
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        // FAILED
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
