import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledText = styled.p`
  fontWeight: "bold";
  margin: 5px auto;
`

interface UnicornTextProps {
  width?: number
  height?: number
  flex?: number
  fontSize?: number
  color?: string
  children?: React.ReactNode;
}

function UnicornText(props: UnicornTextProps) {
  return (
    <StyledDiv style={{ flex: props.flex }}>
      <StyledText style={{
        width: `${props.width || 200}px`,
        height: `${props.height || 50}px`,
        fontSize: `${props.fontSize || 18}px`,
        color: `${props.color || 15}px`,
        lineHeight: `${(props.fontSize || 18) + 6}px`,
      }}>
        {props.children}
      </StyledText>
    </StyledDiv>
  )
}

export default UnicornText
