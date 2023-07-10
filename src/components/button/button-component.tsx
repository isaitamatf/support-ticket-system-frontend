import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  text: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ButtonComponent: React.FC<Props> = ({text, onClick}) => {
  return (
    <div className="sts-button">
      <button onClick={onClick}>
        <span>{text}</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}