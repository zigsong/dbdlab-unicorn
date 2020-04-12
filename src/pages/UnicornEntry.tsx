import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import greycorn from "../assets/img_greycorn.png";

function UnicornHome(props: RouteChildrenProps) {
  const [serviceName, setServiceName] = useState("");

  const UnicornText = styled.text`
    &.label {
      font-family: 'NanumSquare Bold';
      font-size: 15px;
      text-align: center;
      width: 193px;
      height: 44px;
      margin-top: 182px;
      margin-bottom: 20px;
    }
    &.guide {
      font-family: 'NanumSquare Regular';
      font-size: 12px;
      position: absolute;
      width: 216px;
      height: 36px;
      bottom: 57px;
    }
  `
  
  const UnicornInput = styled.input`
    width: 270px;
    height: 53px;
    text-align: center;
    font-size: 15px;
    font-family: 'NanumSquare Regular';
    border: solid 1px #c7c8f3;
    margin-bottom: 25px;
  `

  const UnicornButton = styled.button`
    width: 270px;
    height: 54px;
    display: inline-block;
    position: relative;
    background-color: #7986cb;
    font-family: 'NanumSquare Bold';
    color: #ffffff;
  `

  const GreyCorn = styled.img`
    width: 230px;
    height: 281px;
    position: absolute;
    left: 0px;
    bottom: 0px;
  `

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(e.key === "Enter"){
      onNext();
    }
  }

  const onNext = () => {
    const { history } = props;
    history.push({
      pathname: '/survey',
      search: "?" + new URLSearchParams({ serviceName: serviceName ? serviceName : "Whonicorn" }).toString()
    })
  }

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <UnicornText className="label">검사하고 싶은<br />제품/서비스명을 입력해주세요.</UnicornText>
        <UnicornInput onChange={e => setServiceName(e.target.value)} value={serviceName} onKeyPress={handleEnter} />
        <UnicornButton onClick={onNext}>다음</UnicornButton>
        <GreyCorn src={greycorn} alt="greycorn" />
        <UnicornText className="guide">
          ※ 검사는 총 14문항 입니다. (약 5분 소요)
          ※ 가능하면 답변 시 ‘중립’을 피해주세요.
        </UnicornText>
      </div>
  )
}

export default withRouter(UnicornHome)
