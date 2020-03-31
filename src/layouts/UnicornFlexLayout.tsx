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
  padding: 0 10px;
  text-align: center;
`

function UnicornFlexLayout({ children }: { children: React.ReactNode }) {
  return (
    <UnicornDiv className="layout">
      <UnicornContent>
        {children}
      </UnicornContent>
    </UnicornDiv>
  )
}

export default UnicornFlexLayout
