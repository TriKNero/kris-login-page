'use client';
import React, {useState} from "react";
import AuthorizeView from "@/components/molecules/authorize-form/authorize-view"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from "@/components/organism/not-found/not-found";
import {Navigate} from 'react-router-dom';
import MainPage from "@/components/organism/main-page/main-page";
import Logout from "@/components/organism/logout/logout";
import {routes} from "@/components/constants";
import {ReactContext} from "@/app/context";


export default function Home() {
  const currentUserInfo = global?.localStorage?.getItem('userInfo') || '';
  const defaultUserInfo = currentUserInfo ? JSON.parse(currentUserInfo) : null
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const setUserInfoHandler = (userInfo: { userName: string } | null) => {
    if (userInfo) localStorage.setItem('userInfo', JSON.stringify(userInfo))
    else if (!userInfo) localStorage.removeItem('userInfo')
    setUserInfo(userInfo)
  }
  const isAuthenticated = Boolean(userInfo)
  return (
    <Router>
      <ReactContext.Provider
        value={{
          userInfo,
          setUserInfo: setUserInfoHandler
        }}
      >
        <Routes>
          <Route
            path={routes.login}
            element={isAuthenticated ? <Navigate to="/"/> : <AuthorizeView/>}
          />
          <Route
            path="/"
            element={isAuthenticated ? <MainPage/> : <Navigate to={routes.login}/>}
          />
          <Route path={routes.logout} element={isAuthenticated ? <Logout/> : <Navigate to={routes.login}/>}/>
          <Route path="*" element={<NotFound isAuthenticated={isAuthenticated}/>}/>
        </Routes>
      </ReactContext.Provider>
    </Router>
  )
}