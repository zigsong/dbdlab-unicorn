import React, { useState } from "react";
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import styled from "styled-components";

import { Button, Input } from "antd"
import UnicornLayout from '../layouts/UnicornLayout';

import greycorn from "../assets/img_greycorn.png";

const UnicornText = styled.span`
  &.label {
    font-family: 'NanumSquare Bold';
    font-size: 15px;
    text-align: center;
    width: 300px;
    height: 44px;
    margin-top: 182px;
    margin-bottom: 20px;
  }
  &.guide {
    font-family: 'NanumSquare Regular';
    font-size: 12px;
    position: absolute;
    width: 300px;
    height: 36px;
    bottom: 57px;
  }
`

const UnicornInput = styled(Input)`
  width: 270px;
  height: 53px;
  text-align: center;
  font-size: 15px;
  font-family: 'NanumSquare Regular';
  border: solid 1px #c7c8f3;
  margin-bottom: 25px;
`

const UnicornButton = styled(Button)`
  width: 270px;
  height: 54px;
  display: inline-block;
  position: relative;
  background-color: #7986cb;
  font-family: 'NanumSquare Bold';
  color: #ffffff;
  
  &:hover {
    border-color: #7986cb;
    color: #7986cb;
    background-color: #ffffff;
  }

  &.ant-btn[disabled] {
    background-color: #cacaca;
  }
`

const GreyCorn = styled.img`
  width: 230px;
  height: 281px;
  position: absolute;
  left: 0px;
  bottom: 0px;
`

function UnicornHome(props: RouteChildrenProps) {
  const [serviceName, setServiceName] = useState("");

  /* 
    - 한글자 이상
    - 빈칸만 있으면 '다음'버튼 비활성화
    - 20자 이내
    - 영문 국문 모두 가능
    - 특수문자, 숫자 모두 가능
  */

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      e.preventDefault();
      onNext();
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setServiceName(value);
  };
  
  const onNext = () => {
    const { history } = props;
    history.push({
      pathname: '/survey',
      search: "?" + new URLSearchParams({
        sn: btoa(encodeURIComponent(serviceName ? serviceName : "Whonicorn"))
      }).toString()
    })
  }

  return (
    <UnicornLayout>
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
          <UnicornText className="label">검사하고 싶은<br />제품/서비스명을 입력해주세요.</UnicornText>
          <UnicornInput onChange={onChange} maxLength={20} onKeyPress={handleEnter} />
          <UnicornButton onClick={onNext} disabled={serviceName === ""}>다음</UnicornButton>
        </div>
        <div style={{ flex: 1, width: '100%', position: 'relative', zIndex: 0 }}>
          <GreyCorn src={greycorn} alt="greycorn" />
          <UnicornText className="guide" style={{ width: '100%', textAlign: 'center' }}>
            ※ 검사는 총 14문항 입니다. (약 5분 소요)<br />
            ※ 가능하면 답변 시 ‘중립’을 피해주세요.
          </UnicornText>
        </div>
      </div>
    </UnicornLayout>
  )
}

export default withRouter(UnicornHome)
