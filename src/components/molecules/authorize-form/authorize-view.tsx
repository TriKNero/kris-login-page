'use client'
import './authorize-view.css';

import React, {useState, useMemo, useContext} from "react";
import {Card} from "@/components/molecules/card/card";
import {Link} from "@/components/atoms/link/link";
import {LoginForm} from "@/components/molecules/login-form/login-form";
import {SignUpForm} from "@/components/molecules/sign-up-form/sign-up-form";
import {apiEndpoints, formsKeys, serverProblem, title} from "@/components/constants";
import {initCustomFetch} from "@/components/helper";
import Loader from "@/components/atoms/loader/loader";

import {ReactContext} from "@/app/page";

function AuthorizeView() {
  const [formType, setFormType] = useState(formsKeys.login)
  const [loading, setLoading] = useState(false)
  const {setUserInfo} = useContext(ReactContext)
  useMemo(initCustomFetch, [])

  const switchToSingUp = (e) => {
    e.preventDefault();
    setFormType(formsKeys.signUp)
  }

  const switchToLogIn = (e) => {
    e.preventDefault();
    setFormType(formsKeys.login)
  }

  const sendLoginForm = async ({email, password}) => {
    try {
      setLoading(true)
      const response = await fetch(apiEndpoints.login, {method: 'POST', body: JSON.stringify({email, password})})
      setLoading(false)
      if (!response.ok) throw new Error(serverProblem);
      const data = await response.json();
      setUserInfo(data);
    } catch (e) {
      setLoading(false)
      console.log('[Error] sendLoginForm', e.message);
    }
  }

  const sendSignUpForm = async ({email, password}) => {
    try {
      setLoading(true)
      const response = await fetch(apiEndpoints.signUp, {method: 'POST', body: JSON.stringify({email, password})})
      setLoading(false)
      if (!response.ok) throw new Error(serverProblem);
      const data = await response.json();
      setUserInfo(data);
    } catch (e) {
      setLoading(false)
      console.log('[Error] sendSignUpForm', e.message);
    }
  }


  const renderSwitchToAnotherFormText = ({isSignUp, isLogin}) => {
    return (
      <div className="loginForm-switchToAnotherFormText">
        {isLogin && <>Don't have an account? <p><Link onClick={switchToSingUp}>Sign up now!</Link></p></>}
        {isSignUp && <>Already have an account? <p><Link onClick={switchToLogIn}>Log in</Link></p></>}
      </div>
    )
  }

  const renderLoading = () => {
    return (
      <Card
        title="Loading..."
        customContainerClass="authorizeForm__form"
      >
        <Loader loading={loading}/>
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