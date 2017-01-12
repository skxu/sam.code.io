import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import ProjectsPage from './components/ProjectsPage';
import IntroPage from './components/IntroPage';
import AboutPage from './components/AboutPage';
import RandomPage from './components/RandomPage';
import NotFound from './components/NotFound';
import './index.css';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={ IntroPage } />
      <Route path="/about" component={ AboutPage } />
      <Route path="/projects" component={ ProjectsPage } />
      <Route path="/random" component={ RandomPage } />
      <Route path="*" component={ NotFound }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
