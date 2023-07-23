import React from "react";
import PropTypes from "prop-types";

type Props = {
  status: "green" | "yellow" | "red";
};

/**
 * @description Status component
 * @param {string} status
 * @returns {JSX}
 */
const StatusComponent: React.FC<Props> = ({ status }) => {
  return (
    <div className={`sts-status ${status}`} data-testid="sts-status">
      <div className="sts-status-circle" />
    </div>
  );
};

StatusComponent.propTypes = {
  //status: PropTypes.oneOf(["green", "yellow", "red"]).isRequired
};

StatusComponent.defaultProps = {
  status: "green",
};

export { StatusComponent };
