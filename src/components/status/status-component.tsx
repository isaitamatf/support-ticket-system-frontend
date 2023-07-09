import React from "react";

type Props = {
  status: "green" | "yellow" | "red"
}

export const StatusComponent: React.FC<Props> = ({status}) => {
  return <div className={`sts-status ${status}`}>
    <div className="sts-status-circle" />
  </div>;
}