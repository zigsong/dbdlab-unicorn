import React, { useState, useEffect } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import UnicornLayout from "../layouts/UnicornLayout";
import { Button } from "antd"
import { UnicornRadio } from "../components";
import styled from "styled-components";
import { Progress } from 'antd';
import WhonicornLogo from "../assets/img_loading2.png";

const hasJong = (s: string) => {
  const str: number = s.charCodeAt(s.length - 1);
  return (str - 0xac00) % 28 > 0;
}

const getJosa = (name: string | null, type: string) => {
  // 은/는
  // 을/를
  // 이/가
  // 과/와
  if (!name) {
    return type
  }
  if (hasJong(name)) {
    return type.split('/')[0]
  } else { 
    return type.split('/')[1]
  }
}

const UnicornText = styled.p`
  font-family: 'NanumSquare Regular';
  font-size: 12px;
  line-height: 18px;
`

const UnicornProgress = styled(Progress)`
  display: block;
  position: fixed;
  top: 0;

  .ant-progress-outer {
    display:block;
  }
  .ant-progress-inner {
    display: block;
    border-radius: 0;
    background: #d8d8d8;
    max-width: 600px;
  }
`;

const UnicornButton = styled(Button)`
  width: 270px;
  height: 54px;
  display: inline-block;
  position: relative;
  background-color: #7986cb;
  border-color: #7986cb;
  font-family: 'NanumSquare Bold';
  color: #ffffff;
  border-radius: 0px;
  
  &:hover {
    border-color: #7986cb;
    color: #7986cb;
    background-color: #ffffff;
  }

  &.ant-btn[disabled] {
    background-color: #cacaca;
  }
`

const DottedLine = styled.div`
  background-image: linear-gradient(to right, #cacaca 70%, rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 6px 1px;
  background-repeat: repeat-x;
  height: 1px;
`;


const getQuestions = (serviceName: string) => ([
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '은/는')} 전반적으로`],
    answers: ['즐길 수 있다', '생산적으로 느낀다'],
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '은/는')} 전반적으로`],
    answers: ['재미를 느낄 수 있다', '도움이 된다']
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '은/는')} 전반적으로`],
    answers: ['즐겁게 해준다', '실용적이다']
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '을/를')}`, "개발 및 운영할 때, 사용자의 의견은"],
    answers: ['거의 반영하지 않는다', '적극적으로 반영한다']
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '은/는')} 현재`],
    answers: ['성과지표를 개선하기 위해 사용자 경험을 연구해야한다', '만족스러운 지표를 내고 있어 서비스 확장을 고려하고 있다']
  },
  {
    title: [`사용자들은 [${serviceName}] ${getJosa(serviceName, '이/가')}`, "마음에 들지 않을 때, 대체로"],
    answers: ['불만족한다', '분노한다']
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '을/를')} 통해`, "좋은 경험을 얻기에 가장 중요한 것은"],
    answers: ['사용자의 적극적인 행동이다', `[${serviceName}] 의 능력이다`]
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '을/를')} 경험하는 것은`],
    answers: ['전적으로 사용자에게 달려있다', `전적으로 [${serviceName}] 에게 달려있다`]
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '을/를')} 통해 `, "좋은 경험을 얻었을 때, 그 이유는"],
    answers: ['사용자가 그 경험을 추구했기 때문이다', `[${serviceName}] ${getJosa(serviceName, '이/가')} 그 경험을 제공했기 때문이다`]
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '은/는')} 전반적으로`],
    answers: ['사용자의 제어가 없다면 제품/서비스가 주는 경험을 할 수 없다', '사용자의 제어가 적어도 제품/서비스가 주는 경험을 할 수 있다']
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '은/는')} 전반적으로`],
    answers: ['사용자의 개입을 많이 필요로 한다', '사용자의 개입을 최소화한다']
  },
  {
    title: [`[${serviceName}] ${getJosa(serviceName, '은/는')} 전반적으로`],
    answers: ['사용자의 의사결정 없이는 작동하지 않는다', '사용자의 의사결정이 없어도 작동한다']
  },
]);

function Survey(props: RouteChildrenProps) {
  const location = useLocation();
  const serviceName = decodeURIComponent(atob(new URLSearchParams(location.search).get("sn") ?? ""))
  const questions = getQuestions(serviceName ?? "귀하의 서비스");

  const [answered, setAnswered] = useState((new Array(questions.length)).fill(false))
  const [progressRate, setProgressRate] = useState(0);

  const onAnswer = (index: number, checked: string) => {
    if (answered[index] === checked) return;
    const newAnswered = [...answered]
    newAnswered[index] = checked;
    console.log(newAnswered);
    setAnswered(newAnswered);
  }

  const goResult = () => {
    const { history } = props;
    const userAnswer = answered.join("") ?? "AAAAAAAAAA"

    history.push({
      pathname: '/test_loading',
      search: "?" + new URLSearchParams({
        sn: btoa(encodeURIComponent(serviceName ?? "후니콘")),
        ua: btoa(encodeURIComponent(userAnswer))
      }).toString()
    })
  }

  useEffect(() => {
    setProgressRate(Math.round(100 * answered.filter(a => a).length / answered.length ))
  }, [answered]);

  return (
    <UnicornLayout>
      <UnicornProgress
        strokeColor="#7986cb" percent={progressRate} status="active"
        showInfo={false} strokeLinecap="square" strokeWidth={12}
      />

      <div style={{ padding: "40px 33px 0" }} >
        <div><img src={WhonicornLogo} alt="greycorn" width="140px" height="30px" /></div>
        <UnicornText className="guide" style={{ width: '100%', paddingTop: '18px' }}>
          ※ 검사는 총 {questions.length} 문항 입니다. (약 5분 소요)<br />
          ※ 가능하면 답변 시 ‘중립’을 피해주세요.
        </UnicornText>
      </div>

      <div style={{ margin: "30px 16px 0", height: "2px", border: "solid 1px #c7c8f3" }}></div>
      
      <div style={{ padding: "0 21px" }}>
        {questions.map((question, i) => (
          <div key={`radio_${i}`} >
            <UnicornRadio onChecked={(checked) => onAnswer(i, checked)} data={question} >
              { question.title.map((q, j) => (<p key={`sel_${j}`}>{ (j === 0 ? `${i + 1}. ` : '') + q}</p>)) }
            </UnicornRadio>
            { i !== questions.length - 1 && (<DottedLine></DottedLine>)}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", "width": "100%", "margin": "10px auto", "padding": "50px 0 100px"}}>
        <UnicornButton onClick={goResult} disabled={progressRate !== 100}>검사 결과 보기</UnicornButton>
      </div>
      <div></div>
    </UnicornLayout>
  )
}

export default withRouter(Survey)
