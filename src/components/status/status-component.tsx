import React from "react";

type Props = {
  status: "green" | "yellow" | "red";
};

/**
 * @description Status component
 * @param {string} status
 * @returns {JSX}
 */
export const StatusComponent: React.FC<Props> = ({ status }) => {
  return (
    <div className={`sts-status ${status}`} data-testid="sts-status">
      <div className="sts-status-circle" />
    </div>
  );
};
