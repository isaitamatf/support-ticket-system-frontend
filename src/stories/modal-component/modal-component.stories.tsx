import type { Meta, StoryObj } from "@storybook/react";

import { ModalComponent } from "../../components";
import { TicketInterface } from "../../interfaces";
import "../../App.scss";

const meta = {
  title: "Components/Modal",
  component: ModalComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render: Story = {
  args: {
    onClickButtonClose: () => {},
    createTicket: (newTicket: TicketInterface) => {},
  },
};
