export interface TicketInterface {
  _id: string,
  client: string,
  issue?: string,
  status: "open" | "closed",
  deadline: Date
}