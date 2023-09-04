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
}

function SimpleInput(
  {
    labelText,
    type = "text",
    onChange,
    errorText,
    ...otherProps
  }: ISimpleInput) {
  const inputClasses = errorText ? `simpleInput__input-error`: "simpleInput__input"
  return (
    <>
      <SimpleInputLabel labelText={labelText}/>
      <input onChange={onChange} {...otherProps} className={inputClasses} type={type}/>
      <ErrorHint errorText={errorText}/>
    </>
  )
}

export {SimpleInput};