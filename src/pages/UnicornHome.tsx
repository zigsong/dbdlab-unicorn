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
      <UnicornText fontSize={13}>
        우리 제품/서비스의 사용자 경험 유형을 검사하고 우리가 어떤 유니콘인지 알아보세요.
      </UnicornText>
      <UnicornButton flex={4} width={215} height={60} borderRadius={30} fontSize={18} onClick={onStart}>
        다음
      </UnicornButton>
      <UnicornEmptyRow flex={4} />
    </UnicornFlexLayout>
  )
}

export default withRouter(UnicornHome)
