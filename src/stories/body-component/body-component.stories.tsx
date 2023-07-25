import type { Meta, StoryObj } from "@storybook/react";

import { BodyComponent } from "../../components";
import { MOCK_STORE } from "../../constants";
import { TicketInterface } from "../../interfaces";
import "../../App.scss";

const meta = {
  title: "Components/Body",
  component: BodyComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BodyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render: Story = {
  args: {
    tickets: MOCK_STORE,
    updateTicket: (ticketChanged: TicketInterface) => {},
    createTicket: (newTicket: TicketInterface) => {},
    removeTicket: (id?: string) => {},
    onClickCreateNew: () => {},
  },
};
