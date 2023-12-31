import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type ButtonComponentProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  showIcon?: boolean;
  disabled?: boolean;
};

/**
 * @description Button component
 * @param {string} text
 * @param {Function} onClick
 * @param {boolean} showIcon
 * @param {boolean} disabled
 * @returns {JSX}
 */
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  onClick,
  showIcon,
  disabled,
}) => {
  return (
    <div className="sts-button" data-testid="sts-button">
      <button onClick={onClick} disabled={disabled}>
        <span>{text}</span>
        {showIcon ? (
          <FontAwesomeIcon icon={faArrowRight} data-testid="sts-button-icon" />
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  showIcon: PropTypes.bool,
  disabled: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  text: "",
  onClick: () => {},
  showIcon: false,
  disabled: false,
};

export { ButtonComponent };
