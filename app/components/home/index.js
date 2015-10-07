import angular from 'angular';
import uirouter from 'angular-ui-router';

import services from './../blocks/services';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('components.home', [uirouter, services])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;