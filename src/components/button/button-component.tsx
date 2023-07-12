import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
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
export const ButtonComponent: React.FC<Props> = ({
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
