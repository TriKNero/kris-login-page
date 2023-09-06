'use client'
import React from "react"
import {SimpleInputLabel} from "./simple-input-label"
import "./simple-input.css"
import {ErrorHint} from "@/components/atoms/error-hint/error-hint";


interface ISimpleInput {
  labelText: string,
  type?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  errorText?: string,
  placeholder?: string,
  otherProps?: any,
  id?: string
}

function SimpleInput(
  {
    labelText,
    type = "text",
    errorText,
    id,
    ...otherProps
  }: ISimpleInput) {
  const inputClasses = errorText ? `simpleInput__input-error` : "simpleInput__input"
  return (
    <>
      <SimpleInputLabel labelText={labelText}/>
      <input {...otherProps} id={id} className={inputClasses}/>
      <ErrorHint errorText={errorText} id={`error-${id}`}/>
    </>
  )
}

export {SimpleInput};