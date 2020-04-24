import React from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import styled from "styled-components";
import UnicornLayout from '../layouts/UnicornLayout';
import greycorn from "../assets/img_loading_bg.png";
import WhonicornLogo1 from "../assets/loading.gif";

const UnicornText = styled.span`
  &.label {
    font-family: 'NanumSquare Bold';
    font-size: 15px;
    text-align: center;
    width: 300px;
    height: 44px;
    margin-top: 232px;
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

const GreyCorn = styled.img`
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
`

function UnicornHome(props: RouteChildrenProps) {
  const location = useLocation();
  const serviceName = decodeURIComponent(atob(new URLSearchParams(location.search).get("sn") ?? ""));
  const userAnswer = decodeURIComponent(atob(new URLSearchParams(location.search).get("ua") ?? ""));

  setTimeout(() => {
    const { history } = props;
    history.push({
      pathname: '/result',
      search: "?" + new URLSearchParams({
        sn: btoa(encodeURIComponent(serviceName)),
        ua: btoa(encodeURIComponent(userAnswer))
      }).toString()
    })
  }, 4000)

  return (
    <UnicornLayout>
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
          <UnicornText className="label">결과를 분석중입니다.<br />과연 우리는 어떤 유니콘일까요?</UnicornText>
          <div><img src={WhonicornLogo1} alt="greycorn" width="197px" height="47px" /></div>
        </div>
        <div style={{ flex: 1, width: '100%', position: 'relative', zIndex: 0 }}>
          <GreyCorn src={greycorn} alt="greycorn" />
        </div>
      </div>
    </UnicornLayout>
  )
}

export default withRouter(UnicornHome)
