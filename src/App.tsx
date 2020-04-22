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

function App() {
  return (
      <BrowserRouter>
          <Router history={history}>
            <Route exact path="/" component={UnicornHome}/>
            <Route path="/entry" component={UnicornEntry} />
            <Route path="/survey" component={UnicornSurvey}/>
            <Route path="/loading" component={UnicornLoading}/>
            <Route path="/result" component={UnicornResult}/>
          </Router>
      </BrowserRouter>
  );
}

export default App;
