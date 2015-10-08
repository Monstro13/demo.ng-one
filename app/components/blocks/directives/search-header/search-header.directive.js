import angular from 'angular';

function searchHeader() {
	return {
		restrict: 'AE',
		scope: {
			pattern: '=pattern'
		},
		template: require('./search-header.template.html'),
	}
}

export default angular.module('directives.searchHeader', [])
	.directive('searchHeader', searchHeader)
	.name;