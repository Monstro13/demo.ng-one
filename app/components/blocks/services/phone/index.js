import angular from 'angular';

import Phone from './phone.service';

export default angular.module('services.phone', [])
	.service('Phone', Phone)
	.name;