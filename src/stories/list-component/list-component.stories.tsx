import type { Meta, StoryObj } from "@storybook/react";

import { ListComponent } from "../../components";
import { MOCK_STORE } from "../../constants";
import { TicketInterface } from "../../interfaces";
import "../../App.scss";

const meta = {
  title: "Components/List",
  component: ListComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render: Story = {
  args: {
    tickets: MOCK_STORE,
    updateTicket: (ticketChanged: TicketInterface) => {},
    removeTicket: (id?: string) => {},
  },
};
