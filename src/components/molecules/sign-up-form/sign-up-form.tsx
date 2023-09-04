import React, {useState, useEffect} from "react";
import debounce from 'lodash.debounce'

import {SimpleInput} from "@/components/atoms/simple-input/simple-input";
import {SimpleButton} from "@/components/atoms/simple-button/simple-button";
import {validateEmail, validatePassword, validateRepeatPassword} from "@/components/helper";
import {errorTypes, defaultDebounceTime, placeholders} from "@/components/constants";
import {ErrorHint} from "@/components/atoms/error-hint/error-hint";


interface SignUpFormProps {
  buttonText: string,
  onSubmit: (loginData: { email: string, password: string }) => Promise<void>
}

function SignUpForm({buttonText, onSubmit}: SignUpFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState({});


  const checkEmail = () => setErrors(validateEmail(errors, email))
  const checkPassword = () => setErrors(validatePassword(errors, password));
  const checkRepeatPassword = () => setErrors(validateRepeatPassword(errors, password, password2));

  useEffect(checkRepeatPassword, [password2, password]);
  useEffect(checkPassword, [password]);
  useEffect(checkEmail, [email]);

  const sendForm = async () => {
    try {
      await onSubmit({email, password})
    } catch (e) {
      console.log('error - ', e)
      setErrors({...errors, [errorTypes.server]: e.message})
    }
  }

  const disableButton = () => {
    return Object.values(errors).some(error => error) || !email || !password || !password2
  }

  const setEmailDebounced = debounce((e) => setEmail(e.target.value), defaultDebounceTime);
  const setPasswordDebounced = debounce((e) => setPassword(e.target.value), defaultDebounceTime)
  const setPassword2Debounced = debounce((e) => setPassword2(e.target.value), defaultDebounceTime)

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
      <SimpleInput
        labelText="Repeat password"
        type="password"
        onChange={setPassword2Debounced}
        errorText={errors[errorTypes.password2]}
        placeholder={placeholders.password}
      />
      <SimpleButton
        buttonText={buttonText}
        onClick={sendForm}
        disabled={disableButton()}
        type="submit"
      />
      <ErrorHint errorText={errors[errorTypes.server]}/>
    </>
  )
}

export {SignUpForm}
