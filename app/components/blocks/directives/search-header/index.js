import angular from 'angular';

import searchHeader from './search-header.directive';

export default angular.module('directives.searchHeader', [])
	.directive('searchHeader', searchHeader)
	.name;