import React from "react";
import {Card} from "@/components/molecules/card/card";
import {Link} from 'react-router-dom';
import './not-found.css';

export default function NotFound({isAuthenticated}: { isAuthenticated: boolean }) {

  const pageName = isAuthenticated ? 'home page' : 'login page'
  return (
    <Card
      title="Page not found 404"
      customContentClass="notFound__container"
    >
      {`Look's like page that are you looking for not exists, please follow next link to go to the ${pageName}`}
      <p>
        <Link to="/">{` Go to the ${pageName}`}</Link>
      </p>
    </Card>
  )
}
