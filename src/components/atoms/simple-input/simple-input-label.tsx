'use client'
import "./simple-input.css";

interface ISimpleInputLabel {
  labelText: string
}

function SimpleInputLabel({labelText}: ISimpleInputLabel) {
  return (
    <label className="simpleInput__label">
      {labelText}
    </label>
  )
}

export {SimpleInputLabel}