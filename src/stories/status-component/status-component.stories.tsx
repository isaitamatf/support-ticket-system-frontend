import type { Meta, StoryObj } from "@storybook/react";

import { StatusComponent } from "../../components";
import "../../App.scss";

const meta = {
  title: "Components/Status",
  component: StatusComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StatusComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render: Story = {
  args: {
    status: "green",
  },
};
