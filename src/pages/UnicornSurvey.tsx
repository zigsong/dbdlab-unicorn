import React, { useState } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import UnicornLayout from "../layouts/UnicornLayout";
import { UnicornText, UnicornEmptyRow,  UnicornRadio} from "../components";
import styled from "styled-components";
import { Progress } from 'antd';

function Survey(props: RouteChildrenProps) {
  const location = useLocation();
  const serviceName = new URLSearchParams(location.search).get("serviceName")
  const onStart = () => {
    const { history } = props;
    history.push("/entry");
  }
  const [progressRate, setProgressRate] = useState(0);

  return (
    <UnicornLayout>
      <UnicornEmptyRow flex={4} />
      <UnicornEmptyRow flex={1} />
      <Progress strokeColor="#aacfcf" percent={progressRate} status="active" style={{ margin: '10px 0 20px 0'}}/>
      <div style={{ overflow: 'scroll' }}>
        <UnicornRadio>첫 번째 질문</UnicornRadio>
        <UnicornRadio>두 번째 질문</UnicornRadio>
        <UnicornRadio>세 번째 질문</UnicornRadio>
        <UnicornRadio>네 번째 질문</UnicornRadio>
        <UnicornRadio>다섯 번째 질문</UnicornRadio>
        <UnicornRadio>여섯 번째 질문</UnicornRadio>
      </div>
      <UnicornEmptyRow flex={4} />
    </UnicornLayout>
  )
}

export default withRouter(Survey)
