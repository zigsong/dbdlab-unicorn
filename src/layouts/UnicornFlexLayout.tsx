import React from "react";
import { Layout } from 'antd';
import styled from "styled-components";

const { Content } = Layout;

const UnicornDiv = styled(Layout)`
  height: 100%;
  background: white;
`

const UnicornContent = styled(Content)`
  display: flex;
  flex-direction: column;
  text-align: center;
`

function UnicornFlexLayout({ padding, children }: { padding?: string, children: React.ReactNode }) {
  return (
    <UnicornDiv className="layout">
      <UnicornContent style={{  padding: padding ? padding : '0 10px' }}>
        {children}
      </UnicornContent>
    </UnicornDiv>
  )
}

export default UnicornFlexLayout
