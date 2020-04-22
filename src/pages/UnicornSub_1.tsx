import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UnicornLayout from '../layouts/UnicornLayout';
import sub_top from "../assets/whonicorn_bn_sub_img-06.png";
import eyes_img from "../assets/eyes.png";
import service_table from "../assets/whonicorn_bn_sub_img-08.png";
import dance from "../assets/dance.png";
import dance_text from "../assets/90.svg";
import service_graph from "../assets/whonicorn_bn_sub_img-09.png";
import wink from "../assets/wink.png";
import dbd_logo from "../assets/img_dbd_ci.png";


const TopImgWrapper = styled.div`

`

const UnicornTextBold = styled.div`
    font-family: 'NanumSquare Bold';
    &.title {
        font-size: 36px;
        color: #ffffff;
        z-index: 2;
        padding: 17px;
    }
`

const UnicornTextRegular = styled.div`
    font-family: 'NanumSquare Regular';
    &.back-button {
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        line-height: 20px;
    }
    &.answer {
        font-size: 12px;
        color: #646464;
        margin-left: 22px;
    }
`

const YellowBubble = styled.div`
    display: inline-block;
    height: 36px;
    background-color: #ffe502;
    border-radius: 1px;
    text-align: center;
    z-index: 10;
    float: right;
    padding: 10px;
    margin-bottom: 18px;
`

const BlackBubble = styled.div`
    display: inline-block;
    background-color: #282828;
    color: #ffffff;
    border-radius: 1px;
    text-align: center;
    padding: 10px;
    margin-bottom: 27px;
`

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #efefef;
    width: 100%;
    height: 214px;
    padding-top: 29px;
    padding-bottom: 31px;
`

function UnicornSub_1(props: RouteChildrenProps) {

    const location = useLocation();
    const serviceName = new URLSearchParams(location.search).get("serviceName");

    const goBack = () => {
        const { history } = props;
        history.goBack();
    }
    
    return (
        <UnicornLayout>
            <TopImgWrapper>
                <div style={{ position: "relative" }}>
                    <img src={sub_top} alt="top-image" width="100%" height="auto" style={{ position: "relative" }}/>
                    <div style={{ position: "absolute", border: "solid 1px #ffffff", width: "70px", height: "22px", top: "18px", left: "18px", zIndex: 10}}
                         onClick={goBack}>
                        <UnicornTextRegular className="back-button">뒤로가기</UnicornTextRegular>
                    </div>
                    <div style={{ backgroundColor: "rgba(40, 40, 40, 0.6)", position: "absolute", width: "100%", height: "auto", bottom: "0" }}>
                    <UnicornTextBold className="title">우리팀은<br />일심동체일까?</UnicornTextBold>
                    </div>
                </div>
            </TopImgWrapper>
            <div style={{ margin: "31px 18px 40px 17px" }} >
                <UnicornTextBold style={{ fontSize: "16px", color: "#2d2d2d", }}>후니콘 테스트는 재밌으셨나요?</UnicornTextBold>
                <UnicornTextRegular style={{ fontSize: "14px", color: "#3b3b3b" }}>
                    <p>
                    후니콘으로 [{serviceName}]을
                    당신이 어떻게 생각하는지를 파악해 보았습니다.
                    그럼 이제 우리 팀원들은 어떻게 생각하고 있는지
                    더 자세히 알아볼 차례죠!
                    </p>
                    <p>
                    팀원들과 소통중에
                    보이지 않는 무언가가 가로막고 있다는 생각이 들거나,
                    서로 다른 이야기를 하고 있다는 느낌을 받은적이 있나요?
                    서로 다른 유니콘을 상상하고 있다면,
                    크고 작은 커뮤니케이션 문제가 생기기 마련입니다.
                    이 문제들은 엄청난 비용이죠.
                    </p>
                    <p>
                    그래서 준비한!
                    </p>
                </UnicornTextRegular>
            </div>

            <div style={{ margin: "0px 17px 45px 17px" }}>
                <UnicornTextBold style={{ fontSize: "16px", color: "#2d2d2d" }}>다른 팀원은 어떻게 생각하고 있을까?!</UnicornTextBold>
                <UnicornTextBold style={{ fontSize: "36px", color: "#2d2d2d", lineHeight: "46px" }}>UX 속성 진단</UnicornTextBold>
                <UnicornTextBold style={{ position: "relative", fontSize: "36px", color: "#2d2d2d", lineHeight: "46px" }}>
                    신청하기!
                    <UnicornTextRegular style={{ display: "inline", position: "absolute", top: "-5px", marginLeft: "8px", fontSize: "16px", color: "#333333" }}>free</UnicornTextRegular>
                </UnicornTextBold>
            </div>

            <div style={{ marginLeft: "17px", marginRight: "17px" }}>
                <img src={eyes_img} width="58px" height="auto" style={{ display: "block", margin: "0 auto 0 auto" }} />
                <YellowBubble>
                    <UnicornTextBold style={{ fontSize: "14px", color: "#3b3b3b" }}>Q.무엇을 볼 수 있나요?</UnicornTextBold>
                </YellowBubble>
                <div style={{ position: "relative" }}>
                    <BlackBubble>
                        <UnicornTextBold>1. 우리 팀은 서비스에 대해 어떻게 생각할까요?</UnicornTextBold>
                    </BlackBubble>
                    <UnicornTextRegular className="answer">팀원들은 서비스를 어떻게 인식하고 있는지 알아보세요.</UnicornTextRegular>
                    <img src={service_table} alt="service-table" width="218px" height="auto" style={{ margin: "48px auto 61px 28px"}} />
                    <img src={dance} alt="dance" width="92px" height="auto" style={{ position: "absolute", top: "227px", left: "209px" }}/>
                    <img src={dance_text} alt="dance_text" style={{ position: "absolute", top: "297px", left: "259px" }}/>
                </div>
                <BlackBubble>
                    <UnicornTextBold>2. 무엇을 다르게 생각하고 있을까요?</UnicornTextBold>
                </BlackBubble>
                <UnicornTextRegular className="answer">4가지 서비스 속성을 기준으로<br />모든 팀원의 의견을 실용적이고 빠르게 일치시키세요.</UnicornTextRegular>
                <img src={service_graph} width="266px" height="auto" style={{ display: "block", margin: "21px auto 50px auto" }} />
                <YellowBubble>
                    <UnicornTextBold style={{ fontSize: "14px", color: "#3b3b3b" }}>
                        Q.어떻게 하면 되나요?<span style={{ textDecoration: "line-through" }}>얼른 내놔!!</span>
                    </UnicornTextBold>
                </YellowBubble>
                <BlackBubble>
                    <UnicornTextBold>아래 신청서를 작성해주시면,<br />[{serviceName}]을 위한<br />일치율 체크 폼을 보내드립니다.</UnicornTextBold>
                </BlackBubble>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <UnicornTextBold style={{ fontSize: "16px", color: "#333333", marginBottom: "15px" }}>신청 하셨나용?</UnicornTextBold>
                <UnicornTextRegular style={{ textAlign: "center", marginBottom: "35px" }} >
                    그럼 하루 이내로 메일드리겠습니다:)<br />
                    더 상세한 문의 사항은<br />
                    <strong>contact@dbdlab.io</strong>로 문의 주씨오.<br />
                    <span style={{ color: "#b7b7b7", textDecoration: "line-through" }}>(안 그럼 기계는 죽소.)</span>
                </UnicornTextRegular>
                <img src={wink} width="186px" height="auto" style={{ marginBottom: "43px"}} />
            </div>

            <FooterWrapper>
                <div style={{ marginBottom: "14px"}}>
                    <img src={dbd_logo} alt="dbd-logo" width="148px" height="auto" />
                </div>
                <UnicornTextRegular style={{ textAlign: "center", marginBottom: "24px", fontSize: "11px" }}>
                    우리는 데이터를 기반으로 UX를 연구하는 디비디랩입니다.<br />
                    디비디랩은 기업이 최적의 UX와 Usability를 찾을 수 있도록<br />
                    사용성 테스트 플랫폼을 운영하고, UX Research를 수행합니다.
                </UnicornTextRegular>
                <UnicornTextRegular style={{ fontSize: "10px", color: "#7986cb" }}>Copyright © 2020 dbdLab Corp.</UnicornTextRegular>
            </FooterWrapper>

            
        </UnicornLayout>
    )
}

export default withRouter(UnicornSub_1);
