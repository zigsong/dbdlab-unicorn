import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Home from './components/Home';
import Survey from './components/Survey';
import Result from './components/Result';

function App() {
  return (
    <Router history={history}>
        <Route exact path="/" component={Home}/>
        <Route path="/survey" component={Survey}/>
        <Route path="/result" component={Result}/>
    </Router>
  );
}

export default App;
