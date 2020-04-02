import React from "react";
import { Radio } from 'antd';
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledRadioGroup = styled(Radio.Group)`
height: 100px !important;
    .ant-radio-wrapper {
        .ant-radio {
            widht: 100px;
            height: 100px;
        }
    }       
`

const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .option {
        border-radius: 50%;
        margin: 0 10px;
        &.max {
            width: 34px;
            height: 34px;
        };
        &.med {
            width: 29px;
            height: 29px;
            
        };
        &.min {
            width: 24px;
            height: 24px;
            
        };
        &.neutral {
            width: 19px;
            height: 19px;
            
        };
        &.agree {   
            // background: #aacfcf;
            border: 2px solid #aacfcf;
        };
        &.disagree {
            // background: #ffb6b6;
            border: 2px solid #ffb6b6;
        };
        &.neutral {
            // background: #C4C4C4;
            border: 2px solid #C4C4C4;
        }
    }
    
`
interface StyledRadioProps {
  children: React.ReactNode
}

function UnicornRadio(props: StyledRadioProps) {
  return (
    <StyledDiv style={{  }}>
    <p>{props.children}</p>
        <RadioGroup>
            <div className="option agree max"></div>
            <div className="option agree med"></div>
            <div className="option agree min"></div>
            <div className="option neutral"></div>
            <div className="option disagree min"></div>
            <div className="option disagree med"></div>
            <div className="option disagree max"></div>
        </RadioGroup>

    </StyledDiv>
  )
}

export default UnicornRadio;
