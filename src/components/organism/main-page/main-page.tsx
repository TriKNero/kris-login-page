import React from "react";
import {Link} from 'react-router-dom';

import {Card} from "@/components/molecules/card/card";
import {routes} from "@/components/constants";
import './main-page.css'

export default function MainPage() {
  return (
    <Card
      title="You successfully logged in"
      customContainerClass='mainPage__container'
    >

      <img
        style={{width: "200px", height: "200px", borderRadius: "100%"}}
        src="photo-min.jpg"
        alt=""
      />


      <div style={{marginTop: "40px"}}>
        Did you enjoy this form?{' \n'}
        Let's get in touch in {' '}
        <a href="https://www.linkedin.com/in/kristian-korneev-920b34121/" target="_blank">{' '}LinkedIn</a>
      </div>
      <div><Link to={routes.logout}>Logout</Link></div>
    </Card>
  )
}