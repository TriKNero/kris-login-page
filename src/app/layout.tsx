'use client';

import React from 'react';
import dynamic from 'next/dynamic'

const MainLayout = dynamic(
  () => import('@/components/organism/main-layout/main-layout'),
  { ssr: false }
)

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
    <body>
    <MainLayout>
      {children}
    </MainLayout>
    </body>
    </html>
  )
}
