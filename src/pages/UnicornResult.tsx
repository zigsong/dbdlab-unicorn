import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import resultBg from "../assets/img_result_bg.png";
import whonicorn_1 from "../assets/img_whonicorn1.png";
import facebook_icon from "../assets/group-9.svg";
import kakao_icon from "../assets/group-7.svg";
import slack_icon from "../assets/group-6.svg";
import link_icon from "../assets/group-5.svg";
import dbdLogo from "../assets/img_dbd_ci.png";
// import MetaTags from 'react-meta-tags';
import UnicornMagician from "../texts/UnicornMagician";
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
import UnicornToast from "../components/UnicornToast";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UnicornResult(props: RouteChildrenProps) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [feedbackOption, setFeedbackOption] = useState("0");
  const location = useLocation();
  const serviceName = new URLSearchParams(location.search).get("serviceName");

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


  const ResultBg = styled.img`
    position: absolute;
    width: 300px;
    height: 78px;
    left: 0;
    top: 0;
  `

  const UnicornTextBold = styled.text`
    font-family: 'NanumSquare Bold';
    display: block;
    position: relative;
    &.feedback {
      color: #4a4a4a;
      font-size: 10px;
      text-align: center;
    }
  `

  const UnicornTextRegular = styled.text`
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
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 80px;
  `

  const FeedbackIcon = styled.img`
    width: 46px;
    height: 46px; 
    margin-bottom: 5px;
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

  const FeedbackWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
  `

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 100000)
  // });

 
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v6.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const meta = {

  }

  const selectFeedback = (choice: string) => {
    if (feedbackOption === choice) {
      setFeedbackOption("0");
    } else {
      setFeedbackOption(choice);
    }
  }
  
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '-webkit-fill-available' }}>
        <ResultBg src={resultBg} alt="result-bg" />
        <UnicornTextBold style={{ color: '#646464', fontSize: '17px', marginTop: '186px', marginBottom: '3px' }}>[{serviceName}]의 유니콘은..</UnicornTextBold>
        <UnicornTextBold style={{ color: '#7986cb', fontSize: '36px', marginBottom: '22px' }}>{UnicornMagician.title}</UnicornTextBold>
        <WhonicornImg src={whonicorn_1} alt="whonicorn-1" />
        <UnicornFont style={{ width: '178px', height: '46px', color: '#282828', fontSize: '22px', textAlign: 'center' }}>“아수라 발발타<br />나만 로또되게 해주세요..”</UnicornFont>
        <ShareMenu>
          <UnicornTextBold style={{ color: '#4a4a4a', fontSize: '10px', marginLeft: '21px' }}>다른 사람들과 공유해보세요!</UnicornTextBold>
          {/* <div className="fb-share-button" data-href="https://realdopt.com/">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frealdopt.com%2F&amp;src=sdkpreparse" >
              <img src={facebook_icon} alt="facebook" style={{ marginLeft: '28px', marginRight: '14px'}} />
            </a>
          </div> */}
          <div className="fb-share-button" data-href="https://realdopt.com/" data-layout="icon_link" >
            {/* <img src={facebook_icon} alt="facebook" style={{ marginLeft: '28px', marginRight: '14px'}} /> */}
          </div>
          <img src={kakao_icon} alt="kakao" style={{ marginRight: '14px'}} />
          <img src={slack_icon} alt="slack" style={{ marginRight: '14px'}} />
          <img src={link_icon} alt="link" style={{ marginRight: '12px' }}/>
        </ShareMenu>
      </div>

      <div style={{ marginLeft: '33px', marginRight: '33px' }}>
        <UnicornTextBold style={{ color: '#7986cb', fontSize: '20px', marginTop: '37px', marginBottom: '17px' }}>{UnicornMagician.title}</UnicornTextBold>
        <UnicornTextRegular style={{ color: '#7986cb', fontSize: '14px', marginBottom: '22px', whiteSpace: 'pre-line' }}>{UnicornMagician.caption1}</UnicornTextRegular>
        <UnicornTextRegular style={{ color: '#4a4a4a', fontSize: '13px', marginBottom: '22px', whiteSpace: 'pre-line' }}>
          {UnicornMagician.description1}
        </UnicornTextRegular>
        <UnicornTextRegular style={{ color: '#7986cb', fontSize: '14px', marginBottom: '11px', whiteSpace: 'pre-line' }}>{UnicornMagician.caption2}</UnicornTextRegular>
        <UnicornTextRegular style={{ color: '#4a4a4a', fontSize: '13px', marginBottom: '42px', whiteSpace: 'pre-line' }}>
          {UnicornMagician.description2}
        </UnicornTextRegular>
      </div>

      {/* <div style={{ marginLeft: '33px', marginRight: '33px' }}>
        
      </div> */}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <UnicornTextBold style={{ color: '#4a4a4a', fontSize: '15px', marginBottom: '2px' }}>whonicorn 결과는 어떠셨나요?</UnicornTextBold>
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
          <UnicornButton style={{ marginBottom: '76px' }} onClick={goEntry}>다시 해볼래요!</UnicornButton>
      </div>
    </React.Fragment>
  );
}

export default withRouter(UnicornResult);
