import React from "react";

type Props = {
  status: "open" | "closed";
  onChangeToggleSwitch: () => void;
};

export const ToogleSwitchComponent: React.FC<Props> = ({
  status,
  onChangeToggleSwitch,
}) => {
  return (
    <div className="sts-toggle-switch" onClick={onChangeToggleSwitch}>
      <input type="checkbox" checked={status === "open" ? true : false} />
      <span className="sts-slider" />
    </div>
  );
};