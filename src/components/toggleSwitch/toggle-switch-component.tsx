import React from "react";

type Props = {
  status: "open" | "closed"
}

export const ToogleSwitchComponent: React.FC<Props> = ({status}) => {
  return (
    <div className="sts-toggle-switch">
      <input type="checkbox" checked={status === "open" ? true : false} />
      <span className="sts-slider" />
    </div>
  );
}