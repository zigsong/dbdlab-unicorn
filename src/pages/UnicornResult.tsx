import React from "react";
import { withRouter, RouteChildrenProps } from 'react-router-dom';

import UnicornFlexLayout from "../layouts/UnicornFlexLayout";
import { UnicornText, UnicornButton, UnicornEmptyRow } from "../components";

function UnicornHome(props: RouteChildrenProps) {
  const onStart = () => {
    const { history } = props;
    history.push("/entry");
  }

  return (
    <UnicornFlexLayout>
      <UnicornEmptyRow flex={4} />
      <UnicornText fontSize={55}>Whonicorn</UnicornText>
      <UnicornText fontSize={25}>우리는 어떤 유니콘일까?</UnicornText>
      <UnicornEmptyRow flex={1} />
      <UnicornEmptyRow flex={4} />
    </UnicornFlexLayout>
  )
}

export default withRouter(UnicornHome)
