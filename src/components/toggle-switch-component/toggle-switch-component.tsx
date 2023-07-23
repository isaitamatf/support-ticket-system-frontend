import React from "react";
import PropTypes from "prop-types";

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
const ToogleSwitchComponent: React.FC<Props> = ({
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

ToogleSwitchComponent.propTypes = {
  //status: PropTypes.string.isRequired,
  onChangeToggleSwitch: PropTypes.func.isRequired,
};

ToogleSwitchComponent.defaultProps = {
  status: "open",
  onChangeToggleSwitch: () => {},
};

export { ToogleSwitchComponent };
