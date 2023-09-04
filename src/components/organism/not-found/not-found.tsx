import React from "react";
import {Card} from "@/components/molecules/card/card";
import './not-found.css';
import Link from 'next/link'

export default function Custom404() {
  return (
    <Card
      title="Page not found 404"
      customContentClass="notFound__container"
    >
      {`Look's like page that are you looking for not exists, please follow next link to go to the home page`}
      <p>
        <Link href="/">{` Go to the home page`}</Link>
      </p>
    </Card>
  )
}
