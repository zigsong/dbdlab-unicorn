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

function App() {
  return (
      <BrowserRouter>
        <Router history={history}>
          <Route exact path="/" component={UnicornHome}/>
          <Route path="/home/:unicornName" component={UnicornHome}/>
          <Route path="/service" component={UnicornEntry} />
          <Route path="/test" component={UnicornSurvey}/>
          <Route path="/test_loading" component={UnicornLoading}/>
          <Route path="/test_result/:unicornIndex" component={UnicornResult}/>
          <Route path="/qgs" component={UnicornSub_1}/>
          <Route path="/research" component={UnicornSub_2}/>
        </Router>
      </BrowserRouter>
  );
}

export default App;
