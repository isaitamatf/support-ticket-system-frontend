export interface TicketInterface {
  name: string,
  message?: string,
  deadline: string,
  status: "green" | "yellow" | "red",
  timestamp: Date
}