routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('home.phone', {
			url: '{phoneId}',
			template: require('./phone.html'),
			controller: 'PhoneController',
			controllerAs: 'pc'
		});
}