import React, { useState, useEffect } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import UnicornLayout from "../layouts/UnicornLayout";
import { UnicornText, UnicornEmptyRow,  UnicornRadio, UnicornButton } from "../components";
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

  const goResult = () => {
    const { history } = props;
    history.push({
      pathname: '/result',
      search: "?" + new URLSearchParams({ serviceName: serviceName ? serviceName : "Whonicorn" }).toString()
    })
  }

  useEffect(() => {
    setProgressRate(Math.round(100 * answered.filter(a => a).length / answered.length ))
  }, [answered]);

  useEffect(() => {
    console.log(serviceName);
  });

  const NextButton = styled.button`
    background-color: #aacfcf;
    align-self: center;
    width: 320px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    color: white;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;

  `

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
      <NextButton onClick={goResult}>검사 결과 보기</NextButton>
      <UnicornEmptyRow flex={4} />
    </UnicornLayout>
  )
}

export default withRouter(Survey)
