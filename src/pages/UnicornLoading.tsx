import React from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import styled from "styled-components";
import UnicornLayout from '../layouts/UnicornLayout';
import greycorn from "../assets/img_loading_bg.png";
import WhonicornLogo1 from "../assets/loading.gif";
import _ from "lodash";

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

function generateUID() {
  // I generate the UID from two parts here 
  // to ensure the random number provide enough bits.
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  return ("000" + firstPart.toString(36)).slice(-3) + ("000" + secondPart.toString(36)).slice(-3)
}


function UnicornHome(props: RouteChildrenProps) {
  const location = useLocation();
  const serviceName = decodeURIComponent(atob(new URLSearchParams(location.search).get("sn") ?? ""));
  const userAnswer = decodeURIComponent(atob(new URLSearchParams(location.search).get("ua") ?? ""));
  
  const motivation = userAnswer?.substr(0, 3)
  const autonomy = userAnswer?.substr(9, 3)

  const x = motivation?.split("").map(c => c.charCodeAt(0) - 'D'.charCodeAt(0));
  const y = autonomy?.split("").map(c => c.charCodeAt(0) - 'D'.charCodeAt(0)); 

  const xMean = _.mean(x);
  const yMean = _.mean(y)

  let unicornIndex = 0;
  unicornIndex += xMean < -0.6 ? 0 : (xMean <= 0.6 ? 1 : 2)
  unicornIndex += yMean < -0.3 ? 6 : (yMean < 1 ? 3 : 0)

  setTimeout(() => {
    const { history } = props;
    history.push({
      pathname: `/test_result/${unicornIndex + 1}.html`,
      search: "?" + new URLSearchParams({
        sn: btoa(encodeURIComponent(serviceName)),
        ua: btoa(encodeURIComponent(userAnswer)),
        uq: generateUID()
      }).toString()
    })
  }, 4000)

  return (
    <UnicornLayout>
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#FBFBFB'}}>
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
