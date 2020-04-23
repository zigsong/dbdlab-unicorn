import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';

import UnicornMagician from "../texts/UnicornMagician";
import UnicornJudge from "../texts/UnicornJudge";
import UnicornLoyal from "../texts/UnicornLoyal";
import UnicornCameleon from "../texts/UnicornCameleon";
import UnicornResearcher from "../texts/UnicornResearcher";
import UnicornSand from "../texts/UnicornSand";
import UnicornSuperstar from "../texts/UnicornSuperstar";
import UnicornSurfer from "../texts/UnicornSurfer";
import UnicornTransparent from "../texts/UnicornTransparent";
import resultBg from "../assets/img_result_bg.png";
import facebook_icon from "../assets/group-9.svg";
import kakao_icon from "../assets/group-7.svg";
import slack_icon from "../assets/group-6.svg";
import link_icon from "../assets/group-5.svg";
import dbdLogo from "../assets/img_dbd_ci.png";

import whonicorn_1 from "../assets/img_whonicorn1.png";
import whonicorn_2 from "../assets/img_whonicorn2.png";
import whonicorn_3 from "../assets/img_whonicorn3.png";
import whonicorn_4 from "../assets/img_whonicorn4.png";
import whonicorn_5 from "../assets/img_whonicorn5.png";
import whonicorn_6 from "../assets/img_whonicorn6.png";
import whonicorn_7 from "../assets/img_whonicorn7.png";
import whonicorn_8 from "../assets/img_whonicorn8.png";
import whonicorn_9 from "../assets/img_whonicorn9.png";

import feedback1_off from "../assets/btn_feedback1_off.png";
import feedback1_on from "../assets/btn_feedback1_on.png";
import feedback2_off from "../assets/btn_feedback2_off.png";
import feedback2_on from "../assets/btn_feedback2_on.png";
import feedback3_off from "../assets/btn_feedback3_off.png";
import feedback3_on from "../assets/btn_feedback3_on.png";
import feedback4_off from "../assets/btn_feedback4_off.png";
import feedback4_on from "../assets/btn_feedback4_on.png";
import feedback5_off from "../assets/btn_feedback5_off.png";
import feedback5_on from "../assets/btn_feedback5_on.png";

import banner_sub1 from "../assets/whonicorn_bn_sub_img-10.png";
import banner_sub2 from "../assets/whonicorn_bn_sub_img-11.png";

import 'react-toastify/dist/ReactToastify.css';

import UnicornToast from "../components/UnicornToast";
import { ToastContainer, toast } from 'react-toastify';
import UnicornLayout from '../layouts/UnicornLayout';

import _ from "lodash";
  
const ResultBg = styled.img`
  position: absolute;
  width: 300px;
  height: 78px;
  left: 0;
  top: 0;
`
const UnicornTextBold = styled.p`
  font-family: 'NanumSquare Bold';
  display: block;
  position: relative;
  &.feedback {
    color: #4a4a4a;
    font-size: 10px;
    text-align: center;
  }
`
const UnicornTextRegular = styled.p`
  font-family: 'NanumSquare Regular';
  display: block;
  position: relative;
`
const WhonicornImg = styled.img`
  width: 342px;
  height: 245px;
  margin-bottom: 16px;
`
const UnicornFont = styled.text`
  font-family: 'fromdamiM';
  display: inline-block;
  position: relative;
`
const ShareMenu = styled.div`
  background-color: #f8f8f8;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 0 33px;
  display:flex;
  flex-direction: row;
  margin-top: 50px;
`
const FeedbackIcon = styled.img`
  width: 46px;
  height: 46px; 
  margin-bottom: 5px;
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
const FeedbackWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`

const UnicornHashTag = styled(UnicornTextRegular)`
  width: 70%;
  margin-top: 16px;
  color: #9B9B9B;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`

const BannerImg = styled.img`
  width: 100%;
  height: auto;
`

const ShareButton = styled.button`
  border:none;
  background:none;
  width: 50px;
  height: 50px;
`

const getPointColor = (point: number) => {
  switch (point) {
    case 1: return "#f06292"
    case 2: return "#ba68c8"
    case 3: return "#7a86cb"
    case 4: return "#6aa9e5"
    case 5: return "#4fc3f7"
    default: return "#cacaca"
  }
}

const getPointMsg = (point: number) => {
  switch (point) {
    case 1: return "낮음"
    case 2: return "약간 낮음"
    case 3: return "중간"
    case 4: return "약간 높음"
    case 5: return "높음"
    default: return "알 수 없음"
  }
}

const PointBlock = styled.div`
  .point {
    height: 10px;
    .box1 {
      background-color: #f06292;
    }
    .box2 {
      background-color: #ba68c8;
    } 
    .box3 {
      background-color: #7a86cb;
    } 
    .box4 {
      background-color: #6aa9e5;
    } 
    .box5 {
      background-color: #4fc3f7;
    } 
    .box1, .box2, .box3, .box4, .box5 {
      width: 14px;
      height: 10px;
      margin-right: 2px;

      &.disabled {
        background-color: #cacaca;s
      }
    }
  }
`

const DottedLine = styled.div`
  background-image: linear-gradient(to right, #9b9b9b 70%, rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 10px 1px;
  background-repeat: repeat-x;
  height: 1px;
`;

const unicorns = [
  UnicornMagician, UnicornCameleon, UnicornLoyal,
  UnicornSuperstar, UnicornTransparent, UnicornResearcher,
  UnicornSurfer, UnicornSand, UnicornJudge
];

const unicornImgs = [
  whonicorn_1, whonicorn_2, whonicorn_3,
  whonicorn_4, whonicorn_5, whonicorn_6,
  whonicorn_7, whonicorn_8, whonicorn_9
];

const statHeaders = [
  ["뜻밖의 발견", "Serendipity"],
  ["상황인지", "Agent Awareness"],
  ["게임성", "Playability"],
  ["친화력", "Adaptivity"],
  ["기존 경험과 호환", "Compatibility Applicability"],
  ["맞춤화", "Customizability"],
  ["일관성", "Consistency"],
  ["적정 난이도", "Challenge"],
]

function UnicornResult(props: RouteChildrenProps) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [feedbackOption, setFeedbackOption] = useState("0");
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

  const unicorn = unicorns[unicornIndex];
  const unicornImg = unicornImgs[unicornIndex];
  const onStart = () => {
    const { history } = props;
    history.push("/entry");
  }

  const goEntry = () => {
    const { history } = props;
    history.push({
      pathname: '/entry',
      // search: "?" + new URLSearchParams({ serviceName: serviceName ? serviceName : "Whonicorn" }).toString()
    })
  }

  const goTeamSub = () => {
    const { history } = props;
    history.push({
      pathname: '/team_sub',
      // search: "?" + new URLSearchParams({ serviceName: serviceName ? serviceName : "Whonicorn" }).toString()
    })
  }

  const goUserSub = () => {
    const { history } = props;
    history.push({
      pathname: '/user_sub',
      // search: "?" + new URLSearchParams({ serviceName: serviceName ? serviceName : "Whonicorn" }).toString()
    })
  }

  const onShareFacebook = () => {
    const anyWindow: any = window;
    anyWindow.FB.ui({
      method: 'share'
    })
  }

  const onShareKakao = () => {

  }

  const onShareSlack = () => {

  }

  const onShareLink = () => {

  }
 
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v6.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    
    const anyWindow: any = window;
    anyWindow.fbAsyncInit = function() {
      anyWindow.FB.init({
        appId      : '594947074445777',
        xfbml      : true,
        version    : 'v6.0'
      });
    };
    
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const selectFeedback = (choice: string) => {
    if (feedbackOption === choice) {
      setFeedbackOption("0");
    } else {
      setFeedbackOption(choice);
    }
  }
  

  return (
    <UnicornLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: "100%", position: "relative" }}>
          <ResultBg src={resultBg} alt="result-bg" />
        </div>
        <UnicornTextBold style={{ color: '#646464', fontSize: '17px', marginTop: '86px', marginBottom: '3px' }}>
          [{serviceName}] 의 유니콘은..
        </UnicornTextBold>
        <UnicornTextBold style={{ color: '#7986cb', fontSize: '36px', marginBottom: '22px' }}>
          {unicorn.title}
        </UnicornTextBold>
        <WhonicornImg src={unicornImg} alt="whonicorn-1" />
        <UnicornHashTag>
          #디비디랩_유니콘테스트 #후니콘
        </UnicornHashTag>
        <ShareMenu>
          <UnicornTextBold style={{ flex: 1, color: '#4a4a4a', fontSize: '10px', marginTop: '14px' }}>
            다른 사람들과 공유해보세요!
          </UnicornTextBold>
          <ShareButton type="button" onClick={onShareFacebook}>
            <img src={facebook_icon} alt="facebook" />
          </ShareButton>
          <ShareButton type="button" onClick={onShareKakao}>
            <img src={kakao_icon} alt="kakao" />
          </ShareButton >
          <ShareButton type="button" onClick={onShareLink}>
            <img src={link_icon} alt="link" />
          </ShareButton>
        </ShareMenu>
      </div>

      <div style={{ marginLeft: '33px', marginRight: '33px' }}>
        <UnicornTextBold style={{ color: '#7986cb', fontSize: '20px', marginTop: '37px', marginBottom: '17px' }}>
          {unicorn.title}
        </UnicornTextBold>
        <UnicornTextRegular style={{ color: '#7986cb', fontSize: '14px', marginBottom: '22px', whiteSpace: 'pre-line' }}>
          {unicorn.caption1}
        </UnicornTextRegular>
        <UnicornTextRegular style={{ color: '#4a4a4a', fontSize: '13px', marginBottom: '22px', whiteSpace: 'pre-line' }}>
          {unicorn.description1}
        </UnicornTextRegular>
        <UnicornTextRegular style={{ color: '#7986cb', fontSize: '14px', marginBottom: '11px', whiteSpace: 'pre-line' }}>
          {unicorn.title + "의 대표님은" }
        </UnicornTextRegular>
        <UnicornTextRegular style={{ color: '#4a4a4a', fontSize: '13px', marginBottom: '42px', whiteSpace: 'pre-line', fontFamily: 'NanumSquare Bold' }}>
          - {unicorn.guess1}<br />
          - {unicorn.guess2}<br />
          - {unicorn.guess3}
        </UnicornTextRegular>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '33px', marginRight: '33px' }}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ color: '#282828', fontSize: '14px', fontFamily: 'NanumSquare Extra Bold' }}>Stats</p>
          <p style={{ color: '#9b9b9b', fontSize: '10px', marginLeft: '7px', marginTop: '5px' }}>우리는 이정도다 덤벼라</p>
        </div>
        <DottedLine style={{ marginBottom: '15px' }}></DottedLine>
        {unicorn.stats.filter((v, i) => i % 2 === 0).map((v, i) => (
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '24px' }} key={`stat_${i}`}>
            <PointBlock style={{ flex: 1 }}>
              <div style={{ fontSize: "10px", color: "#4a4a4a", fontFamily: 'NanumSquare Bold' }}>{statHeaders[i*2][0]}</div>
              <div style={{ fontSize: "10px", color: "#9b9b9b", fontFamily: 'NanumSquare Regular' }}>{statHeaders[i*2][1]}</div>
              <div className="point" style={{ display: 'flex', flexDirection: 'row', marginTop: '8px' }}>
                <div className={ "box1" + (unicorn.stats[i*2] >= 1 ? "" : " disabled") }></div>
                <div className={ "box2" + (unicorn.stats[i*2] >= 2 ? "" : " disabled") }></div>
                <div className={ "box3" + (unicorn.stats[i*2] >= 3 ? "" : " disabled") }></div>
                <div className={ "box4" + (unicorn.stats[i*2] >= 4 ? "" : " disabled") }></div>
                <div className={ "box5" + (unicorn.stats[i*2] >= 5 ? "" : " disabled") }></div>
                <span style={{ fontSize: "10px", lineHeight: "10px", marginLeft: "6px", fontFamily: 'NanumSquare Regular',
                  color: getPointColor(unicorn.stats[i*2])
                }}>
                  { getPointMsg(unicorn.stats[i*2]) }
                  </span>
              </div>
            </PointBlock>
            <PointBlock style={{ flex: 1 }}>
              <div style={{ fontSize: "10px", color: "#4a4a4a", fontFamily: 'NanumSquare Bold' }}>{statHeaders[i*2+1][0]}</div>
              <div style={{ fontSize: "10px", color: "#9b9b9b", fontFamily: 'NanumSquare Regular' }}>{statHeaders[i*2+1][1]}</div>
              <div className="point" style={{ display: 'flex', flexDirection: 'row', marginTop: '8px' }}>
                <div className={ "box1" + (unicorn.stats[i*2+1] >= 1 ? "" : " disabled") }></div>
                <div className={ "box2" + (unicorn.stats[i*2+1] >= 2 ? "" : " disabled") }></div>
                <div className={ "box3" + (unicorn.stats[i*2+1] >= 3 ? "" : " disabled") }></div>
                <div className={ "box4" + (unicorn.stats[i*2+1] >= 4 ? "" : " disabled") }></div>
                <div className={ "box5" + (unicorn.stats[i*2+1] >= 5 ? "" : " disabled") }></div>
                <span style={{ fontSize: "10px", lineHeight: "10px", marginLeft: "6px", fontFamily: 'NanumSquare Regular',
                  color: getPointColor(unicorn.stats[i*2+1])
                }}>
                  { getPointMsg(unicorn.stats[i*2+1]) }
                </span>
              </div>
            </PointBlock>
          </div>
        ))}

        
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '36px'}}>
          <p style={{ color: '#282828', fontSize: '14px', fontFamily: 'NanumSquare Extra Bold' }}>Check List</p>
          <p style={{ color: '#9b9b9b', fontSize: '10px', marginLeft: '7px', marginTop: '5px' }}>
            { `${unicorn.title}이 주로 신경쓰는 지표`  }
          </p>
        </div>
        <DottedLine style={{ marginBottom: '15px' }}></DottedLine>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '24px' }}>
          {unicorn.checkpoints.map((checkpoint, i) => (
            <div style={{ flex: 1, maxWidth: "33%" }}>{ checkpoint }</div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <UnicornTextBold style={{ color: '#4a4a4a', fontSize: '15px', marginBottom: '2px' }}>후니콘 결과는 어떠셨나요?</UnicornTextBold>
          <UnicornTextRegular style={{ color: '#9b9b9b', fontSize: '10px', marginBottom: '22px' }}>중복 투표 가능해요 :)</UnicornTextRegular>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '49px', width: '282px' }}>
            <FeedbackWrapper>
              <UnicornToast color={'#ba68c8'} active={feedbackOption === "1" ? true : false }>힝</UnicornToast>
              <FeedbackIcon src={feedbackOption === "1" ? feedback1_on : feedback1_off } onClick={() => selectFeedback("1")}></FeedbackIcon>
              <UnicornTextBold className="feedback">어려워요</UnicornTextBold>
            </FeedbackWrapper>
            <FeedbackWrapper>
              <UnicornToast color={'#69abb9'} active={feedbackOption === "2" ? true : false }>음</UnicornToast>
              <FeedbackIcon src={feedbackOption === "2" ? feedback2_on : feedback2_off } onClick={() => selectFeedback("2")}></FeedbackIcon>
              <UnicornTextBold className="feedback">공감해요</UnicornTextBold>
            </FeedbackWrapper>
            <FeedbackWrapper>
              <UnicornToast color={'#7fce77'} active={feedbackOption === "3" ? true : false }>꺄</UnicornToast>
              <FeedbackIcon src={feedbackOption === "3" ? feedback3_on : feedback3_off } onClick={() => selectFeedback("3")}></FeedbackIcon>
              <UnicornTextBold className="feedback">좋아요</UnicornTextBold>
            </FeedbackWrapper>
            <FeedbackWrapper>
              <UnicornToast color={'#6aa9e5'} active={feedbackOption === "4" ? true : false }>헿</UnicornToast>
              <FeedbackIcon src={feedbackOption === "4" ? feedback4_on : feedback4_off } onClick={() => selectFeedback("4")}></FeedbackIcon>
              <UnicornTextBold className="feedback">재밌어요</UnicornTextBold>
            </FeedbackWrapper>
            <FeedbackWrapper>
              <UnicornToast color={'#f06292'} active={feedbackOption === "5" ? true : false }>끙</UnicornToast>
              <FeedbackIcon src={feedbackOption === "5" ? feedback5_on : feedback5_off } onClick={() => selectFeedback("5")}></FeedbackIcon>
              <UnicornTextBold className="feedback">안 맞아요</UnicornTextBold>
            </FeedbackWrapper>
          </div>
          <UnicornButton style={{ marginBottom: '93px' }} onClick={goEntry}>다시 해볼래요!</UnicornButton>
          <BannerImg src={banner_sub1} onClick={goTeamSub} />
          <BannerImg src={banner_sub2} onClick={goUserSub} />

      </div>
    </UnicornLayout>
  );
}

export default withRouter(UnicornResult);
