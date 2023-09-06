'use client'

import React, {useRef} from "react";
import "./simple-button.css";

interface ISimpleButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  id?: string;
}

function SimpleButton({buttonText, ...others}: ISimpleButton) {

  return (
    <button
      className="simple-button"
      {...others}
    >
      {buttonText}
    </button>
  )
}


export {SimpleButton}