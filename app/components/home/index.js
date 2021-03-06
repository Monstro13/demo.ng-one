import angular from 'angular';
import uirouter from 'angular-ui-router';

import services from './../blocks/services';
import directives from './../blocks/directives';
import filters from './../blocks/filters';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('components.home', [uirouter, services, directives, filters])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;