import angular from 'angular';
import check from './check.filter';

export default angular.module('filters.check', [])
	.filter('check', check)
	.name;