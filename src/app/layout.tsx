'use client';

import './globals.css';
import React from 'react';
import {Inter} from 'next/font/google';
import MainLayout from "@/components/organism/main-layout/main-layout";

const inter = Inter({subsets: ['latin']})

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {

  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content="#000000"/>
      <title>Login page by Kristian Korneev</title>
      <meta name="description" content="Web site created using create-react-app"/>
    </head>
    <body className={inter.className}>
    <MainLayout>
      {children}
    </MainLayout>
    </body>
    </html>
  )
}
