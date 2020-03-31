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
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default UnicornButton
