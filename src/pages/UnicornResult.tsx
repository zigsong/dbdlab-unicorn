import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import UnicornFlexLayout from "../layouts/UnicornFlexLayout";
import { UnicornText, UnicornButton, UnicornEmptyRow } from "../components";
import { Spin } from 'antd';


function UnicornHome(props: RouteChildrenProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const onStart = () => {
    const { history } = props;
    history.push("/entry");
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000)
  });
  
  return (
    <UnicornFlexLayout>
      <UnicornEmptyRow flex={4} />
      {/* <UnicornText fontSize={55}>Whonicorn</UnicornText> */}
      { isLoaded ? 
        <UnicornText fontSize={25}>우리는 어떤 유니콘일까?</UnicornText>
        : <Spin size="large" />
      }
      <UnicornEmptyRow flex={1} />
      <UnicornEmptyRow flex={4} />
    </UnicornFlexLayout>
  )
  


}

export default withRouter(UnicornHome)
