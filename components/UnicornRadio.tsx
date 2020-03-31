import React from "react";
import { Button } from 'antd';
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin: 0 auto;
`

interface UnicornButtonProps {
  width: number
  height: number
  borderRadius: number
  children: React.ReactNode;
}

function UnicornButton(props: UnicornButtonProps) {
  return (
    <div style={{ width: "100%", margin: "0 auto"}}>
      <StyledButton {...props}>{props.children}</StyledButton>
    </div>
  )
}

export default UnicornButton
