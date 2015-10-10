import angular from 'angular';
import uirouter from 'angular-ui-router';

import services from './../blocks/services';
import directives from './../blocks/directives';
import filters from './../blocks/filters';

import routing from './phone.routes';
import PhoneController from './phone.controller';

export default angular.module('components.phone', [uirouter, services, directives, filters])
	.config(routing)
	.controller('PhoneController', PhoneController)
	.name;