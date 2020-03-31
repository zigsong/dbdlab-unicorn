import React from "react";
import { Layout } from 'antd';
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

const UnicornDiv = styled(Layout)`
  height: 100%;
  background: white;
`

const UnicornContent = styled(Content)`
  padding: 0 10px;
  text-align: center;
`

const UnicornHeader = styled.p`
  color: white;
`

function UnicornFlexLayout({ children }: { children: React.ReactNode }) {
  return (
    <UnicornDiv className="layout">
      <Header>
        <div className="logo">
          <UnicornHeader>유니콘 테스트 v0.1</UnicornHeader>
        </div>
      </Header>
      <UnicornContent>
        {children}
      </UnicornContent>
      <Footer style={{ textAlign: 'center' }}>Whonicorn ©2020 Created by Realdopt</Footer>
    </UnicornDiv>
  )
}

export default UnicornFlexLayout
