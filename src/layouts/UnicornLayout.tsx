import React from "react";
import { Layout } from 'antd';
import styled from "styled-components";

const { Content } = Layout;

const UnicornDiv = styled(Layout)`
  width: 100%;
  background: white;
`

const UnicornContent = styled(Content)`
  max-width: 600px;
  margin: 0 auto;
`

function UnicornLayout({ children }: { children: React.ReactNode }) {
  return (
    <UnicornDiv className="layout">
      <UnicornContent>
        {children}
      </UnicornContent>
    </UnicornDiv>
  )
}

export default UnicornLayout
