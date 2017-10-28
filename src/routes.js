import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { App } from './components/App';
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/about/AboutPage';

export const routes = (
  <BrowserRouter>
    <div>
    <App />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
    </div>
  </BrowserRouter>
);