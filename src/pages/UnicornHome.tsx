import React, { useEffect } from "react";
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from "antd"
import UnicornLayout from '../layouts/UnicornLayout';

import ImgUnicornLogo from "../assets/unicorn-logo.png";
import ImgUnicornTitle from "../assets/unicorn-title.svg";
import ImgUnicornBtnDeco1 from "../assets/unicorn-btn-deco1.svg";
import ImgUnicornBtnDeco2 from "../assets/unicorn-btn-deco2.svg";
import ImgUnicornHomeBackground from "../assets/unicorn-bg.png";
import ImgDownArrow from "../assets/unicorn-down-arrow.png";
import ImgDbdLogo from "../assets/img_dbd_ci.png";

// Sections
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Components
const UnicornLogo = styled.img`
  width: 80%;
  margin: 70px auto 0;
`

const UnicornTitle = styled.img`
  width: 80%;
  margin: 20px auto 0;
`

const UnicornTextRegular = styled.p`
  display: inline-block;
  font-family: 'NanumSquare Regular';
`

const UnicornTextBold = styled.p`
  display: inline-block;
  font-family: 'NanumSquare Bold';
`

const UnicornHashTag = styled(UnicornTextRegular)`
  width: 70%;
  margin-top: 16px;
  color: #9B9B9B;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`

const UnicornSubTitle = styled(UnicornTextRegular)`
  width: 70%;
  color: #646464;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`

const UnicornStartBtn = styled(Button)`
  width: 70vw;
  height: 14vw;
  max-width: 420px;
  max-height: 84px;
  margin-top: 45px;
  display: inline-block;
  position: relative;
  font-family: 'NanumSquare Bold';
  font-size: 16px;
  line-height: 22px;
  background-color: #7986cb;
  border-color: #7986cb;
  color: #ffffff;
  border-radius: 0px;

  &:hover {
    border-color: #7986cb;
    color: #7986cb;
    background-color: #ffffff;
  }

  img {
    position: absolute;
    &.deco-1 {
      left: -5px;
      bottom: -13px;
    }
    &.deco-2 {
      right: -12px;
      top: -9px;
    }
  }
`
const UnicornScroll = styled.div`
  margin-top: 21px;
  display: inline-block;

  span {
    font-size: 12px;
    font-family: 'NanumSquare Regular';
    color: #646464;

    &.bold {
      font-family: 'NanumSquare Bold';
    }
    
    &.light {
      color: #9b9b9b;
    }
  }
`;

const UnicornBackground = styled.img`
  width: 100%;
  height: 100%;
`;

const UnicornLetter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 33px;
`;

const UnicornLink = styled.a`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  margin: 1px 1px 1px 1px;
  color: #696969;
  font-size: 13px;
  verical-align: middle;
  padding-left: 29px;
`

const RightArrow = styled.img`
  width: 16px;
  height: 15px;
  transform: rotate(270deg);
  position: absolute;
  right: 30px;
`;

function UnicornHome(props: RouteChildrenProps) {
  const onStart = () => {
    const { history } = props;
    history.push("/service");
  }
  
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  return (
    <UnicornLayout>
      <MainSection>
        <UnicornLogo src={ImgUnicornLogo} alt="unicornLogo" />
        <UnicornTitle src={ImgUnicornTitle} alt="unicornTitle" />
        <UnicornHashTag>
          #디비디랩_유니콘테스트 #후니콘
        </UnicornHashTag>
        <UnicornSubTitle>
          우리 제품/서비스의 사용자 경험 유형을 검사하고<br />우리가 어떤 유니콘인지 알아보세요.
        </UnicornSubTitle>
        <UnicornStartBtn onClick={onStart}>
          <img className="deco-1" src={ImgUnicornBtnDeco1} alt="unicornBtnDeco1" ></img>
          검사 시작하기
          <img className="deco-2" src={ImgUnicornBtnDeco2} alt="unicornBtnDeco2" ></img>
        </UnicornStartBtn>
        <UnicornScroll className="info-scroll">
          <span>what is </span>
          <span className="bold">whonicorn? </span>
          <span className="light">scroll down </span>
          <img src={ImgDownArrow} alt="imdown-arrowx" width='8px' height='9px'/>
        </UnicornScroll>
      </MainSection>

      <SubSection>
        <UnicornBackground src={ImgUnicornHomeBackground} alt="img-index" />
        <UnicornLetter>
          <UnicornTextBold style={{ fontSize: '20px', color: '#82a0d7', marginBottom: '23px' }}>
            후니콘 제작자의 여러마디..
          </UnicornTextBold>
          <UnicornTextBold style={{ fontSize: '14px', color: '#7986cb', marginBottom: '5px' }}>
            UX(User Experience, 사용자 경험)
          </UnicornTextBold>
          <UnicornTextRegular style={{ fontSize: '14px', lineHeight: '23px', marginBottom: '21px' }}>
            '경험'이라는 말은 참 어렵습니다.<br />
            사람이 한명 한명 모두 다른데,<br />
            어떻게 모두에게 '좋은 경험'을 제공할 수 있을까요?<br />
            대부분 기업의 고민일거예요.<br />
            <br />
            우리는 이런 어렵고도 매력적인 UX를<br /> 
            깊이 연구하기 위해 모였습니다.<br />
            UX는 제품/서비스를 발견하고,<br /> 
            이용하는 모든 과정에서 느낀 것, 본 것,<br /> 
            행동한 것을 종합한 결과죠.<br />
            <br />
            "우리가 이 결과를 분류할 수 있을까?"<br />
            라는 질문에서 후니콘은 시작되었습니다. <br />
            <br />
            유니콘은 사용자가 제품/서비스를<br /> 
            인식하는 유형(즐거움/유용함)과<br />
            의사결정의 경험이 주로 누구에게 있는지의<br />
            기준으로 설정됩니다.<br /> 
            <br />
            그래서 후니콘중에서 더 좋은 유니콘,<br /> 
            더 나쁜 유니콘은 없습니다.<br /> 
            어떤 유니콘이 되고 싶은지가 중요하죠.<br />
            <br />
            <strong>당신은 어떤 유니콘이 되고 싶나요?</strong><br />
            슈퍼스타 유니콘? 판사 유니콘?<br />
            <strong>사용자들도, 당신의 제품/서비스를 당신이 원하는</strong><br />
            <strong>바로 그 유니콘이라고 느끼고 있나요?</strong><br />
          </UnicornTextRegular>
          <UnicornTextBold style={{ fontSize: '15px', color: '#7986cb', marginBottom: '77px' }}>
            당신의 비즈니스에는<br />
            어떤 유니콘이 가장 잘 어울릴까요?
          </UnicornTextBold>
        </UnicornLetter>
      </SubSection>

      <Footer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#efefef', width: '100%', maxWidth: '600px'}}>
          <img src={ImgDbdLogo} alt="dbd-logo" width='148px' height='50px' style={{ marginTop: '42px', marginBottom: '10px' }}/>
          <UnicornTextRegular style={{ fontSize: '11px', color: '#4a4a4a', lineHeight: '18px', textAlign: 'center', marginBottom: '15px' }}>
            우리는 데이터를 기반으로 UX를 연구하는 디비디랩입니다.<br />
            디비디랩은 기업이 최적의 UX와 Usability를 찾을 수 있도록<br />
            사용성 테스트 플랫폼을 운영하고, UX Research를 수행합니다.
          </UnicornTextRegular>
          <UnicornTextBold style={{ fontSize: '14px', color: '#5e5e5e', lineHeight: '22px', textAlign: 'center', marginBottom: '54px' }}>
            사용자와 관련하여 고민이 생겼을 땐, <br />
            디비디랩을 기억해주세요 :)
          </UnicornTextBold>
          <UnicornLink href="https://dbdlab.io">
            <div style={{ width: "100%", position: "relative" }}>
              디비디랩 홈페이지 바로가기
              <RightArrow src={ImgDownArrow} alt="->"/>
            </div>
          </UnicornLink>
          <UnicornLink href="https://pf.kakao.com/_RxmxoWT">
            <div style={{ width: "100%", position: "relative" }}>
              디비디랩이 운영하는 리얼답과 소통하기
              <RightArrow src={ImgDownArrow} alt="->"/>
            </div>
          </UnicornLink>
          <UnicornTextRegular style={{ fontSize: '10px', color: '#7986cb', marginTop: '30px', marginBottom: '31px' }}>
            Copyright © 2020 dbdLab Corp.
          </UnicornTextRegular>
        </div>
      </Footer>

    </UnicornLayout>
  )
}

export default withRouter(UnicornHome)
