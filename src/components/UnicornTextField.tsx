import React from "react";
import { Input } from 'antd';
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledInput = styled(Input)`
  width: 225px;
  height: 44px;
`


interface UnicornTextFieldProps {
  flex?: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

function UnicornTextField(props: UnicornTextFieldProps) {
  return (
    <StyledDiv style={{ flex: props.flex }}>
      <StyledInput onChange={props.onChange} onPressEnter={props.onPressEnter} />
    </StyledDiv>
  )
}

export default UnicornTextField
