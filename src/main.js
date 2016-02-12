'use strict';
import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import {render} from 'react-dom';
import routes from './routes'

render(routes, document.getElementById('app'))
