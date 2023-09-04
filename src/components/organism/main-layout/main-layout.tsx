'use client'
import React from "react";
import './main-layout.css'


interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <div className="background">
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default MainLayout
