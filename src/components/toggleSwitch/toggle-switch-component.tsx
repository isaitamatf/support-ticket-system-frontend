import React from "react";

type Props = {
  status: boolean
}

export const ToogleSwitchComponent: React.FC<Props> = ({status}) => {
  return (
    <div className="sts-toggle-switch">
      <input type="checkbox" checked={status} />
      <span className="sts-slider" />
    </div>
  );
}