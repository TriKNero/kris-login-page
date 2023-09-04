import React from "react";
import {Card} from "@/components/molecules/card/card";
import {Link} from 'react-router-dom';

export default function NotFound({isAuthenticated}: {isAuthenticated: boolean}) {

  const pageName = isAuthenticated ? 'home page' : 'login page'
  return (
      <Card title="Page not found">
        {`Look's like page that are you looking for not exists, please follow next link to go to the ${pageName}`}
        <Link to="/">{pageName}</Link>
      </Card>
  )
}
