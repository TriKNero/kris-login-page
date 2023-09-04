'use client'
import './authorize-view.css';

import React, {useState, useMemo, useContext, SetStateAction} from "react";
import {Card} from "@/components/molecules/card/card";
import {LoginForm} from "@/components/molecules/login-form/login-form";
import {SignUpForm} from "@/components/molecules/sign-up-form/sign-up-form";
import {apiEndpoints, formKeysType, formsKeys, serverProblem, title} from "@/components/constants";
import {initCustomFetch} from "@/components/helper";
import Loader from "@/components/atoms/loader/loader";

import {ReactContext} from "@/app/context";

type authFields = {
  email: string,
  password: string
}

function AuthorizeView() {
  const [formType, setFormType] = useState(formsKeys.login as "login" | "signUp");
  const [loading, setLoading] = useState(false)
  const {setUserInfo} = useContext(ReactContext)
  useMemo(initCustomFetch, [])

  const switchToSingUp = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFormType(formsKeys.signUp)
  }

  const switchToLogIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFormType(formsKeys.login)
  }

  const sendLoginForm = async ({email, password}: authFields) => {
    try {
      setLoading(true)
      const response = await fetch(apiEndpoints.login, {method: 'POST', body: JSON.stringify({email, password})})
      setLoading(false)
      if (!response.ok) throw new Error(serverProblem);
      const data = await response.json();
      setUserInfo(data);
    } catch (e: any) {
      setLoading(false)
      console.log('[Error] sendLoginForm', e.message);
    }
  }

  const sendSignUpForm = async ({email, password}: authFields) => {
    try {
      setLoading(true)
      const response = await fetch(apiEndpoints.signUp, {method: 'POST', body: JSON.stringify({email, password})})
      setLoading(false)
      if (!response.ok) throw new Error(serverProblem);
      const data = await response.json();
      setUserInfo(data);
    } catch (e: any) {
      setLoading(false)
      console.log('[Error] sendSignUpForm', e.message);
    }
  }


  const renderSwitchToAnotherFormText = ({isSignUp, isLogin}: { isSignUp: boolean, isLogin: boolean }) => {
    return (
      <div className="loginForm-switchToAnotherFormText">
        {isLogin && <>{`Don't have an account? `}<p><a onClick={switchToSingUp}>Sign up now!</a></p></>}
        {isSignUp && <>Already have an account? <p><a onClick={switchToLogIn}>Log in</a></p></>}
      </div>
    )
  }

  const renderLoading = () => {
    return (
      <Card customContainerClass="authorizeForm__form">
        <Loader loading title='Loading...'/>
      </Card>
    )
  }

  const isLogin = formType === formsKeys.login;
  const isSignUp = formType === formsKeys.signUp;
  if (loading) return renderLoading();
  return (
    <Card
      title={title[formType]}
      customContainerClass="authorizeForm__form"
    >
      {isLogin && <LoginForm buttonText={title.login} onSubmit={sendLoginForm}/>}
      {isSignUp && <SignUpForm buttonText={title.signUp} onSubmit={sendSignUpForm}/>}
      {renderSwitchToAnotherFormText({isLogin, isSignUp})}
    </Card>
  )
};

export default AuthorizeView