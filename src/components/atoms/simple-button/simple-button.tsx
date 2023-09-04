
'use client'

import React, { useRef } from "react";
import "./simple-button.css";

interface ISimpleButton {
  buttonText: string;
}

function SimpleButton({ buttonText, ...others }: ISimpleButton) {

  return (
    <button
      className="simple-button"
      {...others}
    >
      {buttonText}
    </button>
  )
}


export { SimpleButton }