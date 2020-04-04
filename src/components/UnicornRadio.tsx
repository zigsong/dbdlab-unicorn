import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

// const StyledRadioGroup = styled(Radio.Group)`
// height: 100px !important;
//     .ant-radio-wrapper {
//         .ant-radio {
//             widht: 100px;
//             height: 100px;
//         }
//     }       
// `

const Caption = styled.div`
    font-size: 10px;
    text-align: center;
    position: absolute;
    margin-top: 5px
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
            border: 2px solid #aacfcf;
            &:hover {
                background: #aacfcf;
            }
            &.selected {
                background: #aacfcf;
            }
        };
        &.disagree {
            border: 2px solid #ffb6b6;
            &:hover {
                background: #ffb6b6;
            }
            &.selected {
                background: #ffb6b6;
            }
        };
        &.neutral {
            border: 2px solid #C4C4C4;
            &:hover {
                background: #C4C4C4;
            }
            &.selected {
                background: #C4C4C4;
            }
        }
    }
`
interface StyledRadioProps {
  children: React.ReactNode
}

function UnicornRadio(props: StyledRadioProps) {
    const [checked, setChecked] = useState("");
    
    return (
        <StyledDiv style={{ marginBottom: '30px' }}>
        <p>{props.children}</p>
            <RadioGroup>
                <div>
                    <input style={{ display: 'none' }} type="radio" value="A" />
                    <div className={"option agree max " + (checked === "A" ? 'selected' : "")} onClick={() => setChecked("A")}></div>
                    <Caption>매우 그렇다</Caption>
                </div>
                <div className={"option agree med " + (checked === "B" ? 'selected' : "")} onClick={() => setChecked("B")}>
                    <input style={{ display: 'none' }} type="radio" value="B"></input>
                </div>
                <div className={"option agree min " + (checked === "C" ? 'selected' : "")} onClick={() => setChecked("C")}>
                    <input style={{ display: 'none' }} type="radio" value="C"></input>  
                </div>
                <div className={"option neutral " + (checked === "D" ? 'selected' : "")} onClick={() => setChecked("D")}>
                    <input style={{ display: 'none' }} type="radio" value="D"></input>
                </div>
                <div className={"option disagree min " + (checked === "E" ? 'selected' : "")} onClick={() => setChecked("E")}>
                    <input style={{ display: 'none' }} type="radio" value="E"></input>
                </div>
                <div className={"option disagree med " + (checked === "F" ? 'selected' : "")} onClick={() => setChecked("F")}>
                    <input style={{ display: 'none' }} type="radio" value="F"></input>
                </div>
                <div>
                    <div className={"option disagree max " + (checked === "G" ? 'selected' : "")} onClick={() => setChecked("G")}>
                        <input style={{ display: 'none' }} type="radio" value="G    "></input>
                    </div>
                    <Caption>전혀 그렇지 않다</Caption>
                </div>
            </RadioGroup>

        </StyledDiv>
    )
}

export default UnicornRadio;
