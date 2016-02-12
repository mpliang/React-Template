'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from '../node_modules/history/lib/createBrowserHistory';

import App from './components/app';
import homePage from './components/homePage';
import aboutPage from './components/about/aboutPage';
import authorPage from './components/authors/authorPage';
import manageAuthorPage from './components/authors/manageAuthorPage';
import NotFoundRoute from './components/common/NotFoundRoute';



function requireAuth(nextState, replaceState) {
  console.log("pass")
  // replaceState(null, '/authors')
}



const history = createHistory()


let routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={homePage}/>
      <Route path="authors" component={authorPage}/>
      <Route path="addAuthor" component={manageAuthorPage}/>
      <Route path="about" component={aboutPage} onEnter={requireAuth} />
      <Route path="*" component={NotFoundRoute}/>
    </Route>
  </Router>
)

export default routes
