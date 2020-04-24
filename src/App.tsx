import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css';

import history from './history';
import UnicornHome from './pages/UnicornHome';
import UnicornEntry from './pages/UnicornEntry';
import UnicornSurvey from './pages/UnicornSurvey';
import UnicornLoading from './pages/UnicornLoading';
import UnicornResult from './pages/UnicornResult';
import UnicornSub_1 from './pages/UnicornSub_1';
import UnicornSub_2 from './pages/UnicornSub_2';

import {Helmet} from "react-helmet";

function App() {
  return (
      <BrowserRouter>
        <Helmet>
          <meta name="og:title" content="후니콘 ‘우리는 어떤 유니콘일까’"/>
          <meta name="og:description" content="우리 제품/서비스의 사용자 경험 유형을 검사하고 우리가 어떤 유니콘인지 알아보세요."/>
          <meta name="og:image" content="https://whonicorn.dbdlab.io/thumbnail/img_th_link1.png"/>
        </Helmet>
        <Router history={history}>
          <Route exact path="/" component={UnicornHome}/>
          <Route path="/service" component={UnicornEntry} />
          <Route path="/test" component={UnicornSurvey}/>
          <Route path="/test_loading" component={UnicornLoading}/>
          <Route path="/test_result" component={UnicornResult}/>
          <Route path="/qgs" component={UnicornSub_1}/>
          <Route path="/research" component={UnicornSub_2}/>
        </Router>
      </BrowserRouter>
  );
}

export default App;
