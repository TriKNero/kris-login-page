import React from "react";
import {Card} from "@/components/molecules/card/card";
import './not-found.css';
import Image from "next/image";

export default function Custom404() {
  return (
    <Card
      title="Page not found 404"
      customContentClass="notFound__container"
    >
      {`Look's like page that are you looking for not exists, please follow next link to go to the home page`}
      <div className="notFound__imageContainer">
        <Image
          width={200}
          height={200}
          src="./404-error.png"
          alt=""
        />
      </div>
      <p className="notFound__linkContainer">
        <a className="link" href="https://kristiankorneev.github.io/kris-login-page/">{` Go to the home page`}</a>
      </p>

    </Card>
  )
}
