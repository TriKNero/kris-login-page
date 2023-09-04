import React from "react";
import {Link} from 'react-router-dom';

import {Card} from "@/components/molecules/card/card";
import {routes} from "@/components/constants";
import './main-page.css'
import Image from "next/image";

export default function MainPage() {

  return (
    <Card
      title="You successfully logged in"
      customContainerClass='mainPage__container'
    >

      <Image
        width={200}
        height={200}
        style={{borderRadius: "100%"}}
        src="/photo-min.jpg"
        alt=""
      />


      <div style={{marginTop: "40px"}}>
        {`Did you enjoy this form? Let's get in touch in `}
        <a href="https://www.linkedin.com/in/kristian-korneev-920b34121/" target="_blank">LinkedIn</a>
      </div>
      <div><Link to={routes.logout}>Logout</Link></div>
    </Card>
  )
}