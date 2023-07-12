import React from "react";

type Props = {
  status: "open" | "closed";
  onChangeToggleSwitch: () => void;
};

/**
 * @description Toggle switch component
 * @param {string} status
 * @param {Function} onChangeToggleSwitch
 * @returns {JSX}
 */
export const ToogleSwitchComponent: React.FC<Props> = ({
  status,
  onChangeToggleSwitch,
}) => {
  return (
    <div
      className="sts-toggle-switch"
      data-testid="sts-toggle-switch"
      onClick={onChangeToggleSwitch}
    >
      <input
        type="checkbox"
        checked={status === "open" ? true : false}
        onChange={() => {}}
      />
      <span className="sts-slider" />
    </div>
  );
};
