import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WhonicornLeft from "../assets/img_range_left.png";
import WhonicornMid from "../assets/img_range_mid.png";
import WhonicornRight from "../assets/img_range_right.png";

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    line-height: 14px;
    margin-bottom: 0px;
  }

  .Caption1, .Caption2 {
    font-family: 'NanumSquare Bold';
    font-size: 10px;
  }
  .Caption1 {
    color: #7986cb;
    text-align: left;
  }

  .Caption2 {
    color: #ba68c8;
    text-align: right;
  }
`


// const StyledRadioGroup = styled(Radio.Group)`
// height: 100px !important;
//   .ant-radio-wrapper {
//     .ant-radio {
//       widht: 100px;
//       height: 100px;
//     }
//   }     
// `

const Caption = styled.div`
  max-width: 40%;
  font-size: 10px;
  margin-bottom: 0;
`

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 30px;
  margin: 18px 0 0;

  .option {
    width: 44px;
    height: 44px;
    
    &:hover {
      div {
        border-color: #c7c8f3 !important;
        background: #a7a8d3;
      }
    }

    div.selected  {
      border-color: #c7c8f3 !important;
      background: #a7a8d3;

      &.agree {
        border: none;
        background: url(${WhonicornLeft});
        background-position: center;
        background-size: 34px;
        background-repeat: no-repeat;
      }

      &.disagree {
        border: none;
        background: url(${WhonicornRight});
        background-position: center;
        background-size: 34px;
        background-repeat: no-repeat;
      }

      &.neutral {
        border: none;
        background: url(${WhonicornMid});
        background-position: center;
        background-size: 34px;
        background-repeat: no-repeat;
      }
    }

    div {
      padding: 0px;
      border-radius: 50%;
      background: #cacaca;
  
      &.max {
        width: 20px;
        height: 20px;
        margin: 12px;
      };
      &.med {
        width: 20px;
        height: 20px;
        margin: 12px;
      };
      &.min {
        width: 20px;
        height: 20px;
        margin: 12px;
      };
      &.neutral {
        width: 14px;
        height: 14px;
        margin: 15px;     
      };
      &.agree, &.disagree {   
        border: 6px solid #dcdcdc;
      };
      &.neutral {
        border: 4px solid #dcdcdc;
      }
    }
  }
`

const UnicornText = styled.div`
  width: 100%;
  
  p {
    font-family: 'NanumSquare Bold';
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    color: #4a4a4a;
    text-align: left;
    margin-bottom: 0;
  }
`;

interface StyledRadioProps {
  onChecked: (s: string) => void;
  children: React.ReactNode;
  data: {
    title: string[],
    answers: string[],
  }
}

function UnicornRadio(props: StyledRadioProps) {
  const [checked, setChecked] = useState("");
  
  useEffect(() => {
    if (checked) {
      props.onChecked(checked);
    }
  }, [checked, props])

  return (
    <StyledDiv style={{ marginBottom: '30px' }}>
      
      <UnicornText style={{ padding: '32px 12px 0' }}>{props.children}</UnicornText>

      <div style={{ width: "100%", display: 'flex', flexDirection: 'row', padding: '24px 12px 0' }}>
        <Caption className="Caption1">{ props.data.answers[0].split('\n').map((item, i) => <p key={`ans_1_${i}`}>{item}</p>) }</Caption>
        <div style={{ flex: 1 }}></div>
        <Caption className="Caption2">{ props.data.answers[1].split('\n').map((item, i) => <p key={`ans_2_${i}`}>{item}</p>) }</Caption>
      </div>

      <RadioGroup>
        <div className={"option"}  onClick={() => setChecked("A")}>
          {checked === "A"  ? (<img src={WhonicornLeft} alt="left" width="34px" height="34px" style={{ margin: "5px" }}/>)
           : (<div className="option agree max"></div>)}
          <input style={{ display: 'none' }} type="radio" value="A" />
        </div>
        <div className={"option"}  onClick={() => setChecked("B")}>
          {checked === "B"  ? (<img src={WhonicornLeft} alt="left" width="34px" height="34px" style={{ margin: "5px" }}/>)
           : (<div className="option agree med"></div>)}
          <input style={{ display: 'none' }} type="radio" value="B" />
        </div>
        <div className={"option"}  onClick={() => setChecked("C")}>
          {checked === "C"  ? (<img src={WhonicornLeft} alt="left" width="34px" height="34px" style={{ margin: "5px" }}/>)
           : (<div className="option agree min"></div>)}
          <input style={{ display: 'none' }} type="radio" value="C" />
        </div>
        <div className={"option"}  onClick={() => setChecked("D")}>
          {checked === "D"  ? (<img src={WhonicornMid} alt="left" width="34px" height="34px" style={{ margin: "5px" }}/>)
           : (<div className="option neutral"></div>)}
          <input style={{ display: 'none' }} type="radio" value="D" />
        </div>
        <div className={"option"}  onClick={() => setChecked("E")}>
          {checked === "E"  ? (<img src={WhonicornRight} alt="left" width="34px" height="34px" style={{ margin: "5px" }}/>)
           : (<div className="option disagree min"></div>)}
          <input style={{ display: 'none' }} type="radio" value="E" />
        </div>
        <div className={"option"}  onClick={() => setChecked("F")}>
          {checked === "F"  ? (<img src={WhonicornRight} alt="left" width="34px" height="34px" style={{ margin: "5px" }}/>)
           : (<div className="option disagree med"></div>)}
          <input style={{ display: 'none' }} type="radio" value="F" />
        </div>
        <div className={"option"}  onClick={() => setChecked("G")}>
          {checked === "G"  ? (<img src={WhonicornRight} alt="left" width="34px" height="34px" style={{ margin: "5px" }}/>)
           : (<div className="option disagree max"></div>)}
          <input style={{ display: 'none' }} type="radio" value="G" />
        </div>
      </RadioGroup>
    </StyledDiv>
  )
}

export default UnicornRadio;
