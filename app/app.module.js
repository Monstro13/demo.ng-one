import angular from 'angular';
import uirouter from 'angular-ui-router';
import material from 'angular-material';

import routing from './app.config';
import components from './components';

const app = angular.module('ngone', [uirouter, material, components]);
app.config(routing);