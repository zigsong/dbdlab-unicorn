import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UnicornLayout from '../layouts/UnicornLayout';
import sub_top from "../assets/whonicorn_bn_sub_img-05.png";
import eyes_img from "../assets/eyes.png";
import type_glass from "../assets/group-3.svg";
import type_check from "../assets/group-4.svg";
import type_bubble from "../assets/group-5.svg";
import group_working from "../assets/whonicorn_bn_sub_img-07.png";
import method_one from "../assets/whonicorn_bn_sub_img-02.png";
import method_two from "../assets/whonicorn_bn_sub_img-01.png";
import method_three from "../assets/whonicorn_bn_sub_img-03.png";
import method_four from "../assets/whonicorn_bn_sub_img-04.png";
import goodbye from "../assets/goodbye.png";
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
    &.type-number {
        position: absolute;
        top: 14px;
        left: 0;
        font-size: 12px;
        color: #646464;
        z-index: 10;
    }
    &.type-title {
        position: absolute;
        font-size: 16px;
        color: #282828;
        font-weight: bold;
        z-index: 10;
    }
    &.type-text {
        position: absolute;
        left: 158px;
        top: 38px;
        font-size: 12px;
        color: #646464;
    }
    &.method-number {
        position: absolute;
        left: 3px;
        top: 50px;
        font-size: 12px;
        color: #ffffff;
        z-index: 10;
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

const UnicornTextExtraBold = styled.div`
    font-family: 'NanumSquare Extra';
    &.method-title {
        font-size: 16px;
        color: #282828;
    }
`

const YellowBubble = styled.div`
    display: inline-block;
	position: relative;
    height: 36px;
    font-size: 14px;
    line-height: 16px;
    background-color: #ffe502;
    border-radius: 3px;
    text-align: center;
    z-index: 10;
    padding: 10px;
    margin-top: 15px;
    
    &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 10px;
        width: 0;
        height: 0;
        border: 9px solid transparent;
        border-left-color: #ffe502;
        border-right: 0;
        border-top: 0;
        margin-top: -3px;
        margin-right: -9px;
    }
`

const BlackBubble = styled.div`
    display: inline-block;
	position: relative;
    font-size: 14px;
    line-height: 16px;
    background-color: #282828;
    color: #ffffff;
    border-radius: 3px;
    text-align: center;
    padding: 10px;
    margin-bottom: 27px;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 0;
        height: 0;
        border: 9px solid transparent;
        border-right-color: #282828;
        border-left: 0;
        border-top: 0;
        margin-top: -3px;
        margin-left: -9px;
    }
`

const TypeWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 23px;
    margin-bottom: 45px;
`

const TypeImage = styled.img`
    width: 86px;
    height: 86px;
`

const DotLine = styled.div`
    position: absolute;
    left: 114px;
    top: 43px;
    width: 30px;
    height: 1px;
    border: dashed 1px #979797;
`

const MethodWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 17px;
    margin-right: 17px;
`

const MethodImage = styled.img`
    width: 128px;
    height: 70px;
    margin-bottom: 8px;
`
const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #efefef;
    width: 100%;
    padding-top: 29px;
    padding-bottom: 31px;
`

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

function UnicornSub_2(props: RouteChildrenProps) {
    const location = useLocation();
    const serviceName = decodeURIComponent(atob(new URLSearchParams(location.search).get("sn") ?? ""));

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
                    <UnicornTextBold className="title">사용자에게<br />잘 전달하고 있을까?</UnicornTextBold>
                    </div>
                </div>
            </TopImgWrapper>
            <div style={{ margin: "31px 18px 57px 17px" }} >
                <UnicornTextBold style={{ fontSize: "16px", color: "#2d2d2d", }}>후니콘 테스트는 재밌으셨나요?</UnicornTextBold>
                <UnicornTextRegular style={{ fontSize: "14px", color: "#3b3b3b", marginTop: '10px' }}>
                    <p>
                    후니콘으로 [{serviceName}]{getJosa(serviceName, '을/를')}<br />
                    당신이 어떻게 생각하는지를 파악해 보았습니다.<br />
                    그럼 이제 우리 사용자들은 어떻게 생각하고 있는지<br />
                    더 자세히 알아볼 차례죠!
                    </p>
                </UnicornTextRegular>
            </div>

            <div style={{ margin: "0px 17px 45px 17px" }}>
                <UnicornTextBold style={{ fontSize: "16px", color: "#2d2d2d" }}>내 비즈니스에 딱 맞는</UnicornTextBold>
                <UnicornTextBold style={{ fontSize: "36px", color: "#2d2d2d", lineHeight: "46px" }}>UX 리서치</UnicornTextBold>
                <UnicornTextBold style={{ position: "relative", fontSize: "36px", color: "#2d2d2d", lineHeight: "46px" }}>
                    설계안 받기
                    <UnicornTextRegular style={{ display: "inline", position: "absolute", top: "-5px", marginLeft: "8px", fontSize: "16px", color: "#333333" }}>free</UnicornTextRegular>
                </UnicornTextBold>
            </div>

            <div style={{ marginLeft: "17px", marginRight: "17px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ flex: 1}}></div>
                    <img src={eyes_img} width="72px" height="66px" style={{ display: "block", marginRight: "-18px", marginBottom: "15px" }} />
                    <YellowBubble>
                        <UnicornTextBold style={{ fontSize: "14px", color: "#3b3b3b" }}>Q.무엇을 할 수 있나요?</UnicornTextBold>
                    </YellowBubble>
                </div>
                <BlackBubble>
                    <UnicornTextBold>1. 어떤 리서치를 할까?</UnicornTextBold>
                </BlackBubble>
                <TypeWrapper>
                    <TypeImage src={type_glass} alt="glass"  />
                    <UnicornTextBold className="type-number">01.</UnicornTextBold>
                    <UnicornTextBold className="type-title">문제점 파악형</UnicornTextBold>
                    <DotLine />
                    <UnicornTextBold className="type-text">서비스 이용에 대한<br />전반적인 사용자의 평가</UnicornTextBold>
                </TypeWrapper>
                <TypeWrapper>
                    <TypeImage src={type_check} alt="check"  />
                    <UnicornTextBold className="type-number">02.</UnicornTextBold>
                    <UnicornTextBold className="type-title">가설 검증형</UnicornTextBold>
                    <DotLine />
                    <UnicornTextBold className="type-text">사용자의 긍/부정 답변을<br />기준으로 가설 수립 및 검증</UnicornTextBold>
                </TypeWrapper>
                <TypeWrapper>
                    <TypeImage src={type_bubble} alt="bubble"  />
                    <UnicornTextBold className="type-number">03.</UnicornTextBold>
                    <UnicornTextBold className="type-title">사용성 테스트</UnicornTextBold>
                    <DotLine />
                    <UnicornTextBold className="type-text">핵심 기능 위주의<br />사용성 평가</UnicornTextBold>
                </TypeWrapper>
                <BlackBubble style={{ marginBottom: "37px" }}>
                    <UnicornTextBold>2. 누구에게 할까?</UnicornTextBold>
                </BlackBubble>
                <img src={group_working} alt="group-working" width="100%" height="auto" style={{ marginBottom: "25px" }}/>
                <UnicornTextExtraBold style={{ textAlign: "center", marginBottom: "71px" }}>
                    <UnicornTextRegular>몇 명? 조건?</UnicornTextRegular>
                        타겟팅에 제약은 없습니다.<br />
                        원하는 만큼, 원하는 조건에 가능합니다.
                </UnicornTextExtraBold>
                <BlackBubble style={{ marginBottom: "37px" }}>
                    <UnicornTextBold>3. 어떻게 할까?</UnicornTextBold>
                </BlackBubble>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px", marginBottom: "28px" }}>
                    <MethodWrapper>
                        <MethodImage src={method_one} alt="method-one" />
                        <UnicornTextBold className="method-number">01.</UnicornTextBold>
                        <UnicornTextExtraBold className="method-title">비대면 진행</UnicornTextExtraBold>
                    </MethodWrapper>
                    <MethodWrapper style={{ display: "inline-block" }}>
                        <MethodImage src={method_two} alt="method-two" />
                        <UnicornTextBold className="method-number">02.</UnicornTextBold>
                        <UnicornTextExtraBold className="method-title">대면 진행</UnicornTextExtraBold>
                    </MethodWrapper>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <MethodWrapper>
                        <MethodImage src={method_three} alt="method-three" />
                        <UnicornTextBold className="method-number">03.</UnicornTextBold>
                        <UnicornTextExtraBold className="method-title">그룹 인터뷰</UnicornTextExtraBold>
                    </MethodWrapper>
                    <MethodWrapper style={{ display: "inline-block" }}>
                        <MethodImage src={method_four} alt="method-four" />
                        <UnicornTextBold className="method-number">04.</UnicornTextBold>
                        <UnicornTextExtraBold className="method-title">로그 분석</UnicornTextExtraBold>
                    </MethodWrapper>
                </div>
            </div>

            <FooterWrapper style={{ height: "168px", marginTop: "56px", marginBottom: "30px" }}>
                <UnicornTextRegular>
                    당신의 비즈니스와 상황에 딱맞는<br />
                    UX 리서치 방법을 안내해드립니다.<br />
                    설계안을 참고하시어 그대로 리서치를 하실 수 있습니다.<br />
                    리서치가 어렵다면, 디비디랩에 문의주세요 :)
                </UnicornTextRegular>
            </FooterWrapper>

            <div style={{ marginLeft: "17px", marginRight: "17px" }}>
                <YellowBubble style={{ float: "right", marginTop: '0px', marginBottom: '18px' }}>
                    <UnicornTextBold style={{ fontSize: "14px", color: "#3b3b3b" }}>
                        Q.어떻게 하면 되나요?&nbsp;<span style={{ fontFamily: 'NanumSquare Extra Regular', textDecoration: "line-through" }}>얼른 내놔!!</span>
                    </UnicornTextBold>
                </YellowBubble>
                <BlackBubble>
                    <UnicornTextBold style={{ textAlign: "left", lineHeight: "19px" }}>
                        아래 신청서를 작성해주시면,<br />
                        [{serviceName}]{getJosa(serviceName, '을/를')} 위한<br />
                        리서치 설계안을 보내드립니다.
                    </UnicornTextBold>
                </BlackBubble>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <UnicornTextBold style={{ fontSize: "16px", color: "#333333", marginBottom: "15px" }}>신청 하셨나요?</UnicornTextBold>
                <UnicornTextRegular style={{ textAlign: "center", marginBottom: "35px" }} >
                    그럼 하루 이내로 메일드리겠습니다:)<br />
                    더 상세한 문의 사항은<br />
                    <strong>contact@dbdlab.io</strong>로 문의 주씨오.<br />
                    <span style={{ fontFamily: 'NanumSquare Extra Regular', color: "#b7b7b7", textDecoration: "line-through" }}>(안 그럼 기계는 죽소.)</span>
                </UnicornTextRegular>
                <img src={goodbye} width="130px" height="auto" style={{ marginBottom: "43px"}} />
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

export default withRouter(UnicornSub_2);
