import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
// import UnicornFlexLayout from "../layouts/UnicornFlexLayout";
// import UnicornLayout from "../layouts/UnicornLayout";
// import { UnicornText, UnicornButton, UnicornEmptyRow } from "../components";
import styled from 'styled-components';
import { Spin } from 'antd';
import bottomImage from "../assets/imges-03.png";
import resultBg from "../assets/img_result_bg.png";
import whonicorn_1 from "../assets/img_whonicorn1.png";
import facebook_icon from "../assets/group-9.svg";
import kakao_icon from "../assets/group-7.svg";
import slack_icon from "../assets/group-6.svg";
import link_icon from "../assets/group-5.svg";
import dbdLogo from "../assets/img_dbd_ci.png";
// import MetaTags from 'react-meta-tags';
import UnicornMagician from "../texts/UnicornMagician";

function UnicornResult(props: RouteChildrenProps) {
  const [isLoaded, setIsLoaded] = useState(true);
  const location = useLocation();
  const serviceName = new URLSearchParams(location.search).get("serviceName");

  const onStart = () => {
    const { history } = props;
    history.push("/entry");
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
    display: inline-block;
    position: relative;
  `

  const UnicornTextRegular = styled.text`
  font-family: 'NanumSquare Regular';
  display: inline-block;
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
  
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '-webkit-fill-available' }}>
        <ResultBg src={resultBg} alt="result-bg" />
        <UnicornTextBold style={{ color: '#646464', fontSize: '17px', marginTop: '186px', marginBottom: '3px' }}>[{serviceName}]의 유니콘은..</UnicornTextBold>
        <UnicornTextBold style={{ color: '#7986cb', fontSize: '36px', marginBottom: '22px' }}>마법사 유니콘</UnicornTextBold>
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
    </React.Fragment>
  );
  


}

export default withRouter(UnicornResult);
