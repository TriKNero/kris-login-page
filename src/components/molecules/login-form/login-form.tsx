'use client'
import React, {useEffect, useState} from "react";
import debounce from 'lodash.debounce'

import {SimpleInput} from "@/components/atoms/simple-input/simple-input";
import {SimpleButton} from "@/components/atoms/simple-button/simple-button";
import {validateEmail, validatePassword} from "@/components/helper";
import {ErrorHint} from "@/components/atoms/error-hint/error-hint";

import {errorTypes, defaultDebounceTime, placeholders} from "@/components/constants";

interface LoginFormProps {
  buttonText: string,
  onSubmit: (loginData: { email: string, password: string }) => Promise<void>
}

function LoginForm({buttonText, onSubmit}: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({});

  const checkLogin = () => setErrors(validateEmail(errors, email));
  const checkPassword = () => setErrors(validatePassword(errors, password));

  useEffect(checkLogin, [email]);
  useEffect(checkPassword, [password]);

  const sendForm = async () => {
    try {
      await onSubmit({email, password})
    } catch (e) {
      setErrors({...errors, [errorTypes.server]: e.message})
    }
  }

  const setEmailDebounced = debounce((e) => setEmail(e.target.value), defaultDebounceTime);
  const setPasswordDebounced = debounce((e) => setPassword(e.target.value), defaultDebounceTime);
  const disabled = Object.values(errors).some(error => error) || !email || !password;
  return (
    <>
      <SimpleInput
        labelText="Email"
        onChange={setEmailDebounced}
        errorText={errors[errorTypes.email]}
        placeholder={placeholders.email}
      />
      <SimpleInput
        labelText="Password"
        type="password"
        onChange={setPasswordDebounced}
        errorText={errors[errorTypes.password]}
        placeholder={placeholders.password}
      />
      <SimpleButton
        buttonText={buttonText}
        onClick={sendForm}
        disabled={disabled}
        type="submit"
      />
      <ErrorHint errorText={errors[errorTypes.server]}/>
    </>
  )
}

export {LoginForm}