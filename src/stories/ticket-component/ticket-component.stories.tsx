import type { Meta, StoryObj } from "@storybook/react";

import { TicketComponent } from "../../components";
import { MOCK_STORE } from "../../constants";
import { TicketInterface } from "../../interfaces";
import "../../App.scss";

const meta = {
  title: "Components/Ticket",
  component: TicketComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TicketComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render: Story = {
  args: {
    ticket: MOCK_STORE[0],
    index: 0,
    updateTicket: (ticketChanged: TicketInterface) => {},
    removeTicket: (id?: string) => {},
  },
};
