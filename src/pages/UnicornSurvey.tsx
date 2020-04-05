import React, { useState, useEffect } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import UnicornLayout from "../layouts/UnicornLayout";
import { UnicornText, UnicornEmptyRow,  UnicornRadio} from "../components";
import styled from "styled-components";
import { Progress } from 'antd';

function Survey(props: RouteChildrenProps) {
  const location = useLocation();
  const serviceName = new URLSearchParams(location.search).get("serviceName")
  const questions = [
    "1 번째 질문",
    "2 번째 질문",
    "3 번째 질문",
    "4 번째 질문",
    "5 번째 질문",
    "6 번째 질문",
    "7 번째 질문",
    "8 번째 질문",
    "9 번째 질문",
    "10 번째 질문",
    "11 번째 질문",
    "12 번째 질문",
    "13 번째 질문",
    "14 번째 질문",
    "15 번째 질문",
  ]

  const [answered, setAnswered] = useState((new Array(questions.length)).fill(false))
  const [progressRate, setProgressRate] = useState(0);

  const onAnswer = (index: number) => {
    if (answered[index]) return;
    const newAnswered = [...answered]
    newAnswered[index] = true;
    setAnswered(newAnswered);
  }

  useEffect(() => {
    setProgressRate(Math.round(100 * answered.filter(a => a).length / answered.length ))
  }, [answered])

  return (
    <UnicornLayout>
      <UnicornEmptyRow flex={4} />
      <UnicornEmptyRow flex={1} />
      <Progress strokeColor="#aacfcf" percent={progressRate} status="active" style={{ margin: '10px 0 20px 0'}}/>
      <div style={{ overflow: 'scroll' }}>
        {questions.map((question, i) => (
          <UnicornRadio onChecked={() => onAnswer(i)} key={`radio_${i}`}>{ question }</UnicornRadio>
        ))}
      </div>
      <UnicornEmptyRow flex={4} />
    </UnicornLayout>
  )
}

export default withRouter(Survey)
