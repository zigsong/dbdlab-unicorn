import React from "react";
import { Button } from 'antd';
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledButton = styled(Button)`
  fontWeight: "bold"
  margin: 5px auto;
`

interface UnicornButtonProps {
  width?: number
  height?: number
  borderRadius?: number
  flex?: number
  fontSize?: number
  onClick?: () => void
  children: React.ReactNode
}

function UnicornButton(props: UnicornButtonProps) {
  return (
    <StyledDiv style={{ flex: props.flex }}>
      <StyledButton onClick={props.onClick} type="primary" style={{
        width: `${props.width || 200}px`,
        height: `${props.height || 80}px`,
        borderRadius: `${props.borderRadius || 20}px`,
        fontSize: `${props.fontSize || 18}px`,
        lineHeight: `${(props.fontSize || 18) + 6}px`,
      }}>
        {props.children}
      </StyledButton>
    </StyledDiv>
  )
}

export default UnicornButton
