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
  font-size: 22px;
`

function App() {
  const onClickHeader = () => {
    history.push('/');
  }

  return (
    <Layout style={{ height: '100%' }}>
      <BrowserRouter>
        <Header style={{ padding: '0 20px'}}>
          <div className="logo">
            <UnicornHeader>
              <button onClick={onClickHeader} style={{ background: "none",  border: "none" }}>
                <span>🦄 </span>
                <span style={{ color: "#FF6666"}}>W</span>
                <span style={{ color: "#FF7F33"}}>h</span>
                <span style={{ color: "#FFFF66"}}>o</span>
                <span style={{ color: "#66FF66"}}>n</span>
                <span style={{ color: "#6666FF"}}>i</span>
                <span style={{ color: "#6666FF"}}>c</span>
                <span style={{ color: "#4B6682"}}>o</span>
                <span style={{ color: "#B466F3"}}>r</span>
                <span style={{ color: "#FF66FF"}}>n</span>
              </button>
            </UnicornHeader>
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
        <Footer style={{ textAlign: 'center' }}>Whonicorn ©2020 Created by <a href="https://realdopt.com/">Realdopt</a> </Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
