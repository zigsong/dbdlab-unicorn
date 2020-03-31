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

interface UnicornEmptyRowProps {
  flex?: number
}

function UnicornEmptyRow(props: UnicornEmptyRowProps) {
  return (
    <StyledDiv style={{ flex: props.flex }}>
    </StyledDiv>
  )
}

export default UnicornEmptyRow
