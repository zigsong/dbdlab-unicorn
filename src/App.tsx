import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import styled from "styled-components";

import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';

import history from './history';
import UnicornHome from './pages/UnicornHome';
import UnicornEntry from './pages/UnicornEntry';
import UnicornSurvey from './pages/UnicornSurvey';
import UnicornResult from './pages/UnicornResult';

const { Header, Content, Footer } = Layout;

const UnicornHeader = styled.p`
  color: white;
`

function App() {
  return (
    <Layout style={{ height: '100%' }}>
      <BrowserRouter>
        <Header>
          <div className="logo">
            <UnicornHeader>유니콘 테스트 v0.1</UnicornHeader>
          </div>
        </Header>
        <Content>
          <Router history={history}>
            <Route exact path="/" component={UnicornHome}/>
            <Route path="/entry" component={UnicornEntry} />
            <Route path="/survey" component={UnicornSurvey}/>
            <Route path="/result" component={UnicornResult}/>
          </Router>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Whonicorn ©2020 Created by Realdopt</Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
