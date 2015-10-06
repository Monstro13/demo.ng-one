import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import components from './components';

const app = angular.module('ngone', [uirouter, components]);
app.config(routing);