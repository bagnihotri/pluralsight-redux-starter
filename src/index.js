import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  routes,
  document.getElementById('app')
);