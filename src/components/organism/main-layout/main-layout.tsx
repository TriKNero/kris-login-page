'use client'
import React from "react";
import './main-layout.css'
import '@/app/globals.css';

import {Inter} from 'next/font/google';


interface Props {
  children: React.ReactNode;
}

const inter = Inter({subsets: ['latin']})

const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <div className={`background ${inter.className}`}>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default MainLayout
