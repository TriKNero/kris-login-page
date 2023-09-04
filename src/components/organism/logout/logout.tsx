import React, {useEffect} from "react";
import {Card} from "@/components/molecules/card/card";
import Loader from "@/components/atoms/loader/loader";
import {ReactContext} from "@/app/page";


export default function Logout() {
  const {setUserInfo} = React.useContext(ReactContext)

  useEffect(() => {
    setTimeout(() => setUserInfo(null), 1000);
  }, [])

  return (
    <Card title='Logout'>
      <Loader loading/>
    </Card>
  )
}