import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../constants";
import { TicketInterface } from "../../interfaces";

/**
 * @description Function that makes the API call to get the tickets
 * @returns {TicketInterface[]}
 */
export const getTickets: any = createAsyncThunk("tickets/getTickets", async () => {
  try {
    const response = await axios.get(`${API_URL}/tickets`);
    return response.data;
  } catch (error) {
    console.error('Error getTickets -> ', error);
  }
});

/**
 * @description Function that makes the API call to put the ticket
 * @param {TicketInterface} ticketChanged 
 * @returns {TicketInterface}
 */
export const patchTicket: any = createAsyncThunk("tickets/patchTicket", async (ticketChanged: TicketInterface) => {
  try {
    const { _id } = ticketChanged;
    const response = await axios.patch(`${API_URL}/tickets/${_id}`, ticketChanged);
    return response.data;
  } catch (error) {
    console.error('Error patchTicket -> ', error);
  }
});

/**
 * @description Function that makes the API call to post the ticket
 * @param {TicketInterface} newTicket 
 * @returns {TicketInterface}
 */
export const postTicket: any = createAsyncThunk("tickets/postTicket", async (newTicket: TicketInterface) => {
  try {
    const response = await axios.post(`${API_URL}/tickets`, newTicket);
    return response.data;
  } catch (error) {
    console.error('Error postTicket -> ', error);
  }
});

/**
 * @description Function that makes the API call to delete the ticket
 * @param {string} id 
 * @returns {TicketInterface}
 */
export const deleteTicket: any = createAsyncThunk("tickets/deleteTicket", async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/tickets/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteTicket -> ', error);
  }
});