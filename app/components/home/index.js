import angular from 'angular';
import uirouter from 'angular-ui-router';

import services from './../blocks/services';
import directives from './../blocks/directives';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('components.home', [uirouter, services, directives])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;