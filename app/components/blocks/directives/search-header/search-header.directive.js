export default function searchHeader() {
	return {
		restrict: 'AE',
		scope: {
			pattern: '=pattern'
		},
		template: require('./search-header.template.html'),
	}
}