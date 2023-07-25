import type { Meta, StoryObj } from "@storybook/react";

import { ToogleSwitchComponent } from "../../components";
import "../../App.scss";

const meta = {
  title: "Components/Toogle Switch",
  component: ToogleSwitchComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ToogleSwitchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render: Story = {
  args: {
    status: "open",
    onChangeToggleSwitch: () => {},
  },
};
