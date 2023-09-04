'use client';
import React, {useState} from "react";
import AuthorizeView from "@/components/molecules/authorize-form/authorize-view"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from "@/components/organism/not-found/not-found.tsx";
import {Navigate} from 'react-router-dom';
import MainPage from "@/components/organism/main-page/main-page";
import Logout from "@/components/organism/logout/logout";
import {routes} from "@/components/constants";

export const ReactContext = React.createContext({});


export default function Home() {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const setUserInfoHandler = (userInfo) => {
    console.log('userInfo', userInfo)
    if (userInfo) localStorage.setItem('userInfo', JSON.stringify(userInfo))
    else if (!userInfo) localStorage.removeItem('userInfo')
    setUserInfo(userInfo)
  }
  const isAuthenticated = Boolean(userInfo)
  console.log('userInfo', userInfo)
  console.log('isAuthenticated', isAuthenticated)
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
            exact
            path="/"
            element={isAuthenticated ? <MainPage/> : <Navigate to={routes.login}/>}
          />
          <Route path={routes.logout} element={isAuthenticated ? <Logout/> : <Navigate to={routes.login}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </ReactContext.Provider>
    </Router>
  )
}